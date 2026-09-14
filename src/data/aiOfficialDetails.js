const fieldAsset = (slug, type) => `/ai-details/field-${slug}-${type}.jpg`;
const nodeAsset = (slug, type) => `/ai-details/node-${slug}-${type}.jpg`;

const fieldDetails = [
  {
    baseId: "ai-custom-instruction",
    name: "自定义指令",
    slug: "custom-instruction",
    summary: "自由编写提示词、灵活关联字段，按需定制 AI 输出，精准匹配个性化业务需求",
    overview: "自由编写提示词支持通过自由编写提示词、灵活关联字段、按需定制输出逻辑，实现高度个性化的业务需求。它无需依赖官方固定模板，可直接匹配产品经理、研发、运营等不同角色的定制化场景，能精准对接需求描述、字段校验、文案生成、内容分类等各类业务流程，帮助团队快速搭建专属的 AI 辅助工具，大幅提升个性化业务场景的自动化处理能力与工作效率。",
    updatedAt: "2026-05-07",
  },
  {
    baseId: "ai-text-optimize",
    name: "文本优化",
    slug: "text-optimize",
    summary: "根据场景与风格要求，对原始文本进行润色优化，提升表达效果与可读性",
    overview: "文本优化是面向内容创作、商务沟通、运营推广的智能润色工具，它可针对不同场景（如汇报、客服、宣传）与风格要求，对原始文本进行措辞优化、逻辑梳理、语气调整，同时保留核心信息不变。\n\n能帮助快速提升文本专业度与感染力，适用于邮件润色、汇报稿优化、宣传文案打磨等多种场景。",
    updatedAt: "2026-04-28",
  },
  {
    baseId: "ai-smart-score",
    name: "智能打分",
    slug: "smart-score",
    summary: "依据预设评分标准，对目标文本 / 内容进行量化打分并输出等级。",
    overview: "智能打分是面向内容审核、质量评估的标准化评分工具，它通过语义分析对照预设评分规则，对目标内容（如文档、方案、反馈、作业等）进行量化评分，并匹配对应等级。\n\n可替代人工初评，保证评分口径一致、效率更高，适用于需求描述评估、跟进记录评分等场景。",
    updatedAt: "2026-04-28",
  },
  {
    baseId: "ai-classify",
    name: "分类打标",
    slug: "classify",
    summary: "根据预设标签选项，自动为文本内容匹配最贴合的分类标签",
    overview: "分类打标是面向内容管理与信息检索的智能分类工具，它通过语义分析将文本内容与预设标签体系进行精准匹配，自动打上对应分类标签。\n\n可帮助团队高效完成内容归档、检索与统计，适用于工单分类、客户反馈打标、内容运营等场景，提升内容管理效率与信息检索精准度。",
    updatedAt: "2026-04-28",
  },
  {
    baseId: "ai-key-extract",
    name: "关键内容提取",
    slug: "key-extract",
    summary: "从文本中精准提取指定类型的关键信息",
    overview: "关键内容提取是面向信息处理与数据分析的智能提取工具，它通过对文本内容的语义分析，精准定位并提取指定类型的关键信息（如人名、时间、地点、数据、决策、待办事项等），提升信息处理效率。",
    updatedAt: "2026-04-28",
  },
  {
    baseId: "ai-summary",
    name: "内容总结",
    slug: "summary",
    summary: "对长文本进行智能提炼，生成结构化、重点突出的内容总结",
    overview: "内容总结是面向信息处理与团队协作的高效工具，它通过 AI 分析文本的核心观点、关键数据和重要结论，自动生成简洁清晰的总结。\n\n该工具可大幅减少信息消化时间，提升团队信息同步效率，适用于纪要提炼、需求内容摘要、反馈信息总结等多种场景。",
    updatedAt: "2026-04-28",
  },
  {
    baseId: "ai-text-validation",
    name: "文本校验",
    slug: "text-validation",
    summary: "对照校验标准，判断文本是否符合要求",
    overview: "文本校验是轻量化合规校验工具，核心输出为开关型结果，明确告知文本是否符合预设校验标准，不附带额外解释。\n\n它适用于表单录入、内容审核、合规检查等需要快速判定结果的场景，可帮助团队高效完成批量文本校验，提升流程自动化程度。",
    updatedAt: "2026-04-28",
  },
  {
    baseId: "ai-text-standard",
    name: "文本规范判断",
    slug: "text-standard",
    summary: "标准化录入内容，让 AI 检查录入的内容是否符合要求，如果不符合要求，则 AI 可以按照要求给出输入建议，减少团队内后续反复沟通成本。",
    overview: "支持自定义检查标准（格式、结构、合规条款等），精准定位问题并提供可落地的修改方案，结构化输出检查结果，便于快速审阅和修改。\n\n适用于需求描述、用户反馈、缺陷描述、标准化录入等多种场景。",
    updatedAt: "2026-04-28",
  },
  {
    baseId: "ai-translate",
    name: "智能翻译",
    slug: "translate",
    summary: "将文本精准翻译为指定目标语言",
    overview: "智能翻译是面向多语言协作、跨境业务的智能翻译工具，使用 AI 能力进行多语种互译，可精准还原原文语义、专业术语与格式结构，适用于文档翻译、跨团队沟通、海外业务文案等场景，助力高效完成多语言内容转换。",
    updatedAt: "2026-06-01",
  },
  {
    baseId: "ai-timeout-warning",
    name: "超时停滞预警",
    slug: "timeout-warning",
    summary: "通过 AI 判定当前状态与指定时间，当实例处于指定状态，且时间距离当前超过设定天数时自动触发停滞预警，防止异常滞留与风险积压。",
    overview: "本应用为基于“状态识别 + 时间差计算”的智能停滞预警工具。\n\n1. AI 识别目标对象是否命中指定监测状态，提取业务时间戳，计算与当前时间的间隔天数。\n\n2. 实例同时满足状态匹配、时长超预设阈值，则判定为状态停滞并触发预警，保障业务流程正常周转。",
    updatedAt: "2026-08-07",
  },
  {
    baseId: "ai-value-assessment",
    name: "价值评估",
    slug: "value-assessment",
    summary: "结合自定义评估标准，对文本内容进行多维度分析并输出结构化的价值报告。",
    overview: "【价值评估】是面向业务决策与需求筛选的智能评价工具。通过将复杂的业务评估标准输入给 AI，实现对需求描述、业务提案或复盘总结的自动化批量打分与诊断，帮助团队快速筛选高价值项目，降低决策成本。\n\n【判断原理与工作机制】\n1. AI 会首先拆解输入的「评估标准」（如用户覆盖度、商业价值、开发成本等核心维度），同时梳理「待评估内容」中的核心事实与关键论点。\n\n2. 将提取出的文本信息与评估标准逐一进行对照映射，评估内容的完整性、逻辑性与标准契合度。\n\n3. 结合整体比对结果进行综合判定，严格按照标准模板输出评估结论、价值等级以及核心判定依据。\n\n【适用场景】\n1. 产品需求与 Bug 价值初审：在需求收集阶段，批量评估业务方提交的原始需求，快速识别高价值需求。\n\n2. 业务提案与项目立项评审：结合统一的立项评估标准，对各团队提交的项目提案进行评定。\n\n3. 项目复盘与经验沉淀判定：评估团队提交的复盘报告或知识库文档，筛选出具备高推广价值的优质经验与案例。",
    updatedAt: "2026-08-07",
  },
  {
    baseId: "ai-delay-risk",
    name: "延期风险判断",
    slug: "delay-risk",
    summary: "自动对比计划完成时间与任务状态，实时监控并计算任务的延期与临期风险。",
    overview: "【延期风险判断】是面向项目进度管理的自动化风控工具。通过实时对任务状态与关键时间节点进行比对，帮项目经理与执行人自动打上风险标签，让即将延期或已延期的卡点任务一目了然，实现排期风险的自动暴露与及时干预。\n\n【判断原理与工作机制】\n1. 首先识别任务状态，对已完成、已取消、已终止或已暂停等非活跃任务直接排除（标记为「不参与监控」）；对未设置完成日期的任务标记为「待排期」。\n\n2. 提取“计划完成日期”与系统当前日期，计算两者的时间差，同时引入自定义的“延期预警天数”（默认 2 天）。\n\n3. 若计划日期早于今天，直接判定为「已延期」；若计划日期距今 ≤【延期预警天数】，判定为「即将延期」；其余正常流转任务判定为「正常」。\n\n【适用场景】\n1. 项目迭代监控：在飞书项目的工作项列表中作为列字段展示，方便过滤出“即将延期”的任务进行例会跟进。\n\n2. 跨团队协作排期预警：支持根据不同团队或业务线的紧急程度，灵活配置“延期预警天数”。",
    updatedAt: "2026-08-07",
  },
  {
    baseId: "ai-risk-identification",
    name: "风险识别",
    slug: "risk-identification",
    summary: "自动扫描文本中的潜在隐患，基于自定义规则精准提炼风险点并输出诊断结论。",
    overview: "【风险识别】可以帮助项目经理从海量的复盘报告、周报、会议纪要或任务描述中，自动完成风险萃取与分类，实现项目风险的早发现、早干预。\n\n【判断原理与工作机制】\n该应用采用“定义比对与上下文推理”逻辑运作：\n\n1. 输入解析：AI 会同时读取您输入的“待分析文本”以及您自定义的“风险定义”（即判定规则）。\n\n2. 逻辑匹配与评估：AI 将文本内容与风险特征进行逐字比对，结合上下文推理其发生的可能性及潜在负面影响。\n\n3. 结构化输出：最终根据预设格式，自动提炼出风险等级（如高风险/中低风险/无风险）及具体风险依据。\n\n【适用场景】\n1. 需求与任务描述审核：在项目启动阶段，识别任务描述中边界模糊、依赖不清或技术可行性不足的风险。\n\n2. 复盘与重大项目诊断：结合特定的风险合规定义，对项目关键文本进行标准化风险扫描。\n\n3. 周报与例会纪要风险萃取：批量扫描团队提交的周报或会议记录，自动提取其中隐性表达的延期、卡点或资源风险。",
    updatedAt: "2026-08-07",
  },
].map((detail) => ({
  ...detail,
  form: "AI 字段",
  tier: "官方精选",
  creator: "飞书项目",
  icon: fieldAsset(detail.slug, "icon"),
  heroImage: fieldAsset(detail.slug, "hero"),
}));

const nodeDetails = [
  {
    baseId: "ai-assistant-app",
    name: "AI 助手",
    summary: "AI助手官方应用，丝滑融入业务流程",
    overview: "我是飞书项目管理 AI 助手，能帮你高效管理项目数据。\n\n核心能力：\n\n查询分析：搜索工作项、读取详情与操作记录、统计视图数据、分析进度与风险\n\n写操作：创建/更新工作项、流转节点状态、修改字段与负责人、创建子任务、添加评论\n\n度量洞察：生成图表、趋势可视化、数据看板\n\n文档产出：生成周报、分析报告、复盘总结等结构化文档\n\n怎么用：直接用自然语言提问即可，比如“查一下支付失败相关的需求进展”“生成本周工作总结”“把这条缺陷流转到测试中”。我会自动定位空间、工作项和相关数据，给出可执行的结论和建议。\n\n简单说：凡是飞书项目里的事，问我就行。",
    permissions: ["获取 AI 节点实例信息", "修改 AI 节点实例数据", "完成 AI 节点"],
    icon: nodeAsset("ai-assistant", "icon"),
    heroImage: nodeAsset("ai-assistant", "hero"),
    updatedAt: "2026-08-03",
  },
  {
    baseId: "ai-smart-fill",
    name: "AI 智能填单",
    summary: "基于 AI 智能解析飞书云文档以及文本,富文本字段的内容，一键提取关键信息并自动回填至飞书项目字段，让工单录入快如闪电。",
    overview: "【产品定位】\n\n“AI 智能填单” 是一款专为飞书项目打造的智能化节点插件。它打通了 “非结构化文档” 与 “结构化项目数据” 之间的壁垒，能够深度阅读并理解飞书云文档或者文本,富文本中的内容，将繁琐的手动录入转化为一键式的智能回填，大幅提升团队的项目流转效率。\n\n【核心特性】\n\n🧠 智能语义提取：依托强大的 AI 大模型能力，自动从长篇云文档、会议纪要或需求说明中精准抓取关键业务信息，并智能映射到对应的项目字段中。\n\n🧩 字段类型支持：文本（单行 / 多行 / 富文本）、数字、链接、开关、日期、选择（单选 / 多选）等，满足极度复杂的表单需求。",
    permissions: ["获取 AI 节点实例信息", "修改 AI 节点实例数据", "完成 AI 节点"],
    icon: nodeAsset("smart-fill", "icon"),
    heroImage: nodeAsset("smart-fill", "hero"),
    updatedAt: "2026-05-14",
  },
  {
    baseId: "ai-insight",
    name: "AI 智能洞察",
    summary: "可以根据提示词进行项目总结及分析",
    overview: "【产品定位】\n\n“AI 智能洞察” 是一款专为飞书项目打造的智能化分析节点插件。它实现了“项目海量数据”与“大模型推理能力”的深度融合，能够根据自定义指令自动摄取并理解项目实例的全局上下文，将繁琐的人工盘点转化为一键式的深度剖析，真正让客观数据转化为高价值的决策力，全面提升团队的管理与流转效能。\n\n【核心特性】\n\n🎯 灵活指令与全局感知：突破固定分析模板，支持完全自定义提示词（Prompt）。节点会自动挂载并摄取项目实例的全维数据作为上下文，深度唤醒大模型的逻辑分析与推理潜能。\n\n📊 一键总结与全景透视：告别耗时耗力的人工梳理，一键萃取并生成精准、结构化的项目核心总结。多维度剖析项目健康度，提供深度的全景状态洞察，让复杂项目的进展一目了然。\n\n🛡️ 智能诊断与风险预警：能够主动穿透数据表象，敏锐识别项目进度中的阻塞点与潜在隐患。自动化输出风险预警与应对建议，辅助管理者化被动防守为主动出击。",
    permissions: ["获取 AI 节点实例信息", "修改 AI 节点实例数据", "完成 AI 节点"],
    icon: nodeAsset("insight", "icon"),
    heroImage: nodeAsset("insight", "hero"),
    updatedAt: "2026-05-13",
  },
  {
    baseId: "ai-agent-connector",
    name: "智能体连接器（AAMP）",
    summary: "调度支持 AAMP 的 Agent 执行节点任务",
    overview: "用于把支持 AAMP 协议的 Agent（OpenClaw / Claude Code / Codex / Cursor / Aily / Coze……）接入 Meego 工作流。\n\n当流程运行到该节点时，系统会自动把当前任务内容、参考资料和目标输出字段发送给你的 Agent，Agent 完成任务后，结果会自动回传到节点卡片，并可按配置写回到对应的 Meego 字段或附件中。\n\n它适合用来处理这类场景：让通用 AI Agent 自动执行工作流中的分析、生成、翻译、整理、审核等任务。在任务执行过程中如果 Agent 有疑问，也可以直接在节点卡片上呈现，由人工补充说明后继续执行。完成后将文本结果、结构化字段结果和附件产物统一回填到 Meego 流程中。\n\n本节点基于 AAMP 协议构建（https://meshmail.ai/protocol），详见 https://bytedance.larkoffice.com/wiki/FwDqwPyzaiZtvhkkvKncbwWAn2b\n\n使用方法：\n\n将你的 Agent 接入 AAMP 网络\n\n如果你的 Agent 是 OpenClaw，安装 OpenClaw 插件，自动申请 AAMP 协议地址\n\nnpx aamp-openclaw-plugin init\n\n如果你的 Agent 是 Claude Code / Codex / Cursor\n\nnpx aamp-acp-bridge init\n\n如果你的 Agent 是 Aily / Coze\n\n访问 meshmail.ai，注册一个邮箱，然后通过「托管 Agent」添加 Aily 和 Coze Agent。\n\n安装过程说明：\n\nAAMP Host：直接确认使用默认的 meshmail.ai\n\nPrimary trusted dispatch sender：填写 meego@meshmail.ai\n\nDispatch context rules for that sender：如果要限制 Agent 只能在特定空间下被调用，填 project_key=[空间 key]（双击空间名称获取）；如果要限制 Agent 只能被特定用户触发调用，填 user_key=[你的 user_key]（双击头像获取）；如果不需要限制，直接跳过。\n\n安装完成后，会输出 Agent 的 AAMP 地址，OpenClaw 开始监听来自 AAMP 的任务。\n\n添加 AI 节点，配置 Agent 的邮箱地址与任务描述。\n\nAI 节点到达，Meego 自动触发 OpenClaw 任务，OpenClaw 执行后回填节点信息。",
    permissions: ["获取 AI 节点实例信息", "修改 AI 节点实例数据", "完成 AI 节点"],
    icon: nodeAsset("agent-connector", "icon"),
    heroImage: nodeAsset("agent-connector", "hero"),
    creator: "熊典",
    updatedAt: "2026-06-18",
  },
  {
    baseId: "ai-work-summary",
    name: "AI 工作总结",
    summary: "汇总已有的信息、沟通内容与进展，形成总结报告",
    overview: "本节点为飞书项目智能总结节点，依托 AI 大模型能力，可自动拉取并解析飞书项目中需求、任务、里程碑等全量实例数据，同步归集过程中的沟通记录、附件信息、执行进展与状态变更，通过结构化梳理与要点提炼，将分散的业务信息、过程资料与协同内容整合加工，最终自动生成一份完整、规范、可直接用于汇报、复盘与归档的项目总结报告。",
    permissions: ["获取 AI 节点实例信息", "修改 AI 节点实例数据", "完成 AI 节点"],
    icon: nodeAsset("work-summary", "icon"),
    heroImage: nodeAsset("work-summary", "hero"),
    updatedAt: "2026-04-22",
  },
].map((detail) => ({
  tier: "企业",
  creator: "飞书项目",
  form: "AI 节点",
  ...detail,
}));

export const aiOfficialDetails = [...fieldDetails, ...nodeDetails];

export function getAiOfficialDetail(item) {
  const formMatch = aiOfficialDetails.find(
    (detail) => detail.baseId === item.baseId && detail.form === item.aiForm,
  );
  if (formMatch) return formMatch;

  const sameNameMatch = aiOfficialDetails.find(
    (detail) => detail.name === item.name && detail.form === item.aiForm,
  );
  if (sameNameMatch) return sameNameMatch;

  const reusableOfficialDetail = aiOfficialDetails.find(
    (detail) => detail.name === item.name,
  );
  if (reusableOfficialDetail) {
    return {
      ...reusableOfficialDetail,
      form: item.aiForm,
      tier: item.aiForm === "AI 字段" ? "官方精选" : "企业",
      permissions: item.aiForm === reusableOfficialDetail.form
        ? reusableOfficialDetail.permissions
        : undefined,
    };
  }

  return {
    baseId: item.baseId,
    name: item.name,
    form: item.aiForm,
    tier: item.aiForm === "AI 字段" ? "官方精选" : "企业",
    summary: item.summary,
    overview: item.summary,
    icon: item.appIcon,
    creator: "飞书项目",
  };
}
