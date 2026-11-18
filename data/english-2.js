/* 英语 · 第二部分（第 6—9 章） */
window.ENGLISH_CHAPTERS = (window.ENGLISH_CHAPTERS || []).concat([

/* ================= 第 6 章 ================= */
{
  id: 'en-06',
  title: '完形填空：10 分里的 8 分靠逻辑词',
  brief: '逻辑关系、固定搭配、上下文复现——三条线索解决大部分空',
  minutes: 26,
  tags: ['技巧', '高频'],
  hook: {
    title: '完形不是考词汇量，是考“前后文对不对得上”',
    paras: [
      '完形 20 题 10 分，很多人靠“读着顺”选，正确率大概一半。其实它的答案有三条硬线索：<strong>逻辑关系词、固定搭配、上下文复现</strong>。',
      '还有一个隐藏规律：<strong>第一句通常不设空</strong>，它是全文的定调句。先把第一句读透，主题就有了。',
      '所以做完形的正确姿势不是逐句抠词，而是：<strong>先花 30 秒通读首句和每段首句，知道文章在讲什么，再动笔。</strong>'
    ]
  },
  sections: [
    {
      h: '① 第一条线索：逻辑关系',
      list: [
        '<b>转折</b>：however / but / yet / although / nevertheless / instead —— 前后意思相反',
        '<b>因果</b>：because / since / therefore / thus / consequently —— 前因后果',
        '<b>并列递进</b>：and / moreover / furthermore / besides —— 方向一致',
        '<b>让步</b>：although / even if / despite —— 先退一步，再转折'
      ],
      tip: '做逻辑空只需要判断一件事：<b>前后是同向还是反向。</b>同向找 and / moreover，反向找 but / however。这一条就能拿下大半。'
    },
    {
      h: '② 第二条线索：固定搭配',
      list: [
        '<b>动词 + 介词</b>：depend on、result in（导致）、result from（由……造成）、account for（解释）',
        '<b>形容词 + 介词</b>：be aware of、be responsible for、be capable of、be subject to',
        '<b>名词 + 介词</b>：effect on、reason for、solution to、access to'
      ],
      tip: 'result in 和 result from 是完形高频陷阱：<b>in 后面是结果，from 后面是原因。</b>'
    },
    {
      h: '③ 第三条线索：复现',
      p: '完形的空，答案常常在上下文里已经出现过一次——原词、同义词，或者反义词。',
      list: [
        '<b>原词复现</b>：前文出现 problem，后面那个空很可能还是 problem 或其变形。',
        '<b>同义复现</b>：前文说 difficult，后面空选 hard / challenging。',
        '<b>反义复现</b>：前文说 increase，转折之后的空选 decline / decrease。'
      ],
      tip: '做完一个空，往前后各看两句。<b>很多空是“隔一句”给答案的。</b>'
    },
    {
      h: '④ 时间与心态',
      list: [
        '完形建议 15 分钟，最多别超过 18 分钟。',
        '第一遍先做有把握的（大概 12 个），第二遍再攻剩下的。'
      ],
      tip: '一个空超过 40 秒还在犹豫，就先按第一直觉选，做个标记别卡住。<b>完形一题 0.5 分，不值得耗掉阅读的时间。</b>'
    }
  ],
  formulas: [
    { name: '三条线索', expr: '逻辑关系 ｜ 固定搭配 ｜ 上下文复现' },
    { name: '逻辑四类', expr: '转折 but/however ｜ 因果 because/thus ｜ 并列 and ｜ 让步 although' },
    { name: '易混搭配', expr: 'result in 结果 ｜ result from 原因 ｜ account for 解释' }
  ],
  examples: [
    {
      tag: '逻辑空',
      q: 'The new system was designed to reduce paperwork. ____, it created more forms than before.',
      options: ['Therefore', 'However', 'Moreover', 'Similarly'],
      answer: 1,
      steps: [
        '前句：新系统是为了减少文书工作。后句：它造出了比以前更多的表格。',
        '两句方向相反（本想减少，实际增加），需要转折词。',
        'Therefore 表因果、Moreover 表递进、Similarly 表类比，都不对。',
        '所以选 However。'
      ],
      point: '逻辑空只判断一件事：<b>同向还是反向</b>。这一步判断对了，四个选项里通常只剩一个能用。'
    },
    {
      tag: '固定搭配',
      q: 'The delay resulted ____ a shortage of raw materials.',
      options: ['in', 'from', 'of', 'to'],
      answer: 1,
      steps: [
        'result in 是“导致”，后面接结果；result from 是“由……造成”，后面接原因。',
        '这里后面是 a shortage of raw materials（原材料短缺），它是原因，不是结果。',
        '所以选 from：延误是由原材料短缺造成的。'
      ],
      point: '一句话记牢：<b>in 后面是“后来发生的事”，from 后面是“之前存在的事”。</b>'
    },
    {
      tag: '复现',
      q: 'Many students find the transition from school to university difficult. This ____ is often underestimated by teachers.',
      options: ['difficulty', 'benefit', 'decision', 'opportunity'],
      answer: 0,
      steps: [
        '前一句的核心词是 difficult（形容词）。',
        '后一句 This ____ 指的是前面整件事——“这个困难”。',
        '四个选项里只有 difficulty 与 difficult 同源，构成同义复现。',
        'benefit / decision / opportunity 都与 difficult 搭不上。'
      ],
      point: '这是完形最典型的送分空：<b>前一句用了形容词，后一句的空填它的名词形式。</b>看到 This / Such / The + 空，先回头看上一句。'
    }
  ],
  practices: [
    {
      q: 'The company invested heavily in training. ____, employee turnover fell by half within a year.',
      options: ['As a result', 'In contrast', 'For example', 'Nevertheless'],
      answer: 0,
      explain: '前句是因（投入培训），后句是果（离职率减半），需要因果连接词。In contrast 表对比、For example 举例、Nevertheless 转折，都不符。'
    },
    {
      q: 'The policy was intended to help small firms, but it was poorly ____, and many of them could not apply.',
      options: ['designed', 'implemented', 'ignored', 'financed'],
      answer: 1,
      explain: 'poorly 是负面副词，后面的结果（很多公司没法申请）说明政策“执行得差”，implemented（实施、执行）最贴。designed 与前面的 intended 意思重复；ignored 与“没能申请”逻辑不合；financed 原文没提钱。'
    },
    {
      q: 'Some studies suggest that homework improves grades; ____, others find no such link.',
      options: ['therefore', 'however', 'moreover', 'thus'],
      answer: 1,
      explain: '前一句说“有研究表明有效”，后一句说“另一些研究没发现关联”，结论相反，用 however。看到 others find no such link 这种“另一派反对”，就是典型的反向信号。'
    }
  ]
},

/* ================= 第 7 章 ================= */
{
  id: 'en-07',
  title: '英译汉：拆开、翻顺、再连起来',
  brief: '15 分大题，评分看的是通顺准确，不是文采',
  minutes: 28,
  tags: ['技巧', '高频'],
  hook: {
    title: '翻译的一大半工作，是搬东西的位置',
    paras: [
      '翻译 15 分，很多人怕它。但它其实是全卷最“有章可循”的题：<strong>考的是把长句拆短，再用中文的顺序重新拼。</strong>',
      '英语习惯把修饰放在名词后面（the man who ...），中文习惯放在前面（……的那个人）。',
      '还有一个好消息：阅卷是按点给分。<strong>主干翻对，就能拿一半分</strong>，哪怕后面某个词没翻准。'
    ]
  },
  sections: [
    {
      h: '① 四步法',
      list: [
        '<b>第一步 断句</b>：以连词、关系词、标点为界，把长句切成 2 到 4 段。',
        '<b>第二步 逐段译</b>：每段先译主干（谁做什么），再补修饰。',
        '<b>第三步 调序</b>：把定语从句挪到名词前加“的”；把状语从句按中文习惯放到主句前。',
        '<b>第四步 通读</b>：检查是否“像人说的话”，把别扭的被动改成主动。'
      ],
      tip: '<b>宁可断成三句短句，也不要写一句谁也读不懂的长句。</b>阅卷看的是意思对不对，不是句子结构像不像英文。'
    },
    {
      h: '② 三种必调的语序',
      list: [
        '<b>定语从句前置</b>：people who live in cities → 住在城市里的人',
        '<b>被动改主动</b>：It is widely believed that ... → 人们普遍认为……',
        '<b>抽象名词化开</b>：the availability of better jobs → 有更好的就业机会（不要译成“更好工作的可获得性”）'
      ],
      tip: '如果定语从句太长（超过十二个词），就别硬塞到名词前面，<b>拆成独立一句</b>更自然。'
    },
    {
      h: '③ 四个高频难点',
      list: [
        '<b>it 作形式主语</b>：It is important to note that ... → 需要注意的是……',
        '<b>there be 句型</b>：There are many reasons why ... → ……有很多原因',
        '<b>名词化结构</b>：the improvement of living standards → 生活水平的提高',
        '<b>插入语</b>：The plan, according to officials, will cost billions. → 据官员说，这项计划将耗资数十亿。'
      ],
      tip: '遇到不认识的词，<b>用上下文猜一个意思相近的中文，比空着强</b>。阅卷看的是整句通顺。'
    },
    {
      h: '④ 评分与时间',
      list: [
        '翻译建议 20 分钟：先通读整段，再逐句译，最后通读一遍改通顺。',
        '英语二的翻译评分里，“准确”和“通顺”是两条并列的标准。'
      ],
      tip: '<b>卷面整洁、句子通顺，比逐字对应得分高。</b>写错了划一道就好，不要涂成一团。'
    }
  ],
  formulas: [
    { name: '四步法', expr: '断句 → 逐段译 → 调序 → 通读' },
    { name: '三大调序', expr: '定语前置 ｜ 被动改主动 ｜ 抽象转具体' },
    { name: '固定译法', expr: 'It is said that → 据说 ｜ There be → 有' }
  ],
  examples: [
    {
      tag: '定语从句',
      q: 'The report, which was released last Monday by a group of independent researchers, suggests that the gap between rich and poor has widened over the past decade.<br><br>最恰当的译文是？',
      options: [
        '这份报告上周一由一群独立研究者发布，它表明贫富差距在过去十年间扩大了。',
        '这份报告表明贫富差距扩大，它上周一被发布。',
        '上周一发布报告，研究者独立，贫富差距在过去十年扩大。',
        '独立研究者上周一发布的报告在过去十年间扩大了贫富差距。'
      ],
      answer: 0,
      steps: [
        '断句：主干是 The report suggests that ...（报告表明……）；which 引导的定语从句修饰 report；that 引导宾语从句。',
        '主干先译：这份报告表明，贫富差距在过去十年间扩大了。',
        '定语从句 which was released last Monday by a group of independent researchers 太长，不硬塞到“报告”前面，拆成独立短句：这份报告上周一由一群独立研究者发布。',
        '合并：报告上周一由……发布，它表明…… 通顺且信息完整。'
      ],
      point: 'B 把从句的位置放错了，C 语序混乱，D 把“报告表明”改成了“报告扩大了差距”，主语和动作错位。<b>翻译第一要务是别把主语和动作搞混。</b>'
    },
    {
      tag: '形式主语',
      q: 'It is widely believed that reading to children at an early age improves their language ability.<br><br>最恰当的译文是？',
      options: [
        '它被广泛相信，早期给孩子读书提高他们的语言能力。',
        '人们普遍认为，在幼年时期给孩子读书能提高他们的语言能力。',
        '广泛相信早期阅读儿童改善语言。',
        '给孩子读书这件事被广泛地相信能提高语言能力。'
      ],
      answer: 1,
      steps: [
        'It is widely believed that ... 是形式主语句型，固定译法：人们普遍认为／据普遍认为。',
        'that 从句是真正内容：reading to children at an early age improves their language ability。',
        'at an early age 是“在幼年时期”；reading to children 是“给孩子读书”，不是“阅读儿童”。',
        'A 是硬译，中文不说“它被广泛相信”；C 把 reading to children 译错了；D 句式别扭。'
      ],
      point: '<b>It is said / believed / reported / estimated that ... 一律译成“据……”或“人们……”，不要留“它被”。</b>'
    },
    {
      tag: 'there be',
      q: 'There are several reasons why so many young people choose to work in big cities, the most important of which is the availability of better job opportunities.<br><br>最恰当的译文是？',
      options: [
        '有很多原因让年轻人选择大城市工作，最重要的是更好的工作机会。',
        '之所以有这么多年轻人选择在大城市工作，原因有几点，其中最重要的是那里有更好的就业机会。',
        '年轻人选择大城市工作的原因是最重要的工作机会。',
        '有几个原因，年轻人选择大城市，最重要的是机会的可获得性。'
      ],
      answer: 1,
      steps: [
        'There are several reasons why ... 译成“……的原因有几点”，比“有几点原因”更顺。',
        'the most important of which 是“其中最重要的”，指代前面那几点原因。',
        'the availability of better job opportunities 直译“更好工作机会的可获得性”很别扭，意译为“那里有更好的就业机会”。',
        'A 漏掉了“其中最重要的”这层；C 丢了信息；D 保留了“可获得性”这样的翻译腔。'
      ],
      point: '<b>availability / possibility / capability 这类抽象名词，翻译时常常要“化开”</b>：the availability of X 就是“有 X、能得到 X”。'
    }
  ],
  practices: [
    {
      q: 'The company decided to postpone the launch, which disappointed many customers.',
      options: [
        '公司决定推迟发布，这让许多顾客失望。',
        '公司决定推迟发布，许多顾客被失望。',
        '公司决定发布推迟，它失望了许多顾客。',
        '被推迟的发布让公司失望了顾客。'
      ],
      answer: 0,
      explain: 'which 指代前面整件事（推迟发布），译成“这”最自然。B 生造被动；C 把 disappoint 的主语弄错了（是“这”让人失望，不是“它失望了人”）；D 完全颠倒了意思。'
    },
    {
      q: 'Measures should be taken to protect the environment.',
      options: [
        '措施应该被采取来保护环境。',
        '应该采取措施保护环境。',
        '环境保护应该被措施采取。',
        '采取环境保护的措施是应该的。'
      ],
      answer: 1,
      explain: '英文被动句在中文里常常直接改成无主句的主动式：Measures should be taken → 应该采取措施。A 的“被采取”是典型翻译腔；C 语序错误；D 啰嗦且重心偏移。'
    },
    {
      q: 'The study found that students who slept less than six hours performed worse on memory tests.',
      options: [
        '研究发现，睡眠少于六小时的学生在记忆测试中表现更差。',
        '研究发现了学生睡六小时以下，记忆测试表现差。',
        '研究发现睡眠少于六小时，学生表现差于记忆测试。',
        '睡眠少于六小时的学生被发现记忆测试更差。'
      ],
      answer: 0,
      explain: 'who 引导的定语从句较短（四个词），可以直接前置成“睡眠少于六小时的学生”。performed worse on memory tests 是“在记忆测试中表现更差”。B 缺主谓衔接；C 把 on 的位置搞错；D 保留“被发现”的被动，中文不自然。'
    }
  ]
},

/* ================= 第 8 章 ================= */
{
  id: 'en-08',
  title: '小作文：10 分的信，其实只有一个骨架',
  brief: '书信和通知共用三段式：说清目的、给出细节、礼貌收尾',
  minutes: 25,
  tags: ['写作', '高频'],
  hook: {
    title: '背了十几篇模板还是写不出，因为你背的是句子不是结构',
    paras: [
      '小作文 10 分，要求 100 词左右。很多人背了十几篇模板，上了考场还是写不出来。',
      '原因是：背的是“句子”，缺的是“结构”。句子忘了就全崩，结构记住了换个词就能写。',
      '其实所有小作文——书信、通知、备忘录——都只有三段：<strong>第一段说“我为什么写”，第二段说“具体是什么”，第三段说“希望你怎样”。</strong>'
    ]
  },
  sections: [
    {
      h: '① 三段式骨架',
      list: [
        '<b>第一段（1—2 句）</b>：表明身份 + 写信目的。I am writing to apply for / complain about / suggest / invite you to ...',
        '<b>第二段（3—5 句）</b>：展开细节。申请就写经历，投诉就写问题与影响，建议就写具体做法。',
        '<b>第三段（1—2 句）</b>：期待回应。I would appreciate it if you could ... / Looking forward to your reply.'
      ],
      tip: '<b>三段的比例大约是 2 : 5 : 2。</b>第二段太短是失分主因——题目要求“给出细节”，你只写一句就等于没写。'
    },
    {
      h: '② 五种常考信件',
      list: [
        '<b>建议信</b>：I am writing to suggest that ... / It would be helpful if ...',
        '<b>投诉信</b>：I am writing to express my dissatisfaction with ... / I hope this matter can be resolved.',
        '<b>申请信</b>：I am writing to apply for ... / I believe my experience in ... would be an asset.',
        '<b>邀请信</b>：I am writing to invite you to ... / We would be honored by your presence.',
        '<b>感谢信</b>：I am writing to express my sincere gratitude for ...'
      ],
      tip: '这五类覆盖了英语二小作文的绝大多数真题。<b>先把五个开头句背下来，考场上只换主题词。</b>'
    },
    {
      h: '③ 通知与备忘录',
      list: [
        '通知（Notice）不需要称呼和结尾敬语，标题写 NOTICE，正文照样三段：什么事、什么时间在哪、请谁做什么。',
        '常用句：This is to inform you that ... / All students are required to ... / Please sign up before ...',
        '备忘录（Memo）格式是 To / From / Date / Subject 四行，正文三段。'
      ],
      tip: '通知和书信的唯一区别是<b>去掉了 Dear 和 Yours</b>，其余结构完全一样。'
    },
    {
      h: '④ 得分与避坑',
      list: [
        '<b>字数</b>：100 词左右，写 90—120 都安全。少于 80 词会扣分。',
        '<b>格式</b>：书信要有 Dear ... 和 Yours sincerely, 加署名；通知要有标题。',
        '<b>别写长难句</b>：小作文考的是“信息清楚”，不是文采。一句错的复杂句，不如三句对的简单句。'
      ],
      tip: '<b>宁可简单句全对，不要复杂句半错。</b>阅卷老师平均四十秒看一篇，先看结构，再看有没有明显的语法错误。'
    }
  ],
  formulas: [
    { name: '三段式', expr: '表明目的 → 展开细节 → 期待回应（2:5:2）' },
    { name: '五类开头', expr: 'suggest ｜ complain ｜ apply ｜ invite ｜ thank' },
    { name: '通知去头尾', expr: '无 Dear，无 Yours，标题写 NOTICE' }
  ],
  examples: [
    {
      tag: '开头段',
      q: '题目：你的朋友李明想报考你所在城市的大学，写信向他推荐一所学校。<br><br>开头段最合适的是？',
      options: [
        'I am writing to recommend a university to you, since you plan to apply for graduate study in my city.',
        'Hello. I am your friend. I write a letter to you.',
        'I am very happy to receive your letter and I will tell you many things about my city, which is very beautiful and has a long history.',
        'You should come to my city because it is good.'
      ],
      answer: 0,
      steps: [
        '第一段的唯一任务是说明写信目的。A 一句话就说清了：写这封信是为了推荐一所大学，因为你要来我的城市读研。',
        'B 太短且没有信息量，I am your friend 是废话。',
        'C 把第一段写成了铺垫，重点变成“介绍城市历史”，既跑题又太长。',
        'D 太口语，缺少书信的正式感，也没说清“推荐什么”。'
      ],
      point: '第一段的评判标准只有一条：<b>读完这句，对方知道你为什么要写这封信吗？</b>知道就够了，一句就够。'
    },
    {
      tag: '正文段',
      q: '题目同上，正文段（第二段）应该写什么？',
      options: [
        '再次说明你很推荐这所大学',
        '这所大学的专业优势、录取难度，以及你了解的情况',
        '你所在城市的历史和旅游景点',
        '你自己的近况'
      ],
      answer: 1,
      steps: [
        '第二段的任务是给出细节。题目的目的是“推荐大学”，所以细节必须和这所大学有关。',
        '专业优势、录取难度、地理位置、你掌握的信息，都是有用的细节。',
        'A 是重复第一段，不提供新信息；C 跑题（除非题目要求介绍城市）；D 完全无关。'
      ],
      point: '第二段的判断标准是：<b>对方读完这段，能得到几个具体信息？</b>写完数一数，少于三个就说明太薄。'
    },
    {
      tag: '通知',
      q: '写一则通知，告知学生图书馆周六闭馆维修。正文第一句最合适的是？',
      options: [
        'Dear students, I am writing to tell you something.',
        'This is to inform you that the library will be closed this Saturday for maintenance.',
        'The library is very important for our study and we should protect it.',
        'I think you all know the library, which is a good place.'
      ],
      answer: 1,
      steps: [
        '通知的开头不需要 Dear，那是书信的格式。A 直接在格式上就错了。',
        '通知第一句的标准句式是 This is to inform you that ...（兹通知……）。',
        'B 一句话交代了“什么事（闭馆）、什么时候（周六）、为什么（维修）”，信息完整。',
        'C 和 D 都是背景铺垫，没有信息，属于凑字数。'
      ],
      point: '通知的第一句用 <b>This is to inform you that</b> 起手，把“事件 + 时间 + 原因”塞进一句，这是最稳的开头。'
    }
  ],
  practices: [
    {
      q: '投诉信的开头段，最合适的是',
      options: [
        'I am writing to express my dissatisfaction with the service I received last week.',
        'I want to say your service is bad.',
        'Your service is the worst in the world.',
        'I am writing a letter about your service.'
      ],
      answer: 0,
      explain: '投诉信的标准开头是 I am writing to express my dissatisfaction with ...，正式、明确、不带情绪。B 太口语且不正式；C 情绪化，是考试大忌；D 没说清投诉什么。'
    },
    {
      q: '小作文要求 100 词左右，写多少最安全？',
      options: ['60—70 词', '90—120 词', '150—180 词', '越多越好'],
      answer: 1,
      explain: '90—120 词最安全：既满足“100 词左右”，也不会因太长而暴露更多语法错误。少于 80 词会被扣分；超过 150 词既浪费时间，风险也更大。'
    },
    {
      q: '写通知时，与书信最主要的格式区别是',
      options: ['通知不需要标题', '通知不写称呼和结尾敬语', '通知必须把日期写在最后', '通知不用分段'],
      answer: 1,
      explain: '通知（Notice）去掉 Dear ... 和 Yours sincerely，正文仍然分三段，顶部写标题 NOTICE。日期可写可不写，分段照旧。<b>结构不变，只是去掉书信的外壳。</b>'
    }
  ]
},

/* ================= 第 9 章 ================= */
{
  id: 'en-09',
  title: '大作文：图表作文的 15 分公式',
  brief: '描述数据、分析原因、给出结论，三段各写四到六句就够',
  minutes: 32,
  tags: ['写作', '高频'],
  hook: {
    title: '第一段只有一个任务：把图上的数字用英文说一遍',
    paras: [
      '英语二大作文 15 分，考的都是图表：柱状图、折线图、饼图、表格。',
      '很多人卡在第一步：<strong>不知道第一段该写什么。</strong>其实第一段的任务非常单一——把图上的数字说清楚。',
      '这篇作文有一个稳定的三段公式，先记住骨架，再往里填词。骨架对了，语法小错也不至于低分。'
    ]
  },
  sections: [
    {
      h: '① 三段结构',
      list: [
        '<b>第一段 描述（约 60 词）</b>：这张图讲什么 + 最突出的两个数据 + 一句话总结趋势。',
        '<b>第二段 分析（约 70 词）</b>：为什么会这样。给两个原因，每个原因配一句解释。',
        '<b>第三段 结论（约 40 词）</b>：这个趋势会怎样，或者应该怎么办。'
      ],
      tip: '<b>第二段是拿分的关键。</b>描述数据人人会写，能说出“为什么”才是 12 分和 8 分的区别。'
    },
    {
      h: '② 第一段必备句型',
      list: [
        '开头：The chart above shows the changes in ___ from ___ to ___.',
        '突出数据：As is shown, ___ rose sharply from ___ to ___.',
        '对比：In contrast, ___ remained stable at ___.',
        '占比：___ accounted for nearly ___ percent of the total.'
      ],
      tip: '趋势动词要会换：rise / increase / grow / climb（上升），fall / decline / drop / decrease（下降），remain stable / level off（持平），fluctuate（波动）。<b>同一篇里不要重复用同一个动词。</b>'
    },
    {
      h: '③ 第二段必备句型',
      list: [
        '列举原因：There are several reasons for this phenomenon. First, ... Second, ...',
        '推进：What is more, ... / In addition, ...',
        '解释：This is mainly because ... / ... which can be explained by ...',
        '五个安全角度：经济发展、政策变化、观念转变、技术进步、生活水平提高'
      ],
      tip: '<b>原因不用真懂，只要合理。</b>考题是看图说话，不是社会调查。写“经济发展使人们收入提高”，永远安全。'
    },
    {
      h: '④ 第三段必备句型',
      list: [
        '预测：It is predicted that this trend will continue in the near future.',
        '建议：Therefore, it is advisable for us to ...',
        '收尾：Only in this way can we ...（倒装句，能加分）'
      ],
      tip: '<b>最后一句用倒装（Only in this way can we ...），是性价比最高的加分点</b>，一句话就能让阅卷老师看到语法能力。'
    }
  ],
  formulas: [
    { name: '三段字数', expr: '描述 60 词 ｜ 分析 70 词 ｜ 结论 40 词' },
    { name: '趋势动词', expr: 'rise / fall / remain stable / fluctuate' },
    { name: '原因五角度', expr: '经济 ｜ 政策 ｜ 观念 ｜ 技术 ｜ 生活水平' }
  ],
  examples: [
    {
      tag: '描述段',
      q: '【图表】某市 2019—2023 年私家车数量：2019 年 120 万辆，2023 年 300 万辆。<br><br>第一段最合适的写法是？',
      options: [
        'The chart shows that the number of private cars in the city rose sharply from 1.2 million in 2019 to 3 million in 2023.',
        'The chart is about cars. There are many cars in the city now.',
        'In 2019 there were 1.2 million cars and in 2023 there were 3 million cars, and I think it is too many.',
        'The number of private cars increased by 1.8 million, which is a very big number that everyone can see.'
      ],
      answer: 0,
      steps: [
        '第一段要做三件事：说清图表讲什么（私家车数量）、给两个关键数据（120 万和 300 万）、点出趋势（rose sharply）。',
        'A 三件事全做了，而且用 rose sharply 表达了趋势。',
        'B 没有数据，只有空话。',
        'C 掺进了个人观点（I think it is too many），第一段不该有观点，观点放第三段。',
        'D 有数据，但没说是“从多少到多少”，读者看不出变化幅度。'
      ],
      point: '第一段的公式：<b>图表讲什么 + 起点数据 + 终点数据 + 一个趋势动词</b>。四件套齐全就是完整的一段。<b>描述段不要写观点。</b>'
    },
    {
      tag: '分析段',
      q: '承接上题，第二段分析“私家车数量激增”的原因，以下哪组最合适？',
      options: [
        'People like cars. Cars are fast.',
        '居民收入提高使购车成为可能；城市扩张使通勤距离变长',
        'The government is bad. The roads are bad.',
        'I do not know why, but the number is large.'
      ],
      answer: 1,
      steps: [
        '第二段要给两个具体原因，每个原因配一句解释。',
        'B 的两个原因都成立：收入提高（购买力上升）、城市扩张（通勤需求变长），都属于“经济 + 生活变化”这个安全角度。',
        'A 太笼统，“喜欢车”是现象不是原因。',
        'C 是情绪化评价，不是分析。',
        'D 等于放弃，写了也是零分。'
      ],
      point: '原因段的安全模板：<b>First，经济或政策层面的原因。Second，观念或生活层面的原因。</b>两个角度不重叠，就显得有层次。'
    },
    {
      tag: '结论段',
      q: '第三段收尾，以下哪句最合适？',
      options: [
        'So the number of cars will be larger and larger, I am sure.',
        'Therefore, it is advisable for the city to improve public transport so that residents have better alternatives.',
        'I hope everyone can buy a car.',
        'This is my opinion about the chart.'
      ],
      answer: 1,
      steps: [
        '结论段要做的是给方向，不是重复数据，也不是表态。',
        'B 给出了具体建议（改善公共交通，让居民有替代选择），与前面“车太多”的问题形成呼应。',
        'A 只是重复预测，没有建议；C 与全文逻辑相反；D 是废话收尾。'
      ],
      point: '结尾最稳的写法：<b>Therefore, it is advisable for somebody to do something.</b>主语具体、动作具体，就是好句子。想再加分就补一句 Only in this way can we ...'
    }
  ],
  practices: [
    {
      q: '描述“2018 到 2023 年农村网民占比从 20% 上升到 35%”，最合适的是',
      options: [
        'The proportion of rural internet users rose from 20% to 35% between 2018 and 2023.',
        'Rural internet users are 35%.',
        'There are many internet users in rural areas.',
        'The number of rural users is bigger than before.'
      ],
      answer: 0,
      explain: '图表描述要有四要素：起点、终点、时间范围、趋势动词。A 全部具备（rose from 20% to 35% between 2018 and 2023）。B 只有一个数；C 没有数据；D 只给了模糊比较。'
    },
    {
      q: '大作文第二段写原因时，以下哪个角度最不安全？',
      options: ['经济发展', '政策支持', '技术进步', '我个人不喜欢这个现象'],
      answer: 3,
      explain: '大作文是看图说话，原因要客观、能被普遍接受。经济、政策、技术、观念、生活水平是五个安全角度。个人好恶属于主观评价，放在分析段会显得没有分析能力。<b>观点可以有，但要有依据。</b>'
    },
    {
      q: '以下哪句最适合作为大作文的最后一句？',
      options: [
        'Only in this way can we build a more sustainable city.',
        'This is all I want to say.',
        'I think the chart is very interesting.',
        'Thank you for reading my composition.'
      ],
      answer: 0,
      explain: 'Only in this way can we ... 是倒装句，语法上能加分，内容上也能收束全文。B、C、D 都是无效收尾，既没有信息量，也暴露词汇不足。'
    }
  ]
}

]);
