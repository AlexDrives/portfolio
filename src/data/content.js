export const languages = ['en', 'zh']

export const content = {
  en: {
    localeLabel: 'EN',
    switchLabel: 'Language',
    nav: { home: 'Home', research: 'Research', projects: 'Projects', experience: 'Experience', about: 'About', contact: 'Contact', navigate: 'Navigate', menu: 'Menu', system: 'Simulation Agents', identity: 'Junhao Liu' },
    hero: {
      eyebrow: 'Embodied AI · Robotics · Intelligent Perception',
      title: ['Machines that', 'understand, reason,', 'and act.'],
      focus: 'Building agents that move from perception to action.',
      explore: 'Explore Research', projects: 'View Projects', tags: ['3D Vision', 'Simulation Agents', 'World Models', 'Affordance Reasoning'],
    },
    research: {
      kicker: 'Research / 01',
      heading: 'Understanding and building agents for physical worlds.',
      items: [
        { number: '01', title: '3D Vision & Affordance Reasoning', description: 'Explore how 3D visual understanding can support reasoning about objects, spatial relationships, affordances, and possible actions in physical environments.', flow: 'Scene → Geometry → Objects → Affordances → Actions' },
        { number: '02', title: 'Simulation LLM Agents', description: 'Explore LLM-based agents that understand, reason about, and interact with simulated environments — interpreting tasks, decomposing them, planning, using tools, and navigating constraints.', flow: 'Language → Environment → Reasoning → Planning → Interaction' },
        { number: '03', title: 'Natural-Language Simulation Scene Editing', description: 'Explore how natural-language instructions can become precise modifications of simulated environments, from placement and manipulation to semantic editing and spatial constraints.', flow: 'Language → Semantics → Constraints → Scene → Task' },
        { number: '04', title: 'World Models & Post-Training', description: 'Explore how world models can become more useful for embodied agents through post-training, interaction, reasoning, and task-oriented learning.', flow: 'Predict → Reason → Plan → Act' },
      ],
    },
    experience: {
      kicker: 'Experience / 02',
      heading: 'Working toward capable systems that meet the physical world.',
      read: 'Read the experience',
      items: [
        { title: 'Environment Reasoning R&D', organization: 'ABB Robotics', date: '2026 — Present', tags: ['Embodied AI', 'Environment Reasoning', 'Task Planning', 'MLLM'], description: 'Building simulation asset and scene-generation workflows, Port–Mate representations, and constraint-aware agents for language-driven environment construction.' , slug: 'abb' },
        { title: 'AI Algorithm Engineering', organization: 'Co-Creative Data Technology', date: '2026 / 04 — 2026 / 06', tags: ['Isaac Sim', 'RL', 'Go2', 'ROS2'], description: 'Migrating and retraining visual navigation for Unitree Go2, then improving sim-to-real robustness through reward design and domain randomization.', slug: 'cocreate' },
      ],
    },
    projects: {
      kicker: 'Selected Projects / 03',
      heading: 'Experiments in representation, perception, and decision-making.',
      github: 'AlexDrives on GitHub',
      items: [
        { title: 'RNA 3D Structure Representation & Reconstruction', date: '2025 / 10 — 2026 / 01', tags: ['GCP-VQVAE', 'RNA Structure', 'Generative Models'], description: 'Extended a protein-oriented GCP-VQVAE pipeline to RNA structure representation, discrete tokens, and 3D backbone reconstruction.', metrics: ['~1,600 RNA structures', 'TM-score 0.7–0.8', '~100% codebook activation'], url: 'https://github.com/AlexDrives/RNA-GCP-VQVAE' },
        { title: 'Autonomous Dice Stacking', date: '2026 / 03 — 2026 / 05', tags: ['Computer Vision', 'Robotics', 'OpenCV'], description: 'Built an OpenMV + OpenCV + suction-arm loop from dice perception and calibration to real-robot sorting and stacking.', metrics: ['27 dice / frame', '0.740 mm mean error', '26s / 6 dice'], url: 'https://github.com/AlexDrives/Dice-detection-and-auto-stacking-with-OpenMV-and-OpenCV' },
        { title: 'Kuhn Poker: Self-Play RL vs. CFR', date: '2025 / 11 — 2025 / 12', tags: ['Reinforcement Learning', 'CFR', 'Game Theory'], description: 'Implemented self-play REINFORCE and compared its convergence behavior with CFR/CFR+ using exploitability.', url: 'https://github.com/AlexDrives/kuhn_poker-exp' },
        { title: 'Answer Sheet Recognition', date: '2025 / 12 — 2026 / 01', tags: ['Computer Vision', 'OpenCV', 'Geometric Vision'], description: 'Developed OpenCV preprocessing, geometric correction, contour analysis, and perspective transformation for automated grading.', url: 'https://github.com/AlexDrives/answer-sheet-recognition-without-neural-network' },
      ],
    },
    about: { kicker: 'About / 04', heading: 'I am a student at Shanghai Jiao Tong University working at the intersection of AI, robotics, and intelligent perception.', body: 'My interests center on 3D vision, affordance reasoning, simulation agents, and world models.', school: 'Shanghai Jiao Tong University', major: 'Intelligent Perception Engineering', expected: 'Expected 2027', gpa: 'GPA 3.5 / 4.3', education: 'Education' },
    contact: { kicker: 'Technical Constellation / 05', contact: 'Contact', heading: ['Let’s make sense', 'of physical worlds.'], github: 'GitHub', resume: 'Resume', stack: { 'AI / Data': ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'OpenSpiel', 'HDF5', 'cd-hit'], 'Robotics / Simulation': ['ROS2', 'NVIDIA Isaac Sim', 'OmniGibson', 'Unitree Go2', 'MATLAB / Simulink'], Programming: ['C++', 'MATLAB'] }, flow: 'Perceive → Reason → Simulate → Act' },
    detail: {
      back: 'Back to portfolio', backHome: 'Back home', atGlance: 'At a glance', working: 'Working loop', evidence: 'Evidence kept visible', boundariesKicker: 'Boundaries / Next questions', boundariesTitle: 'What the work does not claim.', return: 'Return to all experience', viewOther: 'View', notFound: 'Experience not found.',
      abb: {
        eyebrow: 'Experience / 01', title: 'Environment Reasoning R&D', organization: 'ABB Robotics', date: '2026 / 06 — Present', lead: 'From environment observations to simulation-ready assets, relational scene plans, and verifiable targets for robot learning.', summary: 'This internship explores environment understanding and task planning for embodied intelligence. The current work connects SimFoundry, OmniGibson, video-to-simulation, RGB-to-simulation, Port–Mate scene representations, and constraint-aware physical agents.', tags: ['Embodied AI', 'Real2Sim', 'Port–Mate', 'LLM / VLM Agents'],
        sections: [
          { label: '01 / Pipeline', title: 'Turn observations into simulation-ready worlds.', body: 'A SimFoundry + OmniGibson workflow is being built for automated asset and scene generation. It connects environment observations to asset modeling, scene construction, collider and rigid-body setup, and a physics-ready simulation environment for Real2Sim and robotics use cases.' },
          { label: '02 / Representation', title: 'Port–Mate relations make scene structure explicit.', body: 'Inspired by CAD assembly and affordance reasoning, functional parts are represented as Ports and semantic relationships as Mates. An automatic port-construction and annotation skill turns functional regions into geometric constraints, supporting compositional multi-object scene construction and natural-language scene editing.' },
          { label: '03 / Agent', title: 'Language proposes; geometry and physics constrain.', body: 'An LLM / VLM agent with a geometric solver parses natural-language tasks into target object relations and scene states, then produces an interpretable construction plan. A Critic agent scores generated scenes against task constraints, physical feasibility, and scene consistency, returning diagnosis and iterative feedback.' },
          { label: '04 / Physics', title: 'A generated asset is not ready until it behaves.', body: 'The asset pipeline automatically builds colliders and rigid-body properties, configuring mass, inertia, and rigid-body parameters. The goal is a verifiable target pose and environment state that can support reinforcement-learning objectives and robot-operation trajectory generation.' },
        ],
        steps: [['Observe', 'Video, RGB, and scene context'], ['Build', 'Assets, colliders, and rigid-body properties'], ['Relate', 'Ports, Mates, and semantic constraints'], ['Plan', 'LLM / VLM decomposition and geometry solving'], ['Critique', 'Physical feasibility and scene-consistency feedback']],
        evidence: ['SimFoundry + OmniGibson is used as the core asset and scene-generation workflow.', 'Port–Mate representation supports compositional relationships across multiple objects.', 'The agent design combines task decomposition, relation reasoning, constraint validation, and a Critic feedback loop.'],
        boundaries: ['The work is an active engineering and research direction; it does not claim a universal scene generator.', 'Generated geometry still needs physical and semantic validation instead of being accepted from visual plausibility alone.', 'The details describe documented pipelines and prototypes, not an established benchmark result.'],
        media: [
          { src: '/experience/abb/s01_terminal_rollout.png', alt: 'AssemWorld terminal rollout frame' },
          { src: '/experience/abb/s02_affordance_r1_reasoning.png', alt: 'Affordance reasoning research frame' },
          { src: '/experience/abb/s05_agent_restricted_pipeline.png', alt: 'Restricted agent pipeline diagram' },
          { src: '/experience/abb/s06_execution_rollout.png', alt: 'Simulation execution rollout frame' },
        ],
        other: 'Co-Creative Data Technology',
      },
      cocreate: {
        eyebrow: 'Experience / 02', title: 'AI Algorithm Engineering', organization: 'Co-Creative Data Technology', date: '2026 / 04 — 2026 / 06', lead: 'Training, adapting, and stress-testing visual navigation for a four-legged robot in simulation.', summary: 'The internship focused on moving a visual navigation policy from an Orbit-based setup to Isaac Lab, retraining it for Unitree Go2 in Isaac Sim, and improving robustness across simulation and real-robot conditions.', tags: ['Isaac Lab', 'NavRL', 'Unitree Go2', 'Sim2Real'],
        sections: [
          { label: '01 / Migration', title: 'Build the training environment around the robot.', body: 'The navigation training stack was migrated from Orbit to Isaac Lab. A Unitree Go2 simulation environment was built in Isaac Sim, and a navigation policy originally designed for drones was adapted and retrained for a quadruped platform.' },
          { label: '02 / Behavior', title: 'Reward design shapes how a robot moves.', body: 'State observations, action spaces, and reward functions were adjusted to address lateral drift, crab walking, and heading deviation during training. The focus was not only reaching a goal, but producing behavior that remains interpretable and useful on the robot body.' },
          { label: '03 / Sim2Real', title: 'Make uncertainty part of the training problem.', body: 'Domain randomization introduced control delay, observation noise, and external disturbances into simulation training. These factors model the uncertainty encountered by a real robot and improve the policy’s tolerance to imperfect sensing and actuation.' },
          { label: '04 / Data', title: 'Connect first-person video to motion generation.', body: 'A first-person visual-navigation pipeline was explored using VGGT to extract 3D spatial information from ego-centric video, followed by a diffusion model for generating motion velocities from visual observations.' },
        ],
        steps: [['Migrate', 'Orbit setup to Isaac Lab'], ['Train', 'Go2 simulation and NavRL adaptation'], ['Shape', 'Observation, action, and reward design'], ['Randomize', 'Delay, noise, and external disturbance'], ['Bridge', 'ROS2, real-robot tests, and failure analysis']],
        evidence: ['The updated resume records Isaac Lab migration and Go2 navigation-policy retraining.', 'Behavior optimization targeted lateral drift, crab walking, and heading deviation.', 'The pipeline includes domain randomization and a VGGT + diffusion direction for visual navigation data and velocity generation.'],
        boundaries: ['The work documents an internship pipeline and experiments, not a claim of universally robust navigation.', 'Domain randomization improves robustness as a strategy; it is not presented as a guarantee of sim-to-real success.', 'The VGGT and diffusion pipeline is described as an active research direction rather than a finished dataset or product.'],
        media: [],
        other: 'ABB Robotics',
      },
    },
  },
  zh: {
    localeLabel: '中文',
    switchLabel: '语言',
    nav: { home: '首页', research: '研究', projects: '项目', experience: '经历', about: '关于', contact: '联系', navigate: '导航', menu: '菜单', system: '仿真智能体', identity: '刘俊豪' },
    hero: {
      eyebrow: '具身智能 · 机器人 · 智能感知',
      title: ['让机器', '理解、推理，', '并行动。'],
      focus: '让智能体从感知走向行动。',
      explore: '探索研究', projects: '查看项目', tags: ['三维视觉', '仿真智能体', '世界模型', '可供性推理'],
    },
    research: {
      kicker: '研究 / 01',
      heading: '理解并构建面向物理世界的智能体。',
      items: [
        { number: '01', title: '三维视觉与可供性推理', description: '探索三维视觉理解如何支持对物体、空间关系、可供性与物理环境中可能动作的推理。', flow: '场景 → 几何 → 物体 → 可供性 → 动作' },
        { number: '02', title: '仿真 LLM 智能体', description: '探索能够理解、推理并交互于仿真环境的 LLM 智能体，包括任务理解、分解、规划、工具使用与约束处理。', flow: '语言 → 环境 → 推理 → 规划 → 交互' },
        { number: '03', title: '自然语言仿真场景编辑', description: '探索如何将自然语言指令转化为对仿真环境的精确修改，包括物体放置、操作、语义编辑与空间约束。', flow: '语言 → 语义 → 约束 → 场景 → 任务' },
        { number: '04', title: '世界模型与后训练', description: '探索通过后训练、交互、推理与面向任务的学习，让世界模型更好地服务于具身智能体。', flow: '预测 → 推理 → 规划 → 行动' },
      ],
    },
    experience: {
      kicker: '实习经历 / 02',
      heading: '让智能系统真正面对物理世界。',
      read: '阅读经历详情',
      items: [
        { title: '环境推理研发实习生', organization: 'ABB Robotics', date: '2026 / 06 — 至今', tags: ['具身智能', '环境推理', '任务规划', 'MLLM'], description: '围绕 SimFoundry、OmniGibson、Port–Mate 表示与约束智能体，构建由语言驱动的仿真资产和场景生成工作流。', slug: 'abb' },
        { title: 'AI 算法工程师实习生', organization: '协创数据技术', date: '2026 / 04 — 2026 / 06', tags: ['Isaac Sim', '强化学习', 'Go2', 'ROS2'], description: '完成四足机器人导航训练框架迁移与策略重新训练，并通过奖励设计和域随机化提升 Sim2Real 鲁棒性。', slug: 'cocreate' },
      ],
    },
    projects: {
      kicker: '精选项目 / 03',
      heading: '关于表征、感知与决策的实验。',
      github: 'AlexDrives GitHub',
      items: [
        { title: 'RNA 三维结构离散表示与重建', date: '2025 / 10 — 2026 / 01', tags: ['GCP-VQVAE', 'RNA 结构', '生成模型'], description: '将蛋白质方向的 GCP-VQVAE 流程扩展到 RNA 结构表征、离散 Token 与主链三维重建。', metrics: ['约 1,600 个 RNA 结构', 'TM-score 0.7–0.8', '近 100% 码本激活度'], url: 'https://github.com/AlexDrives/RNA-GCP-VQVAE' },
        { title: '机械臂自主骰子堆叠', date: '2026 / 03 — 2026 / 05', tags: ['计算机视觉', '机器人', 'OpenCV'], description: '使用 OpenMV、OpenCV 与吸盘机械臂，搭建从骰子感知、标定到真实机器人分拣和堆叠的闭环。', metrics: ['单帧 27 个骰子', '平均定位误差 0.740 mm', '6 枚骰子 / 26 秒'], url: 'https://github.com/AlexDrives/Dice-detection-and-auto-stacking-with-OpenMV-and-OpenCV' },
        { title: 'Kuhn Poker：强化学习自博弈 vs. CFR', date: '2025 / 11 — 2025 / 12', tags: ['强化学习', 'CFR', '博弈论'], description: '实现自博弈 REINFORCE，并使用可剥削度比较其与 CFR/CFR+ 的收敛行为。', url: 'https://github.com/AlexDrives/kuhn_poker-exp' },
        { title: '答题卡识别与自动评分', date: '2025 / 12 — 2026 / 01', tags: ['计算机视觉', 'OpenCV', '几何视觉'], description: '开发 OpenCV 预处理、几何校正、轮廓分析与透视变换模块，实现自动化阅卷。', url: 'https://github.com/AlexDrives/answer-sheet-recognition-without-neural-network' },
      ],
    },
    about: { kicker: '关于 / 04', heading: '我目前就读于上海交通大学，关注人工智能、机器人与智能感知的交叉方向。', body: '我的兴趣集中在三维视觉、可供性推理、仿真智能体与世界模型。', school: '上海交通大学', major: '智能感知专业', expected: '预计 2027 年毕业', gpa: 'GPA 3.5 / 4.3', education: '教育背景' },
    contact: { kicker: '技术版图 / 05', contact: '联系', heading: ['一起理解', '物理世界。'], github: 'GitHub', resume: '简历', stack: { 'AI / 数据': ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'OpenSpiel', 'HDF5', 'cd-hit'], '机器人 / 仿真': ['ROS2', 'NVIDIA Isaac Sim', 'OmniGibson', 'Unitree Go2', 'MATLAB / Simulink'], 编程: ['C++', 'MATLAB'] }, flow: '感知 → 推理 → 仿真 → 行动' },
    detail: {
      back: '返回主页', backHome: '返回主页', atGlance: '概览', working: '工作闭环', evidence: '保留的证据', boundariesKicker: '边界 / 下一步问题', boundariesTitle: '这段经历没有声称什么。', return: '返回全部经历', viewOther: '查看', notFound: '未找到该经历。',
      abb: {
        eyebrow: '实习经历 / 01', title: '环境推理研发实习生', organization: 'ABB Robotics', date: '2026 / 06 — 至今', lead: '从环境观测出发，构建可用于仿真的资产、关系化场景计划与可验证的机器人学习目标。', summary: '这段实习围绕具身智能中的环境理解与任务规划展开，将 SimFoundry、OmniGibson、视频到仿真、RGB 到仿真、Port–Mate 场景表示与物理约束智能体连接成一条工作流。', tags: ['具身智能', 'Real2Sim', 'Port–Mate', 'LLM / VLM 智能体'],
        sections: [
          { label: '01 / 工作流', title: '把环境观测转化为可运行的仿真世界。', body: '围绕 SimFoundry + OmniGibson 构建自动化仿真资产与场景生成工作流，连接环境观测、资产建模、场景构建、碰撞体与刚体属性设置，面向 Real2Sim 和机器人应用搭建可运行的物理仿真环境。' },
          { label: '02 / 表示', title: '用 Port–Mate 关系显式表达场景结构。', body: '受到 CAD 装配与可供性推理启发，将物体功能部位表示为 Port，将语义关系表示为 Mate。通过功能端口自动构建与标注 skill，把功能区域转成几何约束，支持多物体组合式场景构建与自然语言场景编辑。' },
          { label: '03 / Agent', title: '语言提出候选，几何与物理负责约束。', body: '构建 LLM / VLM + 几何求解器物理 Agent，将自然语言任务解析为目标物体关系和场景状态，生成可解释的场景构建计划；进一步设计 Critic Agent，依据任务约束、物理可行性与场景一致性评分、诊断并反馈修正。' },
          { label: '04 / 物理', title: '资产生成完成后，还要真正表现得像物理物体。', body: '资产管线自动构建 collider 和刚体属性，配置 Mass、Inertia、Rigid Body 等参数。目标是为强化学习目标设定与机器人操作轨迹生成提供可验证的目标位姿和环境状态。' },
        ],
        steps: [['观测', '视频、RGB 与场景上下文'], ['构建', '资产、碰撞体与刚体属性'], ['关联', 'Port、Mate 与语义约束'], ['规划', 'LLM / VLM 分解与几何求解'], ['评价', '物理可行性与场景一致性反馈']],
        evidence: ['以 SimFoundry + OmniGibson 为核心搭建资产与场景生成工作流。', 'Port–Mate 表示用于多个物体之间的组合关系。', 'Agent 结合任务分解、关系推理、约束验证与 Critic 反馈闭环。'],
        boundaries: ['这是一条正在推进的工程与研究方向，不声称已经实现通用场景生成。', '生成的几何结果仍需经过物理与语义验证，不能只凭视觉合理性接受。', '页面描述的是简历与材料中记录的管线和原型，不虚构额外 benchmark 结果。'],
        media: [
          { src: '/experience/abb/s01_terminal_rollout.png', alt: 'AssemWorld 终态 rollout' },
          { src: '/experience/abb/s02_affordance_r1_reasoning.png', alt: '可供性推理研究图' },
          { src: '/experience/abb/s05_agent_restricted_pipeline.png', alt: '受限 Agent 管线图' },
          { src: '/experience/abb/s06_execution_rollout.png', alt: '仿真执行 rollout' },
        ],
        other: '协创数据技术',
      },
      cocreate: {
        eyebrow: '实习经历 / 02', title: 'AI 算法工程师实习生', organization: '协创数据技术股份有限公司', date: '2026 / 04 — 2026 / 06', lead: '在仿真中训练、迁移并检验四足机器人的视觉导航策略。', summary: '这段实习围绕将视觉导航策略迁移到宇树 Go2 展开：从 Orbit 到 Isaac Lab 的训练环境迁移，到 Isaac Sim 中的策略重新训练，再到真实机器人条件下的鲁棒性分析。', tags: ['Isaac Lab', 'NavRL', 'Unitree Go2', 'Sim2Real'],
        sections: [
          { label: '01 / 迁移', title: '围绕真实机器人搭建训练环境。', body: '完成 Orbit 到 Isaac Lab 的仿真框架迁移，在 Isaac Sim 中搭建宇树 Go2 仿真训练环境，并将原面向无人机的 NavRL 导航策略适配到四足机器人平台后重新训练。' },
          { label: '02 / 行为', title: '奖励函数决定机器人如何走。', body: '调整状态观测、动作空间与奖励函数，针对横向漂移、侧身行走（Crab Walking）和朝向偏差等训练问题进行行为优化。重点不仅是到达目标，也包括让策略产生适合机器人本体的可解释运动。' },
          { label: '03 / Sim2Real', title: '把不确定性纳入训练问题。', body: '通过域随机化在仿真训练中加入控制延迟、观测噪声与外部扰动等真实因素，增强导航策略对真实机器人运行中不完美感知与执行的鲁棒性。' },
          { label: '04 / 数据', title: '把第一视角视频连接到速度生成。', body: '围绕第一视角人类视频开展视觉导航研究，利用 VGGT 提取视频三维空间信息，并搭建从第一视角观测到运动速度生成的扩散模型方向。' },
        ],
        steps: [['迁移', 'Orbit 到 Isaac Lab'], ['训练', 'Go2 仿真与 NavRL 适配'], ['塑形', '观测、动作与奖励设计'], ['随机化', '延迟、噪声与外部扰动'], ['桥接', 'ROS2、实机测试与失效分析']],
        evidence: ['新简历记录了 Isaac Lab 迁移和 Go2 导航策略重新训练。', '行为优化针对横向漂移、Crab Walking 与朝向偏差。', '管线包含域随机化，以及 VGGT + 扩散模型的视觉导航数据与速度生成方向。'],
        boundaries: ['页面描述实习期间的管线和实验，不声称导航策略具备普适鲁棒性。', '域随机化是一种增强策略鲁棒性的工程方法，不等同于保证 Sim2Real 成功。', 'VGGT 与扩散模型方向仍是研究工作，不声称已经形成完整数据集或产品。'],
        media: [],
        other: 'ABB Robotics',
      },
    },
  },
}

export const localized = (language) => content[language] || content.en
