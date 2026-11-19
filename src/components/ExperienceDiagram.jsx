export default function ExperienceDiagram({ slug, language }) {
  const zh = language === 'zh'
  const normalized = slug === 'cocreate' ? 'sharetronic' : slug

  if (normalized === 'abb') {
    return (
      <div className="arch-card">
        <div className="arch-card-head">
          <span className="section-kicker">
            {zh ? '系统架构图 / 闭环终态推理' : 'System Architecture / Closed-Loop Terminal-State Reasoning'}
          </span>
          <span className="arch-caption">
            {zh
              ? '将视觉资产标准化、Port–Mate 约束编译与物理引擎演化解耦并闭环检验'
              : 'Decoupling Real2Sim asset standardization, Port–Mate SE(3) solving, and physics-rollout verification'}
          </span>
        </div>
        <div className="arch-svg-scroll">
          <svg
            className="arch-svg"
            viewBox="0 0 1060 356"
            role="img"
            aria-label={zh ? 'ABB Real2Sim 与 Port-Mate 终态推理架构图' : 'ABB Real2Sim and Port-Mate terminal-state reasoning architecture'}
          >
            <defs>
              <marker id="abb-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#18181b" />
              </marker>
              <marker id="abb-arrow-cyan" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#0e7490" />
              </marker>
            </defs>

            {/* Subtle background lane bands */}
            <rect x="14" y="14" width="1032" height="122" rx="6" fill="#f8fafc" stroke="#e4e4e7" />
            <text x="30" y="36" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="#64748b">
              {zh ? 'TRACK A · REAL2SIM 资产物理标准化与功能端口构建' : 'TRACK A · REAL2SIM ASSET STANDARDIZATION & PORT AUTHORING'}
            </text>

            <rect x="14" y="152" width="1032" height="188" rx="6" fill="#fafafa" stroke="#e4e4e7" />
            <text x="30" y="174" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="#52525b">
              {zh ? 'TRACK B · 受限语言规划、闭式 SE(3) 求解与物理演化裁决' : 'TRACK B · CONSTRAINED PLANNING, CLOSED-FORM SE(3) SOLVING & PHYSICS ROLLOUT'}
            </text>

            {/* Track A Nodes */}
            <g transform="translate(30, 50)">
              <rect width="215" height="68" rx="4" fill="#ffffff" stroke="#d4d4d8" />
              <text x="14" y="22" fontSize="11.5" fontWeight="600" fill="#0a0a0a">
                {zh ? '01 · 单目照片 / 扫描输入' : '01 · Photo / Scan Inputs'}
              </text>
              <text x="14" y="41" fontSize="10.5" fill="#52525b">
                {zh ? '单目照片 + NL · 实扫网格' : 'Single Photo + NL · Scanned USD'}
              </text>
              <text x="14" y="57" fontSize="10" fill="#71717a">
                Port-Ready Real2Sim / Blender
              </text>
            </g>

            <line x1="245" y1="84" x2="281" y2="84" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#abb-arrow)" />

            <g transform="translate(285, 50)">
              <rect width="245" height="68" rx="4" fill="#ffffff" stroke="#d4d4d8" />
              <text x="14" y="22" fontSize="11.5" fontWeight="600" fill="#0a0a0a">
                {zh ? '02 · 同源建模与解析凸分解' : '02 · Co-Authored Ports & Convex Gate'}
              </text>
              <text x="14" y="41" fontSize="10.5" fill="#52525b">
                {zh ? '四视图视觉自检 · 端口引导防封孔分解' : '4-View VLM Check · Hole-Preserving Hulls'}
              </text>
              <text x="14" y="57" fontSize="10" fill="#71717a">
                {zh ? '视觉 / 碰撞双几何端口校验' : 'Dual Visual + Collision Verification'}
              </text>
            </g>

            <line x1="530" y1="84" x2="566" y2="84" stroke="#0e7490" strokeWidth="1.3" markerEnd="url(#abb-arrow-cyan)" />

            <g transform="translate(570, 50)">
              <rect width="255" height="68" rx="4" fill="#ffffff" stroke="#0e7490" strokeWidth="1.3" />
              <text x="14" y="22" fontSize="11.5" fontWeight="600" fill="#0e7490">
                {zh ? '03 · 功能端口抽象（Port Manifest）' : '03 · Typed Functional Ports'}
              </text>
              <text x="14" y="41" fontSize="10.5" fill="#3f3f46">
                {zh ? 'RGB-D 平面拟合 + 自动支撑面发现' : 'RGB-D Plane Fit + Support Discovery'}
              </text>
              <text x="14" y="57" fontSize="10" fill="#52525b">
                {zh ? '局部变换 L_b, L_i · 支撑域与语义标签' : 'Local Frames L_b, L_i · Bounds & Tags'}
              </text>
            </g>

            <g transform="translate(855, 50)">
              <rect width="175" height="68" rx="4" fill="#f0fdfa" stroke="#99f6e4" />
              <text x="14" y="24" fontSize="11" fontWeight="600" fill="#0f766e">
                {zh ? '支撑面自动发现基线' : 'Support Discovery Probe'}
              </text>
              <text x="14" y="43" fontSize="10.5" fill="#115e59">
                {zh ? '精度 0.979 · 面积召回 0.796' : 'Precision 0.979 · Recall 0.796'}
              </text>
              <text x="14" y="58" fontSize="9.5" fill="#0f766e">
                {zh ? '独立几何 Oracle 交叉评测' : 'Independent Geometric Oracle'}
              </text>
            </g>

            {/* Vertical feed from Port Manifest into Constrained Agent & Solver */}
            <path d="M 697 118 L 697 190" fill="none" stroke="#0e7490" strokeWidth="1.3" strokeDasharray="4 3" markerEnd="url(#abb-arrow-cyan)" />

            {/* Track B Nodes */}
            <g transform="translate(30, 192)">
              <rect width="176" height="84" rx="4" fill="#ffffff" stroke="#d4d4d8" />
              <text x="13" y="23" fontSize="11.5" fontWeight="600" fill="#0a0a0a">
                {zh ? '初始场景 S₀ + 指令 L' : 'Scene S₀ + Task L'}
              </text>
              <text x="13" y="43" fontSize="10.5" fill="#52525b">
                {zh ? '“拉开第二层抽屉，' : '“Open drawer #2 and'}
              </text>
              <text x="13" y="58" fontSize="10.5" fill="#52525b">
                {zh ? '把杯子稳放入内”' : 'place the cup inside”'}
              </text>
              <text x="13" y="74" fontSize="9.5" fill="#71717a">
                {zh ? '无手工坐标输入' : 'Zero manual coordinates'}
              </text>
            </g>

            <line x1="206" y1="234" x2="236" y2="234" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#abb-arrow)" />

            <g transform="translate(240, 192)">
              <rect width="218" height="84" rx="4" fill="#ffffff" stroke="#18181b" strokeWidth="1.3" />
              <text x="13" y="23" fontSize="11.5" fontWeight="600" fill="#0a0a0a">
                {zh ? 'LangGraph 受限规划智能体' : 'LangGraph Constrained Agent'}
              </text>
              <text x="13" y="43" fontSize="10.5" fill="#3f3f46">
                {zh ? '仅在兼容端口目录中选配关系' : 'Selects over compatible Port catalog'}
              </text>
              <text x="13" y="59" fontSize="10" fill="#52525b">
                on · seat · insert · in · free_in · joint
              </text>
              <text x="13" y="74" fontSize="9.5" fill="#71717a">
                {zh ? '输出 DAG 依赖图与终态 YAML' : 'Compiles dependency DAG & YAML'}
              </text>
            </g>

            <line x1="458" y1="234" x2="488" y2="234" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#abb-arrow)" />

            <g transform="translate(492, 192)">
              <rect width="232" height="84" rx="4" fill="#ffffff" stroke="#0e7490" strokeWidth="1.3" />
              <text x="13" y="23" fontSize="11.5" fontWeight="600" fill="#0e7490">
                {zh ? '闭式 SE(3) 与关节耦合求解器' : 'Closed-Form SE(3) & Joint Solver'}
              </text>
              <text x="13" y="44" fontSize="11" fontFamily="Georgia, Cambria, serif" fill="#0a0a0a">
                Tᵢ = T_b · L_b · M(θ) · Lᵢ⁻¹
              </text>
              <text x="13" y="61" fontSize="10" fill="#52525b">
                {zh ? '生成操作终态候选 S_op' : 'Synthesizes operational state S_op'}
              </text>
              <text x="13" y="75" fontSize="9.5" fill="#71717a">
                {zh ? '静态几何与包围盒预检' : 'Static clearance & bounds precheck'}
              </text>
            </g>

            <line x1="724" y1="234" x2="754" y2="234" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#abb-arrow)" />

            <g transform="translate(758, 192)">
              <rect width="272" height="84" rx="4" fill="#0a0a0a" />
              <text x="14" y="23" fontSize="11.5" fontWeight="600" fill="#ffffff">
                {zh ? 'OmniGibson 物理演化与 Critic 验收' : 'OmniGibson Rollout & Critic Gate'}
              </text>
              <text x="14" y="43" fontSize="10.5" fill="#d4d4d8">
                {zh ? 'S_op → 重力 / 碰撞 / 关节演化 → S_evo' : 'S_op → Gravity / Contact / Joints → S_evo'}
              </text>
              <text x="14" y="59" fontSize="10" fill="#a1a1aa">
                {zh ? '检验深度、同轴度、接触稳定与关系保持' : 'Checks depth, alignment, stability & retention'}
              </text>
              <text x="14" y="74" fontSize="9.5" fill="#67e8f9">
                {zh ? '89 / 89 物理验收用例通过' : '89 / 89 physical acceptance tests passed'}
              </text>
            </g>

            {/* Feedback loop from Critic back to LangGraph Agent */}
            <path
              d="M 894 276 L 894 316 L 349 316 L 349 280"
              fill="none"
              stroke="#0e7490"
              strokeWidth="1.25"
              strokeDasharray="5 3"
              markerEnd="url(#abb-arrow-cyan)"
            />
            <rect x="462" y="305" width="316" height="20" rx="10" fill="#fafafa" />
            <text x="620" y="319" textAnchor="middle" fontSize="10" fontWeight="500" fill="#0e7490">
              {zh
                ? '结构化失败归因反馈（接地偏差 / 端口失配 / 碰撞倾倒）'
                : 'Structured Critic Feedback (grounding · port mismatch · collision / tip-over)'}
            </text>
          </svg>
        </div>
      </div>
    )
  }

  // ShareTronic diagram
  return (
    <div className="arch-card">
      <div className="arch-card-head">
        <span className="section-kicker">
          {zh ? '系统架构图 / 四足导航训练与 Sim2Real 闭环' : 'System Architecture / Quadruped RL Navigation & Sim2Real Loop'}
        </span>
        <span className="arch-caption">
          {zh
            ? '从 Isaac Lab 跨本体策略迁移、ROS2 实机地图延迟诊断到第一视角导航数据管线'
            : 'From Isaac Lab cross-embodiment RL training to Unitree Go2 ROS2 diagnostics and VGGT egocentric data R&D'}
        </span>
      </div>
      <div className="arch-svg-scroll">
        <svg
          className="arch-svg"
          viewBox="0 0 1060 342"
          role="img"
          aria-label={zh ? 'ShareTronic 四足机器人 RL 导航与 Sim2Real 架构图' : 'ShareTronic quadruped RL navigation and Sim2Real architecture'}
        >
          <defs>
            <marker id="st-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#18181b" />
            </marker>
            <marker id="st-arrow-teal" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#0f766e" />
            </marker>
          </defs>

          {/* Upper band: Simulation & ROS2 Hardware Loop */}
          <rect x="14" y="14" width="1032" height="196" rx="6" fill="#fafafa" stroke="#e4e4e7" />
          <text x="30" y="36" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="#52525b">
            {zh ? 'LOOP A · ISAAC SIM / LAB 强化学习导航训练 → UNITREE GO2 ROS2 实机部署与排障' : 'LOOP A · ISAAC SIM / LAB RL TRAINING → UNITREE GO2 ROS2 DEPLOYMENT & DIAGNOSTICS'}
          </text>

          <g transform="translate(30, 52)">
            <rect width="224" height="92" rx="4" fill="#ffffff" stroke="#d4d4d8" />
            <text x="14" y="23" fontSize="11.5" fontWeight="600" fill="#0a0a0a">
              {zh ? '01 · 跨本体环境迁移' : '01 · Embodiment Migration'}
            </text>
            <text x="14" y="43" fontSize="10.5" fill="#52525b">
              {zh ? 'Orbit → NVIDIA Isaac Lab / Sim' : 'Orbit → NVIDIA Isaac Lab / Sim'}
            </text>
            <text x="14" y="60" fontSize="10" fill="#52525b">
              {zh ? 'UAV NavRL 适配至 12-DoF 宇树 Go2' : 'UAV NavRL adapted to 12-DoF Go2'}
            </text>
            <text x="14" y="77" fontSize="9.5" fill="#71717a">
              {zh ? '朝向对齐 · 雷达参数 · 动态障碍表征' : 'Heading frame · Radar · Dynamic obstacles'}
            </text>
          </g>

          <line x1="254" y1="98" x2="284" y2="98" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#st-arrow)" />

          <g transform="translate(288, 52)">
            <rect width="242" height="92" rx="4" fill="#ffffff" stroke="#18181b" strokeWidth="1.3" />
            <text x="14" y="23" fontSize="11.5" fontWeight="600" fill="#0a0a0a">
              {zh ? '02 · 步态奖励塑形与域随机化' : '02 · Reward & Domain Randomization'}
            </text>
            <text x="14" y="43" fontSize="10.5" fill="#3f3f46">
              {zh ? '抑制侧身行走（Crab-Walk）与航向漂移' : 'Suppress lateral crab-walk & yaw drift'}
            </text>
            <text x="14" y="60" fontSize="10" fill="#52525b">
              {zh ? '注入控制延迟、观测噪声与外力扰动' : 'Delay · Sensor noise · External pushes'}
            </text>
            <text x="14" y="77" fontSize="9.5" fill="#71717a">
              {zh ? 'L40 GPU 集群并行策略迭代与定量评测' : 'Parallel L40 training & quantitative rollouts'}
            </text>
          </g>

          <line x1="530" y1="98" x2="560" y2="98" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#st-arrow)" />

          <g transform="translate(564, 52)">
            <rect width="226" height="92" rx="4" fill="#ffffff" stroke="#0f766e" strokeWidth="1.3" />
            <text x="14" y="23" fontSize="11.5" fontWeight="600" fill="#0f766e">
              {zh ? '03 · ROS2 通信与感知建图桥接' : '03 · ROS2 Perception & Map Bridge'}
            </text>
            <text x="14" y="43" fontSize="10.5" fill="#3f3f46">
              {zh ? '相机流 · 雷达点云 · 局部占据栅格' : 'Camera · Radar · Occupancy map'}
            </text>
            <text x="14" y="60" fontSize="10" fill="#52525b">
              {zh ? '定位动态障碍物响应滞后根因：' : 'Isolated dynamic-obstacle failure root:'}
            </text>
            <text x="14" y="77" fontSize="9.5" fontWeight="600" fill="#0f766e">
              {zh ? '移动目标占据地图更新延迟修复' : 'Moving-object occupancy update lag'}
            </text>
          </g>

          <line x1="790" y1="98" x2="820" y2="98" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#st-arrow)" />

          <g transform="translate(824, 52)">
            <rect width="206" height="92" rx="4" fill="#0a0a0a" />
            <text x="14" y="23" fontSize="11.5" fontWeight="600" fill="#ffffff">
              {zh ? '04 · Unitree Go2 实机外场测试' : '04 · Unitree Go2 Field Testing'}
            </text>
            <text x="14" y="43" fontSize="10.5" fill="#d4d4d8">
              {zh ? '实机速度指令闭环与步态检验' : 'On-robot velocity & gait checks'}
            </text>
            <text x="14" y="60" fontSize="10" fill="#a1a1aa">
              {zh ? '归档密集障碍碰撞与 OOD 停摆边界' : 'Cataloged dense-clutter & OOD limits'}
            </text>
            <text x="14" y="77" fontSize="9.5" fill="#5eead4">
              {zh ? '驱动后续结构化世界表征研究' : 'Sparked structured world-model focus'}
            </text>
          </g>

          {/* Sim2Real feedback arrow */}
          <path
            d="M 927 144 L 927 184 L 409 184 L 409 148"
            fill="none"
            stroke="#0f766e"
            strokeWidth="1.25"
            strokeDasharray="5 3"
            markerEnd="url(#st-arrow-teal)"
          />
          <rect x="520" y="173" width="295" height="20" rx="10" fill="#fafafa" />
          <text x="667" y="187" textAnchor="middle" fontSize="10" fontWeight="500" fill="#0f766e">
            {zh ? '实机失效归因反哺观测与奖励设计' : 'Hardware failure diagnostics refine sim rewards & latency'}
          </text>

          {/* Lower band: Egocentric Video R&D */}
          <rect x="14" y="224" width="1032" height="104" rx="6" fill="#f8fafc" stroke="#e4e4e7" />
          <text x="30" y="246" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="#64748b">
            {zh ? 'STREAM B · 面向人形机器人导航的第一视角（EGOCENTRIC）视频数据预研' : 'STREAM B · EGOCENTRIC VIDEO-TO-NAVIGATION DATA PIPELINE (HUMANOID R&D)'}
          </text>

          <g transform="translate(30, 258)">
            <rect width="290" height="54" rx="4" fill="#ffffff" stroke="#d4d4d8" />
            <text x="14" y="22" fontSize="11" fontWeight="600" fill="#0a0a0a">
              {zh ? '手持相机与第一视角人类行走视频' : 'Handheld & First-Person Walking Videos'}
            </text>
            <text x="14" y="40" fontSize="10" fill="#52525b">
              {zh ? '大规模非结构化真实场景视觉序列' : 'Unstructured real-world indoor/outdoor sequences'}
            </text>
          </g>

          <line x1="320" y1="285" x2="366" y2="285" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#st-arrow)" />

          <g transform="translate(370, 258)">
            <rect width="318" height="54" rx="4" fill="#ffffff" stroke="#d4d4d8" />
            <text x="14" y="22" fontSize="11" fontWeight="600" fill="#0a0a0a">
              {zh ? 'VGGT 三维空间提取 + DINO 视觉表征' : 'VGGT 3D Geometry + DINO Feature Extraction'}
            </text>
            <text x="14" y="40" fontSize="10" fill="#52525b">
              {zh ? '批处理恢复相机位姿、局部深度与空间几何线索' : 'Batch camera-pose, depth & spatial structure recovery'}
            </text>
          </g>

          <line x1="688" y1="285" x2="734" y2="285" stroke="#0f766e" strokeWidth="1.3" markerEnd="url(#st-arrow-teal)" />

          <g transform="translate(738, 258)">
            <rect width="292" height="54" rx="4" fill="#ffffff" stroke="#0f766e" strokeWidth="1.2" />
            <text x="14" y="22" fontSize="11" fontWeight="600" fill="#0f766e">
              {zh ? '具身视觉导航训练轨迹与速度生成原型' : 'Navigation Trajectory & Velocity Supervision'}
            </text>
            <text x="14" y="40" fontSize="10" fill="#52525b">
              {zh ? '探索扩散策略由第一视角观测生成运动指令' : 'Prototype pipeline for humanoid visual navigation'}
            </text>
          </g>
        </svg>
      </div>
    </div>
  )
}
