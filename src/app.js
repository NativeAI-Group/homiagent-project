const translations = {
  "nav.research": ["研究", "Research"],
  "prototype.description": [
    "面向真实家庭的具身智能技术原型。",
    "Our technical prototype for embodied AI in real homes."
  ],
  "prototype.metaTitle": ["HomiAgent-0 — 技术原型 | HomiAgent", "HomiAgent-0 — Technical prototype | HomiAgent"],
  "research.description": [
    "构建 HomiAgent 过程中的技术记录与思考。",
    "Technical notes on building HomiAgent."
  ],
  "research.metaTitle": ["研究 — 技术博客 | HomiAgent", "Research — Tech Blog | HomiAgent"],
  "research.all": ["全部", "All"],
  "research.harness": ["框架", "Harness"],
  "research.memory": ["记忆", "Memory"],
  "research.categories": ["研究分类", "Research categories"],
  "research.results": ["显示 {count} 篇研究记录。", "Research notes shown: {count}."],
  "hero.subtitle": [
    "面向真实家庭的开源具身 Agent",
    "Open-source embodied agents for real homes."
  ],
  "hero.description": [
    "一个面向真实家庭、邀请开发者共同构建的开源具身 Agent 项目。",
    "An open-source embodied Agent project for real homes, built together with developers."
  ],
  "hero.explore": [
    "在 GitHub 查看",
    "View on GitHub"
  ],
  "hero.more": [
    "探索 HomiAgent-0",
    "Explore HomiAgent-0"
  ],
  "scene.title": [
    "A Robot Like Homi.",
    "A Robot Like Homi."
  ],
  "beliefs.title": [
    "我们相信什么",
    "What we believe"
  ],
  "beliefs.one.title": [
    "具身原生",
    "Embodied by design"
  ],
  "beliefs.one.body": [
    "围绕真实环境中的感知、决策与执行闭环，设计框架与模型。",
    "Design the harness and models around perception, reasoning, and action in physical environments."
  ],
  "beliefs.two.title": [
    "开放与共建",
    "Open by design"
  ],
  "beliefs.two.body": [
    "让系统能够被理解、研究和扩展，邀请开发者适配不同机器人，共同验证家庭场景。",
    "Make the system understandable and extensible. Invite developers to adapt it to different robots and explore real household scenarios."
  ],
  "beliefs.three.title": [
    "在真实场景中学习",
    "Learn from real homes"
  ],
  "beliefs.three.body": [
    "从家庭环境的变化与交互反馈出发，探索机器人长期学习与适应的方式。",
    "Use changes in the home and feedback from interactions to explore long-term learning and adaptation."
  ],
  "tech.title": [
    "项目架构",
    "Project architecture"
  ],
  "tech.one.body": [
    "以极简内核与插件架构组织实时执行，连接模型、记忆与机器人。",
    "Organize real-time execution through a minimal core and plugins, connecting models, memory, and the robot."
  ],
  "tech.two.body": [
    "通过 UPM、WSM 与 RAM 组织用户画像、世界状态与机器人经历，为长期交互提供上下文。",
    "Organize user profiles, world states, and robot experiences through UPM, WSM, and RAM to provide context across interactions."
  ],
  "tech.three.body": [
    "连接 RoboBrain 的高层理解与决策，以及 RoboGAM 的动作生成与闭环执行。",
    "Connect high-level understanding and decisions in RoboBrain with action generation and closed-loop execution in RoboGAM."
  ],
  "common.discover": [
    "模块介绍",
    "Module overview"
  ],
  "common.close": [
    "关闭详情",
    "Close details"
  ],
  "abilities.title": ["核心能力", "Core capabilities"],
  "abilities.generalization.title": ["泛化性", "Generalization"],
  "abilities.generalization.subtitle": ["能否适应不同的家庭、物体与任务？", "Can robots adapt to different homes, objects, and tasks?"],
  "abilities.generalization.steps": ["不同家庭 · 不同物体 · 不同任务", "New homes · New objects · New tasks"],
  "abilities.generalization.diagram": ["概念示意：同一个机器人连接布局与物体不同的三个家庭，表示跨场景适应的探索方向。", "Concept diagram: one robot connects to three homes with different layouts and objects, illustrating the goal of adapting across settings."],
  "abilities.teachability.title": ["可培育", "Teachability"],
  "abilities.evolution.title": [
    "自进化",
    "Self-Evolution"
  ],
  "abilities.proactivity.title": [
    "主动性",
    "Proactivity"
  ],
  "highlights.one": [
    "以极简内核、插件机制与实时反馈，连接家庭机器人的感知、决策和执行。",
    "How a minimal core, plugins, and real-time feedback connect perception, reasoning, and execution for robots in the home."
  ],
  "highlights.two": [
    "通过用户画像、世界状态与机器人经历，构建支持长期个性化服务的三层记忆。",
    "How user profiles, world states, and robot experiences form a memory foundation for long-term personalized assistance."
  ],
  "community.title": [
    "一起构建<br><span class=\"serif\">HomiAgent。</span>",
    "Build HomiAgent.<br><span class=\"serif\">Together.</span>"
  ],
  "community.body": [
    "分享家庭场景与实验，贡献插件，或一起适配更多机器人。",
    "Share home use cases and experiments, contribute plugins, or help connect more robots."
  ],
  "community.button": [
    "在 GitHub 参与",
    "Join on GitHub"
  ],
  "footer.top": [
    "回到顶部",
    "Back to top"
  ],
  "abilities.teachability.subtitle": ["能否通过人的示范、指导与纠正学会新技能？", "Can robots learn through demonstration, guidance, and correction?"],
  "abilities.evolution.subtitle": ["能否从执行经验与反馈中持续改进？", "Can robots improve through experience and feedback?"],
  "abilities.proactivity.subtitle": ["能否结合情境与记忆，判断何时、如何提供帮助？", "Can robots use context and memory to decide when and how to help?"],
  "highlights.one.title": [
    "RoBIOS：插件式的具身原生Harness架构",
    "RoBIOS: A Plugin-Based, Embodied-Native Harness Architecture"
  ],
  "highlights.two.title": [
    "HomiMemo：面向家庭机器人终身个性化服务的记忆",
    "HomiMemo: A Memory for Lifelong Personalized Household Robots"
  ],
  "tech.intro": ["RoBIOS 协调模型推理、记忆与机器人执行，形成持续的反馈闭环。", "RoBIOS coordinates model reasoning, memory, and robot execution in a continuous feedback loop."],
  "modules.title": ["主要模块", "Core modules"],
  "architecture.home": ["真实家庭", "Real home"],
  "architecture.homeBody": ["用户任务与环境", "People, tasks & surroundings"],
  "architecture.input": ["任务与观察", "Tasks + observations"],
  "architecture.harness": ["协调模型、记忆与执行", "Coordinate models, memory & execution"],
  "architecture.modelRole": ["理解与动作生成", "Reasoning & action generation"],
  "architecture.memoryRole": ["长期上下文", "Long-term context"],
  "architecture.context": ["读取上下文", "Read context"],
  "architecture.experience": ["写入经历", "Write experience"],
  "architecture.output": ["执行指令", "Actions"],
  "architecture.robot": ["机器人执行", "Robot execution"],
  "architecture.robotBody": ["在物理世界中行动", "Act in the physical world"],
  "architecture.feedback": ["新观察与执行反馈", "New observations + execution feedback"],
  "architecture.description": ["任务与观察进入 RoBIOS，由其协调 HomiBrain 进行理解与动作生成，并通过 HomiMemo 读取上下文、记录经历。机器人在家庭中执行动作，新的观察与执行反馈进入下一轮。", "Tasks and observations enter RoBIOS, which coordinates HomiBrain for reasoning and action generation and HomiMemo for context and experience. The robot acts in the home; new observations and execution feedback return to the next cycle."],
  "abilities.intro": ["希望与社区共同探索和验证的能力方向。", "Capability directions to explore and validate with the community."],
  "abilities.contribute": [
    "参与探索",
    "Join the exploration"
  ],
  "meta.title": [
    "HomiAgent — 面向真实家庭的开源具身 Agent",
    "HomiAgent — Open-source embodied agents for real homes"
  ],
  "abilities.teachability.steps": ["示范 → 指导 → 纠正", "Demonstrate → Guide → Correct"],
  "abilities.evolution.steps": [
    "尝试执行 → 获得反馈 → 调整策略",
    "Try → Get feedback → Adapt"
  ],
  "abilities.proactivity.steps": [
    "观察情境 + 长期记忆 → 判断是否帮助",
    "Context + Memory → Decide whether to help"
  ],
  "abilities.teachability.diagram": ["过程示意：人示范移动杯子，机器人尝试执行，双向反馈与指导标记表示持续的指导和纠正。", "Concept diagram: a person demonstrates moving a cup and a robot tries the action; a return loop and guidance bubble represent ongoing guidance and correction."],
  "abilities.evolution.diagram": [
    "过程示意：机器人尝试的路线遇到障碍，根据反馈调整路线，绕开障碍继续探索。",
    "Concept diagram: a robot encounters an obstacle, uses feedback, and adjusts its route around it."
  ],
  "abilities.proactivity.diagram": [
    "过程示意：机器人结合当前情境与长期记忆，判断是否主动提供帮助；问号表示待判断的行动。",
    "Concept diagram: a robot combines current context and long-term memory to decide whether to offer help; a question mark represents the decision."
  ]
};

const details = {
  robios: {
    category: 'THE HARNESS / RoBIOS',
    subtitle: ['具身原生的 Harness 框架', 'An embodied-native agent harness'],
    description: ['面向真实物理环境的 Agent 框架，采用“极简内核 + 生态插件”架构，支持实时闭环执行。', 'An Agent framework for physical environments, with a minimal core and ecosystem plugins for real-time closed-loop execution.'],
    points: [
      [['实时闭环', 'Real-time loops'], ['将环境反馈用于后续决策与动作。', 'Use environmental feedback to inform subsequent decisions and actions.']],
      [['极简内核', 'Minimal core'], ['内核聚焦具身执行的基础职责。', 'Keep the core focused on the essentials of embodied execution.']],
      [['插件扩展', 'Plugins'], ['通过插件支持不同机器人与家庭场景。', 'Support different robots and household tasks through plugins.']],
    ],
  },
  homimemo: {
    category: 'THE MEMORY / HomiMemo',
    subtitle: ['家庭机器人记忆模块', 'Memory for home robots'],
    description: ['整合三层记忆，为家庭机器人提供长期个性化服务。', 'Combine three memory layers to support long-term personalized assistance.'],
    points: [
      [['UPM · 用户画像记忆', 'UPM · User Profile Memory'], ['记录用户偏好、习惯与个性化需求。', 'Remember user preferences, habits, and personal needs.']],
      [['WSM · 世界状态记忆', 'WSM · World State Memory'], ['记录家庭空间与物品状态。', 'Track household spaces and object states.']],
      [['RAM · 机器人自传体记忆', 'RAM · Robot Autobiographical Memory'], ['保存历史交互与执行经验。', 'Retain past interactions and execution experience.']],
    ],
  },
  homibrain: {
    category: 'THE MODEL / HomiBrain',
    subtitle: ['大脑 + 小脑', 'Brain + cerebellum'],
    description: ['RoboBrain 与 RoboGAM 协同，连接高层决策与底层动作执行。', 'RoboBrain and RoboGAM connect high-level decisions with low-level action execution.'],
    points: [
      [['RoboBrain · 理解与决策', 'RoboBrain · Understanding and decisions'], ['理解家庭任务，进行高层决策。', 'Understand household tasks and make high-level decisions.']],
      [['RoboGAM · 动作生成与执行', 'RoboGAM · Action generation and execution'], ['RoboGAM（Geometry Action Model）生成底层动作，并根据环境反馈执行。', 'RoboGAM (Geometry Action Model) generates low-level actions and executes using environmental feedback.']],
      [['大小脑协同', 'Model coordination'], ['连接任务决策、动作生成与执行反馈。', 'Connect task decisions, action generation, and execution feedback.']],
    ],
  },
};

const articles = {
  'blog-robios': {
    category: 'TECH BLOG / FRAMEWORK',
    title: ['RoBIOS：插件式的具身原生Harness架构', 'RoBIOS: A Plugin-Based, Embodied-Native Harness Architecture'],
    subtitle: ['感知、决策与执行如何形成闭环', 'Connecting perception, reasoning, and action'],
    description: ['真实家庭的环境会在任务执行中不断变化。RoBIOS 的设计围绕实时反馈展开，让机器人根据环境变化调整后续决策与动作。', 'A home can change while a task is being carried out. RoBIOS is designed around real-time feedback, allowing subsequent decisions and actions to reflect those changes.'],
    points: [
      [['从环境反馈出发', 'Start with environmental feedback'], ['具身执行需要持续感知环境。一次动作完成后，新的观察进入下一轮决策，连接感知、决策与执行。', 'Embodied execution requires ongoing perception. Observations after an action inform the next decision, connecting perception, reasoning, and execution.']],
      [['让内核聚焦执行', 'Keep the core focused on execution'], ['RoBIOS 采用稳定、极简的内核，聚焦实时闭环执行。核心职责保持清晰，为不同应用提供共同基础。', 'RoBIOS uses a stable, minimal core focused on real-time closed-loop execution. Clear core responsibilities provide a common foundation for different applications.']],
      [['通过插件扩展应用', 'Extend applications through plugins'], ['不同机器人与家庭任务需要不同能力。插件架构让这些能力围绕内核扩展，为具身 Agent 的应用生态留出空间。', 'Different robots and household tasks need different capabilities. Plugins extend the core to support these needs and make room for an embodied Agent application ecosystem.']],
    ],
  },
  'blog-homimemo': {
    category: 'TECH BLOG / MEMORY',
    title: ['HomiMemo：面向家庭机器人终身个性化服务的记忆', 'HomiMemo: A Memory for Lifelong Personalized Household Robots'],
    subtitle: ['用户、环境与经历，如何构成长期记忆', 'Remembering people, spaces, and experiences'],
    description: ['家庭机器人的长期服务需要理解用户、环境与过去的经历。HomiMemo 将这三类信息组织为 UPM、WSM 与 RAM，作为个性化服务的记忆基础。', 'Long-term assistance at home requires knowledge of people, the environment, and past experiences. HomiMemo organizes these into UPM, WSM, and RAM as a memory foundation for personalization.'],
    points: [
      [['UPM：关于用户的记忆', 'UPM: Memory of people'], ['用户画像记忆记录偏好、习惯与个性化需求，帮助机器人理解不同家庭成员的服务需要。', 'User Profile Memory records preferences, habits, and personal needs, helping a robot understand the assistance each household member needs.']],
      [['WSM：关于环境的记忆', 'WSM: Memory of the environment'], ['世界状态记忆记录家庭空间与物品状态，为理解当前情境与判断后续行动提供依据。', 'World State Memory records household spaces and object states, informing an understanding of the current situation and subsequent actions.']],
      [['RAM：关于经历的记忆', 'RAM: Memory of experiences'], ['机器人自传体记忆保存历史交互与执行经验。三层记忆共同支持长期个性化服务，让记忆延续到一次交互之外。', 'Robot Autobiographical Memory retains past interactions and execution experience. Together, the three layers support personalization that continues beyond a single interaction.']],
    ],
  },
};

let lang = 'en';
try { lang = localStorage.getItem('homi-language') === 'zh' ? 'zh' : 'en'; } catch { /* Storage can be disabled by the browser. */ }
const languageButton = document.querySelector('.language-toggle');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const dialog = document.querySelector('#detail-dialog');
const page = document.body.dataset.page || 'home';
const researchFilters = document.querySelector('.research-filters');
const researchTabs = [...document.querySelectorAll('[data-research-filter]')];
const researchEntries = [...document.querySelectorAll('[data-research-category]')];

function updateResearchStatus() {
  if (!researchFilters) return;
  const index = lang === 'zh' ? 0 : 1;
  researchFilters.setAttribute('aria-label', translations['research.categories'][index]);
  document.querySelector('#research-status').textContent = translations['research.results'][index].replace('{count}', researchEntries.filter(entry => !entry.hidden).length);
}

function selectResearchCategory(tab, moveFocus = false) {
  const category = tab.dataset.researchFilter;
  researchTabs.forEach(button => {
    const selected = button === tab;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  researchEntries.forEach(entry => { entry.hidden = category !== 'all' && entry.dataset.researchCategory !== category; });
  document.querySelector('#research-results').setAttribute('aria-labelledby', tab.id);
  updateResearchStatus();
  if (moveFocus) tab.focus();
}

researchTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectResearchCategory(tab));
  tab.addEventListener('keydown', event => {
    const targets = { ArrowRight: (index + 1) % researchTabs.length, ArrowLeft: (index + researchTabs.length - 1) % researchTabs.length, Home: 0, End: researchTabs.length - 1 };
    if (Object.hasOwn(targets, event.key)) {
      event.preventDefault();
      selectResearchCategory(researchTabs[targets[event.key]], true);
    }
  });
});
if (researchFilters) researchFilters.hidden = false;

let lastDetailButton = null;
let activeDetail = null;

function applyLanguage() {
  const index = lang === 'zh' ? 0 : 1;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = translations[element.dataset.i18n];
    if (translation) element.innerHTML = translation[index];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = translations[element.dataset.i18nAlt][index];
  });
  document.querySelectorAll('.feature-card').forEach(card => {
    const moduleName = card.querySelector('h3').firstChild.textContent;
    card.querySelector('.feature-link').setAttribute('aria-label', `${moduleName} · ${translations['common.discover'][index]}`);
  });
  document.querySelector('.lang-zh').classList.toggle('active', lang === 'zh');
  document.querySelector('.lang-en').classList.toggle('active', lang === 'en');
  languageButton.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
  document.querySelector('.dialog-close').setAttribute('aria-label', lang === 'zh' ? '关闭详情' : 'Close details');
  const homeScene = document.querySelector('.home-scene');
  if (homeScene) homeScene.alt = lang === 'zh' ? '家庭机器人愿景插画：机器人在有沙发、绿植和咖啡的温暖客厅中' : 'An illustration of our home robot vision: a robot in a warm living room with a sofa, plants, and coffee';
  document.querySelectorAll('.brand').forEach(element => element.setAttribute('aria-label', lang === 'zh' ? 'HomiAgent 首页' : 'HomiAgent home'));
  document.title = translations[page === 'home' ? 'meta.title' : `${page}.metaTitle`][index];
  const description = translations[page === 'home' ? 'hero.description' : `${page}.description`][index];
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = description;
  updateMenuLabel();
  updateResearchStatus();
  if (activeDetail) fillDialog(activeDetail);
}

languageButton.addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  applyLanguage();
  try { localStorage.setItem('homi-language', lang); } catch { /* Keep language switching available without storage. */ }
});

function updateMenuLabel() {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', lang === 'zh' ? (isOpen ? '关闭导航' : '打开导航') : (isOpen ? 'Close navigation' : 'Open navigation'));
}
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileNav.hidden = true;
  updateMenuLabel();
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.hidden = isOpen;
  updateMenuLabel();
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
});
matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

function fillDialog(name) {
  const detail = details[name] || articles[name];
  const index = lang === 'zh' ? 0 : 1;
  document.querySelector('#dialog-category').textContent = detail.category;
  dialog.classList.toggle('article-dialog', Boolean(articles[name]));
  document.querySelector('#dialog-title').textContent = detail.title?.[index] || { robios: 'RoBIOS', homimemo: 'HomiMemo', homibrain: 'HomiBrain' }[name];
  document.querySelector('#dialog-subtitle').textContent = detail.subtitle[index];
  document.querySelector('#dialog-description').textContent = detail.description[index];
  const points = document.querySelector('#dialog-points');
  points.replaceChildren(...detail.points.map(([title, description]) => {
    const point = document.createElement('div');
    point.className = 'dialog-point';
    const heading = document.createElement('strong');
    heading.textContent = title[index];
    const paragraph = document.createElement('p');
    paragraph.textContent = description[index];
    point.append(heading, paragraph);
    return point;
  }));
}
document.querySelectorAll('[data-detail]').forEach(button => {
  button.addEventListener('click', () => {
    activeDetail = button.dataset.detail;
    lastDetailButton = button;
    fillDialog(activeDetail);
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-done').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  activeDetail = null;
  lastDetailButton?.focus({ preventScroll: true });
});

if ('IntersectionObserver' in window) {
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.documentElement.classList.add('js-motion');
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
}

document.querySelector('#year').textContent = String(new Date().getFullYear());
applyLanguage();
