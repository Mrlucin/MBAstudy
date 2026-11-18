/* ================= MBA 冲刺 · 应用逻辑 ================= */
(function () {
  'use strict';

  var KEY = 'mba_prep_v1';
  var THEMES = ['light', 'dark'];
  var FONT_SIZES = [15.5, 17, 19];

  var SUBJECTS = {
    math: {
      key: 'math', name: '数学', en: 'QUANT', icon: '∑',
      tag: '问题求解 + 条件充分性判断',
      accent: 'var(--math)', tint: 'var(--math-soft)',
      list: function () { return window.MATH_CHAPTERS || []; }
    },
    logic: {
      key: 'logic', name: '逻辑', en: 'LOGIC', icon: '⋀',
      tag: '形式逻辑 + 论证逻辑',
      accent: 'var(--logic)', tint: 'var(--logic-soft)',
      list: function () { return window.LOGIC_CHAPTERS || []; }
    },
    english: {
      key: 'english', name: '英语', en: 'ENGLISH', icon: 'A',
      tag: '长难句 · 阅读 · 完形 · 翻译 · 写作',
      accent: 'var(--en)', tint: 'var(--en-soft)',
      list: function () { return window.ENGLISH_CHAPTERS || []; }
    }
  };

  /* ---------------- 存储 ---------------- */
  function defaults() {
    return { progress: {}, wrong: [], vocab: {}, font: 1, theme: 'light', exam: '2026-12-26' };
  }
  var db = defaults();
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      for (var k in parsed) { if (parsed.hasOwnProperty(k)) db[k] = parsed[k]; }
    }
  } catch (e) { /* 忽略 */ }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {} }

  /* ---------------- 工具 ---------------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function letters(i) { return 'ABCDE'[i] || '?'; }

  var toastTimer = null;
  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2000);
  }

  function applyPrefs() {
    document.documentElement.setAttribute('data-theme', db.theme === 'dark' ? 'dark' : 'light');
    var fs = FONT_SIZES[db.font] || 17;
    document.documentElement.style.setProperty('--fs', fs + 'px');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', db.theme === 'dark' ? '#141519' : '#f6f4ef');
  }

  function daysLeft() {
    var target = new Date(db.exam + 'T00:00:00');
    if (isNaN(target.getTime())) return 0;
    var diff = target.getTime() - Date.now();
    return Math.max(0, Math.ceil(diff / 86400000));
  }

  var SUBS = ['math', 'logic', 'english'];

  function totalChapters() {
    var n = 0;
    SUBS.forEach(function (k) { n += SUBJECTS[k].list().length; });
    return n;
  }
  function doneCount() {
    var n = 0;
    SUBS.forEach(function (s) {
      SUBJECTS[s].list().forEach(function (c) { if (db.progress[c.id] && db.progress[c.id].done) n++; });
    });
    return n;
  }
  function subjectDone(sub) {
    var n = 0;
    SUBJECTS[sub].list().forEach(function (c) { if (db.progress[c.id] && db.progress[c.id].done) n++; });
    return n;
  }
  function findChapter(sub, id) {
    var list = SUBJECTS[sub] ? SUBJECTS[sub].list() : [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  /* ---------------- 单词库 ---------------- */
  var KNOWN = 1, UNKNOWN = 2;

  function vocabGroups() { return window.VOCAB_GROUPS || []; }
  function vocabTiers() {
    var core = [], theme = [];
    vocabGroups().forEach(function (g) { (g.tier === 'core' ? core : theme).push(g); });
    return { core: core, theme: theme };
  }
  function wordsIn(list) {
    var n = 0;
    list.forEach(function (g) { n += g.words.length; });
    return n;
  }
  function allWords() {
    var out = [];
    vocabGroups().forEach(function (g) {
      g.words.forEach(function (w) { out.push(w); });
    });
    return out;
  }
  function vocabStat() {
    var k = 0, u = 0;
    vocabGroups().forEach(function (g) {
      g.words.forEach(function (w) {
        var v = db.vocab[w.w.toLowerCase()];
        if (v === KNOWN) k++; else if (v === UNKNOWN) u++;
      });
    });
    return { known: k, unknown: u, total: allWords().length };
  }
  function groupStat(g) {
    var k = 0, u = 0;
    g.words.forEach(function (w) {
      var v = db.vocab[w.w.toLowerCase()];
      if (v === KNOWN) k++; else if (v === UNKNOWN) u++;
    });
    return { known: k, unknown: u, done: k + u, total: g.words.length };
  }
  function markWord(w, val) {
    db.vocab[w.toLowerCase()] = val;
    save();
  }
  function wordKey(w) { return String(w).toLowerCase(); }

  /* ---------------- 路由 ---------------- */
  var viewEl = null;

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var p = h.split('/').filter(Boolean);
    if (p.length === 0 || p[0] === 'home') return { name: 'home' };
    if (p[0] === 'list') return { name: 'list', sub: p[1] };
    if (p[0] === 'learn') return { name: 'learn', sub: p[1], id: p[2] };
    if (p[0] === 'words') return p[1] ? { name: 'wordDrill', gid: p[1] } : { name: 'words' };
    if (p[0] === 'recite') return { name: 'recite' };
    if (p[0] === 'wrong') return { name: 'wrong' };
    return { name: 'home' };
  }

  function nav(hash) { location.hash = hash; }

  function render() {
    var r = parseHash();
    var app = $('#app');
    if (!viewEl) {
      app.innerHTML = '';
      viewEl = document.createElement('div');
      viewEl.id = 'view';
      viewEl.style.flex = '1';
      viewEl.style.display = 'flex';
      viewEl.style.flexDirection = 'column';
      app.appendChild(viewEl);
    }
    var top = renderTopbar(r);
    var body = '';
    if (r.name === 'home') body = viewHome();
    else if (r.name === 'list') body = viewList(r.sub);
    else if (r.name === 'learn') body = viewLearn(r.sub, r.id);
    else if (r.name === 'words') body = viewWords();
    else if (r.name === 'wordDrill') body = viewWordDrill(r.gid);
    else if (r.name === 'recite') body = viewRecite();
    else if (r.name === 'wrong') body = viewWrong();

    var tabbar = renderTabbar(r);
    viewEl.innerHTML = top + '<div class="page" id="page">' + body + '</div>' + tabbar;
    window.scrollTo(0, 0);
    bind(r);
  }

  /* ---------------- 顶栏 ---------------- */
  function renderTopbar(r) {
    var title = 'MBA 冲刺';
    var back = null;
    if (r.name === 'list' && SUBJECTS[r.sub]) { title = SUBJECTS[r.sub].name; back = '#/'; }
    if (r.name === 'learn') {
      var ch = findChapter(r.sub, r.id);
      title = ch ? ch.title.replace(/[：:].*$/, '') : '学习';
      back = '#/list/' + r.sub;
    }
    if (r.name === 'recite') { title = '必背清单'; }
    if (r.name === 'words') { title = '单词'; back = '#/'; }
    if (r.name === 'wordDrill') { title = r.gid === 'review' ? '生词本' : '背单词'; back = '#/words'; }
    if (r.name === 'wrong') { title = '错题本'; back = '#/'; }

    var fsIcon = ['A', 'A', 'A'][db.font] || 'A';
    var fsSize = ['.85em', '1em', '1.15em'][db.font] || '1em';
    var themeIcon = db.theme === 'dark' ? '☀' : '◐';

    return '<div class="topbar" id="topbar"><div class="topbar-in">' +
      (back
        ? '<button class="tb-back" data-nav="' + back + '"><span style="font-size:1.15em">‹</span> 返回</button>'
        : '<div style="width:6px"></div>') +
      '<div class="tb-title">' + esc(title) + '</div>' +
      '<div class="tb-actions">' +
        '<button class="icon-btn" data-action="font" style="font-size:' + fsSize + '" title="字号">' + fsIcon + '</button>' +
        '<button class="icon-btn" data-action="theme" title="主题">' + themeIcon + '</button>' +
      '</div>' +
      '</div>' +
      (r.name === 'learn' ? '<div class="read-bar"><i id="readBar"></i></div>' : '') +
      '</div>';
  }

  function renderTabbar(r) {
    var active = r.name === 'wrong' ? 'wrong'
      : r.name === 'recite' ? 'recite'
      : (r.name === 'words' || r.name === 'wordDrill') ? 'vocab'
      : (r.name === 'list' || r.name === 'learn') && r.sub === 'math' ? 'math'
      : (r.name === 'list' || r.name === 'learn') && r.sub === 'logic' ? 'logic'
      : (r.name === 'list' || r.name === 'learn') && r.sub === 'english' ? 'english'
      : 'home';
    function t(key, icon, label, hash) {
      return '<button class="tab' + (active === key ? ' on' : '') + '" data-nav="' + hash + '">' +
        '<span class="ti">' + icon + '</span><span class="tl">' + label + '</span></button>';
    }
    return '<div class="tabbar"><div class="tabbar-in">' +
      t('home', '◈', '首页', '#/') +
      t('math', '∑', '数学', '#/list/math') +
      t('logic', '⋀', '逻辑', '#/list/logic') +
      t('english', 'A', '英语', '#/list/english') +
      t('vocab', 'W', '单词', '#/words') +
      t('recite', '❖', '必背', '#/recite') +
      t('wrong', '✦', '错题本', '#/wrong') +
      '</div></div>';
  }

  /* ---------------- 首页 ---------------- */
  function viewHome() {
    var d = daysLeft();
    var total = totalChapters();
    var done = doneCount();
    var pct = total ? Math.round(done / total * 100) : 0;

    var html = '<div class="wrap">';
    html += '<div class="hero">' +
      '<div class="hero-kicker">MBA 笔试 · 管理类联考</div>' +
      '<h1>还有 <span style="color:var(--brand)">' + d + '</span> 天<br><span class="thin">我们一块一块啃。</span></h1>' +
      '</div>';

    html += '<div class="count-card">' +
      '<div class="cc-row">' +
        '<div class="cc-num">' + d + '</div>' +
        '<div class="cc-label">天后上考场<br><b>' + formatDate(db.exam) + '</b></div>' +
        '<button class="cc-edit" data-action="exam" title="修改考试日期">改</button>' +
      '</div>' +
      '<div class="cc-bar"><i style="width:' + pct + '%"></i></div>' +
      '<div class="cc-foot"><span>总进度 ' + done + '/' + total + ' 章</span><span>' + pct + '%</span></div>' +
      '</div>';

    // 单词
    var vst = vocabStat();
    var vpct = vst.total ? Math.round(vst.known / vst.total * 100) : 0;
    html += '<div class="sec-title"><h2>今天背单词</h2><span>' + vocabGroups().length + ' 组 · 共 ' + vst.total + ' 词</span></div>';
    html += '<button class="vwidget" data-nav="#/words">' +
      '<div class="vw-top">' +
        '<div class="vw-t">单词 <small>VOCABULARY</small></div>' +
        '<div class="vw-n">' + vst.known + '<small>/' + vst.total + '</small></div>' +
      '</div>' +
      '<div class="vw-bar"><i style="width:' + vpct + '%"></i></div>' +
      '<div class="vw-foot">' +
        '<span>' + (vst.unknown ? '生词 ' + vst.unknown + ' 个待复习' : '不认识的词会自动收进生词本') + '</span>' +
        '<span>' + vpct + '%</span>' +
      '</div>' +
      '</button>';

    html += '<div class="sec-title"><h2>先学哪一科</h2><span>管综 200 ＋ 英语 100</span></div>';

    ['math', 'logic', 'english'].forEach(function (key) {
      var s = SUBJECTS[key];
      var list = s.list();
      var dn = subjectDone(key);
      var p = list.length ? Math.round(dn / list.length * 100) : 0;
      html += '<button class="subj' + (s.locked ? ' locked' : '') + '" ' +
        (s.locked ? 'data-action="locked"' : ('data-nav="#/list/' + key + '"')) +
        ' style="--accent:' + s.accent + ';--tint:' + s.tint + '">' +
        '<div class="subj-top">' +
          '<div class="subj-icon">' + s.icon + '</div>' +
          '<div class="subj-meta">' +
            '<div class="subj-name">' + s.name + '<small>' + s.en + '</small></div>' +
            '<div class="subj-tag">' + s.tag + '</div>' +
          '</div>' +
          '<div class="subj-arrow">' + (s.locked ? '<span class="soon">即将上线</span>' : '›') + '</div>' +
        '</div>' +
        (s.locked ? '' :
          '<div class="subj-prog"><i style="width:' + p + '%"></i></div>' +
          '<div class="subj-foot"><span>' + list.length + ' 个专题</span><span>已学 ' + dn + ' 章</span></div>') +
        '</button>';
    });

    // 建议卡
    var next = recommend();
    if (next) {
      html += '<div class="sec-title"><h2>今天建议从这儿开始</h2></div>' +
        '<button class="subj" data-nav="#/learn/' + next.sub + '/' + next.ch.id + '" ' +
        'style="--accent:var(--brand);--tint:var(--brand-soft)">' +
        '<div class="subj-top">' +
          '<div class="subj-icon">▶</div>' +
          '<div class="subj-meta">' +
            '<div class="subj-name">' + esc(next.ch.title) + '</div>' +
            '<div class="subj-tag">' + SUBJECTS[next.sub].name + ' · 约 ' + (next.ch.minutes || 25) + ' 分钟</div>' +
          '</div>' +
          '<div class="subj-arrow">›</div>' +
        '</div></button>';
    }

    // 错题
    var wn = db.wrong.length;
    html += '<div class="sec-title"><h2>错题本</h2><span>' + wn + ' 题待复习</span></div>' +
      '<button class="subj" data-nav="#/wrong" style="--accent:var(--bad);--tint:var(--bad-soft)">' +
      '<div class="subj-top">' +
        '<div class="subj-icon">✦</div>' +
        '<div class="subj-meta">' +
          '<div class="subj-name">' + (wn ? '有 ' + wn + ' 道题在等你' : '还没有错题') + '</div>' +
          '<div class="subj-tag">' + (wn ? '错过的题，再看一遍就记住了' : '做题时选错会自动收录进来') + '</div>' +
        '</div>' +
        '<div class="subj-arrow">›</div>' +
      '</div></button>';

    html += '<div style="height:8px"></div></div>';
    return html;
  }

  function formatDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d.getTime())) return iso;
    var w = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    return (d.getMonth() + 1) + '月' + d.getDate() + '日 周' + w;
  }

  function recommend() {
    for (var i = 0; i < SUBS.length; i++) {
      var list = SUBJECTS[SUBS[i]].list();
      for (var j = 0; j < list.length; j++) {
        if (!(db.progress[list[j].id] && db.progress[list[j].id].done)) {
          return { sub: SUBS[i], ch: list[j] };
        }
      }
    }
    return null;
  }

  /* ---------------- 章节列表 ---------------- */
  function viewList(sub) {
    var s = SUBJECTS[sub];
    if (!s) return '<div class="wrap"><div class="empty"><div class="ei">?</div><p>没找到这个科目</p></div></div>';
    var list = s.list();
    var dn = subjectDone(sub);
    var html = '<div class="wrap" style="--accent:' + s.accent + ';--tint:' + s.tint + '">';
    html += '<div class="learn-head">' +
      '<div class="lh-eyebrow">' + s.en + '</div>' +
      '<div class="lh-title">' + s.name + ' · ' + list.length + ' 个专题</div>' +
      '<div class="lh-meta"><span>已学 ' + dn + ' 章</span><span>每章 20–35 分钟</span></div>' +
      '</div>';

    if (sub === 'math') {
      html += '<div class="tip" style="margin-top:16px"><span class="tip-t">怎么用</span>' +
        '每章先讲故事建立直觉，再看公式，然后跟着例题一步步走，最后自己做练习。' +
        '做错的题会自动进错题本，考前只刷错题本就行。</div>';
    } else if (sub === 'logic') {
      html += '<div class="tip" style="margin-top:16px"><span class="tip-t">怎么用</span>' +
        '逻辑不靠语感，靠符号。前 5 章是“公式”，学会把中文翻译成箭头和括号；' +
        '后面几章是“套路”，学会看出选项在偷换什么。</div>';
    } else if (sub === 'english') {
      html += '<div class="tip" style="margin-top:16px"><span class="tip-t">怎么用</span>' +
        '前两章是地基（长难句、高频词），别跳过——阅读做不对，八成不是词汇量不够，是句子拆不开。' +
        '后面按题型走：阅读占 50 分，先啃它；写作有固定骨架，最后十天背也来得及。</div>' +
        '<button class="vcta" data-nav="#/words">' +
          '<span class="vc-l">' +
            '<b>单词库 · ' + allWords().length + ' 词</b>' +
            '<small>' + vocabGroups().length + ' 组，高频核心打头，一组 25 词十几分钟过完</small>' +
          '</span>' +
          '<span class="vc-r">去背 ›</span>' +
        '</button>';
    }

    html += '<div class="ch-list">';
    list.forEach(function (ch, i) {
      var pr = db.progress[ch.id] || {};
      var tags = '';
      (ch.tags || []).forEach(function (t) {
        tags += '<span class="tagp' + (t === '高频' ? ' hot' : '') + '">' + esc(t) + '</span>';
      });
      if (pr.done) {
        tags += '<span class="tagp done">已完成</span>';
        if (pr.total) tags += '<span class="tagp score">练习 ' + pr.correct + '/' + pr.total + '</span>';
      }
      html += '<button class="ch" data-nav="#/learn/' + sub + '/' + ch.id + '">' +
        '<div class="ch-num">' + (i + 1) + '</div>' +
        '<div class="ch-body">' +
          '<div class="ch-title">' + esc(ch.title) + '</div>' +
          '<div class="ch-brief">' + esc(ch.brief || '') + '</div>' +
          (tags ? '<div class="ch-tags">' + tags + '</div>' : '') +
        '</div>' +
        '<div class="ch-check' + (pr.done ? ' ok' : '') + '">✓</div>' +
        '</button>';
    });
    html += '</div></div>';
    return html;
  }

  /* ---------------- 学习页 ---------------- */
  var learnState = {};

  /* 选项级解析：key = 章节 id + '-p' + 练习序号，数组与 options 对齐 */
  function whyOf(chId, pi, oi) {
    var all = window.OPTION_WHY || {};
    var arr = all[chId + '-p' + pi];
    return (arr && arr[oi]) ? arr[oi] : '';
  }

  function whyOfEx(chId, ei, oi) {
    var all = window.OPTION_WHY || {};
    var arr = all[chId + '-e' + ei];
    return (arr && arr[oi]) ? arr[oi] : '';
  }

  function whyList(chId, pi, options, answer) {
    if (!options) return [];
    var out = [];
    for (var i = 0; i < options.length; i++) {
      if (i === answer) continue;
      var t = whyOf(chId, pi, i);
      if (t) out.push({ i: i, t: t });
    }
    return out;
  }

  /* ---------------- 高频考点记忆 ---------------- */
  function memoOf(id) {
    return (window.HIGH_FREQ || {})[id] || [];
  }

  function memoHTML(id, inChapter) {
    var list = memoOf(id);
    if (!list.length) return '';
    var rows = list.map(function (m, i) {
      return '<div class="memo-row" data-memo-row="' + i + '">' +
        '<div class="memo-k">' + esc(m.k) + '</div>' +
        '<div class="memo-v">' + esc(m.v) + '</div>' +
        '</div>';
    }).join('');
    return '<div class="memo' + (inChapter ? ' block' : '') + '" data-memo-block="1">' +
      '<div class="memo-bar' + (inChapter ? '' : ' memo-bar-r') + '">' +
        (inChapter
          ? '<div class="bh-t">高频考点记忆 <span class="badge">考前必背</span></div>'
          : '') +
        '<button class="btn btn-line btn-sm" data-memo="toggle">遮住自测</button>' +
      '</div>' +
      '<div class="memo-hint" style="display:none">先自己回想，点任意一行看答案</div>' +
      '<div class="memo-list">' + rows + '</div>' +
      '</div>';
  }

  /* ---------------- 必背清单页 ---------------- */
  function viewRecite() {
    var total = 0;
    SUBS.forEach(function (k) {
      SUBJECTS[k].list().forEach(function (c) { total += memoOf(c.id).length; });
    });

    var html = '<div class="wrap">';
    html += '<div class="learn-head">' +
      '<div class="lh-eyebrow">考前冲刺</div>' +
      '<div class="lh-title">要背的，都在这一页</div>' +
      '<div class="lh-meta">' +
        '<span>共 ' + total + ' 条硬知识</span>' +
        '<span>点章节展开</span>' +
      '</div>' +
      '</div>';

    html += '<div class="rc-note">这些不是“看懂了就行”的东西，得背到不用想。考前每天过一遍，过不去的标个记号，第二天先看它。</div>';

    SUBS.forEach(function (key) {
      var s = SUBJECTS[key];
      var chs = s.list();
      var cnt = 0;
      chs.forEach(function (c) { cnt += memoOf(c.id).length; });
      if (!cnt) return;
      html += '<div class="sec-title"><h2>' + s.name + '</h2><span>' + chs.length + ' 章 · ' + cnt + ' 条</span></div>';
      chs.forEach(function (ch) {
        var n = memoOf(ch.id).length;
        if (!n) return;
        html += '<details class="rc">' +
          '<summary>' +
            '<span class="rc-t">' + esc(ch.title.replace(/[：:].*$/, '')) + '</span>' +
            '<span class="rc-n">' + n + '</span>' +
          '</summary>' +
          memoHTML(ch.id, false) +
          '</details>';
      });
    });

    html += '<div style="height:20px"></div></div>';
    return html;
  }

  function viewLearn(sub, id) {
    var s = SUBJECTS[sub] || SUBJECTS.math;
    var ch = findChapter(sub, id);
    if (!ch) {
      return '<div class="wrap"><div class="empty"><div class="ei">·</div><p>章节不存在，返回重选吧</p></div></div>';
    }
    learnState = { sub: sub, id: id, ch: ch, picked: {}, checked: {}, stepShown: {}, exDone: {} };

    var html = '<div class="wrap" style="--accent:' + s.accent + ';--tint:' + s.tint + '">';
    html += '<div class="learn-head">' +
      '<div class="lh-eyebrow">' + s.name + ' · 第 ' + (s.list().indexOf(ch) + 1) + ' 章</div>' +
      '<div class="lh-title">' + esc(ch.title) + '</div>' +
      '<div class="lh-meta">' +
        '<span>⏱ 约 ' + (ch.minutes || 25) + ' 分钟</span>' +
        '<span>✎ ' + (ch.examples ? ch.examples.length : 0) + ' 个例题</span>' +
        '<span>◎ ' + (ch.practices ? ch.practices.length : 0) + ' 个练习</span>' +
      '</div>' +
      '</div>';

    // 引入
    if (ch.hook) {
      html += '<div class="block hook">' +
        '<div class="hook-label">先建立直觉</div>' +
        (ch.hook.title ? '<div class="sec-h"><span class="dot"></span>' + esc(ch.hook.title) + '</div>' : '') +
        ((ch.hook.paras || []).map(function (p) { return '<p>' + p + '</p>'; }).join('')) +
        '</div>';
    }

    // 知识点
    (ch.sections || []).forEach(function (sec) {
      html += '<div class="block">' +
        '<div class="sec-h"><span class="dot"></span>' + esc(sec.h) + '</div>' +
        (sec.p ? '<p>' + sec.p + '</p>' : '') +
        (sec.list && sec.list.length ? '<ul>' + sec.list.map(function (li) { return '<li>' + li + '</li>'; }).join('') + '</ul>' : '') +
        (sec.tip ? '<div class="tip"><span class="tip-t">记住这一句</span>' + sec.tip + '</div>' : '') +
        '</div>';
    });

    // 公式卡
    if (ch.formulas && ch.formulas.length) {
      html += '<div class="formula-box"><div class="fb-h">公式速查</div>' +
        ch.formulas.map(function (f) {
          return '<div class="fml"><div class="fml-name">' + esc(f.name) + '</div><div class="fml-expr">' + esc(f.expr) + '</div></div>';
        }).join('') + '</div>';
    }

    // 高频考点记忆
    if (memoOf(ch.id).length) html += memoHTML(ch.id, true);

    // 例题
    if (ch.examples && ch.examples.length) {
      html += '<div class="block" id="exBlock">' +
        '<div class="block-h"><div class="bh-t">例题精讲 <span class="badge">跟着走</span></div></div>';
      ch.examples.forEach(function (ex, i) {
        html += '<div class="ex">' +
          '<div class="ex-tag">例 ' + (i + 1) + '</div>' +
          '<div class="ex-q">' + ex.q + '</div>' +
          (ex.options && ex.options.length
            ? '<div class="ex-opts">' + ex.options.map(function (o, oi) {
                return '<div class="ex-opt" data-exopt="' + i + '-' + oi + '"><span class="k">' + letters(oi) + '</span><span>' + esc(o) + '</span></div>';
              }).join('') + '</div>'
            : '') +
          '<div style="margin-top:12px"><button class="btn btn-line btn-sm" data-ex="' + i + '">先想 30 秒，再看解析</button></div>' +
          '<div class="steps" id="exSteps-' + i + '" style="display:none"></div>' +
          '<div class="point" id="exPoint-' + i + '" style="display:none"></div>' +
          '</div>';
      });
      html += '</div>';
    }

    // 练习
    if (ch.practices && ch.practices.length) {
      html += '<div class="block" id="prBlock">' +
        '<div class="block-h"><div class="bh-t">马上练手 <span class="badge">即时判分</span></div></div>';
      ch.practices.forEach(function (p, i) {
        html += '<div class="prac" data-prac="' + i + '">' +
          '<div class="ex-q"><span class="qnum">' + (i + 1) + '.</span>' + p.q + '</div>' +
          '<div class="opts">' + p.options.map(function (o, oi) {
            return '<button class="opt" data-opt="' + i + '-' + oi + '"><span class="k">' + letters(oi) + '</span><span>' + esc(o) + '</span></button>';
          }).join('') + '</div>' +
          '<div class="prac-foot"><button class="btn btn-fill btn-sm" data-check="' + i + '" disabled>确认答案</button></div>' +
          '<div class="fb" id="fb-' + i + '" style="display:none"></div>' +
          '</div>';
      });
      html += '</div>';
    }

    // 完成区
    html += '<div class="done-zone" id="doneZone">' +
      '<p>看完讲解、做完练习，这一章就算拿下了。<br>标记完成后，进度会记在首页。</p>' +
      '<button class="btn btn-fill btn-block" data-finish="1">完成这一章</button>' +
      '</div>';

    html += '<div style="height:16px"></div></div>';
    return html;
  }

  /* ---------------- 错题本 ---------------- */
  function viewWrong() {
    var html = '<div class="wrap">';
    html += '<div class="learn-head"><div class="lh-eyebrow">REVIEW</div>' +
      '<div class="lh-title">错题本</div>' +
      '<div class="lh-meta"><span>' + db.wrong.length + ' 道题</span><span>考前只刷这里</span></div></div>';

    if (!db.wrong.length) {
      html += '<div class="empty"><div class="ei">✦</div><p>还没有错题。<br>去做几道练习，选错的会自动收到这里。</p></div></div>';
      return html;
    }

    html += '<div style="height:16px"></div>';
    db.wrong.slice().reverse().forEach(function (w) {
      var ch = findChapter(w.sub, w.chapter) || { title: '练习' };

      // 其他选项为什么错
      var wl = '';
      if (w.why && w.options) {
        var rows = '';
        for (var oi = 0; oi < w.options.length; oi++) {
          if (oi === w.answer || !w.why[oi]) continue;
          rows += '<div class="wi-why' + (oi === w.pick ? ' picked' : '') + '">' +
            '<b>' + letters(oi) + '</b><span>' + w.why[oi] + '</span></div>';
        }
        if (rows) wl = '<div class="wi-whys">' + rows + '</div>';
      }

      html += '<div class="wrong-item">' +
        '<div class="wi-head">' +
          '<div class="wi-src">' + esc(ch.title) + '</div>' +
          '<button class="btn btn-ghost btn-sm wi-know" data-delwrong="' + esc(w.id) + '">✓ 我懂了，移出</button>' +
        '</div>' +
        '<div class="wi-q">' + w.q + '</div>' +
        '<div class="wi-ans">正确答案：<b>' + letters(w.answer) + '. ' + esc(w.options[w.answer]) + '</b></div>' +
        wl +
        '<div class="fb no" style="margin-top:10px"><span class="fb-t">你选的 ' + letters(w.pick) + '</span>' + (w.explain || '') + '</div>' +
        '</div>';
    });
    html += '<div style="height:16px"></div></div>';
    return html;
  }

  /* ---------------- 单词：词库总览 ---------------- */
  function viewWords() {
    var st = vocabStat();
    var groups = vocabGroups();
    var pct = st.total ? Math.round(st.known / st.total * 100) : 0;

    var html = '<div class="wrap" style="--accent:var(--en);--tint:var(--en-soft)">';
    html += '<div class="learn-head">' +
      '<div class="lh-eyebrow">VOCABULARY</div>' +
      '<div class="lh-title">单词</div>' +
      '<div class="lh-meta">' +
        '<span>共 ' + st.total + ' 词 · ' + groups.length + ' 组 · 每组 25 词</span>' +
        '<span>高频优先</span>' +
      '</div>' +
      '</div>';

    html += '<div class="tip" style="margin-top:14px"><span class="tip-t">怎么背</span>' +
      '一个词算“会”，标准只有一个：<b>看到它，一秒内想到中文</b>。抄十遍不算，认得出才算。' +
      '所以这里不让你抄，只让你一遍遍过：想得起来点“认识”，想不起来点“不认识”，' +
      '不认识的会留在生词本里，反复出现直到你记住。</div>';

    // 总量卡
    html += '<div class="vsum">' +
      '<div class="vs-top">' +
        '<div class="vs-num">' + st.known + '<small>/' + st.total + '</small></div>' +
        '<div class="vs-pct">' + pct + '%</div>' +
      '</div>' +
      '<div class="vs-bar"><i style="width:' + pct + '%"></i></div>' +
      '<div class="vs-foot">' +
        '<span>已掌握 ' + st.known + ' 词</span>' +
        '<span>' + (st.unknown ? '生词 ' + st.unknown + ' 个' : '还没有生词') + '</span>' +
      '</div>' +
      '</div>';

    // 生词本入口
    html += '<button class="vreview' + (st.unknown ? '' : ' off') + '" ' +
      (st.unknown ? 'data-nav="#/words/review"' : 'data-action="novocab"') + '>' +
      '<div class="vr-left">' +
        '<div class="vr-icon">✦</div>' +
        '<div class="vr-meta">' +
          '<div class="vr-name">' + (st.unknown ? '生词本：' + st.unknown + ' 个词等你' : '生词本是空的') + '</div>' +
          '<div class="vr-sub">' + (st.unknown ? '过一遍，认识的自动移出' : '遇到不认识的词，会自动收进这里') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="vr-arrow">›</div>' +
      '</button>';

    var tiers = vocabTiers();
    var seq = 0;
    function groupCard(g) {
      seq++;
      var gs = groupStat(g);
      var gp = Math.round(gs.done / gs.total * 100);
      return '<button class="wg" data-nav="#/words/' + g.id + '">' +
        '<div class="wg-icon">' + seq + '</div>' +
        '<div class="wg-body">' +
          '<div class="wg-name">' + esc(g.name) + '</div>' +
          '<div class="wg-brief">' + esc(g.brief || '') + '</div>' +
          '<div class="wg-bar"><i style="width:' + gp + '%"></i></div>' +
        '</div>' +
        '<div class="wg-right">' +
          '<div class="wg-cnt">' + gs.done + '<small>/' + gs.total + '</small></div>' +
          (gs.done >= gs.total ? '<div class="wg-ok">✓</div>' : '') +
        '</div>' +
        '</button>';
    }

    if (tiers.core.length) {
      html += '<div class="sec-title"><h2>高频核心</h2><span>' + wordsIn(tiers.core) + ' 词 · 按词频从高到低</span></div>';
      html += '<div class="wg-list">' + tiers.core.map(groupCard).join('') + '</div>';
    }
    if (tiers.theme.length) {
      html += '<div class="sec-title"><h2>主题精讲</h2><span>' + wordsIn(tiers.theme) + ' 词 · 按题材成组</span></div>';
      html += '<div class="wg-list">' + tiers.theme.map(groupCard).join('') + '</div>';
    }

    html += '<div style="height:20px"></div></div>';
    return html;
  }

  /* ---------------- 单词：背词 ---------------- */
  var drill = null;

  function pickWords(gid) {
    var out = [];
    if (gid === 'review') {
      vocabGroups().forEach(function (g) {
        g.words.forEach(function (w) { if (db.vocab[wordKey(w.w)] === UNKNOWN) out.push(w); });
      });
    } else {
      vocabGroups().forEach(function (g) {
        if (g.id === gid) out = g.words.slice();
      });
    }
    return out;
  }

  function viewWordDrill(gid) {
    var list = pickWords(gid);
    var g = null;
    vocabGroups().forEach(function (gg) { if (gg.id === gid) g = gg; });

    if (!list.length) {
      var msg = gid === 'review'
        ? '生词本是空的。<br>去背几组，不认识的词会自动收到这里。'
        : '这一组还没有词。';
      return '<div class="wrap"><div class="empty"><div class="ei">✓</div><p>' + msg + '</p></div>' +
        '<button class="btn btn-line btn-block" data-nav="#/words" style="margin-top:18px">回词库</button></div>';
    }

    drill = {
      gid: gid, g: g, list: list, idx: 0, revealed: false,
      ok: 0, no: 0, noList: []
    };

    var name = gid === 'review' ? '生词本' : (g ? g.name : '单词');
    var html = '<div class="wrap" style="--accent:var(--en);--tint:var(--en-soft)">';
    html += '<div class="drill-top">' +
      '<div class="dt-row">' +
        '<span class="dt-name">' + esc(name) + '</span>' +
        '<span class="dt-idx" id="drillIdx">1 / ' + list.length + '</span>' +
      '</div>' +
      '<div class="dt-bar"><i id="drillBar" style="width:' + Math.round(1 / list.length * 100) + '%"></i></div>' +
      '</div>';
    html += '<div id="drillBody">' + drillBodyHTML() + '</div>';
    html += '<div style="height:20px"></div></div>';
    return html;
  }

  function drillBodyHTML() {
    var w = drill.list[drill.idx];
    var on = drill.revealed ? ' on' : '';
    var len = String(w.w).length;
    var sizeCls = len >= 13 ? ' wc-xs' : (len >= 10 ? ' wc-sm' : '');
    var phs = String(w.p).split(' / ');
    var phHtml = '';
    for (var pi = 0; pi < phs.length; pi++) {
      phHtml += '<span class="ph">/' + esc(phs[pi]) + '/</span>';
    }
    return '<div class="wcard' + on + '" id="wcard" data-wreveal="1">' +
        '<div class="wc-word' + sizeCls + '">' + esc(w.w) + '</div>' +
        '<div class="wc-ph' + (phs.length > 1 ? ' wc-pair' : '') + '">' + phHtml + '<span class="wc-pos">' + esc(w.pos) + '</span></div>' +
        '<div class="wc-sep"></div>' +
        '<div class="wc-cn">' + esc(w.cn) + '</div>' +
        (w.tip ? '<div class="wc-tip">' + esc(w.tip) + '</div>' : '') +
        '<div class="wc-hint" id="wcHint">点一下卡片，看中文意思</div>' +
      '</div>' +
      '<div class="wacts" id="wacts">' +
        '<button class="wa wa-no" data-wm="no"><span class="wa-k">✕</span><span>不认识</span></button>' +
        '<button class="wa wa-ok" data-wm="yes"><span class="wa-k">✓</span><span>认识</span></button>' +
      '</div>' +
      '<div class="wtip">拿不准就算“不认识”，让它多出现两次</div>';
  }

  function drillDoneHTML() {
    var st = vocabStat();
    var all = drill.ok + drill.no;
    var rate = all ? Math.round(drill.ok / all * 100) : 0;
    var nextId = null;
    var groups = vocabGroups();
    for (var i = 0; i < groups.length; i++) {
      if (groups[i].id === drill.gid) {
        if (i + 1 < groups.length) nextId = groups[i + 1].id;
        break;
      }
    }
    var html = '<div class="wdone">' +
      '<div class="wd-ring"><b>' + rate + '</b><small>%</small></div>' +
      '<div class="wd-title">这一组过完了</div>' +
      '<div class="wd-stat">认识 <b class="ok-t">' + drill.ok + '</b> 个 · 不认识 <b class="no-t">' + drill.no + '</b> 个</div>' +
      '<div class="wd-sum">词库累计已掌握 <b>' + st.known + '</b> / ' + st.total + ' 词</div>' +
      '<div class="wd-acts">';
    if (drill.no) {
      html += '<button class="btn btn-fill btn-block" data-again="1">把不认识的 ' + drill.no + ' 个再过一遍</button>';
    }
    if (nextId && drill.gid !== 'review') {
      html += '<button class="btn btn-line btn-block" data-nav="#/words/' + nextId + '">下一组</button>';
    }
    html += '<button class="btn btn-line btn-block" data-nav="#/words">回词库</button>' +
      '</div></div>';
    return html;
  }

  function paintDrill() {
    var body = document.getElementById('drillBody');
    if (body) body.innerHTML = drillBodyHTML();
    var idx = document.getElementById('drillIdx');
    if (idx) idx.textContent = (drill.idx + 1) + ' / ' + drill.list.length;
    var bar = document.getElementById('drillBar');
    if (bar) bar.style.width = Math.round((drill.idx + 1) / drill.list.length * 100) + '%';
    bindDrillCard();
  }

  function answerWord(val) {
    if (!drill) return;
    var w = drill.list[drill.idx];
    markWord(w.w, val);
    if (val === KNOWN) drill.ok++; else { drill.no++; drill.noList.push(w); }
    drill.idx++;
    drill.revealed = false;
    if (drill.idx >= drill.list.length) {
      var body = document.getElementById('drillBody');
      if (body) body.innerHTML = drillDoneHTML();
      var bar = document.getElementById('drillBar');
      if (bar) bar.style.width = '100%';
      var idx = document.getElementById('drillIdx');
      if (idx) idx.textContent = drill.list.length + ' / ' + drill.list.length;
      var acts = document.getElementById('wacts');
      if (acts) acts.style.display = 'none';
      bindDrillDone();
      window.scrollTo(0, 0);
    } else {
      paintDrill();
      window.scrollTo(0, 0);
    }
  }

  function bindDrillCard() {
    var card = document.getElementById('wcard');
    if (card) {
      card.addEventListener('click', function () {
        if (!drill || drill.revealed) return;
        drill.revealed = true;
        card.classList.add('on');
        var hint = document.getElementById('wcHint');
        if (hint) hint.style.display = 'none';
      });
    }
    document.querySelectorAll('[data-wm]').forEach(function (btn) {
      btn.addEventListener('click', function (ev) {
        ev.stopPropagation();
        answerWord(btn.getAttribute('data-wm') === 'yes' ? KNOWN : UNKNOWN);
      });
    });
  }

  function bindDrillDone() {
    document.querySelectorAll('[data-again]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        drill.list = drill.noList.slice();
        drill.idx = 0; drill.revealed = false; drill.ok = 0; drill.no = 0; drill.noList = [];
        var body = document.getElementById('drillBody');
        if (body) body.innerHTML = drillBodyHTML();
        var idx = document.getElementById('drillIdx');
        if (idx) idx.textContent = '1 / ' + drill.list.length;
        var bar = document.getElementById('drillBar');
        if (bar) bar.style.width = Math.round(1 / drill.list.length * 100) + '%';
        bindDrillCard();
        window.scrollTo(0, 0);
      });
    });
    document.querySelectorAll('[data-nav]').forEach(function (el) {
      el.addEventListener('click', function () {
        var h = el.getAttribute('data-nav');
        if (h) nav(h);
      });
    });
  }

  /* ---------------- 事件 ---------------- */
  function bind(r) {
    var page = $('#page') || document;

    // 顶部返回/导航
    document.querySelectorAll('[data-nav]').forEach(function (el) {
      el.addEventListener('click', function () {
        var h = el.getAttribute('data-nav');
        if (h) nav(h);
      });
    });

    document.querySelectorAll('[data-action]').forEach(function (el) {
      el.addEventListener('click', function () {
        var a = el.getAttribute('data-action');
        if (a === 'theme') {
          db.theme = db.theme === 'dark' ? 'light' : 'dark';
          save(); applyPrefs(); render();
        } else if (a === 'font') {
          db.font = (db.font + 1) % FONT_SIZES.length;
          save(); applyPrefs(); toast('字号：' + ['小', '中', '大'][db.font]);
        } else if (a === 'novocab') {
          toast('生词本还是空的，去背一组吧');
        } else if (a === 'exam') {
          var v = prompt('输入考试日期（格式 YYYY-MM-DD）', db.exam);
          if (v == null) return;
          v = String(v).trim().replace(/[./]/g, '-');
          if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(v)) { toast('日期格式不对，要像 2026-12-26'); return; }
          var parts = v.split('-');
          var y = +parts[0], m = +parts[1], dd = +parts[2];
          if (m < 1 || m > 12 || dd < 1 || dd > 31) { toast('日期不合法'); return; }
          db.exam = y + '-' + ('0' + m).slice(-2) + '-' + ('0' + dd).slice(-2);
          save(); render(); toast('已改为 ' + formatDate(db.exam));
        }
      });
    });

    // 滚动阴影 + 阅读进度
    var topbar = $('#topbar');
    if (topbar) {
      var onScroll = function () {
        if (window.scrollY > 8) topbar.classList.add('scrolled');
        else topbar.classList.remove('scrolled');
        var rb = document.getElementById('readBar');
        if (rb) {
          var max = document.documentElement.scrollHeight - window.innerHeight;
          var pct = max > 40 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0;
          rb.style.width = pct + '%';
        }
      };
      window.removeEventListener('scroll', window.__scrollH || function () {});
      window.__scrollH = onScroll;
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    if (r.name === 'learn' && learnState.ch) bindLearn();
    if (r.name === 'wordDrill' && drill) bindDrillCard();

    // 错题删除
    document.querySelectorAll('[data-delwrong]').forEach(function (el) {
      el.addEventListener('click', function () {
        var id = el.getAttribute('data-delwrong');
        db.wrong = db.wrong.filter(function (w) { return w.id !== id; });
        save(); render(); toast('已从错题本移除');
      });
    });

    // 高频考点：遮住自测（逐块作用域，学习页和必背页都能用）
    document.querySelectorAll('[data-memo-block]').forEach(function (box) {
      var btn = box.querySelector('[data-memo="toggle"]');
      var list = box.querySelector('.memo-list');
      var hint = box.querySelector('.memo-hint');
      if (!list) return;
      if (btn) {
        btn.addEventListener('click', function (ev) {
          ev.preventDefault();
          var on = list.classList.toggle('hide');
          btn.textContent = on ? '显示全部' : '遮住自测';
          if (hint) hint.style.display = on ? 'block' : 'none';
          list.querySelectorAll('.memo-row').forEach(function (r) { r.classList.remove('on'); });
        });
      }
      list.querySelectorAll('.memo-row').forEach(function (row) {
        row.addEventListener('click', function () {
          if (!list.classList.contains('hide')) return;
          row.classList.toggle('on');
        });
      });
    });
  }

  function bindLearn() {
    var ch = learnState.ch;

    // 例题：逐行展开
    document.querySelectorAll('[data-ex]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = parseInt(btn.getAttribute('data-ex'), 10);
        var ex = ch.examples[i];
        var box = $('#exSteps-' + i);
        var shown = learnState.stepShown[i] || 0;

        if (shown === 0) {
          box.style.display = 'flex';
          var first = document.createElement('div');
          first.className = 'step';
          first.innerHTML = ex.steps[0];
          box.appendChild(first);
          learnState.stepShown[i] = 1;
        } else if (shown < ex.steps.length) {
          var s = document.createElement('div');
          s.className = 'step';
          s.innerHTML = ex.steps[shown];
          box.appendChild(s);
          learnState.stepShown[i] = shown + 1;
        }

        if (learnState.stepShown[i] >= ex.steps.length) {
          // 全部展开：显示答案与点睛
          if (ex.answer != null && ex.options) {
            var correctEl = document.querySelector('[data-exopt="' + i + '-' + ex.answer + '"]');
            if (correctEl) correctEl.classList.add('right');
            // 每个错误选项下面补一句“错在哪”
            ex.options.forEach(function (o, oi) {
              if (oi === ex.answer) return;
              var el = document.querySelector('[data-exopt="' + i + '-' + oi + '"]');
              if (!el || el.getAttribute('data-whydone')) return;
              var wtxt = whyOfEx(ch.id, i, oi);
              if (!wtxt) return;
              el.setAttribute('data-whydone', '1');
              var wd = document.createElement('div');
              wd.className = 'ex-why';
              wd.innerHTML = wtxt;
              el.parentNode.insertBefore(wd, el.nextSibling);
            });
          }
          var pt = $('#exPoint-' + i);
          if (pt && ex.point) { pt.style.display = 'block'; pt.innerHTML = '<b>点睛：</b>' + ex.point; }
          btn.textContent = '已看完 ✓';
          btn.disabled = true;
        } else {
          btn.textContent = '下一步（' + (learnState.stepShown[i] + 1) + '/' + ex.steps.length + '）';
        }
      });
    });

    // 练习：选择
    document.querySelectorAll('[data-opt]').forEach(function (el) {
      el.addEventListener('click', function () {
        var parts = el.getAttribute('data-opt').split('-');
        var i = parseInt(parts[0], 10), oi = parseInt(parts[1], 10);
        if (learnState.checked[i]) return;
        learnState.picked[i] = oi;
        var wrap = document.querySelector('.prac[data-prac="' + i + '"]');
        wrap.querySelectorAll('.opt').forEach(function (o) { o.classList.remove('sel'); });
        el.classList.add('sel');
        var cb = document.querySelector('[data-check="' + i + '"]');
        if (cb) cb.disabled = false;
      });
    });

    // 练习：判分
    document.querySelectorAll('[data-check]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = parseInt(btn.getAttribute('data-check'), 10);
        var p = ch.practices[i];
        var pick = learnState.picked[i];
        if (pick == null) { toast('先选一个答案'); return; }

        learnState.checked[i] = (pick === p.answer);
        var wrap = document.querySelector('.prac[data-prac="' + i + '"]');
        var opts = wrap.querySelectorAll('.opt');
        opts.forEach(function (o, oi) {
          o.classList.add('locked');
          o.classList.remove('sel');
          if (oi === p.answer) o.classList.add('right');
          else if (oi === pick) o.classList.add('wrong');

          // 错误选项逐条给出"为什么错"
          if (oi !== p.answer) {
            var writeWhy = whyOf(ch.id, i, oi);
            if (writeWhy && !o.querySelector('.opt-why')) {
              var ws = document.createElement('span');
              ws.className = 'opt-why';
              ws.innerHTML = writeWhy;
              o.appendChild(ws);
            }
          }
        });

        var fb = $('#fb-' + i);
        fb.style.display = 'block';
        fb.className = 'fb ' + (learnState.checked[i] ? 'ok' : 'no');
        fb.innerHTML = '<span class="fb-t">' + (learnState.checked[i] ? '答对了' : '这题错了，看下解析') + '</span>' + (p.explain || '');

        btn.style.display = 'none';

        // 记录错题
        if (!learnState.checked[i]) {
          var wid = ch.id + '-p' + i;
          var exists = db.wrong.some(function (w) { return w.id === wid; });
          if (!exists) {
            db.wrong.push({
              id: wid, sub: learnState.sub, chapter: ch.id,
              q: p.q, options: p.options, answer: p.answer, pick: pick,
              why: (window.OPTION_WHY || {})[wid] || null,
              explain: p.explain || '', ts: Date.now()
            });
          }
          save();
        }
        updateDoneZone();
      });
    });

    // 完成
    document.querySelectorAll('[data-finish]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var total = ch.practices ? ch.practices.length : 0;
        var correct = 0;
        for (var i = 0; i < total; i++) if (learnState.checked[i]) correct++;
        var prev = db.progress[ch.id] || {};
        db.progress[ch.id] = {
          done: true,
          correct: Math.max(correct, prev.correct || 0),
          total: total,
          ts: Date.now()
        };
        save();
        toast('这一章完成 ✓ 继续保持');
        setTimeout(function () { nav('#/list/' + learnState.sub); }, 650);
      });
    });

    function updateDoneZone() {
      var zone = $('#doneZone');
      if (!zone || !ch.practices) return;
      var total = ch.practices.length;
      var answered = Object.keys(learnState.checked).length;
      if (answered < total) return;
      var correct = 0;
      for (var k in learnState.checked) if (learnState.checked[k]) correct++;
      var pct = Math.round(correct / total * 100);
      zone.innerHTML = '<div class="done-score">' + correct + '<small>/' + total + '</small></div>' +
        '<p>' + (pct === 100 ? '全对，这一章你是真会了。' :
                 pct >= 60 ? '大部分拿下，错的题已经进错题本了。' :
                 '别灰心，回上面把例题再看一遍，然后点完成。') + '</p>' +
        '<button class="btn btn-fill btn-block" data-finish="1">完成这一章</button>';
      zone.querySelector('[data-finish]').addEventListener('click', function () {
        db.progress[ch.id] = { done: true, correct: correct, total: total, ts: Date.now() };
        save();
        toast('这一章完成 ✓ 继续保持');
        setTimeout(function () { nav('#/list/' + learnState.sub); }, 650);
      });
    }
  }

  /* ---------------- 启动 ---------------- */
  window.addEventListener('hashchange', render);
  applyPrefs();
  if (!location.hash) location.hash = '#/';
  render();
})();
