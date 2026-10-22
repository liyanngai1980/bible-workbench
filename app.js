/**
 * 研经工作台 (Bible Study Workbench)
 * Full Client-Side Interactive Engine & Custom Bible/Commentary Management
 */

// =========================================================
// 1. Bible Canon 66 Books Metadata
// =========================================================
const BIBLE_BOOKS = [
  { no: 1, name: "创世记", abbr: "创", testament: "OT", group: "律法书", chapters: 50, english: "Genesis" },
  { no: 2, name: "出埃及记", abbr: "出", testament: "OT", group: "律法书", chapters: 40, english: "Exodus" },
  { no: 3, name: "利未记", abbr: "利", testament: "OT", group: "律法书", chapters: 27, english: "Leviticus" },
  { no: 4, name: "民数记", abbr: "民", testament: "OT", group: "律法书", chapters: 36, english: "Numbers" },
  { no: 5, name: "申命记", abbr: "申", testament: "OT", group: "律法书", chapters: 34, english: "Deuteronomy" },
  { no: 6, name: "约书亚记", abbr: "书", testament: "OT", group: "历史书", chapters: 24, english: "Joshua" },
  { no: 7, name: "士师记", abbr: "士", testament: "OT", group: "历史书", chapters: 21, english: "Judges" },
  { no: 8, name: "路得记", abbr: "得", testament: "OT", group: "历史书", chapters: 4, english: "Ruth" },
  { no: 9, name: "撒母耳记上", abbr: "撒上", testament: "OT", group: "历史书", chapters: 31, english: "1 Samuel" },
  { no: 10, name: "撒母耳记下", abbr: "撒下", testament: "OT", group: "历史书", chapters: 24, english: "2 Samuel" },
  { no: 11, name: "列王纪上", abbr: "王上", testament: "OT", group: "历史书", chapters: 22, english: "1 Kings" },
  { no: 12, name: "列王纪下", abbr: "王下", testament: "OT", group: "历史书", chapters: 25, english: "2 Kings" },
  { no: 13, name: "历代志上", abbr: "代上", testament: "OT", group: "历史书", chapters: 29, english: "1 Chronicles" },
  { no: 14, name: "历代志下", abbr: "代下", testament: "OT", group: "历史书", chapters: 36, english: "2 Chronicles" },
  { no: 15, name: "以斯拉记", abbr: "拉", testament: "OT", group: "历史书", chapters: 10, english: "Ezra" },
  { no: 16, name: "尼希米记", abbr: "尼", testament: "OT", group: "历史书", chapters: 13, english: "Nehemiah" },
  { no: 17, name: "以斯帖记", abbr: "斯", testament: "OT", group: "历史书", chapters: 10, english: "Esther" },
  { no: 18, name: "约伯记", abbr: "伯", testament: "OT", group: "智慧诗歌", chapters: 42, english: "Job" },
  { no: 19, name: "诗篇", abbr: "诗", testament: "OT", group: "智慧诗歌", chapters: 150, english: "Psalms" },
  { no: 20, name: "箴言", abbr: "箴", testament: "OT", group: "智慧诗歌", chapters: 31, english: "Proverbs" },
  { no: 21, name: "传道书", abbr: "传", testament: "OT", group: "智慧诗歌", chapters: 12, english: "Ecclesiastes" },
  { no: 22, name: "雅歌", abbr: "歌", testament: "OT", group: "智慧诗歌", chapters: 8, english: "Song of Solomon" },
  { no: 23, name: "以赛亚书", abbr: "赛", testament: "OT", group: "大先知书", chapters: 66, english: "Isaiah" },
  { no: 24, name: "耶利米书", abbr: "耶", testament: "OT", group: "大先知书", chapters: 52, english: "Jeremiah" },
  { no: 25, name: "耶利米哀歌", abbr: "哀", testament: "OT", group: "大先知书", chapters: 5, english: "Lamentations" },
  { no: 26, name: "以西结书", abbr: "结", testament: "OT", group: "大先知书", chapters: 48, english: "Ezekiel" },
  { no: 27, name: "但以理书", abbr: "但", testament: "OT", group: "大先知书", chapters: 12, english: "Daniel" },
  { no: 28, name: "何西阿书", abbr: "何", testament: "OT", group: "小先知书", chapters: 14, english: "Hosea" },
  { no: 29, name: "约珥书", abbr: "珥", testament: "OT", group: "小先知书", chapters: 3, english: "Joel" },
  { no: 30, name: "阿摩司书", abbr: "摩", testament: "OT", group: "小先知书", chapters: 9, english: "Amos" },
  { no: 31, name: "俄巴底亚书", abbr: "俄", testament: "OT", group: "小先知书", chapters: 1, english: "Obadiah" },
  { no: 32, name: "约拿书", abbr: "拿", testament: "OT", group: "小先知书", chapters: 4, english: "Jonah" },
  { no: 33, name: "弥迦书", abbr: "弥", testament: "OT", group: "小先知书", chapters: 7, english: "Micah" },
  { no: 34, name: "那鸿书", abbr: "鸿", testament: "OT", group: "小先知书", chapters: 3, english: "Nahum" },
  { no: 35, name: "哈巴谷书", abbr: "哈", testament: "OT", group: "小先知书", chapters: 3, english: "Habakkuk" },
  { no: 36, name: "西番雅书", abbr: "番", testament: "OT", group: "小先知书", chapters: 3, english: "Zephaniah" },
  { no: 37, name: "哈该书", abbr: "该", testament: "OT", group: "小先知书", chapters: 2, english: "Haggai" },
  { no: 38, name: "撒迦利亚书", abbr: "亚", testament: "OT", group: "小先知书", chapters: 14, english: "Zechariah" },
  { no: 39, name: "玛拉基书", abbr: "玛", testament: "OT", group: "小先知书", chapters: 4, english: "Malachi" },
  { no: 40, name: "马太福音", abbr: "太", testament: "NT", group: "四福音书", chapters: 28, english: "Matthew" },
  { no: 41, name: "马可福音", abbr: "可", testament: "NT", group: "四福音书", chapters: 16, english: "Mark" },
  { no: 42, name: "路加福音", abbr: "路", testament: "NT", group: "四福音书", chapters: 24, english: "Luke" },
  { no: 43, name: "约翰福音", abbr: "约", testament: "NT", group: "四福音书", chapters: 21, english: "John" },
  { no: 44, name: "使徒行传", abbr: "徒", testament: "NT", group: "教会历史", chapters: 28, english: "Acts" },
  { no: 45, name: "罗马书", abbr: "罗", testament: "NT", group: "保罗书信", chapters: 16, english: "Romans" },
  { no: 46, name: "哥林多前书", abbr: "林前", testament: "NT", group: "保罗书信", chapters: 16, english: "1 Corinthians" },
  { no: 47, name: "哥林多后书", abbr: "林后", testament: "NT", group: "保罗书信", chapters: 13, english: "2 Corinthians" },
  { no: 48, name: "加拉太书", abbr: "加", testament: "NT", group: "保罗书信", chapters: 6, english: "Galatians" },
  { no: 49, name: "以弗所书", abbr: "弗", testament: "NT", group: "保罗书信", chapters: 6, english: "Ephesians" },
  { no: 50, name: "腓立比书", abbr: "腓", testament: "NT", group: "保罗书信", chapters: 4, english: "Philippians" },
  { no: 51, name: "歌罗西书", abbr: "西", testament: "NT", group: "保罗书信", chapters: 4, english: "Colossians" },
  { no: 52, name: "帖撒罗尼迦前书", abbr: "帖前", testament: "NT", group: "保罗书信", chapters: 5, english: "1 Thessalonians" },
  { no: 53, name: "帖撒罗尼迦后书", abbr: "帖后", testament: "NT", group: "保罗书信", chapters: 3, english: "2 Thessalonians" },
  { no: 54, name: "提摩太前书", abbr: "提前", testament: "NT", group: "教牧书信", chapters: 6, english: "1 Timothy" },
  { no: 55, name: "提摩太后书", abbr: "提后", testament: "NT", group: "教牧书信", chapters: 4, english: "2 Timothy" },
  { no: 56, name: "提多书", abbr: "多", testament: "NT", group: "教牧书信", chapters: 3, english: "Titus" },
  { no: 57, name: "腓利门书", abbr: "门", testament: "NT", group: "保罗书信", chapters: 1, english: "Philemon" },
  { no: 58, name: "希伯来书", abbr: "来", testament: "NT", group: "普遍书信", chapters: 13, english: "Hebrews" },
  { no: 59, name: "雅各书", abbr: "雅", testament: "NT", group: "普遍书信", chapters: 5, english: "James" },
  { no: 60, name: "彼得前书", abbr: "彼前", testament: "NT", group: "普遍书信", chapters: 5, english: "1 Peter" },
  { no: 61, name: "彼得后书", abbr: "彼后", testament: "NT", group: "普遍书信", chapters: 3, english: "2 Peter" },
  { no: 62, name: "约翰一书", abbr: "约一", testament: "NT", group: "普遍书信", chapters: 5, english: "1 John" },
  { no: 63, name: "约翰二书", abbr: "约二", testament: "NT", group: "普遍书信", chapters: 1, english: "2 John" },
  { no: 64, name: "约翰三书", abbr: "约三", testament: "NT", group: "普遍书信", chapters: 1, english: "3 John" },
  { no: 65, name: "犹大书", abbr: "犹", testament: "NT", group: "普遍书信", chapters: 1, english: "Jude" },
  { no: 66, name: "启示录", abbr: "启", testament: "NT", group: "启示文学", chapters: 22, english: "Revelation" }
];

// Map lookup helpers
const BOOK_MAP = new Map(BIBLE_BOOKS.map(b => [b.no, b]));
const BOOK_NAME_MAP = new Map();
BIBLE_BOOKS.forEach(b => {
  BOOK_NAME_MAP.set(b.name, b.no);
  BOOK_NAME_MAP.set(b.abbr, b.no);
  BOOK_NAME_MAP.set(b.english.toLowerCase(), b.no);
});

// =========================================================
// 2. Built-in Base Bibles (Pre-loaded Out-of-the-Box)
// =========================================================
const BUILTIN_BIBLES = [
  { id: "CUV", name: "现代标点和合本", abbr: "和合本", lang: "zh" },
  { id: "CNV", name: "圣经新译本", abbr: "新译本", lang: "zh" },
  { id: "CSB", name: "中文标准译本", abbr: "标准本", lang: "zh" },
  { id: "NET", name: "中文 NET 圣经", abbr: "NET", lang: "zh" },
  { id: "NASB", name: "NASB 1995", abbr: "NASB", lang: "en" },
  { id: "ESV", name: "English Standard Version", abbr: "ESV", lang: "en" },
  { id: "OUS", name: "史特郎经文汇编 (Strong's)", abbr: "汇编", lang: "zh-grk" }
];

// Built-in Demo Data for 3 John (64)
const BUILTIN_DATA_VERSES = {
  // 3 John in CUV
  "CUV": {
    "64-1-1": "作长老的写信给亲爱的该犹，就是我诚心所爱的。",
    "64-1-2": "亲爱的兄弟阿，我愿你凡事兴盛，身体健壮，正如你的灵魂兴盛一样。",
    "64-1-3": "有弟兄来证明你心里存的真理，正如你按真理而行，我就甚喜乐。",
    "64-1-4": "我听见我的儿女们按真理而行，我的喜乐就没有比这个大的。",
    "64-1-5": "亲爱的兄弟阿，凡你向作客旅之弟兄所行的，都是忠心的。",
    "64-1-6": "他们在教会面前证明了你的爱。你若配得过神，帮助他们往前行，这就好了；",
    "64-1-7": "因他们是为主的名出外，对于外邦人一无所取。",
    "64-1-8": "所以我们应该接待这样的人，叫我们与他们一同为真理作工。",
    "64-1-9": "我曾略略地写信给教会；但那在教会中好为首的丢特腓不接待我们。",
    "64-1-10": "所以我若去，必要提说他所行的事，就是他用恶言妄论我们，还不以此为足，他自己不接待弟兄，有人愿意接待，他也禁止，并且将接待弟兄的人赶出教会。",
    "64-1-11": "亲爱的兄弟阿，不要效法恶，只要效法善。行善的属乎神，行恶的未曾见过神。",
    "64-1-12": "低米丢行善，有众人给他作见证，又有真理给他作见证，就是我们也给他作见证，你也知道我们的见证是真的。",
    "64-1-13": "我原有许多事要写给你，却不愿意用笔墨写给你；",
    "64-1-14": "但盼望快快地见你，我们就当面谈论。",
    "64-1-15": "愿你平安。众位朋友都问你安。请你替我按着姓名问众位朋友安。"
  },
  // 3 John in CNV (新译本)
  "CNV": {
    "64-1-1": "作长老的写信给亲爱的该犹，就是我真诚所爱的。",
    "64-1-2": "亲爱的，我祝你凡事亨通，身体健壮，正如你的灵魂安泰一样。",
    "64-1-3": "有些弟兄来到，证明你心中存有真理，正如你按真理行事，我就非常欣慰。",
    "64-1-4": "我听见我的儿女按真理行事，我的喜乐没有比这更大的了。",
    "64-1-5": "亲爱的，凡你向弟兄所行的，尤其是对作客旅的弟兄，都是出于忠信。",
    "64-1-6": "他们在教会面前见证了你的爱心。你若按神所喜悦的方式资助他们上路，那就太好了；",
    "64-1-7": "因为他们是为主的名出征，对于外邦人分文不取。",
    "64-1-8": "因此我们应该款待这样的人，使我们成为真理上的同工。",
    "64-1-9": "我曾经写过一封信给教会，但那好作领袖的丢特腓却不接待我们。",
    "64-1-10": "因此，我如果去，一定要指出他所作的事，就是他用恶毒的话毁谤我们；还不以此为足，他自己不接待弟兄，别人想接待，他也阻止，甚至把他们逐出教会。",
    "64-1-11": "亲爱的，不要效法恶，只要效法善。行善的属于神，行恶的未曾见过神。",
    "64-1-12": "低米丢有众人为他作证，真理本身也为他作证；我们同样为他作证，而你知道我们的见证是真实的。",
    "64-1-13": "我本来还有很多话要写给你，但我不愿意借着笔墨传递；",
    "64-1-14": "只盼望很快能见到你，让我们面对面交谈。",
    "64-1-15": "愿你平安。这里的朋友们都向你问好。请你按名字一一向那里的朋友问好。"
  },
  // 3 John in CSB (标准译本)
  "CSB": {
    "64-1-1": "长老写信给亲爱的该犹，就是我在真理中所深爱的。",
    "64-1-2": "亲爱的朋友，我祈愿你在凡事上昌盛，身体健壮，正如你的灵魂昌盛一样。",
    "64-1-3": "有弟兄来见证你里面的真理，正如你按真理而行，我就极其喜乐。",
    "64-1-4": "我听见我的儿女们在真理中行事，没有比这更大的喜乐了。",
    "64-1-5": "亲爱的，凡你向弟兄们所做的，特别是作客旅的弟兄，你都是忠心去做的。",
    "64-1-6": "他们在会众面前为你的爱心作见证。你按合乎神的方式资助他们前行，是极好的；",
    "64-1-7": "因他们为主的名出发，没有从外邦人收受任何资助。",
    "64-1-8": "因此我们应当接待这样的人，好使我们能成为真理的同工。",
    "64-1-9": "我曾给教会写了信，但在他们中间好为首的丢特腓却不接纳我们。",
    "64-1-10": "所以，我若去，必要提说他所做的事，他用恶意的话中伤我们；甚至自己不接待弟兄，还要阻止那些愿意接待的人，把他们赶出会堂。",
    "64-1-11": "亲爱的，不要效法邪恶，而要效法良善。行善的人属乎神，行恶的人未曾见过神。",
    "64-1-12": "低米丢得了众人的见证，也得了真理本身的见证；我们也为他见证，并且你知道我们的见证是真的。",
    "64-1-13": "我本有许多事要写给你，但不想用墨水和羽毛笔写；",
    "64-1-14": "但我盼望很快见到你，我们就当面交谈。",
    "64-1-15": "愿你平安！这里的朋友们向你问候。请你按名字问候所有的朋友。"
  },
  // 3 John in NET
  "NET": {
    "64-1-1": "作长老的写信给亲爱的该犹，我是在真理中真心爱你的。",
    "64-1-2": "亲爱的朋友，我祈愿你一切顺利，身体安康，正如你的灵性健壮一样。",
    "64-1-3": "有些弟兄来并见证你持守真理，正如你继续在真理中行事为人，我就极其欢欣。",
    "64-1-4": "听见我的孩子们在真理中行事，我的喜乐再没有比这更大的了。",
    "64-1-5": "亲爱的朋友，不论你为弟兄们（尤其是作客旅的陌生人）做什么，你都表现出忠诚。",
    "64-1-6": "他们曾在教会面前证实了你的爱心。你若配得上神的心意资助他们前行，那就太美好了。",
    "64-1-7": "因为他们是为基督的名出征，没有从不信的外邦人那里收取任何东西。",
    "64-1-8": "所以我们有责任接待这样的人，使我们能与他们一同为真理作工。",
    "64-1-9": "我写了些话给教会，但那好作领导的丢特腓却不肯承认我们的权威。",
    "64-1-10": "因此我若前去，必要当面指出他的恶行——他用恶毒的话中伤我们；自己拒绝接待巡回弟兄，还阻止其他人这样做并把他们逐出会所。",
    "64-1-11": "亲爱的朋友，不要效仿恶，倒要效仿善。行善的人出自神；行恶的人未曾见过神。",
    "64-1-12": "低米丢在所有人中声誉极好，真理本身也为他作证；我们同样支持这一见证，你知道我们的见证是真实的。",
    "64-1-13": "我原有很多事情要告诉你，但我不希望用墨水和钢笔书写。",
    "64-1-14": "不过我期待迅速与你碰面，让我们当面畅谈。",
    "64-1-15": "愿平安与你同在。这里的朋友向你问安；请你亲口代向每位朋友问好。"
  },
  // 3 John in NASB
  "NASB": {
    "64-1-1": "The elder to the beloved Gaius, whom I love in truth.",
    "64-1-2": "Beloved, I pray that in all respects you may prosper and be in good health, just as your soul prospers.",
    "64-1-3": "For I was very glad when brethren came and testified to your truth, that is, how you are walking in truth.",
    "64-1-4": "I have no greater joy than this, to hear of my children walking in the truth.",
    "64-1-5": "Beloved, you are acting faithfully in whatever you accomplish for the brethren, and especially when they are strangers;",
    "64-1-6": "and they have testified to your love before the church. You will do well to send them on their way in a manner worthy of God.",
    "64-1-7": "For they went out for the sake of the Name, accepting nothing from the Gentiles.",
    "64-1-8": "Therefore we ought to support such men, so that we may be fellow workers with the truth.",
    "64-1-9": "I wrote something to the church; but Diotrephes, who loves to be first among them, does not accept what we say.",
    "64-1-10": "For this reason, if I come, I will call attention to his deeds which he does, unjustly accusing us with wicked words; and not satisfied with this, he himself does not receive the brethren, either, and he forbids those who desire to do so and puts them out of the church.",
    "64-1-11": "Beloved, do not imitate what is evil, but what is good. The one who does good is of God; the one who does evil has not seen God.",
    "64-1-12": "Demetrius has received a good testimony from everyone, and from the truth itself; and we add our testimony, and you know that our testimony is true.",
    "64-1-13": "I had many things to write to you, but I am not willing to write them to you with pen and ink;",
    "64-1-14": "but I hope to see you shortly, and we will speak face to face.",
    "64-1-15": "Peace be to you. The friends greet you. Greet the friends by name."
  },
  // 3 John in ESV
  "ESV": {
    "64-1-1": "The elder to the beloved Gaius, whom I love in truth.",
    "64-1-2": "Beloved, I pray that all may go well with you and that you may be in good health, as it goes well with your soul.",
    "64-1-3": "For I rejoiced greatly when the brothers came and testified to your truth, as indeed you are walking in the truth.",
    "64-1-4": "I have no greater joy than to hear that my children are walking in the truth.",
    "64-1-5": "Beloved, it is a faithful thing you do in all your efforts for these brothers, strangers as they are,",
    "64-1-6": "who testified to your love before the church. You will do well to send them on their journey in a manner worthy of God.",
    "64-1-7": "For they have gone out for the sake of the name, accepting nothing from the Gentiles.",
    "64-1-8": "Therefore we ought to support people like these, that we may be fellow workers for the truth.",
    "64-1-9": "I have written something to the church, but Diotrephes, who likes to put himself first, does not acknowledge our authority.",
    "64-1-10": "So if I come, I will bring up what he is doing, talking wicked nonsense against us. And not content with that, he refuses to welcome the brothers, and also stops those who want to and puts them out of the church.",
    "64-1-11": "Beloved, do not imitate evil but imitate good. Whoever does good is from God; whoever does evil has not seen God.",
    "64-1-12": "Demetrius has received a good testimony from everyone, and from the truth itself. We also add our testimony, and you know that our testimony is true.",
    "64-1-13": "I had much to write to you, but I would rather not write with pen and ink.",
    "64-1-14": "I hope to see you soon, and we will talk face to face.",
    "64-1-15": "Peace be to you. The friends greet you. Greet the friends, each by name."
  },
  // 3 John in Strong's Concordance (OUS)
  "OUS": {
    "64-1-1": "作长老的[G4245] 写信给亲爱的[G27] 该犹[G1050]，就是我[G1473] 诚心[G225] 所爱的[G25]。",
    "64-1-2": "亲爱的[G27] 兄弟啊，我愿[G2172] 你凡事[G3956] 兴盛[G2137]，身体健壮[G5198]，正如[G2531] 你的灵魂[G5590] 兴盛[G2137] 一样。",
    "64-1-3": "有弟兄[G80] 来[G2064] 证明[G3140] 你心里存的真理[G225]，正如[G2531] 你[G4771] 按真理[G225] 而行[G4043]，我就甚[G3029] 喜乐[G5463]。",
    "64-1-4": "我听见[G191] 我的儿女们[G5043] 按真理[G225] 而行[G4043]，我的喜乐[G5479] 就没有比这个大的[G3187]。",
    "64-1-5": "亲爱的[G27] 兄弟啊，凡你向弟兄[G80] 并向作客旅的[G3581] 所行的[G2038]，都是忠心的[G4103]。",
    "64-1-6": "他们在教会[G1577] 面前证明[G3140] 了你的爱[G26]。你若配得过神[G2316]，资助[G4311] 他们往前行，这就好了[G2573]；",
    "64-1-7": "因他们是为主的名[G3686] 出外[G1831]，对于外邦人[G1482] 一无所取[G2983]。",
    "64-1-8": "所以我们[G2249] 应该[G3784] 接待[G618] 这样的人，叫我们与他们一同为真理[G225] 作工[G4904]。",
    "64-1-9": "我曾略略地写信[G1125] 给教会[G1577]；但那在他们中间好为首的[G5383] 丢特腓[G1361] 不接待[G1926] 我们。",
    "64-1-10": "所以我若去[G2064]，必要提说[G5279] 他所行的事[G2041]，就是他用恶言[G4190] 妄论[G5396] 我们，还不以此为足[G714]，他自己不接待[G1926] 弟兄[G80]，有人愿意接待，他也禁止[G2967]，并且将他们赶出[G1544] 教会[G1577]。",
    "64-1-11": "亲爱的[G27] 兄弟啊，不要效法[G3401] 恶[G2556]，只要效法善[G18]。行善的[G15] 属乎神[G2316]，行恶的[G2554] 未曾见过[G3708] 神[G2316]。",
    "64-1-12": "低米丢[G1214] 行善，有众人[G3956] 给他作见证[G3140]，又有真理[G225] 本身给他作见证[G3140]，就是我们也给他作见证[G3140]，你也知道[G1492] 我们的见证[G3141] 是真的[G227]。",
    "64-1-13": "我原有许多事[G4183] 要写给你[G1125]，却不愿意用墨[G3188] 和笔[G2563] 写给你；",
    "64-1-14": "但盼望[G1679] 快快地见你[G3708]，我们就当面[G4750] 谈论[G2980]。",
    "64-1-15": "愿你平安[G1515]。众位朋友[G5384] 都问你安[G782]。请你按着姓名[G3686] 问众位朋友[G5384] 安[G782]。"
  }
};

// =========================================================
// 3. Built-in Outlines, Charts, Cross-References
// =========================================================
const BUILTIN_OUTLINES = {
  // 3 John Study Outline (Harold L. Willmington 威尔明顿大纲)
  "studyOutline": [
    { title: "引言与问安 (1-2节)", depth: 1, verses: [1, 2] },
    { title: "一、称赞忠心行真理的该犹 (3-8节)", depth: 1, verses: [3, 4, 5, 6, 7, 8] },
    { title: "1. 该犹按真理而行的大喜乐 (3-4节)", depth: 2, verses: [3, 4] },
    { title: "2. 该犹在接待巡回宣教士上的爱心 (5-6节)", depth: 2, verses: [5, 6] },
    { title: "3. 宣教士不向外邦人索取的崇高原则 (7节)", depth: 2, verses: [7] },
    { title: "4. 接待者成为「真理同工」的神圣福分 (8节)", depth: 2, verses: [8] },
    { title: "二、斥责专横傲慢的丢特腓 (9-10节)", depth: 1, verses: [9, 10] },
    { title: "1. 好为首并拒绝使徒权威 (9节)", depth: 2, verses: [9] },
    { title: "2. 用恶言妄论、拒接弟兄并滥权开除会籍 (10节)", depth: 2, verses: [10] },
    { title: "三、效法良善与表扬低米丢 (11-12节)", depth: 1, verses: [11, 12] },
    { title: "1. 不要效法恶，只要效法善的诫勉 (11节)", depth: 2, verses: [11] },
    { title: "2. 拥有三重见证的低米丢 (12节)", depth: 2, verses: [12] },
    { title: "结语与面对面的盼望 (13-15节)", depth: 1, verses: [13, 14, 15] }
  ],
  // 3 John Structural Outline
  "structOutline": [
    { title: "书信问候：长者的爱与属灵健康祝愿 (1-2)", depth: 1, verses: [1, 2] },
    { title: "正文核心一：真理与接待之爱 (3-8)", depth: 1, verses: [3, 4, 5, 6, 7, 8] },
    { title: "正文核心二：恶者的专权 vs 善者的见证 (9-12)", depth: 1, verses: [9, 10, 11, 12] },
    { title: "书信末语：平安祝愿与提名问安 (13-15)", depth: 1, verses: [13, 14, 15] }
  ],
  // Cross References (TSK Style)
  "crossRef": [
    { verse: 1, ref: "约二 1; 徒 19:29; 罗 16:23; 林前 1:14", note: "关于使徒约翰自称长老，及哥林多受洗接待使徒的该犹。" },
    { verse: 2, ref: "诗 103:1-5; 帖前 5:23", note: "愿灵魂、身体与诸事齐皆健壮亨通的纯全祝福。" },
    { verse: 4, ref: "箴 23:24; 林前 4:15; 帖前 2:19-20", note: "属灵父亲听闻儿女按真理遵行，成为牧者最大的喜乐。" },
    { verse: 8, ref: "太 10:40-42; 罗 12:13; 来 13:2", note: "接待先知便得先知的赏赐，接待弟兄即成为神真理之同工。" },
    { verse: 11, ref: "诗 34:14; 约一 2:29; 约一 3:6-10", note: "行善的属乎神，凡犯罪行恶的未曾看见祂，也未曾认识祂。" }
  ],
  // Charts & Background
  "backgroundCharts": [
    { title: "《约翰书信年代与宣教地图背景》", desc: "主后 85-95 年，使徒约翰晚年驻牧以弗所期间写给亚细亚各教会。" },
    { title: "《初代教会接待客旅制度 (Hospitality)》", desc: "罗马帝国时期客店污秽不道德，巡回宣教士必须仰赖基督徒家庭教会的接待与资助。" },
    { title: "《该犹 vs 丢特腓 vs 低米丢 人物品格对照表》", desc: "该犹：爱心与真理同工；丢特腓：狂傲好为首与滥权；低米丢：三层见证之良善楷模。" }
  ]
};

// =========================================================
// 4. Built-in Book Introduction & Verse-by-Verse Commentaries
// =========================================================
const BUILTIN_BOOK_INTRO = {
  author: "使徒约翰 (John the Apostle)",
  date: "约主后 85–95 年 (At Ephesus)",
  recipient: "该犹 (Gaius) —— 一位深受信徒爱戴且乐意接待客旅的教会领袖",
  theme: "在真理与爱心接待中成为同工；警惕独裁争竞的恶人",
  content: `
    <h3>书卷导论：约翰三书 (3 John)</h3>
    <p><strong>著者</strong>：使徒约翰。信首自称为「作长老的」（Presbuteros），既指其德高望重的属灵长辈身份，也指其作为主耶稣亲炙使徒的权柄。</p>
    <p><strong>受信人与背景</strong>：本书信写给亲爱的该犹。当时有些巡回布道者从地方教会出发传道，该犹热忱接待他们并资助他们前行。然而，当地教会中出现了一位好为首的领袖丢特腓（Diotrephes），不仅自己拒绝接待使徒与宣教士，甚至将愿意接待的弟兄逐出教会。约翰特此致信，一方面勉励坚固该犹，另一方面宣告使徒将亲自前往对付丢特腓的恶行，并推荐忠良的弟兄低米丢。</p>
    <p><strong>神学精义</strong>：真理（Aletheia）不仅是纯正的教义，更是必须在人际关怀与爱心行动中「行出来」的生命律则。款待神的仆人，就是与他们「一同为真理作工」。
  `
};

const BUILTIN_COMMENTARIES = {
  // Donald W. Burdick 伯迪克注释
  "burdick": {
    name: "伯迪克注释",
    author: "唐纳德·伯迪克 (Donald W. Burdick)",
    verses: {
      "1": "<strong>【第1节 问安与真诚的爱】</strong>：约翰自称「长老」，这个称呼兼具年岁上的尊荣与使徒职分的权柄。「在真理中所爱的」表明基督教的爱不是基于任性的好感，而是奠定在三一神的客观真理之上。",
      "2": "<strong>【第2节 身体与灵魂健壮的祝祷】</strong>：当时诺斯底派将身体视作罪恶污秽，贬低肉身；但约翰在这里展现了健康希伯来圣经的整全人论：身体健康与灵魂兴盛同样蒙神眷爱与赐福。",
      "3": "<strong>【第3节 弟兄们的见证】</strong>：巡回布道的弟兄归来向约翰汇报该犹的光景。该犹不仅「心存真理」，更是「按真理而行」（walking in the truth），展现言行一致的品德。",
      "4": "<strong>【第4节 牧者最大的喜乐】</strong>：对于属灵导师而言，看见属灵儿女在真理中站立得稳，胜过世间一切属世的名誉与财富。",
      "5": "<strong>【第5节 款待陌生弟兄的忠信】</strong>：这些巡回传道人对该犹而言本是「客旅（strangers）」，然而该犹在基督里一视同仁地按最高的忠心接待他们。",
      "6": "<strong>【第6节 资助宣教士上路】</strong>：「配得过神」意为：你怎样服事神自己，就应当怎样资助这些宣教士，提供旅费、干粮与关怀，使他们在宣教工场无后顾之忧。",
      "7": "<strong>【第7节 不向外邦人取物之崇高】</strong>：初代宣教士绝不向尚未信主的外邦人索取金钱，免得被误解为敛财，并羞辱福音的白白恩典；因此信徒的供应就成了他们唯一的支撑。",
      "8": "<strong>【第8节 与真理同工的神圣地位】</strong>：后方接待与奉献资助的人，并不是旁观者；在神永恒的国度记账簿中，接待者就是宣教士的「真理同工」（fellow workers for the truth）。",
      "9": "<strong>【第9节 丢特腓的骄傲自大】</strong>：丢特腓的根本问题在于「好为首」（philoproteuo）——他将基督在教会的元首地位据为己有，因而抗拒使徒的教导与书信。",
      "10": "<strong>【第10节 专制独裁的恶行】</strong>：丢特腓的恶劣行径包含四重：1) 恶言妄论使徒；2) 拒绝接待客旅弟兄；3) 严禁别人接待；4) 滥用开除权柄把爱心信徒逐出教会。约翰明言必亲自对质惩治。",
      "11": "<strong>【第11节 不要效法恶只要效法善】</strong>：约翰发出严肃诫勉：教会领袖的名衔不能掩盖恶行。行善的是属神的；行恶的即便口称信主，心灵也未曾见过神。",
      "12": "<strong>【第12节 低米丢的三重铁证】</strong>：低米丢拥有无可指责的美好名声：1) 众人的公认；2) 与神真理道相符合的见证；3) 使徒约翰及其同工的亲身印证。",
      "13": "<strong>【第13-14节 当面交谈的期盼】</strong>：笔墨虽能传信，却不如面对面的相聚更有温度与力量。约翰渴望尽快亲赴工场，解决争端，共叙主内契通。",
      "15": "<strong>【第15节 愿你平安与提名问安】</strong>：以基督所赐的超然平安（Shalom）为结语。使徒并非泛泛问好，而是要求「按着姓名」一位一位关怀，体现牧者对群羊每一个个体的深挚眷顾。"
    }
  },
  // 信徒圣经注释 (Believer's Bible Commentary)
  "believers": {
    name: "信徒圣经注释",
    author: "威廉·麦克唐纳 (William MacDonald)",
    verses: {
      "1": "<strong>【信徒注释 1节】</strong>：该犹是早期教会忠心奉献的圣徒。真理把真正的信徒紧密联结在一起。",
      "2": "<strong>【信徒注释 2节】</strong>：这是一句深情的问候。约翰祝愿该犹的身体正如他那强盛的灵命一样健康。很多人的身体远比他们的灵命强壮，但该犹的灵命却卓越非凡。",
      "3": "<strong>【信徒注释 3节】</strong>：真理不仅要作为信仰宣告留在脑海中，更要进入生活中的每一天实践。",
      "5": "<strong>【信徒注释 5节】</strong>：接待客旅是初代信徒最显著的记号，特别在逼迫与动荡的世纪里。",
      "8": "<strong>【信徒注释 8节】</strong>：我们在宣教事工中只有两条路可走：要么亲自往前线，要么忠心用爱心与供应拉住前线的绳索。",
      "9": "<strong>【信徒注释 9节】</strong>：丢特腓渴望第一把交椅，抢夺原本惟独属于主耶稣基督的最高元首地位。",
      "11": "<strong>【信徒注释 11节】</strong>：在教会面临人际与政治纷争时，基督徒唯一的准则就是定睛效法神的良善。",
      "12": "<strong>【信徒注释 12节】</strong>：低米丢很可能是这封信的捎信人，约翰以此向该犹郑重推介。"
    }
  },
  // 讲道与解经 (MacArthur 麦克阿瑟)
  "macarthur": {
    name: "讲道与解经",
    author: "约翰·麦克阿瑟 (John MacArthur)",
    verses: {
      "1": "<strong>【讲道提纲 1节】</strong>：真理里的深交。真正的团契是建立在使徒所传讲的神圣救赎真理基础之上的。",
      "2": "<strong>【讲道提纲 2节】</strong>：整全的生命繁荣。属灵的繁盛是基督徒一生的基石与最高追求。",
      "4": "<strong>【讲道提纲 4节】</strong>：一位牧师最大的欣慰。没有什么比看到年轻人和教会肢体在世俗狂潮中依然按真理站立更让长辈欣喜的了。",
      "7": "<strong>【讲道提纲 7节】</strong>：荣耀基督之名的宣教。不求属世的资助，单单倚靠神的供给与教会的甘心献上。",
      "9": "<strong>【讲道提纲 9-10节】</strong>：教会专制者的解剖。骄傲导致属灵瞎眼，最终使人变成践踏羊群的独裁者。"
    }
  }
};

// =========================================================
// 5. Built-in Greek Strong's Lexicon
// =========================================================
const BUILTIN_STRONGS = {
  "G4245": {
    id: "G4245",
    lemma: "πρεσβύτερος",
    translit: "presbuteros",
    pronounce: "pres-boo'-ter-os",
    pos: "形容词 / 名词，比较级",
    origin: "源自 presbus（年长者）",
    def: "长老、年长者。在初代教会中常指地方教会受按立的属灵监督、牧者或领袖；在犹太公会中指民间长老；此处也蕴含使徒约翰备受尊敬之长辈身份。",
    occurrences: 66
  },
  "G27": {
    id: "G27",
    lemma: "ἀγαπητός",
    translit: "agapetos",
    pronounce: "ag-ap-ay-tos'",
    pos: "形容词",
    origin: "源自 G25 (agapao，爱)",
    def: "亲爱的、蒙爱的、心爱的。特指在神的圣洁神圣之爱（Agape）中蒙珍视的对象。新约常用以称呼亲爱的主内同道，天父亦以此称呼其独生爱子（太 3:17）。",
    occurrences: 61
  },
  "G1050": {
    id: "G1050",
    lemma: "Γάϊος",
    translit: "Gaios",
    pronounce: "gah'-ee-os",
    pos: "专有名词",
    origin: "罗马常见人名，意为「喜乐的」",
    def: "该犹。新约中出现数位同名人物（如马其顿人该犹、特庇人该犹、哥林多信徒该犹）。本信之该犹为小亚细亚某教会富于爱心、慷慨款待巡回宣教士之领袖。",
    occurrences: 5
  },
  "G225": {
    id: "G225",
    lemma: "ἀλήθεια",
    translit: "aletheia",
    pronounce: "al-ay'-thi-ah",
    pos: "名词，阴性",
    origin: "源自 G227 (alethes，真实的、无伪的)",
    def: "真理、真实、真相、纯正教义。新约特指神借着耶稣基督和圣灵启示之终极客观实在，对立于虚谎、错谬与诺斯底假道；亦指信徒按此真实道而行之正直品格。",
    occurrences: 109
  },
  "G25": {
    id: "G25",
    lemma: "ἀγαπάω",
    translit: "agapao",
    pronounce: "ag-ap-ah'-o",
    pos: "动词",
    origin: "可能源自 agan（甚、极大）",
    def: "爱、深爱。表达一种非基于自私欲望、而是出于意志抉择与神圣舍己的最高等级之爱（区别于亲情 storge、友情 philia 或情欲 eros）。",
    occurrences: 143
  },
  "G2172": {
    id: "G2172",
    lemma: "εὔχομαι",
    translit: "euchomai",
    pronounce: "yoo'-khom-ahee",
    pos: "动词，关身形",
    origin: "古希腊字根",
    def: "向神祈求、祝愿、立愿、期望。",
    occurrences: 7
  },
  "G2137": {
    id: "G2137",
    lemma: "εὐοδόω",
    translit: "euodoo",
    pronounce: "yoo-od-o'-o",
    pos: "动词，字面「顺利上路」",
    origin: "源自 eu（好）+ hodos（道路）",
    def: "亨通、凡事顺利、兴盛。原指旅途顺风无阻，引申为生活、事业、属灵诸事在神指引下凡事顺遂。",
    occurrences: 4
  },
  "G5198": {
    id: "G5198",
    lemma: "ὑγιαίνω",
    translit: "hugiaino",
    pronounce: "hoog-ee-ah'-ee-no",
    pos: "动词",
    origin: "英语 hygiene（卫生、健康）之词源",
    def: "身体健康、健全、无疾；引申在教义上亦指「纯正的（sound teaching）」信仰。",
    occurrences: 12
  },
  "G5590": {
    id: "G5590",
    lemma: "ψυχή",
    translit: "psuche",
    pronounce: "psoo-khay'",
    pos: "名词，阴性",
    origin: "源自 psucho（呼吸、呼气）",
    def: "灵魂、生命、心灵、整个人格内核。英语 psychology（心理学）之词源。",
    occurrences: 103
  },
  "G5463": {
    id: "G5463",
    lemma: "χαίρω",
    translit: "chairo",
    pronounce: "khah'-ee-ro",
    pos: "动词",
    origin: "基本字根",
    def: "喜乐、高兴、庆幸；亦作古代希腊书信标准问候语「愿你喜乐／请安」。",
    occurrences: 74
  },
  "G5479": {
    id: "G5479",
    lemma: "χαρά",
    translit: "chara",
    pronounce: "khar-ah'",
    pos: "名词，阴性",
    origin: "源自 G5463 (chairo)",
    def: "喜乐、欢欣、大乐。圣灵所结的九种果子之一（加 5:22）。",
    occurrences: 59
  },
  "G4043": {
    id: "G4043",
    lemma: "περιπατέω",
    translit: "peripateo",
    pronounce: "per-ee-pat-eh'-o",
    pos: "动词",
    origin: "源自 peri（周围）+ pateo（践踏、走）",
    def: "字面为「四处行走」，引申为行事为人、生活之道、每日人生的行为举止。",
    occurrences: 95
  },
  "G1361": {
    id: "G1361",
    lemma: "Διοτρεφής",
    translit: "Diotrephes",
    pronounce: "dee-ot-ref-ace'",
    pos: "专有名词",
    origin: "宙斯所哺育养大者",
    def: "丢特腓。初代教会中一位狂傲、好为首、排挤使徒权威并残害弟兄的专权人物。",
    occurrences: 1
  },
  "G5383": {
    id: "G5383",
    lemma: "φιλοπρωτεύω",
    translit: "philoproteuo",
    pronounce: "fil-op-rote-yoo'-o",
    pos: "动词",
    origin: "源自 philos（爱好）+ protos（第一位、首位）",
    def: "好为首、争当第一、渴望凌驾于人之上。这是新约唯一一次出现，生动揭示了教会纷争中宗派专权者的罪恶根源。",
    occurrences: 1
  },
  "G1214": {
    id: "G1214",
    lemma: "Δημήτριος",
    translit: "Demetrios",
    pronounce: "day-may'-tree-os",
    pos: "专有名词",
    origin: "得墨忒尔（丰收女神）之侍奉者",
    def: "低米丢。小亚细亚一位忠心顺服真理的基督徒楷模，得众人、真理与使徒三方面交口称赞。",
    occurrences: 3
  },
  "G3140": {
    id: "G3140",
    lemma: "μαρτυρέω",
    translit: "martureo",
    pronounce: "mar-too-reh'-o",
    pos: "动词",
    origin: "英语 martyr（殉道者）之词源",
    def: "作见证、证实、证明、担保。",
    occurrences: 76
  }
};

// =========================================================
// 6. IndexedDB Storage Wrapper (BibleDB)
// =========================================================
class BibleStorage {
  constructor() {
    this.dbName = "BibleWorkbenchDB";
    this.version = 1;
    this.db = null;
  }

  async open() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("custom_bibles")) {
          db.createObjectStore("custom_bibles", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("custom_commentaries")) {
          db.createObjectStore("custom_commentaries", { keyPath: "id" });
        }
        if (!db.objectStoreNames.contains("user_settings")) {
          db.createObjectStore("user_settings", { keyPath: "key" });
        }
      };
      request.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(this.db);
      };
      request.onerror = (e) => reject(e);
    });
  }

  async getAllCustomBibles() {
    await this.open();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("custom_bibles", "readonly");
      const store = tx.objectStore("custom_bibles");
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = (e) => reject(e);
    });
  }

  async saveCustomBible(bibleObj) {
    await this.open();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("custom_bibles", "readwrite");
      const store = tx.objectStore("custom_bibles");
      const req = store.put(bibleObj);
      req.onsuccess = () => resolve(true);
      req.onerror = (e) => reject(e);
    });
  }

  async deleteCustomBible(id) {
    await this.open();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("custom_bibles", "readwrite");
      const store = tx.objectStore("custom_bibles");
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = (e) => reject(e);
    });
  }

  async getAllCustomCommentaries() {
    await this.open();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("custom_commentaries", "readonly");
      const store = tx.objectStore("custom_commentaries");
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = (e) => reject(e);
    });
  }

  async saveCustomCommentary(commObj) {
    await this.open();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("custom_commentaries", "readwrite");
      const store = tx.objectStore("custom_commentaries");
      const req = store.put(commObj);
      req.onsuccess = () => resolve(true);
      req.onerror = (e) => reject(e);
    });
  }

  async deleteCustomCommentary(id) {
    await this.open();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction("custom_commentaries", "readwrite");
      const store = tx.objectStore("custom_commentaries");
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = (e) => reject(e);
    });
  }
}

const db = new BibleStorage();

// =========================================================
// 7. Workbench App State & Controller
// =========================================================
class BibleWorkbenchApp {
  constructor() {
    this.currentBook = 64; // 3 John
    this.currentChapter = 1;
    this.currentVerse = 1;
    this.activeVersion = "CUV";
    this.activeLeftTab = "studyOutline";
    this.activeCommId = "burdick";
    this.activeDrawerTab = "search";
    this.layoutMode = 1;

    this.customBibles = [];
    this.customCommentaries = [];

    this.allBibleVersions = [...BUILTIN_BIBLES];
  }

  async init() {
    // 1. Load custom modules from IndexedDB
    try {
      this.customBibles = await db.getAllCustomBibles();
      this.customCommentaries = await db.getAllCustomCommentaries();
    } catch (e) {
      console.warn("IndexedDB init note:", e);
    }

    this.allBibleVersions = [...BUILTIN_BIBLES, ...this.customBibles];

    // 2. Setup Top Selectors
    this.populateBookSelect();
    this.updateChapterSelect();
    this.updateVerseSelect();

    // 3. Render Version Tabs
    this.renderVersionTabs();

    // 4. Render Commentary Tabs
    this.renderCommentaryTabs();

    // 5. Render Initial View
    this.renderPassage();
    this.renderLeftPanel();
    this.renderBookIntro();
    this.renderCommentary();

    // 6. Bind All Event Listeners
    this.bindEvents();

    // 7. Load saved theme and settings
    this.loadSavedPreferences();
  }

  populateBookSelect() {
    const select = document.getElementById("bookSelect");
    select.innerHTML = "";

    // Group by Testament & Canon Group
    let currentGroup = "";
    let optGroup = null;

    BIBLE_BOOKS.forEach(b => {
      const groupLabel = `${b.testament === "OT" ? "【旧约】" : "【新约】"} ${b.group}`;
      if (groupLabel !== currentGroup) {
        currentGroup = groupLabel;
        optGroup = document.createElement("optgroup");
        optGroup.label = currentGroup;
        select.appendChild(optGroup);
      }

      const opt = document.createElement("option");
      opt.value = b.no;
      opt.textContent = `${b.name} (${b.abbr})`;
      if (b.no === this.currentBook) opt.selected = true;
      optGroup.appendChild(opt);
    });
  }

  updateChapterSelect() {
    const select = document.getElementById("chapterSelect");
    select.innerHTML = "";
    const book = BOOK_MAP.get(this.currentBook);
    const totalChapters = book ? book.chapters : 1;

    for (let c = 1; c <= totalChapters; c++) {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = `第 ${c} 章`;
      if (c === this.currentChapter) opt.selected = true;
      select.appendChild(opt);
    }
  }

  updateVerseSelect() {
    const select = document.getElementById("verseSelect");
    select.innerHTML = "";
    // Estimate or get total verses in chapter
    const totalVerses = this.getVersesCountForChapter(this.currentBook, this.currentChapter);

    for (let v = 1; v <= totalVerses; v++) {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = `第 ${v} 节`;
      if (v === this.currentVerse) opt.selected = true;
      select.appendChild(opt);
    }
  }

  getVersesCountForChapter(bookNo, chapNo) {
    if (bookNo === 64) return 15; // 3 John has 15 verses
    if (bookNo === 63) return 13; // 2 John has 13 verses
    if (bookNo === 65) return 25; // Jude has 25 verses
    if (bookNo === 57) return 25; // Philemon has 25
    if (bookNo === 31) return 21; // Obadiah has 21
    if (bookNo === 1 && chapNo === 1) return 31; // Genesis 1
    if (bookNo === 43 && chapNo === 1) return 51; // John 1
    return 25; // default fallback
  }

  renderVersionTabs() {
    const container = document.getElementById("versionTabsContainer");
    container.innerHTML = "";

    this.allBibleVersions.forEach(v => {
      const btn = document.createElement("button");
      btn.className = `version-tab ${this.activeVersion === v.id ? "active" : ""}`;
      btn.dataset.versionId = v.id;
      btn.textContent = v.abbr || v.name;
      btn.title = v.name;
      btn.addEventListener("click", () => {
        this.activeVersion = v.id;
        this.renderVersionTabs();
        this.renderPassage();
      });
      container.appendChild(btn);
    });

    // Add Parallel tab
    const pBtn = document.createElement("button");
    pBtn.className = `version-tab tab-parallel ${this.activeVersion === "PARALLEL" ? "active" : ""}`;
    pBtn.dataset.versionId = "PARALLEL";
    pBtn.innerHTML = `<i class="fa-solid fa-columns"></i> 并排对照`;
    pBtn.title = "多译本并排比对";
    pBtn.addEventListener("click", () => {
      this.activeVersion = "PARALLEL";
      this.renderVersionTabs();
      this.renderPassage();
    });
    container.appendChild(pBtn);

    // Update search version dropdown
    const sSelect = document.getElementById("searchVersionSelect");
    sSelect.innerHTML = "";
    this.allBibleVersions.forEach(v => {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = v.abbr || v.name;
      sSelect.appendChild(opt);
    });
  }

  renderCommentaryTabs() {
    const container = document.getElementById("commentaryTabsContainer");
    container.innerHTML = "";

    const builtinKeys = [
      { id: "burdick", name: "伯迪克注释" },
      { id: "believers", name: "信徒圣经注释" },
      { id: "macarthur", name: "讲道与解经" }
    ];

    builtinKeys.forEach(item => {
      const btn = document.createElement("button");
      btn.className = `tab-btn ${this.activeCommId === item.id ? "active" : ""}`;
      btn.dataset.commId = item.id;
      btn.textContent = item.name;
      btn.addEventListener("click", () => {
        this.activeCommId = item.id;
        this.renderCommentaryTabs();
        this.renderCommentary();
      });
      container.appendChild(btn);
    });

    // Add custom commentaries
    this.customCommentaries.forEach(c => {
      const btn = document.createElement("button");
      btn.className = `tab-btn ${this.activeCommId === c.id ? "active" : ""}`;
      btn.dataset.commId = c.id;
      btn.textContent = c.title;
      btn.title = `作者: ${c.author || "自定义"}`;
      btn.addEventListener("click", () => {
        this.activeCommId = c.id;
        this.renderCommentaryTabs();
        this.renderCommentary();
      });
      container.appendChild(btn);
    });
  }

  // =========================================================
  // Passage & Verses Rendering
  // =========================================================
  renderPassage() {
    const book = BOOK_MAP.get(this.currentBook);
    const titleEl = document.getElementById("currentPassageTitle");
    const metaEl = document.getElementById("currentPassageMeta");
    const container = document.getElementById("versesContainer");

    titleEl.textContent = `${book ? book.name : ""} 第 ${this.currentChapter} 章`;
    
    // Parallel View Mode
    if (this.activeVersion === "PARALLEL" || this.layoutMode === 4) {
      metaEl.textContent = "多译本并排比对模式 (Parallel Comparison)";
      this.renderParallelPassage(container);
      return;
    }

    // Single Version Mode
    const verObj = this.allBibleVersions.find(v => v.id === this.activeVersion);
    metaEl.textContent = verObj ? `${verObj.name} (${verObj.id})` : this.activeVersion;

    const versesMap = this.getVersesMap(this.activeVersion);
    const totalVerses = this.getVersesCountForChapter(this.currentBook, this.currentChapter);

    container.innerHTML = "";

    for (let v = 1; v <= totalVerses; v++) {
      const key = `${this.currentBook}-${this.currentChapter}-${v}`;
      let text = versesMap[key] || `(暂无 ${v} 节经文数据，您可通过上方「管理与导入」上传该书卷译本)`;

      const row = document.createElement("div");
      row.className = `verse-row ${v === this.currentVerse ? "active" : ""}`;
      row.id = `verse-row-${v}`;
      row.dataset.verseNum = v;

      // Handle Strong's tag formatting if OUS version
      let formattedText = text;
      if (this.activeVersion === "OUS") {
        formattedText = text.replace(/\[(G\d+|H\d+)\]/g, (match, p1) => {
          return `<span class="strong-tag" data-sno="${p1}">${p1}</span>`;
        });
      }

      row.innerHTML = `
        <span class="verse-number">${v}</span>
        <div class="verse-content">${formattedText}</div>
      `;

      row.addEventListener("click", (e) => {
        // If clicking on strong tag
        if (e.target.classList.contains("strong-tag")) {
          const sno = e.target.dataset.sno;
          this.handleStrongTagClick(sno, e.target);
          return;
        }
        this.setActiveVerse(v);
      });

      container.appendChild(row);
    }
  }

  renderParallelPassage(container) {
    container.innerHTML = "";
    const compareVersions = ["CUV", "CNV", "CSB", "ESV"];
    const totalVerses = this.getVersesCountForChapter(this.currentBook, this.currentChapter);

    const table = document.createElement("table");
    table.className = "parallel-table";

    // Header
    const thead = document.createElement("thead");
    let headerHtml = "<tr><th style='width:40px;'>节</th>";
    compareVersions.forEach(vid => {
      const verObj = this.allBibleVersions.find(v => v.id === vid);
      headerHtml += `<th>${verObj ? verObj.name : vid}</th>`;
    });
    headerHtml += "</tr>";
    thead.innerHTML = headerHtml;
    table.appendChild(thead);

    // Body
    const tbody = document.createElement("tbody");
    for (let v = 1; v <= totalVerses; v++) {
      const tr = document.createElement("tr");
      tr.className = v === this.currentVerse ? "active" : "";
      tr.id = `parallel-row-${v}`;

      let trHtml = `<td><span class="parallel-verse-num">${v}</span></td>`;
      compareVersions.forEach(vid => {
        const vMap = this.getVersesMap(vid);
        const text = vMap[`${this.currentBook}-${this.currentChapter}-${v}`] || "—";
        trHtml += `<td>${text}</td>`;
      });
      tr.innerHTML = trHtml;
      tr.addEventListener("click", () => this.setActiveVerse(v));
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    container.appendChild(table);
  }

  getVersesMap(versionId) {
    if (BUILTIN_DATA_VERSES[versionId]) {
      return BUILTIN_DATA_VERSES[versionId];
    }
    const custom = this.customBibles.find(b => b.id === versionId);
    if (custom && custom.verses) {
      return custom.verses;
    }
    return {};
  }

  setActiveVerse(v) {
    this.currentVerse = v;
    document.getElementById("verseSelect").value = v;

    // Highlight row
    document.querySelectorAll(".verse-row").forEach(r => r.classList.remove("active"));
    const activeRow = document.getElementById(`verse-row-${v}`);
    if (activeRow) activeRow.classList.add("active");

    // Indicator
    const ind = document.getElementById("activeVerseIndicator");
    if (ind) ind.textContent = `第 ${v} 节`;

    // Sync commentary
    this.highlightCommentaryForVerse(v);
  }

  highlightCommentaryForVerse(v) {
    document.querySelectorAll(".commentary-chunk").forEach(c => c.classList.remove("active-commentary"));
    const target = document.getElementById(`comm-verse-${v}`);
    if (target) {
      target.classList.add("active-commentary");
      target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  // =========================================================
  // Left Panel Rendering (Outlines, Cross-Refs, Charts)
  // =========================================================
  renderLeftPanel() {
    const container = document.getElementById("leftPanelBody");
    container.innerHTML = "";

    if (this.activeLeftTab === "studyOutline" || this.activeLeftTab === "structOutline") {
      const outlineData = BUILTIN_OUTLINES[this.activeLeftTab] || [];
      if (this.currentBook !== 64) {
        container.innerHTML = `<div class="text-secondary" style="padding:10px;">当前书卷暂无内置详细大纲，可导入或切换至第64卷《约翰三书》查看演示。</div>`;
        return;
      }

      const grp = document.createElement("div");
      grp.className = "outline-group";
      grp.innerHTML = `<div class="outline-group-title"><i class="fa-solid fa-layer-group"></i> ${this.activeLeftTab === "studyOutline" ? "威尔明顿研读大纲" : "结构分析大纲"}</div>`;

      outlineData.forEach(item => {
        const div = document.createElement("div");
        div.className = `outline-item depth-${item.depth}`;
        div.innerHTML = `
          <span>${item.title}</span>
          ${item.verses ? `<span class="outline-verse-badge">${item.verses[0]}-${item.verses[item.verses.length-1]}节</span>` : ""}
        `;
        div.addEventListener("click", () => {
          if (item.verses && item.verses.length > 0) {
            this.setActiveVerse(item.verses[0]);
            const targetRow = document.getElementById(`verse-row-${item.verses[0]}`);
            if (targetRow) targetRow.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        });
        grp.appendChild(div);
      });
      container.appendChild(grp);
    }
    else if (this.activeLeftTab === "crossRef") {
      const refs = BUILTIN_OUTLINES.crossRef || [];
      container.innerHTML = `<div class="outline-group-title"><i class="fa-solid fa-link"></i> 串珠平行经文 (TSK)</div>`;
      refs.forEach(r => {
        const card = document.createElement("div");
        card.className = "cross-ref-card";
        card.innerHTML = `
          <div class="cross-ref-header">第 ${r.verse} 节 关联经节: ${r.ref}</div>
          <div class="cross-ref-text">${r.note}</div>
        `;
        card.addEventListener("click", () => this.setActiveVerse(r.verse));
        container.appendChild(card);
      });
    }
    else if (this.activeLeftTab === "backgroundCharts") {
      const charts = BUILTIN_OUTLINES.backgroundCharts || [];
      container.innerHTML = `<div class="outline-group-title"><i class="fa-solid fa-map-location-dot"></i> 图表与历史背景</div>`;
      charts.forEach(c => {
        const item = document.createElement("div");
        item.className = "chart-item";
        item.innerHTML = `
          <div class="chart-title"><i class="fa-solid fa-chart-gantt"></i> ${c.title}</div>
          <div class="chart-desc">${c.desc}</div>
        `;
        container.appendChild(item);
      });
    }
  }

  // =========================================================
  // Right Panel Rendering (Book Intro & Commentaries)
  // =========================================================
  renderBookIntro() {
    const introBox = document.getElementById("introContainer");
    const authorBadge = document.getElementById("introAuthorBadge");

    if (this.currentBook === 64) {
      authorBadge.textContent = "唐纳德·伯迪克";
      introBox.innerHTML = BUILTIN_BOOK_INTRO.content;
    } else {
      const book = BOOK_MAP.get(this.currentBook);
      authorBadge.textContent = "圣经学者综合";
      introBox.innerHTML = `
        <h3>${book ? book.name : ""} 导论与背景</h3>
        <p><strong>英文名</strong>：${book ? book.english : ""}</p>
        <p><strong>正典分卷</strong>：${book ? book.group : ""}</p>
        <p><strong>章节规模</strong>：共 ${book ? book.chapters : 0} 章</p>
        <p class="text-secondary">提示：您可以通过上方「管理与导入」按钮，为任何书卷上传神学家的专著导论与历史释经资料。</p>
      `;
    }
  }

  renderCommentary() {
    const container = document.getElementById("commentaryContainer");
    container.innerHTML = "";

    // 1. Check custom commentary
    const custom = this.customCommentaries.find(c => c.id === this.activeCommId);
    if (custom && custom.verses) {
      Object.keys(custom.verses).forEach(vKey => {
        const chunk = document.createElement("div");
        chunk.className = `commentary-chunk ${parseInt(vKey) === this.currentVerse ? "active-commentary" : ""}`;
        chunk.id = `comm-verse-${vKey}`;
        chunk.innerHTML = `
          <div class="commentary-header"><i class="fa-solid fa-book-bookmark"></i> ${custom.title} - 第 ${vKey} 节</div>
          <div class="commentary-text">${custom.verses[vKey]}</div>
        `;
        container.appendChild(chunk);
      });
      return;
    }

    // 2. Builtin commentary
    const commSource = BUILTIN_COMMENTARIES[this.activeCommId] || BUILTIN_COMMENTARIES["burdick"];
    const versesMap = commSource.verses || {};

    const totalVerses = this.getVersesCountForChapter(this.currentBook, this.currentChapter);
    let hasAny = false;

    for (let v = 1; v <= totalVerses; v++) {
      if (versesMap[v]) {
        hasAny = true;
        const chunk = document.createElement("div");
        chunk.className = `commentary-chunk ${v === this.currentVerse ? "active-commentary" : ""}`;
        chunk.id = `comm-verse-${v}`;
        chunk.innerHTML = `
          <div class="commentary-header"><i class="fa-solid fa-feather-pointed"></i> 第 ${v} 节 释经</div>
          <div class="commentary-text">${versesMap[v]}</div>
        `;
        container.appendChild(chunk);
      }
    }

    if (!hasAny) {
      container.innerHTML = `<div class="text-secondary" style="padding:12px;">当前书卷或章节暂未录入该注释本，可切换至《约翰三书》查看完整逐节注释，或点击右上角导入自定义注释。</div>`;
    }
  }

  // =========================================================
  // Strong's Concordance Tag Handling & Lexicon Drawer
  // =========================================================
  handleStrongTagClick(sno, targetElement) {
    const entry = BUILTIN_STRONGS[sno] || {
      id: sno,
      lemma: "希腊文/希伯来文字词",
      translit: sno,
      pronounce: "—",
      pos: "原文字词",
      origin: "原文字根",
      def: `Strong's 编号 ${sno} 原文字义。在完整数据库中将呈现详尽的原文词典释义。`,
      occurrences: 1
    };

    // Show Popover
    const popover = document.getElementById("strongPopover");
    const badge = document.getElementById("popoverStrongBadge");
    const orig = document.getElementById("popoverOriginalWord");
    const body = document.getElementById("popoverBody");

    badge.textContent = entry.id;
    orig.textContent = entry.lemma;
    body.innerHTML = `
      <div><strong>发音/音译:</strong> ${entry.translit} (${entry.pronounce})</div>
      <div><strong>词类形态:</strong> ${entry.pos}</div>
      <div style="margin-top:6px;"><strong>字义解释:</strong> ${entry.def}</div>
      <div style="margin-top:4px; font-size:11px; color:var(--text-muted);">新约出现频率: 约 ${entry.occurrences} 次</div>
    `;

    // Position popover
    const rect = targetElement.getBoundingClientRect();
    popover.style.display = "block";
    popover.style.top = `${rect.bottom + window.scrollY + 6}px`;
    popover.style.left = `${Math.min(rect.left, window.innerWidth - 340)}px`;

    // Update bottom drawer
    this.showLexiconInDrawer(entry);

    // Bind popover search button
    document.getElementById("btnPopoverSearch").onclick = () => {
      popover.style.display = "none";
      this.openDrawer("search");
      document.getElementById("searchInput").value = entry.id;
      this.executeSearch(entry.id, "OUS");
    };

    document.getElementById("btnPopoverDetails").onclick = () => {
      popover.style.display = "none";
      this.openDrawer("lexicon");
    };
  }

  showLexiconInDrawer(entry) {
    const container = document.getElementById("lexiconContent");
    container.innerHTML = `
      <div class="lexicon-card">
        <div class="lexicon-top">
          <span class="lexicon-badge">${entry.id}</span>
          <span class="lexicon-lemma">${entry.lemma}</span>
          <span class="lexicon-translit">${entry.translit} [${entry.pronounce}]</span>
          <span style="font-size:12px; color:var(--text-muted);">${entry.pos}</span>
        </div>
        <div class="lexicon-def">${entry.def}</div>
        <div style="margin-top:10px; font-size:12px; color:var(--text-secondary);">
          <strong>词源考证:</strong> ${entry.origin} | <strong>圣经出现:</strong> ${entry.occurrences} 次
        </div>
      </div>
    `;
  }

  openDrawer(tabName) {
    const drawer = document.getElementById("bottomDrawer");
    drawer.classList.remove("collapsed");

    document.querySelectorAll(".drawer-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.drawerTab === tabName);
    });

    document.getElementById("drawerViewSearch").classList.toggle("active", tabName === "search");
    document.getElementById("drawerViewLexicon").classList.toggle("active", tabName === "lexicon");
  }

  // =========================================================
  // Search Engine
  // =========================================================
  executeSearch(query, versionId) {
    query = (query || "").trim();
    if (!query) return;

    this.openDrawer("search");

    const vId = versionId || document.getElementById("searchVersionSelect").value;
    const vMap = this.getVersesMap(vId);
    const resultsList = document.getElementById("searchResultsList");
    const statsEl = document.getElementById("searchStats");

    resultsList.innerHTML = "";
    statsEl.textContent = "正在检索经文...";

    const matches = [];

    Object.keys(vMap).forEach(key => {
      const text = vMap[key];
      if (text.toLowerCase().includes(query.toLowerCase())) {
        const parts = key.split("-");
        const bNo = parseInt(parts[0]);
        const cNo = parseInt(parts[1]);
        const vNo = parseInt(parts[2]);
        const book = BOOK_MAP.get(bNo);
        matches.push({
          bookNo: bNo,
          chapNo: cNo,
          verseNo: vNo,
          bookName: book ? book.name : `书卷${bNo}`,
          abbr: book ? book.abbr : "",
          text: text
        });
      }
    });

    statsEl.textContent = `在【${vId}】中找到「${query}」共 ${matches.length} 处结果：`;

    if (matches.length === 0) {
      resultsList.innerHTML = `<div class="text-secondary" style="padding:8px;">未检索到相关经文。可尝试简繁转换或减少关键字。</div>`;
      return;
    }

    matches.forEach(m => {
      const row = document.createElement("div");
      row.className = "search-result-row";
      // Highlight query keyword
      const re = new RegExp(`(${query})`, "gi");
      const highlighted = m.text.replace(re, `<span style="background-color:rgba(234,179,8,0.3); font-weight:bold;">$1</span>`);

      row.innerHTML = `<span class="search-ref">${m.bookName} ${m.chapNo}:${m.verseNo}</span> <span>${highlighted}</span>`;
      row.addEventListener("click", () => {
        this.currentBook = m.bookNo;
        this.currentChapter = m.chapNo;
        this.currentVerse = m.verseNo;
        document.getElementById("bookSelect").value = m.bookNo;
        this.updateChapterSelect();
        document.getElementById("chapterSelect").value = m.chapNo;
        this.updateVerseSelect();
        document.getElementById("verseSelect").value = m.verseNo;

        this.renderPassage();
        this.renderLeftPanel();
        this.renderBookIntro();
        this.renderCommentary();
        this.setActiveVerse(m.verseNo);

        const targetRow = document.getElementById(`verse-row-${m.verseNo}`);
        if (targetRow) targetRow.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      resultsList.appendChild(row);
    });
  }

  // =========================================================
  // Importer & Resource Management (Custom Module Handling)
  // =========================================================
  setupDropzone(zoneId, inputId, areaId) {
    const zone = document.getElementById(zoneId);
    const input = document.getElementById(inputId);
    const area = document.getElementById(areaId);

    zone.addEventListener("click", () => input.click());

    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.style.borderColor = "var(--primary)";
    });

    zone.addEventListener("dragleave", () => {
      zone.style.borderColor = "var(--border-color)";
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.style.borderColor = "var(--border-color)";
      if (e.dataTransfer.files.length > 0) {
        this.readFileToTextarea(e.dataTransfer.files[0], area);
      }
    });

    input.addEventListener("change", () => {
      if (input.files.length > 0) {
        this.readFileToTextarea(input.files[0], area);
      }
    });
  }

  readFileToTextarea(file, textarea) {
    const reader = new FileReader();
    reader.onload = (e) => {
      textarea.value = e.target.result;
    };
    reader.readAsText(file, "UTF-8");
  }

  async parseAndImportBible() {
    const id = document.getElementById("importBibleId").value.trim().toUpperCase();
    const name = document.getElementById("importBibleName").value.trim();
    const abbr = document.getElementById("importBibleAbbr").value.trim() || id;
    const format = document.getElementById("importBibleFormat").value;
    const content = document.getElementById("biblePasteArea").value.trim();
    const statusEl = document.getElementById("bibleImportStatus");

    if (!id || !name) {
      statusEl.className = "status-msg error";
      statusEl.textContent = "错误: 请输入译本唯一 ID 和全称！";
      return;
    }
    if (!content) {
      statusEl.className = "status-msg error";
      statusEl.textContent = "错误: 请上传文件或在文本框粘贴数据！";
      return;
    }

    try {
      let versesMap = {};

      if (format === "json") {
        const parsed = JSON.parse(content);
        if (parsed.verses) {
          versesMap = parsed.verses;
        } else {
          versesMap = parsed;
        }
      } else if (format === "csv") {
        // Parse CSV: Book, Chapter, Verse, Text
        const lines = content.split(/\r?\n/);
        lines.forEach(line => {
          if (!line.trim()) return;
          const parts = line.split(",");
          if (parts.length >= 4) {
            let b = parts[0].trim();
            const bNo = isNaN(b) ? (BOOK_NAME_MAP.get(b) || 1) : parseInt(b);
            const cNo = parseInt(parts[1].trim());
            const vNo = parseInt(parts[2].trim());
            const text = parts.slice(3).join(",").trim().replace(/^"|"$/g, "");
            versesMap[`${bNo}-${cNo}-${vNo}`] = text;
          }
        });
      } else if (format === "lines") {
        // Parse "约三 1:1 经文内容"
        const lines = content.split(/\r?\n/);
        lines.forEach(line => {
          const match = line.match(/^(\S+)\s+(\d+):(\d+)\s+(.+)$/);
          if (match) {
            const bName = match[1];
            const bNo = BOOK_NAME_MAP.get(bName) || 1;
            const cNo = parseInt(match[2]);
            const vNo = parseInt(match[3]);
            const text = match[4].trim();
            versesMap[`${bNo}-${cNo}-${vNo}`] = text;
          }
        });
      }

      const totalParsed = Object.keys(versesMap).length;
      if (totalParsed === 0) {
        throw new Error("未能解析出任何经节数据，请检查格式！");
      }

      const bibleObj = {
        id: id,
        name: name,
        abbr: abbr,
        lang: "zh",
        verses: versesMap,
        updatedAt: new Date().toISOString()
      };

      // Save to IndexedDB
      await db.saveCustomBible(bibleObj);

      // Refresh memory list
      this.customBibles = await db.getAllCustomBibles();
      this.allBibleVersions = [...BUILTIN_BIBLES, ...this.customBibles];

      statusEl.className = "status-msg success";
      statusEl.textContent = `成功导入译本【${name}】！共解析 ${totalParsed} 节经文，已安全存储于浏览器本地数据库中。`;

      this.renderVersionTabs();
      this.renderInstalledModulesList();
    } catch (err) {
      statusEl.className = "status-msg error";
      statusEl.textContent = `导入失败: ${err.message}`;
    }
  }

  async parseAndImportCommentary() {
    const id = document.getElementById("importCommId").value.trim().toLowerCase();
    const title = document.getElementById("importCommTitle").value.trim();
    const author = document.getElementById("importCommAuthor").value.trim() || "未知作者";
    const bookNo = parseInt(document.getElementById("importCommBookSelect").value);
    const content = document.getElementById("commPasteArea").value.trim();
    const statusEl = document.getElementById("commImportStatus");

    if (!id || !title) {
      statusEl.className = "status-msg error";
      statusEl.textContent = "错误: 请输入注释唯一 ID 和注释书全称！";
      return;
    }
    if (!content) {
      statusEl.className = "status-msg error";
      statusEl.textContent = "错误: 请上传 JSON 文件或粘贴注释数据！";
      return;
    }

    try {
      const parsed = JSON.parse(content);
      const commObj = {
        id: id,
        title: title,
        author: author,
        book: bookNo,
        intro: parsed.intro || "",
        verses: parsed.verses || {},
        updatedAt: new Date().toISOString()
      };

      await db.saveCustomCommentary(commObj);

      this.customCommentaries = await db.getAllCustomCommentaries();

      statusEl.className = "status-msg success";
      statusEl.textContent = `成功导入注释【${title}】！已安全保存。`;

      this.renderCommentaryTabs();
      this.renderInstalledModulesList();
    } catch (err) {
      statusEl.className = "status-msg error";
      statusEl.textContent = `解析失败: ${err.message}`;
    }
  }

  renderInstalledModulesList() {
    const bList = document.getElementById("installedBiblesList");
    const cList = document.getElementById("installedCommsList");

    bList.innerHTML = "";
    cList.innerHTML = "";

    // Builtin bibles
    BUILTIN_BIBLES.forEach(b => {
      const item = document.createElement("div");
      item.className = "installed-item";
      item.innerHTML = `
        <div class="installed-info">
          <span class="installed-name">${b.name} (${b.abbr})</span>
          <span class="installed-badge">系统内置</span>
        </div>
        <div class="installed-actions">
          <button class="btn btn-xs btn-ghost" disabled>系统预装</button>
        </div>
      `;
      bList.appendChild(item);
    });

    // Custom bibles
    this.customBibles.forEach(b => {
      const count = Object.keys(b.verses || {}).length;
      const item = document.createElement("div");
      item.className = "installed-item";
      item.innerHTML = `
        <div class="installed-info">
          <span class="installed-name">${b.name} (${b.abbr})</span>
          <span class="installed-badge" style="background-color:#dcfce7; color:#166534;">自定义 (${count} 节)</span>
        </div>
        <div class="installed-actions">
          <button class="btn btn-xs btn-danger btn-del-bible" data-id="${b.id}"><i class="fa-solid fa-trash-can"></i> 删除</button>
        </div>
      `;
      item.querySelector(".btn-del-bible").addEventListener("click", async () => {
        if (confirm(`确定要从本地数据库删除译本【${b.name}】吗？`)) {
          await db.deleteCustomBible(b.id);
          this.customBibles = await db.getAllCustomBibles();
          this.allBibleVersions = [...BUILTIN_BIBLES, ...this.customBibles];
          this.renderVersionTabs();
          this.renderInstalledModulesList();
        }
      });
      bList.appendChild(item);
    });

    // Builtin comms
    const builtinComms = [
      { id: "burdick", title: "伯迪克注释", author: "唐纳德·伯迪克" },
      { id: "believers", title: "信徒圣经注释", author: "威廉·麦克唐纳" },
      { id: "macarthur", title: "讲道与解经", author: "约翰·麦克阿瑟" }
    ];
    builtinComms.forEach(c => {
      const item = document.createElement("div");
      item.className = "installed-item";
      item.innerHTML = `
        <div class="installed-info">
          <span class="installed-name">${c.title}</span>
          <span class="installed-badge">系统内置 (${c.author})</span>
        </div>
        <div class="installed-actions">
          <button class="btn btn-xs btn-ghost" disabled>系统预装</button>
        </div>
      `;
      cList.appendChild(item);
    });

    // Custom comms
    this.customCommentaries.forEach(c => {
      const count = Object.keys(c.verses || {}).length;
      const item = document.createElement("div");
      item.className = "installed-item";
      item.innerHTML = `
        <div class="installed-info">
          <span class="installed-name">${c.title}</span>
          <span class="installed-badge" style="background-color:#dcfce7; color:#166534;">自定义 (${count} 条笔记)</span>
        </div>
        <div class="installed-actions">
          <button class="btn btn-xs btn-danger btn-del-comm" data-id="${c.id}"><i class="fa-solid fa-trash-can"></i> 删除</button>
        </div>
      `;
      item.querySelector(".btn-del-comm").addEventListener("click", async () => {
        if (confirm(`确定要删除注释【${c.title}】吗？`)) {
          await db.deleteCustomCommentary(c.id);
          this.customCommentaries = await db.getAllCustomCommentaries();
          this.renderCommentaryTabs();
          this.renderInstalledModulesList();
        }
      });
      cList.appendChild(item);
    });
  }

  downloadTemplate(type) {
    let filename = "";
    let content = "";
    let mime = "application/json";

    if (type === "bible-json") {
      filename = "bible_translation_template.json";
      content = JSON.stringify({
        id: "LZZ",
        name: "吕振中译本",
        abbreviation: "吕振中",
        description: "标准中文严谨直译版",
        verses: {
          "64-1-1": "作长老的、写信给亲爱的该犹、就是我在真实中所爱的。",
          "64-1-2": "亲爱的、我祝你事事亨通，身体健壮，正如你的灵魂亨通一样。",
          "64-1-3": "有弟兄们来，见证你在真理中，正如你按真理而行，我就非常喜欢。"
        }
      }, null, 2);
    } else if (type === "bible-csv") {
      filename = "bible_translation_template.csv";
      mime = "text/csv;charset=utf-8;";
      content = "书卷号或简称,章节,节号,经文内容\n64,1,1,作长老的、写信给亲爱的该犹、就是我在真实中所爱的。\n64,1,2,亲爱的、我祝你事事亨通，身体健壮，正如你的灵魂亨通一样。\n64,1,3,有弟兄们来，见证你在真理中，正如你按真理而行，我就非常喜欢。\n";
    } else if (type === "comm-json") {
      filename = "commentary_template.json";
      content = JSON.stringify({
        id: "calvin-notes",
        title: "加尔文解经集萃",
        author: "约翰·加尔文",
        book: 64,
        intro: "约翰在此教导我们应当在真实无伪的爱心接待中见证主道...",
        verses: {
          "1": "【第1节评注】神圣的长老职分建立在服事众人的谦卑品格中。",
          "2": "【第2节评注】身体与灵魂的康泰乃是信徒在地上事奉主不可或缺的保障。"
        }
      }, null, 2);
    }

    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  exportAllUserData() {
    const backupObj = {
      version: 1,
      exportedAt: new Date().toISOString(),
      customBibles: this.customBibles,
      customCommentaries: this.customCommentaries
    };

    const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bible_workbench_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // =========================================================
  // Event Bindings & Mode Toggles
  // =========================================================
  bindEvents() {
    // Book, Chapter, Verse selectors
    document.getElementById("bookSelect").addEventListener("change", (e) => {
      this.currentBook = parseInt(e.target.value);
      this.currentChapter = 1;
      this.currentVerse = 1;
      this.updateChapterSelect();
      this.updateVerseSelect();
      this.renderPassage();
      this.renderLeftPanel();
      this.renderBookIntro();
      this.renderCommentary();
    });

    document.getElementById("chapterSelect").addEventListener("change", (e) => {
      this.currentChapter = parseInt(e.target.value);
      this.currentVerse = 1;
      this.updateVerseSelect();
      this.renderPassage();
      this.renderCommentary();
    });

    document.getElementById("verseSelect").addEventListener("change", (e) => {
      this.setActiveVerse(parseInt(e.target.value));
      const targetRow = document.getElementById(`verse-row-${this.currentVerse}`);
      if (targetRow) targetRow.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    // Prev / Next Chapter Buttons
    document.getElementById("btnPrevChapter").addEventListener("click", () => this.navigateChapter(-1));
    document.getElementById("btnNextChapter").addEventListener("click", () => this.navigateChapter(1));

    // Keyboard navigation (← and → or [ and ])
    document.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft" || e.key === "[") this.navigateChapter(-1);
      if (e.key === "ArrowRight" || e.key === "]") this.navigateChapter(1);
    });

    // Layout Mode Buttons
    document.querySelectorAll(".btn-mode").forEach(btn => {
      btn.addEventListener("click", () => {
        const mode = parseInt(btn.dataset.mode);
        this.setLayoutMode(mode);
      });
    });

    // Toggle Buttons
    document.getElementById("toggleOutlineBtn").addEventListener("click", () => {
      const left = document.getElementById("leftPanel");
      left.style.display = (left.style.display === "none") ? "flex" : "none";
    });

    document.getElementById("toggleCommentaryBtn").addEventListener("click", () => {
      const right = document.getElementById("rightPanel");
      right.style.display = (right.style.display === "none") ? "flex" : "none";
    });

    document.getElementById("toggleDrawerBtn").addEventListener("click", () => {
      const drawer = document.getElementById("bottomDrawer");
      drawer.classList.toggle("collapsed");
    });

    document.getElementById("btnCloseDrawer").addEventListener("click", () => {
      document.getElementById("bottomDrawer").classList.add("collapsed");
    });

    // Left Panel Tab Buttons
    document.querySelectorAll("[data-left-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-left-tab]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeLeftTab = btn.dataset.leftTab;
        this.renderLeftPanel();
      });
    });

    // Drawer Tabs
    document.querySelectorAll("[data-drawer-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.openDrawer(btn.dataset.drawerTab);
      });
    });

    // Search Controls
    document.getElementById("btnRunSearch").addEventListener("click", () => {
      this.executeSearch(document.getElementById("searchInput").value);
    });

    document.getElementById("searchInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.executeSearch(document.getElementById("searchInput").value);
      }
    });

    // Popover Close
    document.getElementById("btnCloseStrongPopover").addEventListener("click", () => {
      document.getElementById("strongPopover").style.display = "none";
    });

    // Theme Selector
    document.getElementById("themeSelect").addEventListener("change", (e) => {
      this.setTheme(e.target.value);
    });

    // Font Sizing
    document.getElementById("btnFontInc").addEventListener("click", () => this.adjustFontSize(1));
    document.getElementById("btnFontDec").addEventListener("click", () => this.adjustFontSize(-1));

    // Modal Manager
    const modal = document.getElementById("manageModal");
    document.getElementById("btnOpenManageModal").addEventListener("click", () => {
      modal.style.display = "flex";
      this.renderInstalledModulesList();
      // Populate book select in commentary import
      const cBookSelect = document.getElementById("importCommBookSelect");
      cBookSelect.innerHTML = "";
      BIBLE_BOOKS.forEach(b => {
        const opt = document.createElement("option");
        opt.value = b.no;
        opt.textContent = `${b.name} (${b.abbr})`;
        if (b.no === this.currentBook) opt.selected = true;
        cBookSelect.appendChild(opt);
      });
    });

    document.getElementById("btnCloseManageModal").addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Modal Nav Tabs
    document.querySelectorAll("[data-modal-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-modal-tab]").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".modal-tab-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const targetPane = document.getElementById(`modalPane-${btn.dataset.modalTab}`);
        if (targetPane) targetPane.classList.add("active");
      });
    });

    // Dropzones
    this.setupDropzone("bibleDropzone", "bibleFileInput", "biblePasteArea");
    this.setupDropzone("commDropzone", "commFileInput", "commPasteArea");

    // Template download buttons
    document.getElementById("btnDownloadBibleJsonTemplate").addEventListener("click", () => this.downloadTemplate("bible-json"));
    document.getElementById("btnDownloadBibleCsvTemplate").addEventListener("click", () => this.downloadTemplate("bible-csv"));
    document.getElementById("btnDownloadCommJsonTemplate").addEventListener("click", () => this.downloadTemplate("comm-json"));

    // Parse buttons
    document.getElementById("btnParseBible").addEventListener("click", () => this.parseAndImportBible());
    document.getElementById("btnParseComm").addEventListener("click", () => this.parseAndImportCommentary());

    // Export & Backup
    document.getElementById("btnExportAllData").addEventListener("click", () => this.exportAllUserData());

    document.getElementById("btnResetToDefaults").addEventListener("click", async () => {
      if (confirm("确定要清空所有自定义导入的圣经译本和注释吗？此操作不可逆！")) {
        indexedDB.deleteDatabase("BibleWorkbenchDB");
        location.reload();
      }
    });

    document.getElementById("btnRestoreAllData").addEventListener("click", () => {
      const input = document.getElementById("restoreFileInput");
      if (!input.files || input.files.length === 0) {
        alert("请先选择备份 JSON 文件！");
        return;
      }
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.customBibles) {
            for (const b of data.customBibles) await db.saveCustomBible(b);
          }
          if (data.customCommentaries) {
            for (const c of data.customCommentaries) await db.saveCustomCommentary(c);
          }
          alert("备份数据还原成功！页面即将刷新。");
          location.reload();
        } catch (err) {
          alert("还原失败: " + err.message);
        }
      };
      reader.readAsText(input.files[0]);
    });
  }

  navigateChapter(direction) {
    const book = BOOK_MAP.get(this.currentBook);
    const maxChap = book ? book.chapters : 1;

    let newChap = this.currentChapter + direction;
    if (newChap < 1) {
      if (this.currentBook > 1) {
        this.currentBook--;
        const prevBook = BOOK_MAP.get(this.currentBook);
        this.currentChapter = prevBook ? prevBook.chapters : 1;
      } else {
        return;
      }
    } else if (newChap > maxChap) {
      if (this.currentBook < 66) {
        this.currentBook++;
        this.currentChapter = 1;
      } else {
        return;
      }
    } else {
      this.currentChapter = newChap;
    }

    this.currentVerse = 1;
    document.getElementById("bookSelect").value = this.currentBook;
    this.updateChapterSelect();
    document.getElementById("chapterSelect").value = this.currentChapter;
    this.updateVerseSelect();

    this.renderPassage();
    this.renderLeftPanel();
    this.renderBookIntro();
    this.renderCommentary();
  }

  setLayoutMode(mode) {
    this.layoutMode = mode;
    document.body.dataset.layout = mode;
    document.querySelectorAll(".btn-mode").forEach(btn => {
      btn.classList.toggle("active", parseInt(btn.dataset.mode) === mode);
    });

    // Reset explicit inline style overrides
    const left = document.getElementById("leftPanel");
    const center = document.getElementById("centerPanel");
    const right = document.getElementById("rightPanel");
    left.style.display = "";
    center.style.display = "";
    right.style.display = "";

    this.renderPassage();
  }

  setTheme(theme) {
    document.body.className = document.body.className.replace(/theme-\w+/, `theme-${theme}`);
    localStorage.setItem("bible_workbench_theme", theme);
  }

  adjustFontSize(delta) {
    const sizes = ["font-s", "font-m", "font-l", "font-xl"];
    let curIdx = sizes.findIndex(s => document.body.classList.contains(s));
    if (curIdx === -1) curIdx = 1;
    const newIdx = Math.max(0, Math.min(sizes.length - 1, curIdx + delta));
    sizes.forEach(s => document.body.classList.remove(s));
    document.body.classList.add(sizes[newIdx]);
    localStorage.setItem("bible_workbench_fontsize", sizes[newIdx]);
  }

  loadSavedPreferences() {
    const savedTheme = localStorage.getItem("bible_workbench_theme") || "light";
    this.setTheme(savedTheme);
    document.getElementById("themeSelect").value = savedTheme;

    const savedSize = localStorage.getItem("bible_workbench_fontsize") || "font-m";
    ["font-s", "font-m", "font-l", "font-xl"].forEach(s => document.body.classList.remove(s));
    document.body.classList.add(savedSize);
  }
}

// Start app on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  window.workbenchApp = new BibleWorkbenchApp();
  window.workbenchApp.init();
});
