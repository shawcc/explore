import { writeFile } from "node:fs/promises";
import { supplies } from "../src/data/mockData.js";
import { buildTaxonomyStats, WORK_GOALS } from "../src/data/taxonomy.js";

const goalNames = Object.fromEntries(WORK_GOALS.map((goal) => [goal.id, goal.label]));
const typeNames = {
  ai: "AI 应用",
  plugin: "插件",
  template: "模板",
  solution: "解决方案",
};

function escapeCsv(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll("\"", "\"\"")}"`;
}

const headers = [
  "ID",
  "供给类型",
  "名称",
  "主要工作目标",
  "相关工作目标",
  "原生分类",
  "行业",
  "角色",
  "映射状态",
  "映射依据",
];

const rows = supplies.map((item) => [
  item.id,
  typeNames[item.type],
  item.name,
  goalNames[item.primaryGoal],
  item.secondaryGoals.map((goal) => goalNames[goal]).join("、"),
  item.sourceCategories.join("、"),
  item.industries.join("、"),
  item.roles.join("、"),
  item.taxonomyStatus,
  item.taxonomyReason,
]);

const csv = `\uFEFF${[headers, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n")}\n`;
await writeFile(new URL("../供给分类映射.csv", import.meta.url), csv, "utf8");

const stats = buildTaxonomyStats(supplies);
const markdown = [
  "# 发现页供给分类统计",
  "",
  `- 统计日期：2026-08-13`,
  `- 供给总数：${supplies.length}`,
  `- 已映射：${supplies.filter((item) => item.primaryGoal).length}`,
  `- 已人工映射：${supplies.filter((item) => item.taxonomyStatus === "已人工映射").length}`,
  `- 待运营复核：${supplies.filter((item) => item.taxonomyStatus === "待运营复核").length}`,
  "",
  "| 工作目标 | 主分类 | 关联总数 | AI 应用 | 插件 | 模板 | 解决方案 |",
  "| --- | ---: | ---: | ---: | ---: | ---: | ---: |",
  ...stats.map((item) => (
    `| ${item.label} | ${item.primaryTotal} | ${item.total} | ${item.byType.ai} | ${item.byType.plugin} | ${item.byType.template} | ${item.byType.solution} |`
  )),
  "",
  "> “主分类”每条供给只计一次，总和等于供给总数；“关联总数”包含辅助目标，因此各行可以重复计数。",
  "",
].join("\n");

await writeFile(new URL("../供给分类统计.md", import.meta.url), markdown, "utf8");
