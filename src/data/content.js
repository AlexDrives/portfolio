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
            'Building automated Real2Sim asset and scene-generation pipelines with SimFoundry and OmniGibson, designing CAD-inspired Port–Mate functional scene representations, and developing solver-backed LLM/VLM + Critic agents for downstream robot manipulation.',
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
        'I am a senior undergraduate in Intelligent Perception Engineering at Shanghai Jiao Tong University (School of Automation and Intelligent Sensing). My trajectory moved from 3D biomolecular representation learning and game-theoretic RL into quadruped sim-to-real navigation, Real2Sim scene reasoning at ABB Robotics, and real-robot VLA deployment.',
        'Across simulation and physical hardware, I am drawn to problems where pure black-box policies hit distribution walls—making geometric constraints explicit, failure modes inspectable, and physical execution dependable.',
      ],
      education: 'Education',
      school: 'Shanghai Jiao Tong University',
      major: 'B.E. in Intelligent Perception Engineering',
      department: 'School of Automation & Intelligent Sensing',
      expected: 'Class of 2027 · Shanghai',
      beyondLabel: 'Off the Clock',
      beyondText:
        'Blues & progressive-rock guitarist (SRV, Pink Floyd, King Crimson) with live band stage experience · Lifelong car & mechanical enthusiast (hence AlexDrives) · Sci-fi cinema (Blade Runner, 2001) & imperfect-information games.',
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
      atGlance: 'Overview',
      working: 'System Pipeline',
      evidence: 'Engineering Highlights',
      figureLabel: 'Figure',
      boundariesKicker: 'Open Questions',
      boundariesTitle: 'Current scope and next steps.',
      return: 'Back to experience',
      viewOther: 'Next:',
      notFound: 'Experience entry not found.',
      abb: {
        eyebrow: 'Experience / 01',
        title: 'Environment Reasoning R&D Intern',
        organization: 'ABB Robotics',
        date: 'Jun 2026 — Present · Shanghai',
        lead: 'Translating visual observations and language instructions into physics-ready simulation assets and verifiable relational scene states.',
        summary:
          'At ABB Robotics, I work on Real2Sim environment construction and structured scene reasoning around SimFoundry, OmniGibson, and AssemWorld—bridging visual asset standardization, CAD-inspired Port–Mate representations, and solver-backed LLM/VLM agents.',
        tags: ['Real2Sim', 'OmniGibson', 'Port–Mate', 'LangGraph Agents'],
        sections: [
          {
            label: '01 / Real2Sim Pipeline',
            title: 'From visual observations to physics-ready simulation assets.',
            body: 'Built an automated Real2Sim asset and scene-generation workflow connecting SimFoundry and OmniGibson. Scanned and generated meshes are standardized with scale fitting, convex-hull collision decomposition, mass/inertia configuration, and runtime smoke gates before entering multi-object simulation.',
          },
          {
            label: '02 / Port–Mate Representation',
            title: 'CAD assembly semantics adapted for physical scene reasoning.',
            body: 'Designed a Port–Mate scene representation inspired by mechanical CAD assembly and functional affordances. Functional object regions (support surfaces, vessel openings, moving drawer interiors, insertion axes) are represented as typed Ports, while semantic instructions compile into geometric Mate constraints (on, seat, insert, in, free_in, joint).',
          },
          {
            label: '03 / Solver-Backed Agent & Critic',
            title: 'Language proposes relations; deterministic solvers and physics decide.',
            body: 'Developed a stateful LangGraph LLM/VLM agent paired with a deterministic geometric solver for task decomposition, port-compatibility checking, and pose/articulation resolution. A Critic loop evaluates rollout outcomes under gravity, contact, and joint limits to diagnose grounding, alignment, or stability failures.',
          },
          {
            label: '04 / Scaling & Simulation Harnesses',
            title: 'Toward automated port discovery and robot-learning data generation.',
            body: 'Extended manual port authoring with RGB-D plane fitting, PartField part-segmentation probes, and automated support-surface discovery, while exploring coding-agent-assisted simulation harnesses to support iterative robot-model evaluation and synthetic trajectory generation.',
          },
        ],
        steps: [
          ['Observe', 'RGB / video observations & raw scanned USD assets'],
          ['Standardize', 'Scale calibration, colliders & rigid-body physics gates'],
          ['Abstract', 'Functional Ports & composable Mate constraints'],
          ['Solve', 'Stateful LLM/VLM planning + deterministic pose/joint solver'],
          ['Verify', 'OmniGibson rollout & Critic physical-consistency feedback'],
        ],
        evidence: [
          'AssemWorld open-sourced under MIT with stateful LangGraph session checkpoints, static geometric prechecks, and multi-stage audit logs.',
          'Six-stage asset standardization pipeline with RGB-D support calibration, Port Studio interactive review, and 89/89 physical acceptance tests.',
          'Supports articulated multi-step interactions (e.g., opening a cabinet drawer joint and settling a cup inside via free_in constraints).',
        ],
        boundaries: [
          'Open-vocabulary port discovery on arbitrary unseen articulated objects still requires geometric and physical verification beyond visual segmentation.',
          'Validating a terminal scene state under gravity guarantees static feasibility, while full A→B kinematic manipulation reachability remains the next bridge to motion planning.',
          'Current work focuses on turning verified scene transitions into scalable simulation harnesses for downstream RL and VLA data generation.',
        ],
        media: [
          {
            src: '/experience/abb/port_studio_review.png',
            alt: 'AssemWorld Port Studio inspecting a scanned scale USD in OmniGibson',
            caption: 'AssemWorld Port Studio in OmniGibson 3.9 — reviewing support-surface ports on a standardized scanned scale USD.',
          },
          {
            src: '/experience/abb/articulated_drawer_port.png',
            alt: 'Articulated desk drawer interior port and local coordinate frame',
            caption: 'Articulated drawer interior support port moving with prismatic joint state for multi-step container placement.',
          },
          {
            src: '/experience/abb/vessel_opening_port.png',
            alt: 'Vessel opening circular port ring and coordinate gizmo',
            caption: 'Typed vessel-opening port constraint ring and local frame used by the deterministic Mate solver.',
          },
        ],
        other: 'ShareTronic',
        otherSlug: 'sharetronic',
      },
      sharetronic: {
        eyebrow: 'Experience / 02',
        title: 'Robotics Algorithm Intern',
        organization: 'ShareTronic',
        date: 'Apr 2026 — Jun 2026 · Shanghai',
        lead: 'Training quadruped RL navigation in simulation and tracing where policies break on real hardware.',
        summary:
          'Worked in a compact physical-AI team developing autonomous navigation for a Unitree Go2 quadruped—migrating simulation training to Isaac Sim / Isaac Lab, adapting NavRL from aerial to legged dynamics, and debugging ROS2 sim-to-real deployment.',
        tags: ['NVIDIA Isaac Sim', 'NavRL', 'Unitree Go2', 'ROS2 · Sim2Real'],
        sections: [
          {
            label: '01 / Simulation & Migration',
            title: 'Adapting aerial RL navigation to a quadruped body.',
            body: 'Trained and evaluated reinforcement-learning visual navigation policies for the Unitree Go2 in NVIDIA Isaac Sim / Isaac Lab. Migrated and adapted NavRL—originally designed for UAVs—by reworking heading alignment, action interfaces, radar sensor configuration, and dynamic-obstacle representations for legged locomotion.',
          },
          {
            label: '02 / Gait & Reward Shaping',
            title: 'Reaching the goal is not enough if the gait cannot transfer.',
            body: 'Refined observation spaces, reward terms, and domain randomization (control latency, sensor noise, external pushes) to curb lateral crab-walking and heading drift, focusing on locomotion commands that remain stable on physical quadruped controllers.',
          },
          {
            label: '03 / ROS2 Sim-to-Real Debugging',
            title: 'Isolating system-level bottlenecks on physical deployments.',
            body: 'Collaborated on on-robot ROS2 deployment and field testing. Systematically traced dynamic-obstacle response failures across camera streams, network transport, and local occupancy-map update latency, while cataloging dense-obstacle collision and out-of-distribution failure modes.',
          },
          {
            label: '04 / Egocentric Navigation Data',
            title: 'Exploring human walking videos for embodied navigation.',
            body: 'Investigated egocentric video processing pipelines (using 3D foundation features such as VGGT and DINO) to extract spatial trajectories from first-person walking footage toward scalable humanoid navigation dataset construction.',
          },
        ],
        steps: [
          ['Environment', 'Unitree Go2 simulation setup in NVIDIA Isaac Sim / Lab'],
          ['Adaptation', 'NavRL migration: heading, radar & dynamic obstacles'],
          ['Robustness', 'Reward shaping & latency / noise domain randomization'],
          ['Deployment', 'ROS2 integration, field testing & occupancy-map debugging'],
          ['Data Probe', 'Egocentric video spatial extraction for humanoid navigation'],
        ],
        evidence: [
          'End-to-end ownership from parallel L40 simulation runs in Isaac Sim to on-site ROS2 hardware tests on Unitree Go2.',
          'Diagnosed real-world dynamic-obstacle lag to occupancy-map update mechanics rather than policy inference alone.',
          'Sim-to-real generalization bottlenecks directly motivated subsequent research into explicit structured world representations.',
        ],
        boundaries: [
          'Pure reactive RL policies remained sensitive to dense unseen obstacle geometries, highlighting the need for stronger spatial memory and world representations.',
          'Domain randomization improved controller tolerance to noise and delay but did not by itself solve semantic out-of-distribution generalization.',
          'Egocentric video dataset construction served as an exploratory R&D prototype for downstream humanoid navigation.',
        ],
        media: [],
        other: 'ABB Robotics',
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
            '基于 SimFoundry 与 OmniGibson 构建自动化 Real2Sim 资产与场景生成管线；借鉴 CAD 装配与可供性设计 Port–Mate 场景表示，研发融合几何求解器与 Critic 物理反馈的推理智能体。',
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
        '我是上海交通大学自动化与感知学院智能感知工程专业大四本科生。从早期的 RNA 三维结构离散表征与不完全信息博弈求解出发，逐步走向四足机器人 Sim2Real 导航、ABB Robotics 的 Real2Sim 场景推理，以及双臂真机 VLA 具身系统实践。',
        '无论是仿真引擎里的几何与物理约束，还是真机部署中的分布外失效，我最着迷的始终是“显式结构”与“学习策略”的交界处——把隐含假设写清楚，让失效原因可诊断，让机器动作经得起现实检验。',
      ],
      education: '教育背景',
      school: '上海交通大学',
      major: '智能感知工程 · 工学学士在读',
      department: '自动化与感知学院',
      expected: '预计 2027 年 6 月毕业 · 上海',
      beyondLabel: '代码之外',
      beyondText:
        '布鲁斯与前卫摇滚乐队吉他手（偏爱 SRV、Pink Floyd、King Crimson） · 从小痴迷汽车与机械工程（AlexDrives 的由来） · 喜欢《银翼杀手》《2001 太空漫游》与策略博弈游戏。',
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
      atGlance: '工作速览',
      working: '系统闭环',
      evidence: '关键工程节点',
      figureLabel: '图例',
      boundariesKicker: '边界与下一步',
      boundariesTitle: '当前范围与后续问题。',
      return: '返回实习经历',
      viewOther: '下一段经历：',
      notFound: '未找到对应经历页面。',
      abb: {
        eyebrow: '实习经历 / 01',
        title: '环境推理研发实习生',
        organization: 'ABB Robotics',
        date: '2026 / 06 — 至今 · 上海',
        lead: '将视觉观测与自然语言指令转化为物理就绪的仿真资产，以及可求解、可验证的场景目标状态。',
        summary:
          '在 ABB Robotics 围绕 SimFoundry、OmniGibson 与 AssemWorld 开展 Real2Sim 自动化建景与环境推理研究：打通扫描资产物理标准化、受 CAD 装配启发的 Port–Mate 场景表示，以及融合几何求解器与物理 Critic 的智能体闭环。',
        tags: ['Real2Sim', 'OmniGibson', 'Port–Mate', 'LangGraph 智能体'],
        sections: [
          {
            label: '01 / Real2Sim 资产与场景管线',
            title: '把视觉观测转化为可直接进仿真的物理资产。',
            body: '基于 SimFoundry 与 OmniGibson 构建自动化资产与场景生成流程，将尺度拟合、凸包碰撞体分解、质量/惯量等刚体参数配置以及运行时 Smoke Gate 串联为标准化验收管线，打通扫描 USD 与数据集资产的混合仿真加载。',
          },
          {
            label: '02 / Port–Mate 场景表征',
            title: '借鉴机械 CAD 装配与可供性，显式表达场景功能结构。',
            body: '设计 Port–Mate 结构化表示：将支撑面、容器开口、随关节运动的抽屉内腔、插装轴线等功能区域抽象为带类型的 Port，将自然语言语义关系编译为 on、seat、insert、in、free_in、joint 等几何 Mate 约束，支持多物体组合式建景与编辑。',
          },
          {
            label: '03 / 求解器协同智能体与 Critic',
            title: '语言负责任务分解与假设，几何与物理负责裁决。',
            body: '基于 LangGraph 构建带持久会话与审计记录的 LLM / VLM 智能体，配合确定性几何求解器完成任务拆解、端口兼容性检查与位姿/关节耦合解算；引入 Critic 智能体在重力、碰撞与关节约束演化后检验物理可行性与语义一致性。',
          },
          {
            label: '04 / 规模化标注与 Simulation Harness',
            title: '从手工端口标注走向自动发现与机器人仿真数据生成。',
            body: '结合 RGB-D 平面拟合、PartField 部件分割探索与自动支撑面发现降低资产接入成本，并探索 Coding Agent 辅助的仿真测试框架（Simulation Harness），服务下游强化学习与机器人操作轨迹生成。',
          },
        ],
        steps: [
          ['视觉观测', 'RGB / 视频输入与原始扫描 USD 资产'],
          ['物理标准化', '尺度标定、碰撞体构建与刚体参数验收'],
          ['关系抽象', '功能端口（Port）与可组合装配约束（Mate）'],
          ['耦合求解', 'LangGraph 任务分解 + 确定性位姿与关节解算'],
          ['物理反馈', 'OmniGibson 前滚仿真与 Critic 一致性诊断'],
        ],
        evidence: [
          'AssemWorld 以 MIT 协议整理开源，包含 LangGraph 持久会话、静态几何预检与多阶段审计日志。',
          '建立六阶段新资产标准化流水线、Port Studio 交互复核工具及 89/89 物理验收测试闭环。',
          '走通含关节耦合的多步场景状态求解（如拉开抽屉关节并通过 free_in 约束稳态放置水杯）。',
        ],
        boundaries: [
          '面向任意未见铰接物体的开放词汇功能端口自动发现，仍需在视觉分割之上结合几何净空与物理交互验证。',
          '终态在重力演化下稳定仅证明目标状态合法，从初始状态到目标状态的机械臂运动可达性（A→B）是衔接操作规划的下一步重点。',
          '目前正将这套可验证场景状态管线延伸向自动化 Simulation Harness 与机器人学习数据生成。',
        ],
        media: [
          {
            src: '/experience/abb/port_studio_review.png',
            alt: 'AssemWorld Port Studio 在 OmniGibson 中复核扫描电子秤支撑面端口',
            caption: 'OmniGibson 3.9 中的 AssemWorld Port Studio：对标准化后的实扫电子秤 USD 进行支撑面 Port 交互复核。',
          },
          {
            src: '/experience/abb/articulated_drawer_port.png',
            alt: '随抽屉关节运动的内部支撑端口与局部坐标系',
            caption: '铰接书桌抽屉内部的动态支撑 Port 与局部坐标系，用于开抽屉置物的关节-位姿耦合求解。',
          },
          {
            src: '/experience/abb/vessel_opening_port.png',
            alt: '容器开口环形端口约束与坐标轴指示器',
            caption: '容器开口（Vessel Opening）环形 Port 约束与局部坐标架，供确定性 Mate 求解器调用。',
          },
        ],
        other: '协创数据技术（ShareTronic）',
        otherSlug: 'sharetronic',
      },
      sharetronic: {
        eyebrow: '实习经历 / 02',
        title: '机器人算法实习生',
        organization: '协创数据技术股份有限公司（ShareTronic）',
        date: '2026 / 04 — 2026 / 06 · 上海',
        lead: '在仿真中训练四足机器人视觉导航策略，并在实机部署中定位 Sim2Real 的真实瓶颈。',
        summary:
          '在小型具身团队围绕宇树 Go2 四足机器人的强化学习自主导航展开全流程研发：完成仿真环境搭建与无人机 NavRL 框架的跨本体适配，并通过 ROS2 实机联调定位动态避障与泛化瓶颈。',
        tags: ['NVIDIA Isaac Sim', 'NavRL', 'Unitree Go2', 'ROS2 · Sim2Real'],
        sections: [
          {
            label: '01 / 跨本体策略适配',
            title: '将无人机强化学习导航框架迁移至四足机器狗。',
            body: '在 NVIDIA Isaac Sim / Isaac Lab 中搭建宇树 Go2 四足机器人训练与评测环境，将原面向旋翼无人机的 NavRL 视觉导航策略迁移适配至四足平台，重点解决朝向对齐、雷达参数配置与动态障碍物表征问题。',
          },
          {
            label: '02 / 奖励设计与域随机化',
            title: '不仅要到达终点，还要产生可迁移的步态指令。',
            body: '针对训练中出现的横向漂移、侧身行走（Crab Walking）与朝向偏差调整状态观测与奖励函数，并在训练中引入控制延迟、观测噪声与外力扰动等域随机化机制，提升策略对传感器和执行器误差的容忍度。',
          },
          {
            label: '03 / ROS2 实机联调与根因定位',
            title: '把实机失效拆解为可验证的系统工程清单。',
            body: '协同完成 ROS2 实机部署与外场测试。针对动态障碍物响应失常问题，逐层排查相机输出、网络通信与局部占据栅格地图更新机制并定位延迟根因，系统整理高密度障碍碰撞与跨场景泛化受限等失效模式。',
          },
          {
            label: '04 / 第一视角导航数据探索',
            title: '从人类行走第一视角视频挖掘三维导航监督。',
            body: '调研第一视角（Egocentric）视频处理管线，探索利用 VGGT、DINO 等三维与视觉基础特征从手持与日常行走视频中提取空间轨迹线索，服务后续人形机器人导航训练数据集构建。',
          },
        ],
        steps: [
          ['环境搭建', 'Isaac Sim / Isaac Lab 宇树 Go2 仿真环境'],
          ['跨体适配', 'NavRL 朝向对齐、雷达配置与动态障碍物改造'],
          ['鲁棒训练', '步态奖励塑形与延迟/噪声域随机化'],
          ['实机部署', 'ROS2 上机联调、占据栅格排查与失效归因'],
          ['数据预研', '基于 VGGT 的第一视角人形导航视频处理探索'],
        ],
        evidence: [
          '打通 L40 服务器并行仿真训练、策略定量评估到 Unitree Go2 实机 ROS2 部署测试的完整链路。',
          '在动态避障外场测试中联合定位占据地图更新延迟根因，推动工程修复。',
          '纯强化学习导航在陌生环境中的泛化瓶颈，直接启发了后续对显式结构化世界表征的探索。',
        ],
        boundaries: [
          '纯反应式 RL 导航策略在密集未见障碍布局下仍易发生碰撞，表明仅靠策略微调难以替代结构化空间记忆。',
          '域随机化有效缓解了底层控制与感知噪声，但并不能单独解决分布外场景的语义泛化问题。',
          '第一视角视频管线在实习期内完成了方案调研与小规模数据验证原型。',
        ],
        media: [],
        other: 'ABB Robotics',
        otherSlug: 'abb',
      },
    },
  },
}

// Keep backward-compatible alias so old #experience/cocreate links still resolve cleanly
content.en.detail.cocreate = content.en.detail.sharetronic
content.zh.detail.cocreate = content.zh.detail.sharetronic

export const localized = (language) => content[language] || content.en
