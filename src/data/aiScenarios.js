import { aiAssistantOfficialTemplates } from "./aiOfficialTemplates.js";
import { WORK_GOALS } from "./taxonomy.js";

export const AI_SCENE_GOALS = WORK_GOALS.map((goal) => ({
  ...goal,
  description: {
    planning: "辅助判断优先级、计划与资源安排",
    knowledge: "生成、总结、提取和翻译项目内容",
    collaboration: "推动任务创建、分派和流程协同",
    development: "覆盖研发、测试、发布与交付环节",
    customer: "处理客户、合同、反馈和运营信息",
    automation: "自动处理数据并连接后续动作",
    risk: "检查质量、识别风险并给出评估结论",
  }[goal.id],
}));

const contentGoalMap = {
  "信息提取与补全": "automation",
  "计划拆解与协同": "collaboration",
  "分类分派与流转": "collaboration",
  "质量检查与审核": "risk",
  "分析评估与预警": "risk",
  "内容撰写与总结": "knowledge",
};

const formLabels = {
  "AI节点": "AI 节点",
  "AI字段": "AI 字段",
  "AI操作": "AI 操作",
};

function buildOfficialTemplates(aiItems) {
  const assistantNode = aiItems.find((item) => item.id === "ai-assistant-app-node");
  if (!assistantNode) return [];

  return aiAssistantOfficialTemplates.map((template) => ({
    id: `official-${template.id}`,
    kind: "official-template",
    title: template.title,
    description: template.scenario || template.desc,
    goalId: contentGoalMap[template.workGoal] || assistantNode.primaryGoal,
    form: formLabels[template.subtype] || "AI 节点",
    appName: assistantNode.name,
    appIcon: assistantNode.appIcon,
    detailRoute: assistantNode.detailRoute,
    role: template.role,
    tags: template.tags || [],
    context: template.problem,
    outcome: template.expectedOutput,
    steps: template.steps || [],
    prompt: template.prompt,
    sourceLabel: "AI 助手官方模板",
    appItem: assistantNode,
  }));
}

function buildApplicationScenes(aiItems) {
  return aiItems.map((item) => ({
    id: `application-${item.id}`,
    kind: "application-scene",
    title: item.configuration?.example || item.scenarios?.[0] || item.name,
    description: item.configuration?.output || item.summary,
    goalId: item.primaryGoal,
    form: item.aiForm,
    appName: item.name,
    appIcon: item.appIcon,
    detailRoute: item.detailRoute,
    role: item.roles?.[0] || "全员",
    tags: item.tags || [],
    context: item.configuration?.input || item.fullDescription,
    outcome: item.configuration?.output || item.summary,
    sourceLabel: "已发布 AI 应用",
    appItem: item,
  }));
}

export function buildAiScenarioCatalog(items) {
  const aiItems = items.filter((item) => item.type === "ai");
  const officialTemplates = buildOfficialTemplates(aiItems);
  const applicationScenes = buildApplicationScenes(aiItems);

  return {
    officialTemplates,
    applicationScenes,
    all: [...officialTemplates, ...applicationScenes],
  };
}
