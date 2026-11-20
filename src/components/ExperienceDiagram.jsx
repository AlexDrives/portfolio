export default function ExperienceDiagram({ slug, language }) {
  const zh = language === 'zh'
  const normalized = slug === 'cocreate' ? 'sharetronic' : slug

  if (normalized === 'abb') {
    return (
      <div className="arch-card">
        <div className="arch-card-head">
          <span className="section-kicker">
            {zh ? '高层级研究框架示意 / 细节已脱敏' : 'High-Level Conceptual Overview / Internal Details Redacted'}
          </span>
          <span className="arch-caption">
            {zh
              ? '持续研发与论文冲刺中：仅展示公开层面研究范式，内部实现与指标暂不披露'
              : 'Active R&D & paper in preparation — conceptual workflow only; proprietary details withheld'}
          </span>
        </div>
        <div className="arch-svg-scroll">
          <svg
            className="arch-svg"
            viewBox="0 0 1060 278"
            role="img"
            aria-label={zh ? 'ABB 环境推理高层级概念示意图' : 'ABB environment reasoning high-level conceptual schematic'}
          >
            <defs>
              <marker id="abb-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#18181b" />
              </marker>
              <marker id="abb-arrow-cyan" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="#0e7490" />
              </marker>
            </defs>

            <rect x="14" y="14" width="1032" height="250" rx="6" fill="#fafafa" stroke="#e4e4e7" />
            <text x="30" y="38" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="#64748b">
              {zh ? 'CONCEPTUAL RESEARCH LOOP · 仅展示高层研究链路（具体模块与实验数据保密）' : 'CONCEPTUAL RESEARCH LOOP · HIGH-LEVEL PARADIGM (IMPLEMENTATION DETAILS WITHHELD)'}
            </text>

            <g transform="translate(30, 62)">
              <rect width="218" height="106" rx="4" fill="#ffffff" stroke="#d4d4d8" />
              <text x="14" y="26" fontSize="11.5" fontWeight="600" fill="#0a0a0a">
                {zh ? '01 · 视觉观测与自然语言指令' : '01 · Visual & Language Inputs'}
              </text>
              <text x="14" y="49" fontSize="10.5" fill="#52525b">
                {zh ? '环境视觉观测与物体几何信息' : 'Visual observations & scene context'}
              </text>
              <text x="14" y="68" fontSize="10.5" fill="#52525b">
                {zh ? '自然语言任务描述与交互目标' : 'Natural-language task instructions'}
              </text>
              <text x="14" y="90" fontSize="9.5" fill="#71717a">
                {zh ? 'Real2Sim 资产与场景构建入口' : 'Entry point for Real2Sim construction'}
              </text>
            </g>

            <line x1="248" y1="115" x2="280" y2="115" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#abb-arrow)" />

            <g transform="translate(284, 62)">
              <rect width="232" height="106" rx="4" fill="#ffffff" stroke="#0e7490" strokeWidth="1.3" />
              <text x="14" y="26" fontSize="11.5" fontWeight="600" fill="#0e7490">
                {zh ? '02 · Port–Mate 结构化场景表征' : '02 · Port–Mate Scene Representation'}
              </text>
              <text x="14" y="49" fontSize="10.5" fill="#3f3f46">
                {zh ? '借鉴 CAD 装配与可供性概念' : 'Inspired by CAD assembly & affordances'}
              </text>
              <text x="14" y="68" fontSize="10.5" fill="#52525b">
                {zh ? '将功能部件与语义转化为几何约束' : 'Maps functional parts to constraints'}
              </text>
              <text x="14" y="90" fontSize="9.5" fill="#71717a">
                {zh ? '支持组合式与自然语言场景编辑' : 'Compositional scene editing interface'}
              </text>
            </g>

            <line x1="516" y1="115" x2="548" y2="115" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#abb-arrow)" />

            <g transform="translate(552, 62)">
              <rect width="236" height="106" rx="4" fill="#ffffff" stroke="#18181b" strokeWidth="1.3" />
              <text x="14" y="26" fontSize="11.5" fontWeight="600" fill="#0a0a0a">
                {zh ? '03 · 推理智能体与约束校验' : '03 · LLM/VLM + Geometric Solver'}
              </text>
              <text x="14" y="49" fontSize="10.5" fill="#3f3f46">
                {zh ? '任务分解、关系推理与约束核验' : 'Task decomposition & relation reasoning'}
              </text>
              <text x="14" y="68" fontSize="10.5" fill="#52525b">
                {zh ? '自动生成物理就绪的仿真场景配置' : 'Physics-ready geometry & asset setup'}
              </text>
              <text x="14" y="90" fontSize="9.5" fill="#71717a">
                {zh ? '具体求解架构与提示策略保密中' : 'Solver internals redacted (ongoing)'}
              </text>
            </g>

            <line x1="788" y1="115" x2="820" y2="115" stroke="#18181b" strokeWidth="1.3" markerEnd="url(#abb-arrow)" />

            <g transform="translate(824, 62)">
              <rect width="206" height="106" rx="4" fill="#0a0a0a" />
              <text x="14" y="26" fontSize="11.5" fontWeight="600" fill="#ffffff">
                {zh ? '04 · 物理仿真与 Critic 反馈' : '04 · Simulation & Critic Loop'}
              </text>
              <text x="14" y="49" fontSize="10.5" fill="#d4d4d8">
                {zh ? '物理可行性与场景一致性检验' : 'Physical feasibility & consistency'}
              </text>
              <text x="14" y="68" fontSize="10" fill="#a1a1aa">
                {zh ? '服务下游强化学习与机器人操作' : 'Downstream RL & manipulation'}
              </text>
              <text x="14" y="90" fontSize="9.5" fill="#67e8f9">
                {zh ? 'Simulation Harness 持续开发中' : 'Simulation harness in active R&D'}
              </text>
            </g>

            {/* Feedback loop */}
            <path
              d="M 927 168 L 927 222 L 670 222 L 670 172"
              fill="none"
              stroke="#0e7490"
              strokeWidth="1.25"
              strokeDasharray="5 3"
              markerEnd="url(#abb-arrow-cyan)"
            />
            <rect x="698" y="211" width="212" height="20" rx="10" fill="#fafafa" />
            <text x="804" y="225" textAnchor="middle" fontSize="10" fontWeight="500" fill="#0e7490">
              {zh ? 'Critic 迭代反馈物理可行性与一致性' : 'Critic iterative feasibility feedback'}
            </text>

            {/* Redacted note pill on bottom-left */}
            <rect x="30" y="206" width="445" height="32" rx="4" fill="#ffffff" stroke="#d4d4d8" strokeDasharray="3 3" />
            <text x="44" y="226" fontSize="10.5" fill="#52525b">
              {zh
                ? '🔒 正在研发与论文冲刺阶段 · 内部代码架构、公式推导及基准指标暂不公开'
                : '🔒 Ongoing R&D & manuscript preparation — internals & benchmarks withheld'}
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
