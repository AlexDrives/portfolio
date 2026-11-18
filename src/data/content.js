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
        'I am a senior undergraduate in Intelligent Perception Engineering at Shanghai Jiao Tong University (School of Automation and Intelligent Sensing). My work has moved from SE(3) biomolecular representation learning and game-theoretic RL into quadruped sim-to-real navigation, Real2Sim scene reasoning at ABB Robotics, and 6B bimanual VLA deployment on physical robots.',
        'Across simulation and real hardware, I am most interested in how explicit geometric and physical structure works alongside learned policies—making assumptions clear, failure modes diagnosable, and robot execution reliable.',
      ],
      education: 'Education',
      school: 'Shanghai Jiao Tong University',
      major: 'B.E. in Intelligent Perception Engineering',
      department: 'School of Automation & Intelligent Sensing · Junior Major GPA 89.5 / 100 (3.81 / 4.3)',
      expected: 'Class of 2027 · Perception Systems 100/100 (Rank 1/38) · GRE Q170 · TOEFL 107',
      beyondLabel: 'Off the Clock',
      beyondText:
        'I play guitar in my spare time and listen to a lot of Stevie Ray Vaughan, Pink Floyd, and King Crimson. Also into cars (hence AlexDrives), sci-fi films (Blade Runner, 2001: A Space Odyssey), and games like Dark Souls, Civilization, and Texas Hold’em.',
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
        eyebrow: 'Experience / 01 · Research & Systems Case Study',
        title: 'Environment Reasoning R&D Intern',
        organization: 'ABB Robotics',
        date: 'Jun 2026 — Present · Shanghai',
        lead: 'Formulating language-driven scene construction and Real2Sim editing as verifiable Port–Mate assembly solving under physics rollout.',
        summary:
          'Natural-language task instructions (“insert the tube into the rack”, “open the second drawer and place the cup inside”) leave contact surfaces, insertion axes, joint couplings, and stability implicit. At ABB Robotics, I build automated Real2Sim asset pipelines (SimFoundry + OmniGibson) and a CAD-inspired Port–Mate scene reasoning framework that separates semantic relation proposal from deterministic SE(3) pose/joint solving and simulator-in-the-loop Critic verification.',
        tags: ['Real2Sim', 'OmniGibson · OpenUSD', 'Port–Mate SE(3)', 'LangGraph Solver + Critic'],
        facts: [
          ['Core Formulation', 'NL + 3D Scene → Port–Mate DAG → Physics Rollout'],
          ['Simulation Stack', 'SimFoundry · OmniGibson 3.9 · OpenUSD'],
          ['Support Discovery', '0.979 Precision · 0.796 Area-Weighted Recall'],
          ['Verification Gate', '6-Stage Asset Pipeline · 89 / 89 Acceptance Suite'],
        ],
        visualsTitle: 'Standardized simulation assets, articulated ports, and post-rollout scene verification.',
        media: [
          {
            src: '/experience/abb/terminal_rollout_clean.png',
            title: 'Terminal Rollout Verification (S_evo)',
            alt: 'Multi-object tabletop scene settled under gravity and contact in OmniGibson',
            caption: 'Multi-object tabletop scene after closed-form Port–Mate placement and OmniGibson physics rollout under gravity and contact.',
          },
          {
            src: '/experience/abb/articulated_drawer_clean.png',
            title: 'Articulated Prismatic Port Coupling',
            alt: 'Articulated desk drawer interior support port moving with joint state',
            caption: 'Moving interior support Port attached to an articulated desk drawer link, coupling joint-state solving with container placement.',
          },
          {
            src: '/experience/abb/scanned_scale_port_clean.png',
            title: 'Real2Sim Scanned Asset Calibration',
            alt: 'Standardized scanned electronic scale USD with support-surface port frame',
            caption: 'Scanned electronic scale standardized into a sensor- and physics-ready USD with RGB-D plane-fitted support Port and local SE(3) frame.',
          },
        ],
        specKicker: 'Mathematical & Relational Specification',
        specTitle: 'Separating relational intent, closed-form SE(3) solving, and evolved physical truth.',
        formulaBlock: {
          label: 'Closed-Form Port Transform & Two-State Verification',
          equation: 'T_i = T_b · L_b · M(θ) · L_i⁻¹',
          subEquation: 'S_op  ──(OmniGibson: gravity · contact · joint limits)──▶  S_evo',
          explanation:
            'Given anchor pose T_b and local port frames L_b, L_i from asset manifests, the solver resolves a parameterized relative transform M(θ) into an operational candidate S_op. Because kinematic alignment or zero velocity alone cannot rule out rim-wedging, tip-over, or missed receptacles, task completion is judged on S_evo after physical rollout.',
        },
        specTable: {
          headers: ['Predicate', 'Kinematic / Contact Reference', 'Parameterized DOFs', 'Post-Rollout Verification (S_evo)'],
          rows: [
            ['on', 'Planar contact + unilateral gravity support', 'In-plane (u, v), yaw ψ', 'Support-polygon containment, normal alignment & rest stability'],
            ['seat', 'Coaxial centering + axial seating contact', 'Symmetry yaw ψ (or keyed)', 'Concentric radial tolerance, seated height & anti-tilt check'],
            ['insert', 'Cylindrical coaxial alignment + depth bounds', 'Insertion depth d, roll ψ', 'Axial depth interval, angular deviation & non-wedged contact'],
            ['in', 'Volumetric containment inequality g(q) ≥ 0', 'Bounded 3D offset + yaw ψ', 'Full geometry inside receptacle bounds without wall penetration'],
            ['free_in', 'Portal traversal + gravity-settled release', 'Portal clearance pose', 'Dynamic release through opening & settled containment inside'],
            ['joint', 'Articulated revolute / prismatic joint target', 'Joint configuration q_j', 'Joint readback convergence prior to dependent object mates'],
          ],
        },
        modulesTitle: 'Four tightly coupled layers from raw visual meshes to simulator-verified scenes.',
        sections: [
          {
            label: '01 / Automated Real2Sim Asset Gate',
            title: 'Turning visual observations into physics-dependable USD assets.',
            body: 'Built a six-stage Real2Sim standardization workflow with SimFoundry and OmniGibson: scale calibration, RGB-D support-plane fitting, convex-hull collider decomposition, mass/inertia configuration, and automated single-process runtime smoke gates before any asset enters multi-object planning.',
            takeaway: 'Eliminates silent mesh-collider mismatches and unstable rigid-body defaults prior to scene assembly.',
          },
          {
            label: '02 / CAD-Inspired Port–Mate Contract',
            title: 'Explicit functional interfaces instead of unconstrained 6-DoF guesses.',
            body: 'Modeled functional object parts—tabletop regions, vessel openings, rack bores, and moving drawer cavities—as typed local Ports in external YAML manifests. Natural-language semantics compile into directed Mate dependency graphs rather than brittle raw coordinate predictions.',
            takeaway: 'Supports compositional multi-step scenes such as opening an articulated drawer before settling a cup inside.',
          },
          {
            label: '03 / Stateful LangGraph Agent & Critic',
            title: 'LLM/VLM proposes over valid catalogs; deterministic code adjudicates.',
            body: 'Engineered a stateful LangGraph agent with persistent session checkpoints, static geometric prechecks, and deterministic repair hints. After OmniGibson evolves S_op into S_evo, a Critic module inspects geometric, physical, and semantic residuals to attribute failures to grounding, port choice, collision, or instability.',
            takeaway: '89 / 89 physical acceptance tests passed across single-step and articulated multi-relation scenarios.',
          },
          {
            label: '04 / Automated Port Discovery & Harnesses',
            title: 'Scaling beyond manual port authoring toward simulation data engines.',
            body: 'Developed offline geometric support-surface discovery evaluated against an independent ray-exposure oracle (improving area-weighted recall from 0.616 to 0.796 at 0.979 precision across 12 complex assets), alongside PartField segmentation probes and coding-agent simulation harnesses for downstream robot learning.',
            takeaway: 'Designed independent oracle vs. detector geometry to prevent circular threshold tuning.',
          },
        ],
        trajectoryNote: {
          kicker: 'Connection to Research Trajectory',
          body: 'While my LingBot real-robot VLA work exposed how reactive policies degrade under distribution shift and noisy human data, this ABB research tackles the complementary structural side: building physically verified environment representations and simulation harnesses capable of generating scalable, constraint-grounded supervision for robot manipulation.',
        },
        boundaries: [
          {
            title: 'Terminal Validity vs. A→B Reachability',
            body: 'Settling cleanly in S_evo proves static and dynamic feasibility of the goal state, but bridging verified terminal states to collision-free bimanual manipulation trajectories (A→B kinematic reachability) is the natural next step.',
          },
          {
            title: 'Open-Vocabulary Articulated Affordances',
            body: 'Scaling typed port extraction from rigid support planes to arbitrary unseen articulated mechanisms requires combining 3D part segmentation with interactive physical probing.',
          },
          {
            title: 'Closed-Loop Data Generation for VLA',
            body: 'How can solver-verified Real2Sim scene perturbations automatically synthesize targeted training rollouts for failure modes surfaced during real-robot DAgger deployment?',
          },
        ],
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
        '我是上海交通大学自动化与感知学院智能感知工程专业大四本科生。从早期的 RNA 三维结构离散表征与不完全信息博弈求解开始，陆续做过四足机器人 Sim2Real 导航、ABB Robotics 的 Real2Sim 场景推理，以及双臂真机 VLA 训练与部署。',
        '在仿真和真机项目里，我最关心的是显式几何/物理约束与学习策略怎么配合：把隐含假设写清楚，让失效原因可定位，让策略在真实环境里站得住。',
      ],
      education: '教育背景',
      school: '上海交通大学',
      major: '智能感知工程 · 工学学士在读',
      department: '自动化与感知学院 · 大三专业核心均分 89.5 / 100 (3.81 / 4.3)',
      expected: '预计 2027 年 6 月毕业 · 《智能感知系统》100/100（专业 1/38） · GRE Q170 · TOEFL 107',
      beyondLabel: '代码之外',
      beyondText:
        '平时喜欢弹吉他，常听 Stevie Ray Vaughan、Pink Floyd 和 King Crimson；从小喜欢车（AlexDrives 的由来），也常看《银翼杀手》《2001 太空漫游》这类科幻片，玩魂系、《文明》和德州扑克。',
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
        eyebrow: '实习经历 / 01 · 研究与系统工程专题',
        title: '环境推理研发实习生',
        organization: 'ABB Robotics',
        date: '2026 / 06 — 至今 · 上海',
        lead: '将自然语言驱动的仿真建景与 Real2Sim 场景编辑建模为经物理演化验收的 Port–Mate 装配约束求解问题。',
        summary:
          '“把试管插进试管架”“拉开第二层抽屉并放入水杯”这类自然语言指令隐去了接触表面、插装轴线、关节耦合与重力稳定条件。在 ABB Robotics 实习期间，我围绕 SimFoundry 与 OmniGibson 构建自动化 Real2Sim 资产标准化管线，并设计受机械 CAD 装配与可供性启发的 Port–Mate 场景推理框架，将高层语义关系假设、确定性 SE(3) 位姿/关节求解与物理引擎演化后的 Critic 诊断严格解耦。',
        tags: ['Real2Sim', 'OmniGibson · OpenUSD', 'Port–Mate SE(3)', 'LangGraph 求解与 Critic'],
        facts: [
          ['问题建模', '自然语言 + 初始场景 → Port–Mate 依赖图 → 物理演化验收'],
          ['仿真底座', 'SimFoundry · OmniGibson 3.9 · OpenUSD'],
          ['支撑面自动发现', '精度 0.979 · 面积加权召回率 0.796（12 类复杂资产）'],
          ['工程验收门控', '六阶段资产标准化流水线 · 89 / 89 物理验收测试通过'],
        ],
        visualsTitle: '标准化扫描资产、铰接动态功能端口与物理演化后的场景终态核验。',
        media: [
          {
            src: '/experience/abb/terminal_rollout_clean.png',
            title: '物理演化终态验收（S_evo）',
            alt: 'OmniGibson 中经重力与接触演化稳态收敛的多物体桌面场景',
            caption: '经 Port–Mate 闭式位姿解算并在 OmniGibson 重力与接触动力学下前滚演化后稳态收敛的多物体桌面终态。',
          },
          {
            src: '/experience/abb/articulated_drawer_clean.png',
            title: '铰接移动副动态端口耦合',
            alt: '随书桌抽屉移动关节同步变换的内部支撑端口与局部坐标系',
            caption: '绑定于书桌抽屉运动连杆上的动态内部支撑 Port 及局部坐标架，支持先拉开抽屉关节再置物的耦合求解。',
          },
          {
            src: '/experience/abb/scanned_scale_port_clean.png',
            title: 'Real2Sim 实扫资产物理与端口标定',
            alt: '完成碰撞体标准化与 RGB-D 支撑面端口拟合的电子秤 USD 资产',
            caption: '实扫电子秤经尺度恢复、凸包碰撞体生成与 RGB-D 高度切片平面拟合后构建的传感器/物理就绪 USD 支撑端口。',
          },
        ],
        specKicker: '数学建模与六类谓词约束规格',
        specTitle: '区分“语义关系定义”“闭式 SE(3) 选解”与“物理演化真值”。',
        formulaBlock: {
          label: '端口闭式刚体变换与双阶段状态验收',
          equation: 'T_i = T_b · L_b · M(θ) · L_i⁻¹',
          subEquation: 'S_op  ──(OmniGibson: 重力 · 碰撞接触 · 关节限位演化)──▶  S_evo',
          explanation:
            '给定基准物体位姿 T_b 与资产 Manifest 中的局部端口变换 L_b、L_i，求解器根据谓词参数化相对变换 M(θ) 反推待操作物体的候选状态 S_op。由于几何公式对齐或瞬时低速度并不能排除横向卡死、擦边倾倒或落入错误容器，任务完成与否必须在物理前滚后的演化状态 S_evo 上联合裁决。',
        },
        specTable: {
          headers: ['关系谓词', '运动副 / 接触理论参照', '求解器参数化自由度', '物理演化后验收准则（S_evo）'],
          rows: [
            ['on', '平面贴合运动 + 单侧重力接触支撑', '支撑面内坐标 (u, v)、绕法向角 ψ', '投影落在支撑域内、法向对齐且重力演化后无滑落倾倒'],
            ['seat', '共轴对中定位 + 轴向落座接触', '连续旋转对称角 ψ（或键槽锁角）', '径向同心残差、轴向落座高度与抗倾覆稳定性联合满足'],
            ['insert', '圆柱副共轴约束 + 轴向深度区间', '插入深度 d、绕轴转角 ψ', '深度落入有效孔位区间、轴线倾角达标且排除孔口横向卡死'],
            ['in', '三维容纳区域包含不等式 g(q) ≥ 0', '受限局部三维偏移 + 航向角 ψ', '物体包围盒完整位于容器内腔且与侧壁无穿透干涉'],
            ['free_in', '容器开口穿越 + 重力接触自然落姿', '开口上方安全释放位姿', '穿越开口平面并在重力接触演化后稳定停留在目标容器内'],
            ['joint', '铰接资产既有转动副 / 移动副构型', '目标关节变量 q_j', '前置关节读数收敛到位后，再触发下游依赖物体的端口求解'],
          ],
        },
        modulesTitle: '从视觉观测网格到物理可验证场景的四层核心工程模块。',
        sections: [
          {
            label: '01 / Real2Sim 资产物理标准化门控',
            title: '把原始扫描与生成网格变成行为可信的物理资产。',
            body: '围绕 SimFoundry 与 OmniGibson 建立六阶段新资产验收流水线：覆盖尺度标定、RGB-D 支撑平面拟合、凸包碰撞体分解、质量/惯量刚体属性配置及单进程 Runtime Smoke Gate，打通实扫 USDObject 与标准数据集资产的统一加载。',
            takeaway: '在进入多物体场景规划前前置消除碰撞体穿模与刚体失稳隐患。',
          },
          {
            label: '02 / 受 CAD 装配启发的 Port–Mate 表征',
            title: '以带类型的局部功能接口替代无约束三维坐标猜测。',
            body: '将桌面支撑域、容器开口、试管架孔位及随关节运动的抽屉内腔抽象为外置 YAML Manifest 中的局部 Port；自然语言指令被解析为有向 Mate 依赖图（DAG），显式表达多步操作先后条件。',
            takeaway: '天然支持“先拉开第二层抽屉关节、再将水杯稳放入抽屉内腔”等组合场景。',
          },
          {
            label: '03 / LangGraph 受限规划智能体与 Critic',
            title: '语言模型在受限目录中选配，确定性几何与物理负责把关。',
            body: '基于 LangGraph 构建带 SQLite 持久会话、静态几何预检与确定性修复提示的规划智能体；OmniGibson 将 S_op 演化为 S_evo 后，Critic 围绕几何残差、接触稳定性与关系保持输出结构化归因（对象接地、端口误选、碰撞或失稳）。',
            takeaway: '跨机器复现通过 89 / 89 项物理验收测试，失败原因可逐层追溯。',
          },
          {
            label: '04 / 自动支撑面发现与 Simulation Harness',
            title: '降低人工标注成本，向机器人训练数据生成管线延伸。',
            body: '构建离线几何支撑面自动发现流程，并以原理完全独立的射线暴露度 Oracle 进行交叉评测（避免阈值扫描循环论证，在 12 类复杂资产上保持 0.979 精度的同时将面积加权召回率由 0.616 提升至 0.796）；同步探索 PartField 分件与 Coding Agent 仿真测试框架。',
            takeaway: '打通从“可验证目标场景状态”向“下游 RL / VLA 操作轨迹合成”的基础设施桥梁。',
          },
        ],
        trajectoryNote: {
          kicker: '在个人研究脉络中的位置',
          body: '蚂蚁灵波真机 VLA 决赛让我直观看到反应式大模型策略在数据分布漂移与长程任务下的脆弱性；而在 ABB 的这段探索恰好从互补的一侧切入——通过显式几何/物理约束构建可验证的仿真环境与数据引擎，为具身策略提供结构化的世界先验与闭环评测基准。',
        },
        boundaries: [
          {
            title: '终态合法性与 A→B 操作可达性',
            body: 'S_evo 在重力下稳态收敛证明了目标场景本身的物理合法性，下一步核心在于衔接双臂运动规划，验证从初始状态到目标终态的无碰撞操作可达性。',
          },
          {
            title: '未见铰接物体的开放词汇端口发现',
            body: '从刚性支撑平面迈向任意复杂铰接机构的功能端口自动提取，仍需将三维部件分割与物理交互探测紧密结合。',
          },
          {
            title: '面向真机长尾失效的闭环场景合成',
            body: '如何根据真机 DAgger 暴露出的失败场景，用 Port–Mate 生成受控的 Real2Sim 变体场景并反哺 VLA 后训练，是我接下来希望继续探索的方向。',
          },
        ],
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
