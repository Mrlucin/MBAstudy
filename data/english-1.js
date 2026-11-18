/* 英语 · 第一部分（第 1—5 章） */
window.ENGLISH_CHAPTERS = [

/* ================= 第 1 章 ================= */
{
  id: 'en-01',
  title: '长难句：先把主干拎出来',
  brief: '一句话读三遍还不懂，是因为你在从第一个词开始翻译',
  minutes: 30,
  tags: ['基础', '高频'],
  hook: {
    title: '为什么一句话读三遍还不知道在说什么',
    paras: [
      '因为你在<strong>从第一个词开始，一个词一个词地往下翻</strong>。英文句子不是按“谁—做什么”的顺序排的，它会把修饰成分到处乱插。',
      '看这句：The man who was standing at the corner of the street that leads to the train station waved at me.<br>22 个词，你从 the 开始读，读到 man 以为找到了主角，读到 who 又变成“谁”，读到 street 又变成“街”……读到 waved 的时候，已经忘了是谁在挥手。',
      '换个读法：<strong>先找那个真正的动词，再把挂件一件一件摘掉。</strong>主干只有五个词：The man waved at me. 剩下 17 个词全是挂件。'
    ]
  },
  sections: [
    {
      h: '① 英文句子只有五种骨架',
      p: '不管句子多长，中间只有一个核心结构。认出骨架，句子就塌不下来。',
      list: [
        '主 + 谓：Birds fly.',
        '主 + 谓 + 宾：I read books.',
        '主 + 谓 + 双宾：He gave me a book.',
        '主 + 谓 + 宾 + 宾补：They elected him chairman.',
        '主 + 系 + 表：She looks tired.'
      ],
      tip: '一句话里真正的谓语动词只有<b>一个</b>。看到第二个、第三个像动词的词，它一定被连词或关系词管着，不是主句的谓语。'
    },
    {
      h: '② 三步拆句：找谓语、切连词、剥修饰',
      list: [
        '<b>第一步 找谓语</b>：从后往前找那个“能变时态”的动词。加 -ed、加 -s 之后还说得通的，才是谓语。',
        '<b>第二步 切连词</b>：见到 that / which / who / when / because / although / if，就往两边切一刀。',
        '<b>第三步 剥修饰</b>：介词短语（in the room）、分词短语（standing there）、不定式（to go）都是挂件，先不管。'
      ],
      tip: '拆完之后你会发现：一个 40 词的句子，主干可能只有 8 个词。<b>读懂主干，题目就能做；挂件只影响细节。</b>'
    },
    {
      h: '③ 三大从句，各管一件事',
      list: [
        '<b>定语从句</b>：修饰前面那个名词，标志是 which / who / that / whose。翻成中文时常常放到名词前面加“的”。',
        '<b>状语从句</b>：交代时间、原因、条件、让步，标志是 when / because / if / although。顺序和中文差不多。',
        '<b>名词性从句</b>：整个从句当一个名词用，可以当主语、宾语、表语。标志是 that / what / whether。'
      ],
      tip: '看到 that 先别慌：that 后面跟一个完整句子，多半是名词性从句或同位语；that 后面缺主语或宾语，那才是定语从句。'
    },
    {
      h: '④ 非谓语：动词的“减配版”',
      p: '一个句子里只能有一个谓语。第二个动词想出现，就得降级：加 -ing、加 -ed，或者前面加 to。',
      list: [
        '<b>doing</b>：主动、正在进行。The girl <b>singing</b> on stage is my sister.',
        '<b>done</b>：被动、已经完成。The window <b>broken</b> yesterday has been fixed.',
        '<b>to do</b>：目的、将来。He went there <b>to see</b> her.'
      ],
      tip: '看到句首一大串 doing 或 done 开头的成分，别把它当谓语。它是挂件，先跳过去找主句。'
    }
  ],
  formulas: [
    { name: '拆句三步', expr: '找谓语 → 切连词 → 剥修饰' },
    { name: '五种骨架', expr: '主谓 / 主谓宾 / 主谓双宾 / 主谓宾补 / 主系表' },
    { name: '从句信号词', expr: '定从 which who that ｜ 状从 when because if ｜ 名从 that what whether' }
  ],
  examples: [
    {
      tag: '找主干',
      q: 'The report published by the committee last week shows that the number of students who choose to study abroad has dropped sharply.<br><br>这句话的主干是？',
      options: [
        'The report published by the committee',
        'The report shows that ...',
        'the number of students has dropped',
        'students who choose to study abroad'
      ],
      answer: 1,
      steps: [
        '第一步找谓语：published 是过去分词，前面没有主语、也不能变时态，它是修饰 report 的挂件。真正的谓语是 <b>shows</b>。',
        '第二步看 shows 后面：that 引导一个完整句子，是宾语从句。所以主干到 shows 就够——<b>The report shows that ...</b>',
        '第三步剥挂件：published by the committee last week 修饰 report，扔掉；that 从句里 the number ... has dropped 是宾语的内容。',
        '如果题目问的是“that 从句的主干”，答案才是 the number has dropped。注意这里问的是<b>整句</b>主干。'
      ],
      point: 'published、choosing 这类词长得像动词，但它们没有主语、不能变时态，是挂件。找谓语时先排除它们。'
    },
    {
      tag: '数谓语',
      q: 'Although the government has invested heavily in public transport, many residents still prefer to drive to work because they believe it is more convenient.<br><br>这句话里有几个谓语动词（含从句里的）？',
      options: ['2 个', '3 个', '4 个', '5 个'],
      answer: 2,
      steps: [
        'Although 引导的从句：has invested —— 第 1 个。',
        '主句：prefer —— 第 2 个。',
        'because 引导的从句：believe —— 第 3 个。',
        'believe 后面还有一个宾语从句（省略了 that）：it is —— 第 4 个。',
        'to drive 是不定式，不是谓语，不算。所以一共 4 个。'
      ],
      point: '每出现一个连词（although / because / that），就多一个谓语。<b>谓语数 = 连词数 + 1</b>，用这个公式反查自己有没有漏看从句。'
    },
    {
      tag: '主语从句',
      q: 'What surprised the researchers was not the speed of the change but the fact that so few people noticed it.<br><br>这句话的主语是什么？',
      options: [
        'the researchers',
        'the speed of the change',
        'What surprised the researchers',
        'the fact'
      ],
      answer: 2,
      steps: [
        '找谓语：was。它前面那一整块，就是主语。',
        'was 前面是 What surprised the researchers —— 这是一个名词性从句（主语从句），整块当主语用。',
        'was 后面是表语，用的是 not A but B 结构，B 是 the fact that ...。',
        '所以骨架是：<b>What surprised the researchers was the fact.</b> 意思是“让研究者吃惊的，是这个事实”。'
      ],
      point: 'What 开头的从句经常当主语，中文习惯翻成“……的东西／事情”。看到 What，先想“这整块是一个名词”。'
    }
  ],
  practices: [
    {
      q: 'The company, which was founded in 1998 and now employs over 3,000 workers, announced yesterday that it would close two of its factories.<br><br>这句话的主句谓语是？',
      options: ['was founded', 'employs', 'announced', 'would close'],
      answer: 2,
      explain: 'which 从句里的 was founded 和 employs 都是从句谓语；that 从句里的 would close 是宾语从句谓语。主句谓语是 announced。<b>先找不被任何连词管着的那个动词。</b>'
    },
    {
      q: 'Faced with rising costs, many small business owners have begun to look for ways to cut spending without reducing quality.<br><br>Faced with rising costs 在句中作什么成分？',
      options: ['主语', '谓语', '状语（交代背景或原因）', '宾语'],
      answer: 2,
      explain: 'Faced 是过去分词，前面没有主语，整块交代“在什么情况下”，所以是状语，修饰主句动作 have begun。翻译时可以放到句首：“面对成本上涨，许多小企业主开始寻找……”。'
    },
    {
      q: 'It is widely believed that reading aloud helps children develop language skills.<br><br>句首的 It 起什么作用？',
      options: ['真正的主语', '形式主语，真正的主语是后面的 that 从句', '宾语', '强调结构'],
      answer: 1,
      explain: 'It 在这里是形式主语，真正的主语是 that 从句（reading aloud helps children develop language skills）。英文爱用这种句型，是为了把长主语挪到后面，让句子头不重脚轻。<b>看到 It is said / believed / reported that...，一律按“据说／据信／据报道”去理解。</b>'
    }
  ]
},

/* ================= 第 2 章 ================= */
{
  id: 'en-02',
  title: '高频词：别背 5500，先背能换分的那 650',
  brief: '词根拆解、熟词僻义、态度词群，把背书变成看规律',
  minutes: 28,
  tags: ['基础', '高频'],
  hook: {
    title: '一个词根，能带出六个词',
    paras: [
      '考纲 5500 词，真正常考的核心词大约 1500 个，其中决定你能不能读懂句子的，不到 650 个。',
      '更麻烦的是<strong>熟词僻义</strong>：address 你认识是“地址”，但真题里它常考“处理、解决”；subject 你认识“科目”，它更常考“使遭受”。',
      '这一章给你三条能自己推的路——<strong>词根、僻义、态度词</strong>；词表不用背，单词页的“高频核心 650 词”已经按词频排好，从第一个开始过就行。'
    ]
  },
  sections: [
    {
      h: '① 词根词缀：把生词变成熟人',
      list: [
        '<b>spect = 看</b>：inspect 检查（往里看）、respect 尊重（再看一眼）、prospect 前景（往前看）、suspect 怀疑（从下面看）',
        '<b>port = 搬</b>：import 进口、export 出口、transport 运输、portable 便携的',
        '<b>duc / duct = 引导</b>：produce 生产、introduce 引入、reduce 减少（往回引）、conduct 进行',
        '<b>pre = 前</b>：predict 预测、prevent 阻止、prefer 更喜欢'
      ],
      tip: '一个词根能带出四到六个词。看到生词先找里面认识的碎片，比死记硬背效率高得多。'
    },
    {
      h: '② 熟词僻义：真题最爱埋的雷',
      list: [
        '<b>address</b>：不只是“地址”，更常考“处理、解决”（address the problem）',
        '<b>subject</b>：名词“科目”，形容词“易受……影响的”，动词“使遭受”（be subjected to）',
        '<b>matter</b>：不只是“事情”，动词是“要紧”（It does not matter）',
        '<b>appreciate</b>：不只是“感激”，更常考“理解、意识到”（I appreciate the difficulty）',
        '<b>figure</b>：不只是“数字”，名词可指“人物”，动词“认为、弄清楚”（figure out）'
      ],
      tip: '做阅读时，如果按常见意思翻译不通，那它一定考的是僻义。<b>通不通，是你最好的判据。</b>'
    },
    {
      h: '③ 态度词：决定态度题的那二十个词',
      list: [
        '<b>正面</b>：supportive 支持的、favorable 有利的、approving 赞成的、optimistic 乐观的',
        '<b>负面</b>：critical 批评的、doubtful 怀疑的、skeptical 怀疑的、disapproving 不赞成的、pessimistic 悲观的',
        '<b>中性</b>：objective 客观的、neutral 中立的、detached 超然的、cautious 谨慎的、ambiguous 含糊的'
      ],
      tip: '<b>indifferent（漠不关心）在真题里几乎永远是错误选项</b>——作者写这么长一篇文章，不可能不关心。'
    },
    {
      h: '④ 英语二的四大话题词群',
      p: '阅读题材很集中，把这四类的核心词各背二十个，覆盖率就够用了。',
      list: [
        '<b>经济</b>：economy 经济、recession 衰退、inflation 通胀、budget 预算、consumption 消费',
        '<b>就业</b>：employment 就业、unemployment 失业、productivity 生产率、wage 工资',
        '<b>科技</b>：innovation 创新、automation 自动化、digital 数字的、privacy 隐私',
        '<b>教育与环境</b>：curriculum 课程、literacy 素养、sustainable 可持续的、emission 排放'
      ],
      tip: '这四类之外，偶尔考社会心理（behavior、motivation）和健康（obesity、nutrition）。<b>话题词不用会拼，认识就行。</b>'
    }
  ],
  formulas: [
    { name: '词根速记', expr: 'spect 看 ｜ port 搬 ｜ duc 引 ｜ pre 前 ｜ re 回' },
    { name: '态度题铁律', expr: 'indifferent 基本不选 ｜ objective 常为正确' },
    { name: '四大话题', expr: '经济 ｜ 就业 ｜ 科技 ｜ 教育环境' }
  ],
  examples: [
    {
      tag: '熟词僻义',
      q: 'The government has promised to address the housing problem within three years.<br><br>句中的 address 是什么意思？',
      options: ['写地址', '处理、解决', '发表演说', '称呼'],
      answer: 1,
      steps: [
        '先按常见意思试：“承诺在三年内地址住房问题”——不通。',
        'address 后面接 problem / issue / question 这一类词时，一定是“处理、解决”。',
        '所以整句是：“政府承诺在三年内解决住房问题。”'
      ],
      point: 'address 的三个高频用法要分清：address the problem（解决）、address a meeting（对会议讲话）、address somebody as（称呼某人）。<b>看它后面接什么，就知道是哪个意思。</b>'
    },
    {
      tag: '形近词',
      q: 'We should not be indifferent to the difficulties faced by the elderly.<br><br>indifferent 的意思是？',
      options: ['不同的', '漠不关心的', '难以理解的', '独立的'],
      answer: 1,
      steps: [
        'indifferent 长得像 different（不同的），但意思完全不同：in（不）+ different（有区别），合起来是“不加区别地对待”，引申为“漠不关心”。',
        'be indifferent to something 是固定搭配：“对……漠不关心”。',
        '整句：“我们不该对老年人面临的困难漠不关心。”'
      ],
      point: '形近词是陷阱重灾区：indifferent（漠不关心）不等于 different（不同）；considerable（相当大的）不等于 considerate（体贴的）；economic（经济的）不等于 economical（节约的）。'
    },
    {
      tag: '态度',
      q: 'The author seems to be skeptical about the claim that technology will solve all our problems.<br><br>作者对“技术能解决一切问题”这一说法的态度是？',
      options: ['支持', '怀疑', '漠不关心', '愤怒'],
      answer: 1,
      steps: [
        'skeptical 本身就是“怀疑的”，直接表明态度。',
        'be skeptical about / of something：对某事持怀疑态度。',
        'about 后面是 the claim（说法、主张），说明作者怀疑的是“技术能解决一切问题”这个说法。',
        '不能选“漠不关心”，因为作者明确表了态。'
      ],
      point: '态度题第一步找态度词，第二步判断正负。<b>skeptical / doubtful / suspicious 都是“怀疑”，不是“否定”</b>——怀疑只是不完全相信，不等于认为错。'
    }
  ],
  practices: [
    {
      q: 'The new policy is expected to have a considerable impact on small businesses.<br><br>considerable 的意思是？',
      options: ['体贴的', '相当大的', '考虑周到的', '谨慎的'],
      answer: 1,
      explain: 'considerable 是“相当大的、可观的”，修饰数量或程度；considerate 才是“体贴的”，修饰人。两者只差一个字母，是真题常设的干扰项。<b>记住 considerable 后面常接 impact / amount / number / influence 这类词。</b>'
    },
    {
      q: 'It does not matter whether you start late, as long as you keep going.<br><br>matter 在句中是？',
      options: ['名词，事情', '名词，物质', '动词，要紧、有关系', '名词，问题'],
      answer: 2,
      explain: 'matter 作动词是“要紧”。It does not matter 就是“没关系、不要紧”，口语和阅读里都极高频。<b>看到 it matters / it does not matter，一律按“要紧／不要紧”理解。</b>'
    },
    {
      q: 'Which word is closest in meaning to objective?',
      options: ['biased', 'neutral', 'doubtful', 'critical'],
      answer: 1,
      explain: 'objective 是“客观的”，最接近 neutral（中立的）。biased（有偏见的）、doubtful（怀疑的）、critical（批评的）都带明确倾向。在态度题里 objective 往往是正确答案，因为学术类文章的作者通常保持客观。'
    }
  ]
},

/* ================= 第 3 章 ================= */
{
  id: 'en-03',
  title: '细节题：答案一定在原文里，只是换了说法',
  brief: '定位、比对、排除，把“凭感觉选”变成“有据可查”',
  minutes: 32,
  tags: ['高频'],
  hook: {
    title: '细节题不是理解题，是找同义替换的题',
    paras: [
      '细节题占阅读的六成以上。它的答案百分之百在原文里，一个字都不需要你猜。',
      '那为什么还会错？因为出题人只做了一件事：<strong>把原文的话换一种说法</strong>。原文说 cut down on sugar，选项说 reduce sugar intake——意思一样，词全换了。',
      '所以做细节题，你要做的不是读懂全文，而是<strong>精确定位那一句，然后逐词比对</strong>。'
    ]
  },
  sections: [
    {
      h: '① 三步定位法',
      list: [
        '<b>第一步 找关键词</b>：从题干里挑一个最不可能被替换的词——人名、地名、数字、专有名词、生僻词。',
        '<b>第二步 回原文扫</b>：只看含这个关键词的那一句，前后各带一句当上下文，不要多读。',
        '<b>第三步 逐词比对</b>：把原文那句和四个选项对，找出“换了个说法但意思一样”的那个。'
      ],
      tip: '定位词越具体越好。<b>绝对不要用主题词定位</b>——比如全文都在讲 technology，你用 technology 找，等于没找。'
    },
    {
      h: '② 四种同义替换',
      list: [
        '<b>同义词替换</b>：important → crucial / vital / significant',
        '<b>词性替换</b>：decide（动词）→ decision（名词）',
        '<b>句式替换</b>：主动变被动、肯定变双重否定（not uncommon 就是 common）',
        '<b>概括替换</b>：原文列举三样东西，选项说 several kinds'
      ],
      tip: '选项和原文<b>一字不差</b>的，反而要警惕——那多半是抄了原文另一句的干扰项：位置对，但答非所问。'
    },
    {
      h: '③ 三个高频陷阱',
      list: [
        '<b>偷换主体</b>：原文说 A 导致 B，选项说 B 导致 A；原文说专家认为，选项说研究发现。',
        '<b>扩大范围</b>：原文说 some（有些），选项说 all（所有）；原文说 in Japan，选项说 worldwide。',
        '<b>无中生有</b>：选项内容原文压根没提，但听起来很合理。这个最难防，因为它在考你的常识，不在考文章。'
      ],
      tip: '排除时问自己一句：<b>这个选项的内容，原文哪一句说的？</b>指不出来，就划掉。'
    },
    {
      h: '④ 时间怎么分',
      list: [
        '英语二阅读 Part A 一共四篇，建议 70 分钟，平均每篇 17 分钟。',
        '先读题干再读文章——五道题干能告诉你文章大概讲什么方向。',
        '一道题超过 2 分钟还没定位到，标记跳过，全部做完再回来。'
      ],
      tip: '阅读不是逐字翻译比赛。<b>读懂 70% 就能做对 90% 的题</b>，剩下的靠定位和排除。'
    }
  ],
  formulas: [
    { name: '细节题三步', expr: '找关键词 → 回原文定位 → 逐词比对' },
    { name: '三大陷阱', expr: '偷换主体 ｜ 扩大范围 ｜ 无中生有' },
    { name: '时间分配', expr: '四篇 70 分钟，每篇 17 分钟' }
  ],
  examples: [
    {
      tag: '数字定位',
      q: '【短文】A recent study of 2,000 office workers found that those who took a 20-minute walk during their lunch break reported 30 percent fewer headaches than those who stayed at their desks. The researchers noted, however, that the effect disappeared when the walk was shorter than 10 minutes.<br><br>According to the study, what happened when the walk lasted less than 10 minutes?',
      options: ['头痛减少了 30%', '效果消失了', '参与者拒绝继续', '头痛反而增加'],
      answer: 1,
      steps: [
        '题干关键词是 less than 10 minutes。这个数字很具体，回原文一眼就能找到。',
        '原文：the effect disappeared when the walk was shorter than 10 minutes（走不到十分钟时，效果消失了）。',
        'shorter than 10 minutes 就是 less than 10 minutes，是原句换了个说法；the effect disappeared 就是“效果消失了”。',
        '所以选 B。A 是“散步 20 分钟”那一组的结果，属于偷换条件。'
      ],
      point: '细节题的定位词优先选<b>数字</b>。数字在原文里最显眼，而且几乎不会被换掉——换了就是另一道题了。'
    },
    {
      tag: '转折词',
      q: '【短文同上】The researchers noted, however, that the effect disappeared when the walk was shorter than 10 minutes.<br><br>句中的 however 表明研究者想',
      options: ['强调步行更大的好处', '指出研究结论的限制条件', '推翻前面的研究结论', '介绍另一种运动方式'],
      answer: 1,
      steps: [
        'however 表转折，作用是把前面那句“步行能减少头痛”往回收一点。',
        '收回来的是“少于十分钟就没效果”——这是在给结论加条件，也就是指出限制。',
        '它不是推翻结论：前面说的减少 30% 仍然成立，只是适用范围被划小了。'
      ],
      point: 'however / but / yet 后面往往是出题点，因为那是作者真正想强调的“但是”。<b>看到转折词，就在旁边做个记号。</b>'
    },
    {
      tag: '逐项验证',
      q: '【短文同上】Which of the following is true according to the passage?',
      options: [
        '所有办公室职员都参加了这项研究',
        '午休散步 20 分钟的人，比一直坐在桌前的人头痛更少',
        '散步时间越长，效果一定越好',
        '不散步的人更容易感冒'
      ],
      answer: 1,
      steps: [
        'A 错：原文是 2,000 office workers（两千名），选项说“所有”，扩大了范围。',
        'B 对：those who took a 20-minute walk ... reported 30 percent fewer headaches than those who stayed at their desks，正是这个意思。',
        'C 错：原文只说少于十分钟无效，没有说“越长越好”，属于无中生有的推断。',
        'D 错：原文完全没提感冒，是凭空加上去的。'
      ],
      point: '这类“以下哪项正确”的题，最稳的做法是<b>逐个回原文验证</b>。凡是需要你多推一步才能成立的，优先当错项。'
    }
  ],
  practices: [
    {
      q: '【短文】Many companies now allow employees to work from home two days a week. A survey of 500 managers found that 68 percent believed productivity had stayed the same or improved, while only 12 percent reported a clear decline.<br><br>What did 68 percent of the managers believe?',
      options: ['在家办公降低了效率', '效率持平或提高了', '应该取消在家办公', '员工更偏爱办公室'],
      answer: 1,
      explain: '定位词 68 percent，回原文找到 believed productivity had stayed the same or improved，正是“持平或提高”。A 说的是那 12 percent，属于偷换主体。'
    },
    {
      q: '【短文同上】The passage suggests that most managers',
      options: ['强烈反对在家办公', '对在家办公的效果持中性偏正面的看法', '认为应该增加办公室天数', '没有表达任何看法'],
      answer: 1,
      explain: '68% 认为效率没降甚至提高，只有 12% 认为明显下降，说明多数管理者态度不负面。但“效率持平”也谈不上热烈支持，所以是“中性偏正面”。<b>注意选项里的程度词</b>：strongly support 太强，中性偏正面更贴。'
    },
    {
      q: 'In a reading passage, an option that repeats the exact words of one sentence but does not answer the question is most likely',
      options: ['正确答案', '干扰项', '文章结论', '作者观点'],
      answer: 1,
      explain: '这是命题人最常用的手法：从原文抄一句放进选项，位置对、词也对，但答的不是这道题问的。<b>所以做题时先看清题干问什么，再比对选项。</b>'
    }
  ]
},

/* ================= 第 4 章 ================= */
{
  id: 'en-04',
  title: '主旨、态度、推断：读懂作者的言外之意',
  brief: '这三种题都考“整体感”，答案藏在首段、尾段和转折词后面',
  minutes: 30,
  tags: ['高频'],
  hook: {
    title: 'but 后面，才是作者真正想说的',
    paras: [
      '如果说细节题考“你找得准不准”，那这三种题考的是“你懂不懂作者想干什么”。',
      '很多人做主旨题的方式是：读完全文，凭印象选一个“感觉最像”的。这是最不稳的做法，因为印象会被最后读的那一段带偏。',
      '有个更可靠的入口：<strong>主旨几乎必然出现在三个位置——首段末句、第二段开头、尾段首句。</strong>先看这三处，再看选项。'
    ]
  },
  sections: [
    {
      h: '① 主旨题：三种问法，一个答案',
      list: [
        '问法：main idea / mainly discuss / best title / the purpose of the passage',
        '位置：首段末句（提出主题）→ 各段首句（分论点）→ 尾段（结论）',
        '正确选项的特征：<b>能覆盖全文，但既不过度具体，也不过度抽象</b>',
        '错误选项的特征：只覆盖某一段（太窄）、超出文章范围（太宽）、只是某个细节'
      ],
      tip: '选标题时，正确答案通常包含文章的核心名词。<b>把每个选项拿去问一句“全文都在讲这个吗”，只覆盖一两段的就划掉。</b>'
    },
    {
      h: '② 态度题：形容词和副词会告密',
      list: [
        '找态度词的三个位置：转折词后面、引号里的评价词、段尾总结句。',
        '正面：supportive / favorable / approving / optimistic / appreciative',
        '负面：critical / doubtful / skeptical / disapproving / pessimistic',
        '中性：objective / neutral / detached / cautious / ambiguous'
      ],
      tip: '<b>objective（客观）是学术类文章最常见的正确答案</b>；indifferent（漠不关心）几乎永远是错的。'
    },
    {
      h: '③ 推断题：只走一步',
      list: [
        '问法：infer / imply / suggest / learn from the passage',
        '铁律：<b>推断题的答案一定能在原文找到依据，只多走一步。</b>走两步就成了臆想。',
        '常见的一步：由具体到概括（原文举三个例子，选项说“有多种”）、由因到果、由现象到态度。',
        '排除法：选项里出现 must / all / never / only 这类绝对词，八成是错的。'
      ],
      tip: '如果两个选项都“说得通”，选那个<b>离原文更近</b>的。出题人不会让你猜，只会让你推一小步。'
    },
    {
      h: '④ 做题顺序',
      list: [
        '先做细节题（好定位，做完对文章也更熟）→ 再做推断题 → 最后做主旨题。',
        '主旨题放最后，是很多高分选手的共同习惯：它需要全局感，而全局感是读完才有的。'
      ],
      tip: '如果第一段读完完全不知道在讲什么，<b>别回头重读，先看题目</b>。五道题干拼起来，往往就是全文的轮廓。'
    }
  ],
  formulas: [
    { name: '主旨三处', expr: '首段末句 → 各段首句 → 尾段结论' },
    { name: '态度题铁律', expr: 'objective 常对 ｜ indifferent 常错' },
    { name: '推断题铁律', expr: '只走一步，绝对词排除' }
  ],
  examples: [
    {
      tag: '主旨题',
      q: '【短文】For years, companies have tried to measure employee performance by hours worked. New tools now make it possible to track output instead: how many tickets were resolved, how quickly code was shipped, how many customers were retained. On the surface this looks fairer. But output metrics can be gamed, and they often reward volume over quality. A support agent who closes 100 tickets in a day may be doing far less for customers than one who closes 30 difficult ones well.<br><br>What is the main idea of the passage?',
      options: [
        '按工时考核员工已经过时',
        '产出指标看起来更公平，但可能被操纵，而且会忽视质量',
        '客服人员的工作量很难衡量',
        '新技术让公司管理更高效'
      ],
      answer: 1,
      steps: [
        '看结构：先讲旧办法（按工时）→ 现在有新办法（按产出）→ On the surface this looks fairer（表面上看更公平）→ <b>But</b> output metrics can be gamed ...（但产出指标会被操纵，而且重数量轻质量）。',
        '转折词 But 后面才是作者真正的观点，前面都是铺垫。',
        'A 只说“工时过时”，是铺垫部分，太窄；C 只讲客服，是例子，太窄；D 与作者态度相反。',
        'B 同时覆盖“看起来公平”和“但有两大问题”，是主旨。'
      ],
      point: '主旨题最大的线索是<b>转折词</b>。作者先让一步（看起来不错），再用 but 说出真正想说的。<b>but 后面才是主旨。</b>'
    },
    {
      tag: '举例作用',
      q: '【短文同上】The author mentions the support agent who closes 100 tickets in order to',
      options: ['说明客服工作效率很高', '举例说明只看数量会误导', '批评客服人员不够专业', '证明产出指标优于工时指标'],
      answer: 1,
      steps: [
        '定位：A support agent who closes 100 tickets ... may be doing far less for customers than one who closes 30 difficult ones well.',
        '这句是在把前面那句 they often reward volume over quality（奖励数量、忽视质量）具体化。',
        '所以举这个例子是为了说明“只按数量算会误导”，不是在夸效率。',
        'D 与作者态度相反；C 是曲解——作者批评的是指标，不是人。'
      ],
      point: '举例的作用永远是<b>证明它前面那句观点</b>。所以问“为什么提某个例子”，答案往往在它的前一句。'
    },
    {
      tag: '推断题',
      q: '【短文同上】It can be inferred from the passage that the author would most likely agree that',
      options: [
        '工时应该完全取代产出指标',
        '好的绩效指标应同时考虑数量和质量',
        '所有产出指标都不可靠',
        '员工不喜欢被考核'
      ],
      answer: 1,
      steps: [
        '作者批评的是“只看数量”的产出指标，并没有否定产出指标本身。',
        '他举的反例是“30 个难题”对比“100 个简单题”，强调的是质量这个维度缺失了。',
        '所以合理推断是：指标应该兼顾数量和质量。这是一步推理。',
        'A 太绝对（作者只说工时不够用，没说产出无用）；C 用了 all，绝对化；D 原文没提员工态度。'
      ],
      point: '推断题的正确答案通常是<b>温和的中间立场</b>。带 all / completely / never 的选项几乎必错。'
    }
  ],
  practices: [
    {
      q: '【短文】Cities across Europe are turning parking spaces into small parks and outdoor seating. The change is cheap, quick, and popular with residents. Critics say it does little to reduce car use, since the spaces removed are a tiny share of the total. Supporters reply that the point is not to remove cars but to show what streets could look like.<br><br>The passage is mainly about',
      options: ['欧洲城市停车位减少的原因', '把停车位改成公共空间的做法与争议', '居民对城市改造的不满', '如何彻底减少汽车使用'],
      answer: 1,
      explain: '结构是：讲做法（把停车位改成小公园）→ 说好处（便宜、快、受欢迎）→ 批评（对减少汽车作用有限）→ 支持者回应。全文围绕“这个做法”和“围绕它的争议”展开。A 只问原因，没说；C 与原文相反（居民欢迎）；D 原文明确说目的不是减少汽车。'
    },
    {
      q: '【短文同上】The author attitude towards the change is best described as',
      options: ['strongly supportive', 'critical', 'balanced', 'indifferent'],
      answer: 2,
      explain: '作者既写了支持者的理由，也写了批评者的意见，还给了支持者的回应，自己没有明确站边，属于 balanced（平衡的、客观的）。<b>这类“两边都说”的文章，答案通常是 objective 或 balanced，不是支持也不是反对。</b>'
    },
    {
      q: '【短文同上】It can be inferred that supporters of the change believe',
      options: [
        '停车位应该全部取消',
        '改变人们的观念，比强制减少汽车更有效',
        '批评者完全没有道理',
        '城市应该禁止私家车'
      ],
      answer: 1,
      explain: '支持者的回应是 the point is not to remove cars but to show what streets could look like——目的不是减少汽车，而是展示街道还能是什么样子，也就是改变观念。A、D 太绝对；C 原文没说支持者认为批评者没道理，他们只是做了回应。'
    }
  ]
},

/* ================= 第 5 章 ================= */
{
  id: 'en-05',
  title: '阅读 Part B：不读全文也能做对的 10 分',
  brief: '标题匹配与多项对应，考的是段落主题句，不是细节',
  minutes: 26,
  tags: ['技巧', '高频'],
  hook: {
    title: '这张卷子性价比最高的 10 分',
    paras: [
      'Part B 只有 10 分，但它是全卷性价比最高的 10 分——因为它的题型决定了：<strong>你不需要读懂全文，只需要找到每段的主题句。</strong>',
      '英语二 Part B 主要考两种：给几个标题去匹配段落，或者给几个人名去匹配他们的观点。',
      '这两种题有一个共同点：<strong>段落的第一句和最后一句，承担了八成以上的答案。</strong>'
    ]
  },
  sections: [
    {
      h: '① 两种题型，一套打法',
      list: [
        '<b>标题匹配</b>：给 7 个标题选 5 个，对应 5 个段落（有两个多余）。做法是读每段首末句，提炼这段在讲什么。',
        '<b>多项对应</b>：给 5 个人名或机构，匹配他们的观点。做法是先在原文圈出人名，再读人名后面那一句。'
      ],
      tip: '标题匹配要先看标题、再读段落——这样你知道自己在找什么。<b>反过来做（先读段落再看标题）会更慢。</b>'
    },
    {
      h: '② 段落主题句的三个位置',
      list: [
        '<b>首句</b>：最常见，尤其说明文和议论文。',
        '<b>转折词后</b>：段首是 However / But / Yet 时，主题句在转折之后。',
        '<b>末句</b>：段落先举例、最后总结时，主题句在最后一句。'
      ],
      tip: '如果首句是个例子（含具体数字、人名、年份），主题句一定在它后面。<b>例子不会当主题句。</b>'
    },
    {
      h: '③ 匹配时的两个技巧',
      list: [
        '<b>抓名词</b>：标题里的核心名词，必须在段落里出现（或出现同义词）。找不到核心名词的段落，直接排除这个标题。',
        '<b>看动词方向</b>：标题说 decline（下降），段落必须有负面趋势；标题说 benefits（好处），段落必须有正面评价。方向不对就排除。'
      ],
      tip: '<b>先做最有把握的那一段</b>，划掉用掉的标题。剩下的选项越来越少，最后两个靠排除也能定下来。'
    }
  ],
  formulas: [
    { name: 'Part B 打法', expr: '看标题 → 读首末句 → 抓名词 + 看方向' },
    { name: '主题句三处', expr: '首句 ｜ 转折后 ｜ 末句' }
  ],
  examples: [
    {
      tag: '标题匹配',
      q: '【段落】The cost of solar panels has fallen by nearly 90 percent since 2010. In many regions, building a new solar plant is now cheaper than running an existing coal plant. Yet the panels only produce electricity when the sun shines, which means storage remains the bottleneck.<br><br>Which title best fits this paragraph?',
      options: [
        '太阳能成本大幅下降，但储能仍是瓶颈',
        '太阳能正在全面取代煤炭',
        '储能技术已经成熟',
        '太阳能发电的政府补贴'
      ],
      answer: 0,
      steps: [
        '首句讲成本下降 90%，第二句讲建新电站比烧煤还便宜——都在说“成本降了”。',
        '第三句以 Yet 转折：只在有太阳时才能发电，储能是瓶颈。',
        '所以这段有两层：成本大降 + 储能问题。A 同时覆盖两层。',
        'B 只覆盖前半，而且原文说的是“建新电站比运营煤电便宜”，不等于“取代”；C 与原文相反（bottleneck 是瓶颈）；D 原文完全没提补贴。'
      ],
      point: '看到 <b>Yet / However 出现在段落中间</b>，说明这段是“两面都说”的结构，正确标题必须同时覆盖转折前后。<b>只覆盖一半的选项就是陷阱。</b>'
    },
    {
      tag: '观点匹配',
      q: '【段落】Dr. Elena Marsh argues that remote work has widened the gap between skilled and unskilled workers. Those who work with information, she notes, have gained flexibility and saved commuting time, while service workers have largely been left out of the arrangement.<br><br>Dr. Marsh would most likely agree that',
      options: ['远程办公对所有人都有利', '远程办公的好处分配并不均衡', '远程办公应该被禁止', '服务行业的效率更低'],
      answer: 1,
      steps: [
        '定位人名 Dr. Marsh，读她后面那一句：remote work has widened the gap between skilled and unskilled workers（扩大了熟练工人与非熟练工人之间的差距）。',
        '“扩大差距”就是“好处分配不均衡”。',
        '后面的 she notes 是对这句的解释：信息类工作者获益，服务类工作者被排除在外。',
        'A 与原文相反；C 她没说应该禁止；D 原文没有比较效率。'
      ],
      point: 'Part B 的多项对应题，<b>人名后面的第一句就是观点句</b>。不用读完整段，读那一句就够了。'
    },
    {
      tag: '方法',
      q: 'When matching headings to paragraphs, which strategy is most reliable?',
      options: ['逐字翻译每一段', '找段落里出现次数最多的词', '读首末句，核对标题的核心名词与方向', '先读全文再回来看标题'],
      answer: 2,
      steps: [
        '首末句承担了段落八成的主题信息。',
        '标题的核心名词要在段落里出现，或者出现同义表达。',
        '动词方向（上升还是下降、好处还是问题）必须一致。'
      ],
      point: '这道题本身就是对方法的复述：<b>读首末句 + 抓名词 + 看方向</b>。Part B 不需要读懂每一个词。'
    }
  ],
  practices: [
    {
      q: '【段落】Many firms now ask job applicants to record short videos instead of sending written resumes. Employers say this reveals communication skills that paper cannot. Critics warn that it rewards confidence rather than competence, and that it disadvantages those who are uncomfortable on camera.<br><br>Best title?',
      options: ['视频简历的兴起与争议', '书面简历已经完全过时', '雇主如何评估沟通能力', '求职者的面试技巧'],
      answer: 0,
      explain: '首句讲做法（视频简历），中间讲雇主理由，Critics warn 转折讲批评。全文是“做法 + 争议”。B 太绝对，原文没说过时；C 只覆盖雇主那一句；D 原文没讲技巧。'
    },
    {
      q: '【段落同上】Critics of video resumes are mainly concerned that',
      options: ['视频制作成本太高', '这种方式更看重自信而不是能力', '雇主不喜欢看视频', '求职者不会使用设备'],
      answer: 1,
      explain: '定位 Critics warn，原文是 it rewards confidence rather than competence——看重自信而不是能力。A、C、D 原文都没提，属于无中生有。'
    },
    {
      q: '【段落】The city council approved the new bike lane plan on Tuesday. The plan adds 40 kilometers of protected lanes over three years. Local shop owners had opposed the plan, arguing that removing parking spaces would hurt sales. Studies from other cities, however, suggest that bike lanes often increase foot traffic and revenue for nearby stores.<br><br>Which statement is supported by the paragraph?',
      options: [
        '店主们的反对有研究支持',
        '其他城市的研究显示自行车道可能提升店铺收入',
        '市议会否决了这个计划',
        '自行车道会减少人流量'
      ],
      answer: 1,
      explain: '最后一句明确说 Studies from other cities ... suggest that bike lanes often increase foot traffic and revenue。A 与原文相反（研究其实不支持店主）；C 错，approved 是批准；D 与原文相反，是 increase 不是 reduce。'
    }
  ]
}

];
