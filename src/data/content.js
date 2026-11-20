export const languages = ['en', 'zh']

export const content = {
  en: {
    localeLabel: 'EN',
    switchLabel: 'Language',
    cvUrl: '/Junhao_Liu_CV.pdf',
    nav: {
      home: 'Home',
      research: 'Research',
      experience: 'Experience',
      projects: 'Work',
      about: 'About',
      contact: 'Contact',
      cv: 'CV',
      navigate: 'Navigation',
      menu: 'Menu',
      identity: 'Junhao Liu',
      subIdentity: '刘俊豪',
    },
    hero: {
      eyebrow: 'Junhao (Alex) Liu · 刘俊豪 — SJTU ’27 · Embodied AI & Robotics',
      title: [
        'Structured representations',
        'and physical intelligence',
        'for robots that act.',
      ],
      focus:
        'Undergraduate in Intelligent Perception Engineering at Shanghai Jiao Tong University and Environment Reasoning R&D Intern at ABB Robotics. Working across 3D scene representation, Real2Sim simulation agents, and vision-language-action robot systems.',
      primaryCta: 'Selected Work',
      secondaryCta: 'Experience',
      cvCta: 'CV (PDF)',
      githubCta: 'GitHub',
      easterEggCta: 'Easter Egg',
      highlights: [
        ['Current', 'Environment Reasoning R&D Intern · ABB Robotics'],
        ['Recent', 'Ant LingBot Embodied AI Challenge · 6th / 1,855 Prelim · Finals Excellence Award'],
        ['Interests', '3D Vision · Affordance Reasoning · Real2Sim · VLA & World Models'],
      ],
    },
    research: {
      kicker: 'Research Focus / 01',
      heading: 'Connecting 3D structure, verifiable simulation, and embodied action.',
      items: [
        {
          number: '01',
          title: '3D Vision & Affordance Grounding',
          description:
            'Studying how geometric representations and part-level affordances turn visual observations into explicit spatial and functional constraints for manipulation.',
          flow: 'Geometry → Functional Parts → Affordances → Constraints',
        },
        {
          number: '02',
          title: 'Real2Sim & Scene-Reasoning Agents',
          description:
            'Building language- and vision-driven pipelines that construct physics-ready simulation scenes, pair LLM/VLM planning with geometric solvers, and verify states in physics engines.',
          flow: 'Observation → Port–Mate → Solver & Critic → Simulation',
        },
        {
          number: '03',
          title: 'Embodied VLA & World-Grounded Learning',
          description:
            'Post-training vision-language-action models and pairing reactive policies with System-2 subtask harnesses, real-robot DAgger feedback, and world-state prediction.',
          flow: 'Demonstration → Post-Training → Harness → Physical Robot',
        },
      ],
    },
    experience: {
      kicker: 'Experience / 02',
      heading: 'Research and engineering across simulation and physical robots.',
      read: 'Case notes',
      items: [
        {
          title: 'Environment Reasoning R&D Intern',
          organization: 'ABB Robotics',
          location: 'Shanghai',
          date: 'Jun 2026 — Present',
          tags: ['Real2Sim', 'OmniGibson', 'Port–Mate', 'LLM / VLM Agents'],
          description:
            'Building automated Real2Sim asset and scene-generation pipelines for OmniGibson, designing CAD-inspired Port–Mate functional scene representations, and developing solver-backed LLM/VLM + Critic agents for downstream robotic manipulation (active R&D; paper in preparation).',
          slug: 'abb',
        },
        {
          title: 'Robotics Algorithm Intern',
          organization: 'ShareTronic',
          location: 'Shanghai',
          date: 'Apr 2026 — Jun 2026',
          tags: ['NVIDIA Isaac Sim', 'Reinforcement Learning', 'Unitree Go2', 'ROS2 · Sim2Real'],
          description:
            'Trained and adapted NavRL visual navigation policies for a Unitree Go2 quadruped in Isaac Sim / Isaac Lab, collaborated on ROS2 sim-to-real deployment and failure-mode diagnosis, and explored VGGT-based egocentric video pipelines for humanoid navigation data.',
          slug: 'sharetronic',
        },
      ],
    },
    projects: {
      kicker: 'Selected Work / 03',
      heading: 'Selected systems in embodied VLA, 3D representation, perception, and decision-making.',
      github: '@AlexDrives on GitHub',
      items: [
        {
          title: 'Ant LingBot Embodied AI Challenge',
          role: 'Team fbfyfbf · VLA Training, Data & Real-Robot Finals',
          date: 'Sep — Nov 2026',
          tags: ['LingBot-VLA 2.0 (6B)', 'Dual-Arm Manipulation', 'Real-Time Chunking', 'System-2 Harness'],
          description:
            'Post-trained a 6B VLA across 50 bimanual tasks on RoboTwin 2.0 (AMD ROCm & Slurm), then competed in the 48-hour AgileX Cobot Magic real-robot finals—leading teleoperation and DAgger data pipelines, integrating async RTC inference, and co-developing a DeepSeek subtask harness for long-horizon tabletop cleanup.',
          metrics: ['6th / 1,855 prelim (82.2% clean)', '646 real-robot demos in 48h', 'Finals Excellence Award'],
          url: 'https://github.com/AlexDrives/lingbot-competiton-fbfyfbf',
          featured: true,
        },
        {
          title: 'RNA 3D Structure Tokenization & Reconstruction',
          role: 'Research Assistant · Structural Representation Learning',
          date: 'Oct 2025 — Jan 2026',
          tags: ['GCP-VQVAE', 'AlphaFold2 IPA', 'RNA FAPE', 'PyTorch Geometric'],
          description:
            'Extended protein-oriented GCP-VQVAE to RNA 3D backbone tokenization and reconstruction—building a homology-aware RNAsolo / cd-hit-est to HDF5 pipeline, 6-angle RNA dihedral features, and an AlphaFold2-style IPA decoder trained with trajectory-level FAPE supervision.',
          metrics: ['1.08 Å coord MAE', '0.79 TM-score', 'c80 homology split'],
          url: 'https://github.com/AlexDrives/RNA-GCP-VQVAE',
        },
        {
          title: 'Autonomous Robotic Dice Stacking',
          role: 'Independent Project · SJTU Intelligent Perception Systems',
          date: 'Mar — May 2026',
          tags: ['Camera Calibration', 'OpenCV / OpenMV', '4-DOF Arm', 'Error Compensation'],
          description:
            'Engineered an end-to-end camera-to-suction-arm manipulation pipeline combining lens undistortion, dense multi-dice segmentation, and homography + quadratic-residual calibration across 450+ pixel-to-world coordinate pairs.',
          metrics: ['27 dice / single view', '0.740 mm mean error', '6 dice in 26s (#1 / 38)'],
          url: 'https://github.com/AlexDrives/Dice-detection-and-auto-stacking-with-OpenMV-and-OpenCV',
        },
        {
          title: 'Imperfect-Information Game Solving: RL vs. CFR',
          role: 'Independent Study · Sequential Decision-Making',
          date: 'Nov — Dec 2025',
          tags: ['Self-Play RL', 'CFR / CFR+', 'OpenSpiel', 'Game Theory'],
          description:
            'Implemented a Kuhn Poker testbed in PyTorch to diagnose policy oscillation and exploitability collapse in naive self-play REINFORCE, benchmarking Nash convergence against Counterfactual Regret Minimization (CFR / CFR+) in OpenSpiel.',
          metrics: ['PyTorch REINFORCE', 'OpenSpiel CFR / CFR+', 'Exploitability analysis'],
          url: 'https://github.com/AlexDrives/kuhn_poker-exp',
        },
      ],
    },
    about: {
      kicker: 'About / 04',
      heading: 'Studying how intelligent agents build structured models of the physical world.',
      paragraphs: [
        'I am a senior undergraduate in Intelligent Perception Engineering at Shanghai Jiao Tong University (School of Automation and Intelligent Sensing). My work has moved from SE(3) biomolecular representation learning and game-theoretic RL into quadruped sim-to-real navigation, Real2Sim scene reasoning at ABB Robotics, and 6B bimanual VLA deployment on physical robots.',
        'Across simulation and real hardware, I am most interested in how explicit geometric and physical structure works alongside learned policies—making assumptions clear, failure modes diagnosable, and robot execution reliable.',
      ],
      education: 'Education',
      school: 'Shanghai Jiao Tong University',
      major: 'B.E. in Intelligent Perception Engineering',
      department: 'School of Automation & Intelligent Sensing',
      expected: 'Class of 2027 · Junior Major GPA 3.81 / 4.3',
      scores: 'GRE Q170 · TOEFL 107',
      beyondLabel: 'Off the Clock',
      beyondText:
        'Lately into hardware hackathons and currently prepping for an upcoming one. Outside the lab: basketball (huge Cade Cunningham fan), playing guitar (Stevie Ray Vaughan, Pink Floyd, King Crimson), cars (hence AlexDrives), sci-fi films like Blade Runner and 2001: A Space Odyssey, Dark Souls, Civilization, and Texas Hold’em.',
      easterEggLabel: 'Easter Egg · literally-me (ASCII & 3D)',
      portraitAlt: 'Portrait of Junhao Liu',
    },
    contact: {
      kicker: 'Technical Stack / 05',
      contact: 'Contact',
      heading: 'Open to research discussions and 2027 graduate opportunities.',
      subcopy:
        'Interested in 3D vision, affordance reasoning, Real2Sim simulation agents, world models, and robot learning.',
      github: 'github.com/AlexDrives',
      resume: 'Curriculum Vitae (PDF)',
      easterEgg: 'Easter Egg · literally-me',
      stack: {
        'Embodied AI & Simulation': [
          'OmniGibson',
          'NVIDIA Isaac Sim / Lab',
          'ROS2',
          'LingBot-VLA',
          'RoboTwin',
        ],
        'Vision, Learning & Agents': [
          'PyTorch',
          'OpenCV',
          'VGGT',
          'LangGraph',
          'OpenSpiel',
          'cd-hit',
        ],
        'Languages & Formats': ['Python', 'C++', 'C', 'MATLAB / Simulink', 'USD', 'HDF5'],
        'Hardware & Modeling': [
          'Unitree Go2',
          'AgileX Cobot Magic',
          'Blender',
          'FreeCAD / SolidWorks',
          'ARM / STM32',
        ],
      },
      flow: 'Perceive → Represent → Reason → Simulate → Act',
    },
    detail: {
      back: 'Back to overview',
      backHome: 'Back home',
      switchCase: 'Switch case study',
      visualsKicker: 'Simulation & Port Geometry / Visuals',
      modulesKicker: 'Engineering Architecture / Deep Dive',
      figureLabel: 'Fig.',
      boundariesKicker: 'Research Frontiers & Open Questions',
      boundariesTitle: 'Where this work connects to next-stage doctoral questions.',
      return: 'Back to overview',
      viewOther: 'Next Case Study:',
      notFound: 'Experience entry not found.',
      abb: {
        eyebrow: 'Experience / 01 · Ongoing R&D Overview',
        title: 'Environment Reasoning R&D Intern',
        organization: 'ABB Robotics',
        date: 'Jun 2026 — Present · Shanghai',
        lead: 'Exploring how visual observations and natural language can drive compositional, physically verifiable simulation scenes for robot learning.',
        summary:
          'At ABB Robotics, my work focuses on Real2Sim environment construction and structured scene reasoning—connecting automated geometry/physics configuration, CAD-inspired Port–Mate representations, and constraint-aware LLM/VLM + Critic agents to support downstream reinforcement learning and robotic manipulation.',
        tags: ['Real2Sim', 'Port–Mate', 'LLM / VLM Agents', 'Paper in Preparation'],
        confidentialityNotice: {
          kicker: 'Confidentiality & Pre-Publication Notice',
          badge: 'Ongoing R&D · Paper in Preparation',
          body: 'This project is currently under active development and in preparation for academic publication. Due to company confidentiality requirements and pre-publication protection, internal system architectures, codebases, visual rollouts, and unpublished experimental results are not disclosed publicly. Only a high-level conceptual overview is shared below; further academic discussion within permissible bounds is welcome via interview or email.',
        },
        facts: [
          ['Project Status', 'Active R&D · Manuscript in Preparation'],
          ['Research Domain', 'Real2Sim · Scene & Affordance Reasoning'],
          ['Core Approach', 'CAD-Inspired Constraints + Physics Critic'],
          ['Disclosure Scope', 'High-Level Conceptual Overview Only'],
        ],
        modulesTitle: 'High-level research pillars (implementation details withheld pending publication).',
        sections: [
          {
            label: '01 / Real2Sim Scene & Asset Pipeline',
            title: 'From visual observations to simulation-ready assets and scenes.',
            body: 'Developing automated Real2Sim workflows that convert visual observations into simulation-ready assets and scenes through automated geometry and physics configuration, ensuring assets behave reliably inside physics engines before entering downstream tasks.',
            takeaway: 'Focuses on bridging visual asset creation with physics-ready simulation requirements.',
          },
          {
            label: '02 / Port–Mate Scene Representation',
            title: 'Translating functional parts and semantic relations into geometric constraints.',
            body: 'Designed a Port–Mate representation inspired by mechanical CAD assembly and functional affordances, enabling compositional, natural-language-driven scene generation and editing without relying on brittle unconstrained coordinate guesses.',
            takeaway: 'Makes multi-object spatial relations explicit and composable across scene edits.',
          },
          {
            label: '03 / Solver-Backed Agent & Critic Loop',
            title: 'Combining foundation-model reasoning with physical-feasibility feedback.',
            body: 'Built an LLM/VLM + geometric-solver agent for task decomposition, relational reasoning, and constraint validation, paired with a Critic agent providing iterative feedback on physical feasibility and scene consistency.',
            takeaway: 'Separates high-level semantic planning from geometric and physical verification.',
          },
          {
            label: '04 / Agent-Assisted Simulation Harnesses',
            title: 'Supporting iterative robot-model development and data generation.',
            body: 'Exploring coding-agent-assisted simulation harness workflows to streamline environment construction, model testing, and high-quality simulation data generation for downstream RL and manipulation policies.',
            takeaway: 'Currently under active development alongside ongoing paper preparation.',
          },
        ],
        trajectoryNote: {
          kicker: 'Connection to Research Trajectory',
          body: 'While my competition VLA work highlighted how reactive robot policies degrade under distribution shift, this ongoing ABB research explores the complementary structural direction—building constraint-grounded, physically consistent simulation environments to support reliable embodied learning.',
        },
        boundaries: [
          {
            title: 'Ongoing Paper Sprint',
            body: 'Core algorithmic designs, ablations, and benchmark evaluations are currently being finalized for academic submission and remain confidential until release.',
          },
          {
            title: 'Open-World Generalization',
            body: 'Scaling compositional, affordance-grounded scene reasoning across diverse unseen objects and articulated structures remains a central research interest.',
          },
          {
            title: 'Simulation-to-Policy Loop',
            body: 'Connecting physically validated scene generation with closed-loop robot policy training and failure recovery is an active long-term focus.',
          },
        ],
        media: [],
        other: 'ShareTronic · Quadruped RL & Sim2Real',
        otherSlug: 'sharetronic',
      },
      sharetronic: {
        eyebrow: 'Experience / 02 · Embodied RL & Sim2Real Case Study',
        title: 'Robotics Algorithm Intern',
        organization: 'ShareTronic',
        date: 'Apr 2026 — Jun 2026 · Shanghai',
        lead: 'Adapting reinforcement-learning visual navigation to a Unitree Go2 quadruped and isolating real-world ROS2 sim-to-real bottlenecks.',
        summary:
          'In a six-person physical-AI R&D team building autonomous patrol and navigation for a 12-DoF Unitree Go2 quadruped, I owned the simulation-to-deployment loop—migrating training from Orbit to NVIDIA Isaac Lab / Isaac Sim, adapting an aerial NavRL baseline to legged dynamics, debugging on-robot ROS2 dynamic-obstacle failures, and prototyping egocentric video pipelines for humanoid navigation.',
        tags: ['NVIDIA Isaac Sim / Lab', 'NavRL · PPO', 'Unitree Go2 (12-DoF)', 'ROS2 · Sim2Real'],
        facts: [
          ['Robot Platform', 'Unitree Go2 Quadruped · On-Board ROS2 Stack'],
          ['Training Infra', 'Orbit → NVIDIA Isaac Lab / Sim on Parallel L40s'],
          ['Key Debugging Win', 'Isolated Moving-Obstacle Occupancy-Map Lag'],
          ['Data Extension', 'VGGT + DINO Egocentric Video Trajectory Probe'],
        ],
        specKicker: 'Sim-to-Real Diagnostic Matrix',
        specTitle: 'Treating every simulation-to-hardware failure mode as an isolatable systems hypothesis.',
        formulaBlock: {
          label: 'From Policy Optimization to Systems & Representation Diagnosis',
          equation: 'π_sim(o_t)  ──(Embodiment · Latency · ROS2 Mapping · OOD Clutter)──▶  u_real(t)',
          subEquation: 'Policy performance on hardware is bounded by the weakest link across gait dynamics, perception-map latency, and spatial representation.',
          explanation:
            'Rather than treating sim-to-real degradation as a black-box hyperparameter problem, we decomposed field failures on the physical Unitree Go2 across four distinct layers: cross-embodiment kinematics, sensor-to-map pipeline latency, actuation uncertainty, and memoryless OOD generalization.',
        },
        specTable: {
          headers: ['Failure Layer', 'Observed Symptom on Sim / Go2', 'Root-Cause Diagnosis & Engineering Fix', 'System Outcome / Insight'],
          rows: [
            ['Embodiment Kinematics', 'Lateral crab-walking & yaw misalignment toward waypoints', 'UAV NavRL assumed near-holonomic velocity tracking; reworked body-heading alignment, action bounds & lateral-slip reward penalties', 'Stable forward-aligned quadruped locomotion trajectories'],
            ['ROS2 Dynamic Obstacles', 'Delayed reaction to walking pedestrians during field tests', 'Profiled camera stream, DDS transport & mapping nodes; traced bottleneck to local occupancy-map update lag on moving objects', 'Resolved perception-side lag without destabilizing policy weights'],
            ['Sensing & Actuation Gap', 'Oscillation under real-robot control delay & radar noise', 'Configured radar/range parameters and injected latency, observation noise & external pushes via Isaac Lab domain randomization', 'Improved controller tolerance on uneven indoor/outdoor surfaces'],
            ['Unseen Dense Clutter', 'Collisions or freezing in out-of-distribution obstacle layouts', 'Memoryless reactive RL policies lacked persistent 3D spatial structure beyond immediate local range observations', 'Directly motivated pivot to structured 3D world representations'],
          ],
        },
        modulesTitle: 'End-to-end execution across Isaac Lab policy training, ROS2 field debugging, and egocentric data.',
        sections: [
          {
            label: '01 / Orbit-to-Isaac Lab Stack Migration',
            title: 'Rebuilding aerial RL navigation around legged robot constraints.',
            body: 'Migrated the navigation training workflow from Orbit to NVIDIA Isaac Lab / Isaac Sim and built parallelized evaluation scenes for the Unitree Go2 USD. Adapted NavRL from UAV flight to quadruped locomotion by redesigning observation frames, heading alignment, radar sensor frustums, and dynamic-obstacle kinematics.',
            takeaway: 'Progressed from self-studying Isaac Sim prior to onboarding to running parallel L40 training sweeps within month one.',
          },
          {
            label: '02 / Gait-Aware Reward & Randomization',
            title: 'Shaping policies that respect the physical quadruped controller.',
            body: 'Pure goal-reaching rewards encouraged sideways crab-walking and abrupt yaw swings that degraded physical stability. Reshaped velocity, heading, and smoothness penalties alongside domain randomization over control delay, sensor noise, and external disturbances.',
            takeaway: 'Aligned high-level navigation velocity commands with safe operational envelopes of the low-level locomotion controller.',
          },
          {
            label: '03 / On-Robot ROS2 Integration & Field Triage',
            title: 'Isolating perception-pipeline latency from policy failures.',
            body: 'Collaborated closely on ROS2 deployment and repeated afternoon field tests. When Go2 failed to yield to moving obstacles, systematically audited camera outputs, network transport, and mapping nodes—pinpointing latency in the occupancy-map update cycle for dynamic objects.',
            takeaway: 'Turned an ambiguous sim-to-real failure into a reproducible systems fix.',
          },
          {
            label: '04 / Egocentric Video Dataset Exploration',
            title: 'Mining 3D spatial trajectories from human walking footage.',
            body: 'As team priorities expanded toward humanoid navigation, researched egocentric video processing pipelines combining handheld/online walking footage with 3D geometric foundation models (VGGT) and DINO features, prototyping diffusion-based velocity generation from visual observations.',
            takeaway: 'Connected scalable passive human video data with embodied spatial perception.',
          },
        ],
        trajectoryNote: {
          kicker: 'Research Takeaway',
          body: 'Seeing a navigation policy perform well in simulation yet stall in unfamiliar physical clutter made it clear that reward tuning alone does not solve generalization—motivating my subsequent shift toward explicit 3D scene representations (Real2Sim / Port–Mate) at ABB Robotics.',
        },
        boundaries: [
          {
            title: 'Reactive Policies vs. Spatial Memory',
            body: 'Local range-and-goal reactive policies handle corridor obstacle avoidance well but struggle under occlusion and trap geometries without structured short-term 3D scene memory.',
          },
          {
            title: 'Coupled Perception-Control Latency',
            body: 'Hardware deployment showed that map-update semantics and timestamp synchronization often dominate policy architecture choices in dynamic environments.',
          },
          {
            title: 'Cross-Embodiment Egocentric Transfer',
            body: 'Bridging human camera height, gait oscillation, and field-of-view differences to quadruped or humanoid velocity commands remains an open geometric problem.',
          },
        ],
        media: [],
        other: 'ABB Robotics · Real2Sim & Port–Mate',
        otherSlug: 'abb',
      },
    },
  },
  zh: {
    localeLabel: '中文',
    switchLabel: '语言',
    cvUrl: '/Junhao_Liu_CV_ZH.pdf',
    nav: {
      home: '首页',
      research: '研究方向',
      experience: '实习经历',
      projects: '精选工作',
      about: '关于我',
      contact: '联系',
      cv: '简历',
      navigate: '页面导航',
      menu: '菜单',
      identity: '刘俊豪',
      subIdentity: 'Junhao Liu',
    },
    hero: {
      eyebrow: '刘俊豪 · Junhao (Alex) Liu — 上海交通大学 ’27 · 具身智能与机器人',
      title: ['以结构化世界表征与推理，', '连接三维感知与真实行动。'],
      focus:
        '上海交通大学智能感知工程专业本科在读（自动化与感知学院），现于 ABB Robotics 担任环境推理研发实习生。关注三维场景表征、Real2Sim 仿真智能体与视觉-语言-动作（VLA）机器人系统。',
      primaryCta: '精选工作',
      secondaryCta: '实习经历',
      cvCta: '简历 (PDF)',
      githubCta: 'GitHub',
      easterEggCta: '彩蛋主页',
      highlights: [
        ['当前经历', 'ABB Robotics · 环境推理研发实习生'],
        ['近期竞赛', '蚂蚁灵波具身大模型挑战赛 · 初赛 6 / 1,855 · 48h 真机决赛优胜奖'],
        ['关注方向', '三维视觉 · 可供性推理 · Real2Sim · VLA 与世界模型'],
      ],
    },
    research: {
      kicker: '研究关注 / 01',
      heading: '把三维几何结构、可验证物理仿真与具身行动连接起来。',
      items: [
        {
          number: '01',
          title: '三维视觉与可供性理解',
          description:
            '关注如何从三维几何与部件级可供性（Affordance）出发，将视觉观测转化为明确的空间关系与操作约束，而非停留在无约束的位姿猜测。',
          flow: '三维几何 → 功能部件 → 可供性 → 物理约束',
        },
        {
          number: '02',
          title: 'Real2Sim 与场景推理智能体',
          description:
            '构建视觉与自然语言驱动的仿真资产及场景生成管线，将 LLM / VLM 任务分解与确定性几何求解、物理引擎闭环校验相结合。',
          flow: '环境观测 → Port–Mate 表征 → 求解与 Critic → 物理仿真',
        },
        {
          number: '03',
          title: '具身 VLA 与面向行动的后训练',
          description:
            '围绕视觉-语言-动作基座模型的后训练、异步实时推理（RTC）、System 2 子任务调度 Harness 以及真机人机回环数据迭代展开实践。',
          flow: '演示与接管 → 模型后训练 → 推理调度 → 真机闭环',
        },
      ],
    },
    experience: {
      kicker: '实习经历 / 02',
      heading: '在物理仿真与真实机器人系统之间往返验证。',
      read: '查看详情',
      items: [
        {
          title: '环境推理研发实习生',
          organization: 'ABB Robotics',
          location: '上海',
          date: '2026 / 06 — 至今',
          tags: ['Real2Sim', 'OmniGibson', 'Port–Mate', 'LLM / VLM 智能体'],
          description:
            '围绕 OmniGibson 构建自动化 Real2Sim 资产与场景生成流程；借鉴 CAD 装配与可供性设计 Port–Mate 场景表示，研发融合几何求解器与物理 Critic 反馈的环境推理智能体（持续研发与论文冲刺中）。',
          slug: 'abb',
        },
        {
          title: '机器人算法实习生',
          organization: '协创数据技术（ShareTronic）',
          location: '上海',
          date: '2026 / 04 — 2026 / 06',
          tags: ['NVIDIA Isaac Sim', '强化学习', 'Unitree Go2', 'ROS2 · Sim2Real'],
          description:
            '在 Isaac Sim / Isaac Lab 中迁移并训练宇树 Go2 四足机器人强化学习视觉导航策略（NavRL），参与 ROS2 实机部署与 Sim2Real 失效模式诊断，并调研基于 VGGT 的第一视角人形导航数据构建。',
          slug: 'sharetronic',
        },
      ],
    },
    projects: {
      kicker: '精选工作 / 03',
      heading: '围绕具身大模型、三维结构表征、感知标定与博弈决策的核心实践。',
      github: '@AlexDrives GitHub 主页',
      items: [
        {
          title: '蚂蚁灵波具身大模型挑战赛（LingBot VLA Challenge）',
          role: 'fbfyfbf 队核心成员 · 模型训练、真机数采与推理调度',
          date: '2026 / 09 — 2026 / 11',
          tags: ['LingBot-VLA 2.0 (6B)', '双臂真机操作', '异步 RTC 推理', 'System 2 Harness'],
          description:
            '初赛在 AMD ROCm 与抢占式集群上微调 6B VLA 完成 RoboTwin 2.0 五十项双臂任务；48 小时松灵双臂真机决赛中主导遥操与 DAgger 接管数采管线，参与训练 Infra、Training-time / 异步 RTC 调优，以及基于 DeepSeek 的长程桌面清扫子任务调度 Harness。',
          metrics: ['初赛第 6 / 1,855 队（Clean 82.2%）', '48h 采集 646 条真机高质量示范', '真机决赛优胜奖'],
          url: 'https://github.com/AlexDrives/lingbot-competiton-fbfyfbf',
          featured: true,
        },
        {
          title: 'RNA 三维结构离散表征与重建',
          role: '科研助理 · 三维生物大分子表征学习',
          date: '2025 / 10 — 2026 / 01',
          tags: ['GCP-VQVAE', 'AlphaFold2 IPA', 'RNA FAPE', 'PyTorch Geometric'],
          description:
            '将面向蛋白质的几何向量量化自编码器（GCP-VQVAE）扩展至 RNA 三维主链离散化与重建：搭建 RNAsolo / cd-hit-est 同源划分至 HDF5 管线，设计 6 二面角与局部刚体表征，并引入 AlphaFold2 风格 IPA 解码器与轨迹级 FAPE 监督。',
          metrics: ['坐标 MAE 1.08 Å', 'TM-score 0.79', 'cd-hit 0.80 同源划分'],
          url: 'https://github.com/AlexDrives/RNA-GCP-VQVAE',
        },
        {
          title: '机械臂自主骰子感知与高速堆叠系统',
          role: '独立项目 · 交大《智能感知系统设计与实践》满分 / 第一名',
          date: '2026 / 03 — 2026 / 05',
          tags: ['相机标定与畸变校正', 'OpenCV / OpenMV', '4-DOF 机械臂', '残差误差补偿'],
          description:
            '独立打通镜头畸变校正、单帧高密度骰子分割与点数识别、半自动采集 450+ 像素-世界坐标点对的同源单应性+二次残差补偿，以及四自由度吸盘机械臂连续堆叠控制闭环。',
          metrics: ['单帧识别 27 枚骰子', '平均定位误差 0.740 mm', '26 秒连叠 6 枚（全班 1 / 38）'],
          url: 'https://github.com/AlexDrives/Dice-detection-and-auto-stacking-with-OpenMV-and-OpenCV',
        },
        {
          title: '不完全信息博弈求解：自博弈 RL vs. CFR',
          role: '独立研究 · 序贯决策与博弈均衡分析',
          date: '2025 / 11 — 2025 / 12',
          tags: ['自博弈强化学习', 'CFR / CFR+', 'OpenSpiel', '可剥削度分析'],
          description:
            '手写 Kuhn Poker 环境并在 PyTorch 中分析朴素自博弈 REINFORCE 的策略振荡与退化机理，进而在 OpenSpiel 中复现反事实遗憾最小化（CFR / CFR+），以可剥削度量化对比向纳什均衡族的收敛过程。',
          metrics: ['PyTorch 自博弈分析', 'OpenSpiel CFR / CFR+', 'Exploitability 收敛评测'],
          url: 'https://github.com/AlexDrives/kuhn_poker-exp',
        },
      ],
    },
    about: {
      kicker: '关于我 / 04',
      heading: '关注智能体如何建立关于物理世界的结构化理解，并在真实环境中可靠行动。',
      paragraphs: [
        '我是上海交通大学自动化与感知学院智能感知工程专业大四本科生。从早期的 RNA 三维结构离散表征与不完全信息博弈求解开始，陆续做过四足机器人 Sim2Real 导航、ABB Robotics 的 Real2Sim 场景推理，以及双臂真机 VLA 训练与部署。',
        '在仿真和真机项目里，我最关心的是显式几何/物理约束与学习策略怎么配合：把隐含假设写清楚，让失效原因可定位，让策略在真实环境里站得住。',
      ],
      education: '教育背景',
      school: '上海交通大学',
      major: '智能感知工程 · 工学学士在读',
      department: '自动化与感知学院 · 预计 2027 年 6 月毕业',
      expected: '大三专业核心 89.5 / 100 (3.81 / 4.3)',
      scores: 'GRE Q170 · TOEFL 107',
      beyondLabel: '代码之外',
      beyondText:
        '最近很上头硬件黑客松，正在准备下一场。平时爱打篮球（Cade Cunningham 球迷），也弹吉他，常听 Stevie Ray Vaughan、Pink Floyd 和 King Crimson；从小喜欢车（AlexDrives 的由来），喜欢《银翼杀手》《2001 太空漫游》，也玩魂系、《文明》和德州扑克。',
      easterEggLabel: '彩蛋主页 · literally-me（ASCII / 3D）',
      portraitAlt: '刘俊豪个人照片',
    },
    contact: {
      kicker: '技术栈 / 05',
      contact: '联系与交流',
      heading: '期待围绕具身智能研究合作与 2027 深造机会交流。',
      subcopy:
        '主要兴趣包括三维视觉、可供性推理、Real2Sim 仿真智能体、世界模型与机器人学习。',
      github: 'github.com/AlexDrives',
      resume: '个人简历 (PDF)',
      easterEgg: '彩蛋主页 · literally-me',
      stack: {
        '具身智能与仿真': [
          'OmniGibson',
          'NVIDIA Isaac Sim / Lab',
          'ROS2',
          'LingBot-VLA',
          'RoboTwin',
        ],
        '视觉、学习与智能体': [
          'PyTorch',
          'OpenCV',
          'VGGT',
          'LangGraph',
          'OpenSpiel',
          'cd-hit',
        ],
        '编程语言与数据': ['Python', 'C++', 'C', 'MATLAB / Simulink', 'USD', 'HDF5'],
        '机器人平台与硬件': [
          'Unitree Go2',
          'AgileX Cobot Magic',
          'Blender',
          'FreeCAD / SolidWorks',
          'ARM / STM32',
        ],
      },
      flow: '感知 → 表征 → 推理 → 仿真 → 行动',
    },
    detail: {
      back: '返回主页总览',
      backHome: '返回首页',
      switchCase: '切换实习专题',
      visualsKicker: '仿真环境与端口几何 / 实景图例',
      modulesKicker: '核心工程模块 / 技术拆解',
      figureLabel: '图',
      boundariesKicker: '研究边界与后续科学问题',
      boundariesTitle: '从工程闭环延伸出的下一阶段研究问题。',
      return: '返回主页总览',
      viewOther: '下一篇专题：',
      notFound: '未找到对应经历页面。',
      abb: {
        eyebrow: '实习经历 / 01 · 进行中研发项目概述',
        title: '环境推理研发实习生',
        organization: 'ABB Robotics',
        date: '2026 / 06 — 至今 · 上海',
        lead: '探索如何从视觉观测与自然语言指令出发，构建可组合、符合物理规律的仿真环境以支持具身学习。',
        summary:
          '在 ABB Robotics 实习期间，我的工作聚焦于 Real2Sim 场景构建与结构化环境推理——连接自动化几何与物理配置、受 CAD 装配启发的 Port–Mate 场景表征，以及带物理反馈的 LLM / VLM 与几何求解智能体，服务下游强化学习与机器人操作任务。',
        tags: ['Real2Sim', 'Port–Mate', 'LLM / VLM 智能体', '论文冲刺中'],
        confidentialityNotice: {
          kicker: '研发保密与论文冲刺说明',
          badge: '持续研发 · 论文冲刺阶段',
          body: '该项目目前正处于持续开发与论文冲刺阶段。遵循企业研发保密规范以及论文未发表前的成果保护要求，具体技术架构细节、内部模块命名、源码实现、仿真视觉画面及未公开实验指标暂不便在公开网页中披露。下方仅展示与公开简历一致的高层级研究脉络；如需在学术面试或科研交流中了解，可在合规范围内进一步沟通。',
        },
        facts: [
          ['项目状态', '持续研发中 · 论文冲刺阶段'],
          ['关注方向', 'Real2Sim · 场景与可供性推理'],
          ['核心思路', 'CAD 启发约束 + 物理 Critic 闭环'],
          ['披露边界', '仅作高层级概述（细节保密）'],
        ],
        modulesTitle: '高层级研究模块概览（具体实现与实验细节暂不公开）。',
        sections: [
          {
            label: '01 / Real2Sim 资产与场景流程',
            title: '将视觉观测转化为仿真就绪的资产与场景。',
            body: '搭建自动化 Real2Sim 流程，通过自动化几何处理与物理参数配置，将视觉观测转化为可直接进入物理仿真器的资产与场景，确保资产在进入多物体交互任务前具备可信的物理行为。',
            takeaway: '打通从视觉观测建景到物理可用仿真资产的基础流程。',
          },
          {
            label: '02 / Port–Mate 场景表征',
            title: '将物体功能部位与语义关系转化为几何约束。',
            body: '借鉴机械 CAD 装配与可供性（Affordance）理念设计 Port–Mate 场景表示，支持组合式、自然语言驱动的仿真场景生成与编辑，避免依赖脆弱的无约束直接坐标预测。',
            takeaway: '让多物体空间关系在组合建景与场景编辑中具备显式结构。',
          },
          {
            label: '03 / 求解器协同智能体与 Critic',
            title: '将大模型推理与物理可行性迭代反馈结合。',
            body: '研发 LLM/VLM 与几何求解器协同的智能体完成任务分解、关系推理与约束校验，并结合 Critic 智能体围绕物理可行性与场景一致性提供迭代反馈。',
            takeaway: '将高层语义任务规划与底层几何、物理检验有效解耦。',
          },
          {
            label: '04 / Agent 辅助仿真框架探索',
            title: '支撑机器人模型迭代研发与高质量仿真数据生成。',
            body: '探索 Coding Agent 辅助的 Simulation Harness 开发流程，提升仿真场景验证、机器人模型迭代测试及合成操作数据生成的工程效率。',
            takeaway: '当前正随论文冲刺工作同步推进中。',
          },
        ],
        trajectoryNote: {
          kicker: '在个人研究脉络中的位置',
          body: '蚂蚁灵波真机 VLA 赛题让我直观看到反应式策略在分布偏移下的局限，而在 ABB 持续推进的这段工作则从结构化环境一侧切入——探索如何构造带物理约束的仿真场景与验证闭环，为具身机器人学习提供更可靠的训练与评测基础。',
        },
        boundaries: [
          {
            title: '论文冲刺与阶段保密',
            body: '核心方法细节、消融实验与定量评测结果目前正围绕学术投稿整理冲刺，在正式发布或论文公开前暂不对外披露。',
          },
          {
            title: '开放场景与铰接泛化',
            body: '如何将结构化可供性与场景推理稳健推广到更广泛的未知物体与复杂可动结构，是我持续关注的研究方向。',
          },
          {
            title: '仿真建景与策略训练闭环',
            body: '将物理可验证的场景生成进一步与机器人策略训练及长尾失效恢复联动，是下一阶段的重要探索点。',
          },
        ],
        media: [],
        other: '协创数据技术（ShareTronic） · 四足 RL 与 Sim2Real',
        otherSlug: 'sharetronic',
      },
      sharetronic: {
        eyebrow: '实习经历 / 02 · 具身强化学习与 Sim2Real 专题',
        title: '机器人算法实习生',
        organization: '协创数据技术股份有限公司（ShareTronic）',
        date: '2026 / 04 — 2026 / 06 · 上海',
        lead: '在 NVIDIA Isaac Sim / Lab 中完成宇树 Go2 四足机器人视觉导航策略跨本体适配，并在 ROS2 实机外场联调中拆解 Sim2Real 瓶颈。',
        summary:
          '在六人规模的具身安防巡检研发团队中，我完整参与了 12 自由度宇树 Go2 四足机器人的强化学习自主导航闭环：完成仿真栈由 Orbit 向 Isaac Lab 的迁移与无人机 NavRL 算法的跨本体改造，在 L40 集群上开展步态奖励塑形与域随机化训练，协同推进 ROS2 上机测试并定位动态避障占据地图延迟根因，后期进一步预研了基于 VGGT 的第一视角人形导航数据管线。',
        tags: ['NVIDIA Isaac Sim / Lab', 'NavRL · PPO', 'Unitree Go2 (12-DoF)', 'ROS2 · Sim2Real'],
        facts: [
          ['机器人与部署栈', 'Unitree Go2 四足机器人 · 机载 ROS2 感知控制栈'],
          ['仿真训练底座', 'Orbit → NVIDIA Isaac Lab / Sim（L40 并行训练）'],
          ['关键实机排障', '定位移动障碍物局部占据栅格地图更新延迟根因'],
          ['数据预研延伸', 'VGGT + DINO 第一视角人类行走视频三维轨迹提取'],
        ],
        specKicker: 'Sim-to-Real 失效归因与工程诊断矩阵',
        specTitle: '不把实机退化笼统归咎于超参数，而是逐层拆解本体、感知建图与表征边界。',
        formulaBlock: {
          label: '从单纯策略调优走向全链路系统与表征诊断',
          equation: 'π_sim(o_t)  ──(跨本体动力学 · 控制延迟 · ROS2 建图同步 · 陌生密集障碍)──▶  u_real(t)',
          subEquation: '策略在真实物理环境中的表现上限，取决于步态约束、感知建图延迟与空间记忆表征中最薄弱的一环。',
          explanation:
            '在实机部署阶段，我们将仿真高成功率策略在真实场景中的性能回落拆解为四类可独立验证的工程假设：跨本体运动学失配、传感器到局部地图的链路延迟、底层执行噪声，以及无记忆反应式策略在分布外（OOD）密集障碍下的结构性局限。',
        },
        specTable: {
          headers: ['问题层级', '仿真 / Go2 实机观测现象', '根因诊断与工程改进措施', '工程结果与研究启示'],
          rows: [
            ['跨本体运动学适配', '趋近目标点时出现侧身行走（Crab-Walk）与航向偏摆', '原 UAV NavRL 默认近似全向速度跟踪；重构四足机身朝向对齐、动作空间约束与横向滑移惩罚项', '获得符合四足底层控制器包络的稳定前向巡航步态'],
            ['ROS2 动态避障链路', '仿真可避让行人，但实机面对移动障碍反应明显滞后', '联合排查相机流、通信传输与建图节点，定位瓶颈在于移动目标触发的局部占据栅格更新延迟而非策略推理慢', '在不破坏策略权重的前提下修复实机动态障碍响应'],
            ['感知与执行器鸿沟', '实机控制延迟与雷达测距噪声下出现速度指令振荡', '精细标定雷达视场参数，并在 Isaac Lab 训练中注入控制延迟、观测噪声与随机外力推搡域随机化', '显著提升策略在真实地面摩擦与传感抖动下的鲁棒性'],
            ['分布外高密障碍泛化', '进入未见过的密集障碍布局时碰撞率上升或原地停摆', '纯反应式无记忆 RL 仅依赖瞬时局部观测，缺乏持久的三维空间结构理解与拓扑记忆', '直接驱动后续转向显式结构化三维世界表征研究'],
          ],
        },
        modulesTitle: '贯穿仿真迁移、步态塑形、ROS2 外场排障与第一视角数据预研的四项实践。',
        sections: [
          {
            label: '01 / Orbit 至 Isaac Lab 训练栈迁移',
            title: '围绕四足机器人动力学重构无人机视觉导航基线。',
            body: '入职前自学跑通 Isaac Sim，入职首月即完成导航训练环境由 Orbit 向 NVIDIA Isaac Lab 的迁移，搭建宇树 Go2 并行仿真评测场景，针对四足运动特性改造原面向无人机的 NavRL 观测空间、朝向对齐逻辑、雷达传感器配置与动态障碍物表征。',
            takeaway: '打通 L40 服务器多任务并行训练、定量指标追踪到策略导出的高效迭代闭环。',
          },
          {
            label: '02 / 步态感知的奖励塑形与域随机化',
            title: '让高层导航速度指令贴合真实机器狗的运动包络。',
            body: '单纯追逐目标到达率会诱发侧身横移与剧烈转向，导致实机底层步态控制器失稳。通过重设横向漂移惩罚、航向平滑项，并引入控制延迟、传感噪声与外力扰动域随机化，使策略输出兼顾效率与实机可执行性。',
            takeaway: '将“仿真能跑通”推进为“底层四足控制器可平滑跟踪”的速度分布。',
          },
          {
            label: '03 / ROS2 上机联调与全链路根因定位',
            title: '在多轮外场测试中把模糊失效拆解为确定性系统修复。',
            body: '深入参与机载 ROS2 部署与整个下午的反复外场实测。针对动态障碍避让失灵，没有盲目重训网络，而是与同事逐级核查相机输出、DDS 网络通信与地图更新管线，最终锁定局部占据地图对移动物体的更新机制延迟。',
            takeaway: '建立起“先分清系统通信/感知瓶颈与策略能力边界，再动模型权重”的真机工程习惯。',
          },
          {
            label: '04 / 第一视角（Egocentric）导航数据探索',
            title: '利用三维视觉基础模型从人类行走视频提取导航监督。',
            body: '随团队探索人形机器人视觉导航方向，调研 EgoNav 等前沿路线，搭建基于手持拍摄与互联网第一视角行走视频的批处理原型：结合 VGGT 提取三维空间几何线索与 DINO 视觉特征，探索由扩散模型生成连续导航运动速度。',
            takeaway: '初探低成本人类日常第一视角视频向具身空间导航数据的转化路径。',
          },
        ],
        trajectoryNote: {
          kicker: '这段经历带来的思考',
          body: '在仿真里收敛得很好的导航策略，一旦遇到没见过的密集障碍布局就容易失效。这段经历让我意识到只靠调奖励和超参数很难解决泛化问题，也直接促使我后来去 ABB 探索结构化场景表征（Real2Sim / Port–Mate）与具身模型。',
        },
        boundaries: [
          {
            title: '反应式策略与结构化空间记忆',
            body: '仅依赖瞬时局部测距的反应式 RL 在走廊避障中高效轻量，但在遮挡与局部死胡同场景中需要短期三维场景记忆支撑。',
          },
          {
            title: '感知建图延迟与控制频率耦合',
            body: '真机实验表明，动态环境下局部地图更新语义与时间戳同步往往比策略网络结构本身更早成为系统安全瓶颈。',
          },
          {
            title: '跨视点第一视角视频的几何迁移',
            body: '如何消除人类手持/头部视角晃动、身高视场差异并稳健映射到四足或人形机器人的速度控制空间，仍是待解决的几何问题。',
          },
        ],
        media: [],
        other: 'ABB Robotics · Real2Sim 与 Port–Mate 终态推理',
        otherSlug: 'abb',
      },
    },
  },
}

// Keep backward-compatible alias so old #experience/cocreate links still resolve cleanly
content.en.detail.cocreate = content.en.detail.sharetronic
content.zh.detail.cocreate = content.zh.detail.sharetronic

export const localized = (language) => content[language] || content.en
