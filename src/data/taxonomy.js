export const WORK_GOALS = [
  { id: "planning", label: "规划与决策" },
  { id: "knowledge", label: "内容与知识" },
  { id: "collaboration", label: "协作与执行" },
  { id: "development", label: "研发与交付" },
  { id: "customer", label: "客户与运营" },
  { id: "automation", label: "数据与自动化" },
  { id: "risk", label: "质量与风控" },
];

const goalRules = {
  planning: [
    "战略", "决策", "规划", "计划", "排期", "资源", "工时", "成本", "预算",
    "进度", "项目管理", "产品管理", "项目集", "目标", "DSTE", "WBS",
  ],
  knowledge: [
    "文档", "知识", "内容", "总结", "翻译", "手册", "云文档", "文件", "归档",
    "素材", "会议", "PDF", "附件", "提取", "解析", "创作",
  ],
  collaboration: [
    "协作", "通知", "提醒", "消息", "群", "待办", "任务", "流程", "同步", "导入",
    "组织架构", "跨空间", "伙伴", "办公", "审批",
  ],
  development: [
    "研发", "DevOps", "Git", "代码", "发布", "测试", "缺陷", "版本", "构建",
    "研发效能", "PLM", "产品研发", "持续集成", "交付",
  ],
  customer: [
    "客户", "销售", "线索", "商机", "合同", "发票", "CRM", "LTC", "反馈",
    "运营", "画像", "AccountPlan", "解决方案推荐", "企业信息", "舆情",
  ],
  automation: [
    "自动化", "数据", "BI", "分析", "洞察", "连接器", "同步", "导出", "填单",
    "打标", "分类", "地图", "识别", "智能体", "生成", "批量",
  ],
  risk: [
    "审核", "风控", "安全", "质量", "合规", "评分", "重复", "验收", "检查",
    "权限", "监控", "异常", "SLA", "审计",
  ],
};

const explicitGoals = {
  "ai-smart-fill": "automation",
  "ai-test-cases": "risk",
  "ai-custom-instruction": "knowledge",
  "ai-summary": "knowledge",
  "ai-doc-gen": "knowledge",
  "ai-insight": "automation",
  "ai-smart-score": "risk",
  "ai-classify": "automation",
  "ai-key-extract": "knowledge",
  "ai-translate": "knowledge",
  "ai-agent-connector": "automation",
  "ai-meeting-analysis": "knowledge",
  "template-software-dev": "development",
  "template-delivery": "development",
  "template-game": "development",
  "template-live": "customer",
  "template-short-drama": "customer",
  "template-dste": "planning",
  "template-feedback": "customer",
  "template-creator": "customer",
  "template-saas-ltc": "customer",
  "template-content-production": "knowledge",
  "solution-feedback": "customer",
  "solution-zadig": "development",
  "solution-timesheet": "planning",
  "solution-ltc": "customer",
};

const industryRules = {
  互联网与软件: ["研发", "DevOps", "Git", "代码", "测试", "缺陷", "软件", "PLM", "产品"],
  专业服务: ["合同", "咨询", "交付", "工时", "资源", "项目"],
  内容与文娱: ["内容", "创作", "直播", "短剧", "游戏", "素材", "舆情"],
  销售与零售: ["销售", "客户", "线索", "商机", "LTC", "CRM", "发票"],
};

const roleRules = {
  管理者: ["战略", "决策", "规划", "资源", "成本", "进度", "分析", "DSTE"],
  产品经理: ["产品", "需求", "用户", "反馈", "走查", "PRD"],
  研发与测试: ["研发", "DevOps", "Git", "代码", "测试", "缺陷", "发布", "构建"],
  项目经理: ["项目", "交付", "排期", "工时", "任务", "协作", "流程"],
  销售与运营: ["销售", "客户", "线索", "商机", "运营", "内容", "直播", "LTC"],
  IT与管理员: ["组织架构", "同步", "权限", "安全", "连接器", "自动化", "导入", "导出"],
};

function searchableText(item) {
  return [
    item.name,
    item.summary,
    item.fullDescription,
    ...(item.tags || []),
    ...(item.scenarios || []),
    ...(item.includes || []),
    ...(item.coverage || []),
    ...(item.positions || []),
  ].filter(Boolean).join(" ");
}

function scoreRules(text, rules) {
  return Object.entries(rules).map(([id, keywords]) => ({
    id,
    score: keywords.reduce((score, keyword) => (
      score + (text.toLowerCase().includes(keyword.toLowerCase()) ? 1 : 0)
    ), 0),
  })).sort((a, b) => b.score - a.score);
}

function matchedLabels(text, rules, fallback) {
  const matches = Object.entries(rules)
    .filter(([, keywords]) => keywords.some((keyword) => text.toLowerCase().includes(keyword.toLowerCase())))
    .map(([label]) => label);
  return matches.length ? matches : [fallback];
}

export function classifySupply(item) {
  const text = searchableText(item);
  const scores = scoreRules(text, goalRules);
  const primaryGoal = explicitGoals[item.baseId || item.id] || scores[0]?.id || "collaboration";
  const secondaryGoals = scores
    .filter(({ id, score }) => id !== primaryGoal && score > 0)
    .slice(0, 2)
    .map(({ id }) => id);

  return {
    ...item,
    primaryGoal,
    secondaryGoals,
    sourceCategories: [...new Set(item.tags || [])],
    industries: matchedLabels(text, industryRules, "通用"),
    roles: matchedLabels(text, roleRules, "全员"),
    taxonomyStatus: explicitGoals[item.baseId || item.id] ? "已人工映射" : "待运营复核",
    taxonomyReason: explicitGoals[item.baseId || item.id]
      ? "依据供给的核心任务人工映射"
      : `依据名称、描述和原生分类匹配：${scores.filter(({ score }) => score > 0).slice(0, 3).map(({ id }) => id).join("、") || "默认协作类"}`,
  };
}

export function buildTaxonomyStats(items) {
  return WORK_GOALS.map((goal) => {
    const matched = items.filter((item) => (
      item.primaryGoal === goal.id || item.secondaryGoals.includes(goal.id)
    ));
    return {
      ...goal,
      total: matched.length,
      primaryTotal: items.filter((item) => item.primaryGoal === goal.id).length,
      byType: Object.fromEntries(
        ["ai", "plugin", "template", "solution"].map((type) => [
          type,
          matched.filter((item) => item.type === type).length,
        ]),
      ),
    };
  });
}
