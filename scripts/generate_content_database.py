#!/usr/bin/env python3
"""Generate the editable Excel content database for the Discover page."""

from pathlib import Path

from openpyxl import Workbook, load_workbook
from openpyxl.formatting.rule import FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "发现页内容数据库.xlsx"
SEP = "｜"

SCENARIO_HEADERS = [
    "场景ID", "场景名称", "卡片短描述", "问题描述", "场景说明", "预期价值",
    "适用行业", "适用角色", "场景标签", "封面类型", "封面图片", "客户案例",
    "量化结果", "是否推荐", "推荐排序", "内容状态", "真实性备注",
]

PRODUCT_HEADERS = [
    "产品ID", "产品名称", "产品类型", "产品子类型", "卡片短描述", "详情介绍",
    "核心能力", "适用行业", "适用角色", "图标", "封面图片", "提供方",
    "最近更新时间", "直接使用链接", "配置说明链接", "产品文档链接",
    "来源URL", "目录是否展示", "目录排序", "内容状态", "真实性备注",
]

RELATION_HEADERS = [
    "关系ID", "场景ID", "产品ID", "是否主要实现", "使用方法概述", "操作步骤",
    "交付类型", "参考提示词", "PRD正文", "PRD链接", "搭建说明链接", "目标链接",
    "按钮文案", "配置注意事项", "预期产出", "内容状态",
]


def values(*items):
    return SEP.join(items)


def scenario(
    sid, name, card, problem, usage, value, industries, roles, tags,
    cover="流程节点", customer="", metrics="", order=0,
):
    return {
        "场景ID": sid,
        "场景名称": name,
        "卡片短描述": card,
        "问题描述": problem,
        "场景说明": usage,
        "预期价值": value,
        "适用行业": industries,
        "适用角色": roles,
        "场景标签": tags,
        "封面类型": cover,
        "封面图片": "",
        "客户案例": customer,
        "量化结果": metrics,
        "是否推荐": "是",
        "推荐排序": order,
        "内容状态": "模拟待校准",
        "真实性备注": "演示数据；产品能力、客户案例与量化结果上线前需逐项核实。",
    }


SCENARIOS = [
    scenario(
        "S001", "客户信息一键补全",
        "需求评审后，从纪要、邮件和附件中提取客户背景与关键诉求，减少重复录入。",
        "客户信息散落在会议纪要、邮件和附件里，产品经理需要反复查找并手动录入字段。",
        "在需求进入评审完成节点后，读取关联材料，提取客户名称、行业、联系人、核心诉求和截止时间，并回填到工作项。",
        values("减少重复录入", "降低关键信息遗漏", "统一客户信息口径"),
        values("互联网", "金融", "零售"), values("产品经理", "销售", "运营"),
        values("信息提取", "客户管理", "自动填单"), order=1,
    ),
    scenario(
        "S002", "会议纪要自动转任务",
        "会议结束后自动识别决策、待办、负责人和截止时间，并生成关联任务。",
        "会议结论依赖人工整理，任务创建滞后，负责人和截止时间容易遗漏。",
        "读取会议纪要中的决策和行动项，匹配负责人，生成子任务并关联原始会议与需求。",
        values("缩短会后整理时间", "让决策进入执行闭环", "减少遗漏"),
        values("互联网", "汽车", "教育"), values("项目经理", "产品经理", "运营"),
        values("会议协同", "任务生成", "决策跟踪"), order=2,
    ),
    scenario(
        "S003", "反馈自动分类路由",
        "识别反馈是缺陷、需求还是咨询，并按产品模块和优先级自动进入对应队列。",
        "大量反馈依赖人工分类和转派，处理链路长，重复反馈难以及时识别。",
        "反馈进入项目后，根据语义、产品模块和用户等级完成分类、去重与路由，并保留分类理由供人工复核。",
        values("缩短首次响应时间", "减少人工转派", "提升分类一致性"),
        values("游戏", "互联网", "零售"), values("运营", "产品经理", "测试"),
        values("反馈管理", "智能分类", "自动路由"), order=3,
    ),
    scenario(
        "S004", "需求智能拆解与排期",
        "根据目标、范围和历史项目，将复杂需求拆成任务、里程碑和初始排期。",
        "项目启动依赖个人经验，任务粒度不一致，关键依赖往往在执行阶段才暴露。",
        "输入项目目标、范围、资源和交付日期，生成任务树、依赖关系、里程碑及排期建议，由项目经理审核后写入计划。",
        values("提升启动效率", "提前暴露依赖", "统一拆解口径"),
        values("互联网", "制造", "汽车"), values("项目经理", "产品经理", "研发"),
        values("项目规划", "任务拆解", "智能排期"), order=4,
    ),
    scenario(
        "S005", "交付质量自动检查",
        "提测或发布前检查需求、代码、测试与验收材料是否齐全，并给出缺口。",
        "质量门禁依赖人工检查，检查项分散，缺失材料常在临近发布时才被发现。",
        "工作项进入提测或发布节点时，检查需求关联、代码提交、测试用例、验收结果和发布说明，输出可执行的整改清单。",
        values("前置发现质量风险", "减少重复检查", "提升交付完整度"),
        values("互联网", "消费电子", "汽车"), values("测试", "研发", "项目经理"),
        values("质量门禁", "合规检查", "交付管理"), order=5,
    ),
    scenario(
        "S006", "项目健康度自动诊断",
        "汇总进度、风险、资源和变更数据，生成项目健康度结论与行动建议。",
        "管理者需要跨多个视图拼接信息，看到的是数据而不是结论，风险识别依赖经验。",
        "按固定周期读取延期、阻塞、变更、缺陷和负载数据，生成健康度评分、风险原因与建议行动。",
        values("缩短管理分析时间", "统一项目体检口径", "让风险可追踪"),
        values("互联网", "制造", "能源"), values("高管", "项目经理", "产品经理"),
        values("项目洞察", "风险诊断", "管理汇报"), order=6,
    ),
    scenario(
        "S007", "周报月报自动生成",
        "自动汇总本周期完成事项、关键进展、风险和下周期计划，形成结构化报告。",
        "周期汇报重复整理同一批项目数据，内容口径不一致，管理者难以横向比较。",
        "按团队或项目读取周期数据，生成摘要、进展、风险、决策和下一步计划，并保留数据来源。",
        values("降低汇报成本", "统一报告结构", "提升信息可信度"),
        values("互联网", "教育", "金融"), values("项目经理", "运营", "高管"),
        values("报告生成", "周期总结", "管理汇报"), order=7,
    ),
    scenario(
        "S008", "需求变更影响评估",
        "变更提出后，自动识别受影响的模块、任务、测试与交付节点。",
        "需求变更的影响范围依赖人工排查，容易遗漏上下游任务和测试范围。",
        "读取变更内容及关联关系，定位受影响工作项、负责人和里程碑，生成影响清单供评审。",
        values("缩短变更评估时间", "降低遗漏风险", "提升评审质量"),
        values("汽车", "消费电子", "互联网"), values("产品经理", "研发", "测试"),
        values("变更管理", "影响分析", "风险控制"), order=8,
    ),
    scenario(
        "S009", "缺陷根因聚类分析",
        "按现象、模块和原因聚类历史缺陷，识别高频根因与优先改进方向。",
        "团队只处理单个缺陷，缺少跨版本的趋势分析，同类问题反复出现。",
        "定期分析缺陷描述、模块、修复方式和回归结果，输出根因簇、趋势和改进建议。",
        values("减少重复缺陷", "支持质量专项", "沉淀根因知识"),
        values("游戏", "汽车", "互联网"), values("测试", "研发", "项目经理"),
        values("缺陷分析", "根因聚类", "质量改进"), order=9,
    ),
    scenario(
        "S010", "合同关键条款提取",
        "从合同中提取金额、期限、交付、验收和违约条款，并形成项目字段。",
        "合同关键信息依赖人工阅读和转录，业务执行与合同约束容易脱节。",
        "上传合同后提取关键条款，生成结构化字段并关联到项目计划、验收节点和风险清单。",
        values("减少人工摘录", "连接合同与执行", "提前识别履约风险"),
        values("金融", "制造", "能源"), values("销售", "项目经理", "高管"),
        values("合同分析", "文档解析", "履约管理"), order=10,
    ),
    scenario(
        "S011", "客户需求与方案匹配",
        "根据客户诉求、行业和现有能力，推荐可复用方案、模板和参考案例。",
        "售前方案依赖个人经验，历史案例难复用，响应速度和方案质量波动大。",
        "输入客户背景和核心诉求，从方案库、模板库和案例库中检索并组合候选方案，保留引用来源。",
        values("提升售前响应速度", "复用组织经验", "提高方案一致性"),
        values("金融", "零售", "制造"), values("销售", "产品经理", "运营"),
        values("客户洞察", "方案推荐", "知识复用"), order=11,
    ),
    scenario(
        "S012", "多语言发布内容生成",
        "根据版本变更自动生成多语言发布说明，并保持术语和格式一致。",
        "全球化发布需要重复翻译和人工校对，产品术语在不同语言中容易不一致。",
        "读取版本中的需求、缺陷和变更记录，按目标市场生成发布说明，并使用术语表校验。",
        values("缩短本地化周期", "统一产品术语", "减少遗漏"),
        values("游戏", "消费电子", "互联网"), values("运营", "产品经理", "研发"),
        values("翻译本地化", "发布说明", "内容生成"), order=12,
    ),
    scenario(
        "S013", "外部工单接入项目闭环",
        "将客服或服务台工单自动创建为项目工作项，并同步状态与处理结果。",
        "外部工单与研发项目割裂，客服需要反复追问进度，状态同步依赖人工。",
        "通过插件接入外部工单，映射字段、自动建单并同步状态，完成后将结果回传原系统。",
        values("打通内外流程", "减少状态搬运", "提升客户响应透明度"),
        values("互联网", "医疗", "零售"), values("运营", "研发", "项目经理"),
        values("系统集成", "工单管理", "状态同步"), cover="图片", order=13,
    ),
    scenario(
        "S014", "代码提交关联研发任务",
        "自动将分支、提交和合并请求关联研发任务，并同步开发状态。",
        "代码与任务信息分散，项目进度依赖开发手动更新，追溯成本高。",
        "通过代码仓库插件识别任务编号，关联分支、提交和合并请求，并按规则更新任务状态。",
        values("减少手动更新", "提升研发可追溯性", "让进度更实时"),
        values("互联网", "汽车", "消费电子"), values("研发", "项目经理", "测试"),
        values("研发协同", "代码关联", "自动流转"), cover="图片", order=14,
    ),
    scenario(
        "S015", "管理驾驶舱快速搭建",
        "聚合项目进度、风险、资源和质量指标，为管理者提供一页式视图。",
        "管理数据散落在多个视图，汇报依赖截图和手工表格，缺少统一入口。",
        "按角色组合指标卡、趋势图和风险列表，连接项目数据源，形成可按组织筛选的驾驶舱。",
        values("缩短管理取数路径", "统一经营视图", "支持持续复盘"),
        values("互联网", "制造", "汽车"), values("高管", "项目经理", "运营"),
        values("轻应用", "管理驾驶舱", "数据可视化"), cover="图片", order=15,
    ),
    scenario(
        "S016", "会议联动项目汇报",
        "会前自动准备项目材料，会中展示关键数据，会后跟踪决议执行。",
        "例会材料准备耗时，会议与项目数据割裂，决议缺少持续跟踪。",
        "轻应用按会议议题聚合项目数据，会后将决议转为任务，并持续展示执行状态。",
        values("减少会前准备", "连接会议与执行", "提升决议闭环率"),
        values("医疗", "制造", "互联网"), values("项目经理", "高管", "运营"),
        values("轻应用", "会议协同", "项目汇报"), cover="图片", order=16,
    ),
    scenario(
        "S017", "软件研发流程快速启用",
        "用一套预置模板快速搭建需求、开发、测试和发布的研发流程。",
        "新团队从零设计流程成本高，字段、状态和视图容易缺失或不一致。",
        "复制研发模板后，根据团队规模调整工作项、流程、权限和度量视图，再导入存量项目。",
        values("降低初始化成本", "复用成熟流程", "缩短上线周期"),
        values("互联网", "消费电子", "汽车"), values("项目经理", "研发", "测试"),
        values("模板", "研发管理", "流程搭建"), cover="图片", order=17,
    ),
    scenario(
        "S018", "整车研发跨域协同",
        "围绕车型项目连接多域计划、评审、风险和交付，实现跨团队协同。",
        "整车研发周期长、参与域多，计划依赖关系和风险传递难以统一管理。",
        "基于解决方案搭建车型项目、跨域计划、关键评审与风险闭环，并连接组织级里程碑。",
        values("统一跨域协作语言", "提升计划透明度", "强化风险闭环"),
        values("汽车", "制造"), values("项目经理", "研发", "高管"),
        values("解决方案", "整车研发", "跨域协同"), cover="图片", order=18,
    ),
]


def product(
    pid, name, ptype, subtype, card, detail, capabilities, industries, roles,
    order, visible="是",
):
    return {
        "产品ID": pid,
        "产品名称": name,
        "产品类型": ptype,
        "产品子类型": subtype,
        "卡片短描述": card,
        "详情介绍": detail,
        "核心能力": capabilities,
        "适用行业": industries,
        "适用角色": roles,
        "图标": "",
        "封面图片": "",
        "提供方": "飞书项目（模拟）",
        "最近更新时间": "",
        "直接使用链接": "",
        "配置说明链接": "",
        "产品文档链接": "",
        "来源URL": "",
        "目录是否展示": visible,
        "目录排序": order,
        "内容状态": "模拟待校准",
        "真实性备注": "演示命名与描述；上线前请替换为真实产品名称、截图、链接和官方说明。",
    }


AI_PRODUCTS = [
    ("A001", "自定义指令", "AI字段", "灵活编写提示词，定制个性化 AI 输出。", values("自定义提示词", "字段输出", "个性化配置")),
    ("A002", "智能打分", "AI字段", "按标准智能量化评分，提升评估效率。", values("评分标准", "量化评估", "结果写入")),
    ("A003", "分类打标", "AI字段", "智能匹配分类标签，提升内容检索效率。", values("智能分类", "标签匹配", "字段写入")),
    ("A004", "关键内容提取", "AI字段", "精准提取关键信息，提升文本处理效率。", values("信息提取", "结构化输出", "字段写入")),
    ("A005", "内容总结", "AI字段", "智能提炼长文本，生成清晰结构化总结。", values("长文总结", "结构化摘要", "字段生成")),
    ("A006", "智能翻译", "AI字段", "精准翻译多语言内容，保留原文语义结构。", values("多语言翻译", "语义保留", "字段生成")),
    ("A007", "AI 智能洞察", "AI节点", "一键分析项目数据，生成洞察报告。", values("项目分析", "洞察报告", "风险识别")),
    ("A008", "AI 智能填单", "AI节点", "智能提取文档信息，一键回填项目字段。", values("文档提取", "字段映射", "一键回填")),
    ("A009", "智能测试用例生成", "AI节点", "智能生成测试用例，提升覆盖率与交付效率。", values("用例生成", "覆盖提升", "质量协同")),
    ("A010", "智能体连接器", "AI节点", "连接 Agent 与项目，自动流转任务。", values("Agent 连接", "任务流转", "项目协同")),
    ("A011", "AI 生成云文档", "AI节点", "智能生成规范需求文档，提升 PRD 产出效率。", values("需求文档", "规范生成", "云文档")),
    ("A012", "智能会议分析", "AI节点", "智能分析会议内容，一键生成项目子任务。", values("会议分析", "子任务生成", "行动项提取")),
]

PLUGIN_PRODUCTS = [
    ("P001", "工时资源管理", "资源管理", "连接人力资源与运营成本，支持工时填报、审批、统计与多维分析。", values("工时填报", "工时审批", "多维分析")),
    ("P002", "ITSM·工单通", "工单集成", "打通内外流程闭环，支持服务门户、审批流、客户管理与 SLA 管控。", values("服务门户", "工单建单", "SLA 管控")),
    ("P003", "合同审核", "合同管理", "通过 AI 辅助合同审查，自动识别风险并输出风险清单。", values("合同审查", "风险识别", "风险清单")),
    ("P004", "文件资源管理", "文档集成", "支持项目文件集中管理、异步上传、权限配置与统一检索。", values("文件管理", "异步上传", "权限配置")),
    ("P005", "组织架构", "数据展示", "将客户对接人按层级关系可视化呈现。", values("组织关系", "联系人信息", "可视化展示")),
    ("P006", "企业信息补全", "数据服务", "录入客户时自动查询企业基础信息，减少重复数据。", values("企业查询", "信息补全", "重复校验")),
    ("P007", "GitLab 研发连接器", "代码集成", "关联 Branch、Commit、MR 与工作项，并通过 Merge 事件自动流转。", values("代码关联", "状态同步", "研发追溯")),
    ("P008", "多维表格同步", "数据同步", "在项目工作项与多维表格间同步结构化数据。", values("双向同步", "字段映射", "冲突处理")),
    ("P009", "飞书消息转任务", "消息集成", "将会话消息快速创建为项目任务并保留来源。", values("消息建单", "上下文保留", "任务关联")),
    ("P010", "测试管理增强", "质量管理", "管理测试计划、用例、执行与缺陷关联。", values("用例管理", "执行跟踪", "覆盖分析")),
    ("P011", "审批流程增强", "流程增强", "为复杂业务提供多级审批与条件流转能力。", values("条件审批", "多级流转", "审计记录")),
    ("P012", "开放 API 调试台", "开发工具", "辅助调试项目开放接口与事件订阅。", values("接口调试", "事件验证", "日志查看")),
]

TEMPLATE_PRODUCTS = [
    ("T001", "DSTE战略到执行", "战略管理", "打通战略制定、目标分解、项目推进与经营复盘。", values("战略地图", "指标看板", "执行闭环")),
    ("T002", "软件研发管理", "研发管理", "覆盖需求、任务、缺陷、迭代、测试、代码与发布全流程。", values("需求管理", "迭代管理", "质量追踪")),
    ("T003", "内容制作全流程", "内容运营", "覆盖创意收集、选题、素材、创作、分发与复盘。", values("内容策划", "素材沉淀", "分发复盘")),
    ("T004", "软件交付项目模板", "项目交付", "管理交付计划、风险、验收与上线。", values("计划管理", "风险跟踪", "交付验收")),
    ("T005", "版本发布管理模板", "发布管理", "协调多端版本、变更、检查与发布。", values("版本计划", "发布门禁", "变更记录")),
    ("T006", "测试全流程模板", "质量管理", "组织测试计划、用例执行和缺陷闭环。", values("测试计划", "用例执行", "缺陷管理")),
    ("T007", "市场活动项目模板", "营销运营", "管理活动策划、素材、执行与复盘。", values("活动计划", "素材协作", "效果复盘")),
    ("T008", "内容生产流程模板", "内容运营", "管理选题、脚本、制作、发布和数据复盘。", values("内容策划", "制作协同", "发布复盘")),
    ("T009", "门店开业项目模板", "零售运营", "管理选址、筹备、验收和开业节点。", values("筹备计划", "节点验收", "问题闭环")),
    ("T010", "合同履约管理模板", "合同管理", "连接合同条款、交付计划与验收回款。", values("条款记录", "履约计划", "验收回款")),
    ("T011", "战略执行管理模板", "战略管理", "连接目标、项目集、项目与执行任务。", values("目标分解", "项目组合", "执行跟踪")),
    ("T012", "供应商项目模板", "供应链管理", "管理供应商准入、交付、质量与改进。", values("供应商准入", "交付跟踪", "质量改进")),
]

SOLUTION_PRODUCTS = [
    ("O001", "规模化敏捷", "敏捷研发", "基于 SAFe 框架支持 PI Planning 全流程管理。", values("ART 看板", "团队看板", "依赖报告")),
    ("O002", "翼云销LTC解决方案", "LTC管理", "以 AI 为核心打通线索、商机、签约、交付到回款全流程。", values("客户录入", "方案推荐", "风险预警")),
    ("O003", "Zadig DevOps 一体化解决方案", "DevOps", "打通需求、开发、自测、测试到生产发布全流程。", values("构建部署", "测试审批", "状态同步")),
    ("O004", "ASPICE 汽车软件研发方案", "汽车研发", "连接项目、知识库与云文档，支撑汽车软件 V 模型和认证。", values("需求条目化", "版本管理", "V 模型")),
    ("O005", "制造业项目协同解决方案", "制造行业", "管理研发、供应链、质量和交付协同。", values("研发协同", "供应链风险", "质量追踪")),
    ("O006", "金融科技项目治理方案", "金融行业", "加强需求、合规、研发和发布治理。", values("需求治理", "合规检查", "发布审计")),
]

LIGHT_PRODUCTS = [
    ("L001", "项目管理驾驶舱", "管理驾驶舱", "聚合关键项目指标与风险。", values("指标卡", "趋势图", "风险列表")),
    ("L002", "会议联动汇报台", "会议协同", "连接议题、项目数据和会后决议。", values("会前材料", "会中展示", "会后跟踪")),
    ("L003", "个人项目工作台", "个人效率", "聚合个人任务、风险和待处理事项。", values("个人任务", "优先级", "快捷操作")),
    ("L004", "多角色项目门户", "空间门户", "按角色提供不同项目视图与入口。", values("角色视图", "空间导航", "权限适配")),
    ("L005", "周期数据报告台", "数据报告", "按周期生成并展示项目数据报告。", values("周期汇总", "图表展示", "报告归档")),
    ("L006", "版本发布指挥台", "发布协同", "集中展示发布状态、风险和关键操作。", values("发布看板", "风险清单", "协同入口")),
]


def build_products():
    result = []
    source_url = "https://project.feishu.cn/home/developers"
    verified_ids = {
        *(f"A{index:03d}" for index in range(1, 13)),
        *(f"P{index:03d}" for index in range(1, 8)),
        "T001", "T002", "T003",
        "O001", "O002", "O003", "O004",
    }
    groups = [
        (AI_PRODUCTS, "AI应用", values("互联网", "汽车", "制造", "金融"), values("产品经理", "项目经理", "研发", "测试"), "是"),
        (PLUGIN_PRODUCTS, "插件", values("互联网", "汽车", "制造", "金融"), values("项目经理", "研发", "测试", "运营"), "是"),
        (TEMPLATE_PRODUCTS, "模板", values("互联网", "汽车", "制造", "零售"), values("项目经理", "产品经理", "运营", "高管"), "是"),
        (SOLUTION_PRODUCTS, "解决方案", values("汽车", "制造", "金融", "互联网"), values("高管", "项目经理", "研发"), "是"),
        (LIGHT_PRODUCTS, "轻应用", values("互联网", "汽车", "制造", "医疗"), values("高管", "项目经理", "运营"), "否"),
    ]
    for rows, ptype, industries, roles, visible in groups:
        for index, row in enumerate(rows, start=1):
            pid, name, subtype, card, capabilities = row
            detail = f"{name}用于{card.rstrip('。')}，可作为相关最佳实践的实现资产。"
            item = product(
                pid, name, ptype, subtype, card, detail, capabilities,
                industries, roles, index, visible,
            )
            if pid in verified_ids:
                item["来源URL"] = source_url
                item["内容状态"] = "草稿"
                item["真实性备注"] = "名称与核心描述来自飞书项目开放平台官网；图片、详情和目标链接仍需补充或复核。"
            result.append(item)
    return result


PRODUCTS = build_products()


def relation(rid, sid, pid, summary, steps, dtype, cta, output, primary="是"):
    prompt = ""
    prd = ""
    guide = ""
    target = ""
    if dtype == "参考提示词":
        prompt = (
            "你是项目管理助手。请结合当前工作项及其关联材料，完成以下任务："
            "1. 识别与本场景相关的关键信息；2. 按给定字段输出结构化结果；"
            "3. 对无法确认的信息标记“待人工确认”；4. 不补充材料中不存在的事实。"
        )
    return {
        "关系ID": rid,
        "场景ID": sid,
        "产品ID": pid,
        "是否主要实现": primary,
        "使用方法概述": summary,
        "操作步骤": steps,
        "交付类型": dtype,
        "参考提示词": prompt,
        "PRD链接": prd,
        "搭建说明链接": guide,
        "目标链接": target,
        "按钮文案": cta,
        "配置注意事项": "示例说明；请根据真实字段、权限、流程状态和产品能力调整。",
        "预期产出": output,
        "内容状态": "模拟待校准",
    }


RELATIONS = [
    relation("R001", "S001", "A008", "在评审完成后提取材料并回填客户字段。", values("选择触发节点", "配置材料来源", "映射输出字段", "用样例验证"), "参考提示词", "复制参考提示词", "结构化客户信息"),
    relation("R002", "S001", "A004", "先提取关键内容，再将结果写入客户字段。", values("选择材料", "定义提取字段", "生成结构化结果", "人工确认"), "参考提示词", "复制参考提示词", "带来源的客户信息", "否"),
    relation("R003", "S002", "A012", "分析会议纪要并创建关联任务。", values("关联会议纪要", "定义行动项格式", "映射负责人", "创建子任务"), "参考提示词", "复制参考提示词", "决策与任务清单"),
    relation("R004", "S003", "A003", "在反馈进入流程时完成分类和打标。", values("定义分类标签", "配置判断上下文", "设置后续路由", "抽样复核"), "参考提示词", "复制参考提示词", "分类结果与路由建议"),
    relation("R005", "S004", "A010", "连接 Agent 与项目，生成任务树和排期草案。", values("输入项目目标", "补充资源约束", "生成计划草案", "审核后写入"), "参考提示词", "复制参考提示词", "任务树与初始排期"),
    relation("R006", "S005", "A009", "根据需求智能生成测试用例并辅助覆盖检查。", values("选择需求范围", "配置用例格式", "生成测试用例", "评审并执行"), "参考提示词", "复制参考提示词", "测试用例与覆盖建议"),
    relation("R007", "S005", "P010", "用测试管理增强插件补充用例和执行数据。", values("接入测试数据", "关联需求", "汇总执行结果"), "PRD", "下载 PRD", "测试覆盖与缺口", "否"),
    relation("R008", "S006", "A007", "定期分析项目数据并输出健康度结论。", values("确定诊断周期", "选择指标", "配置风险阈值", "推送诊断报告"), "参考提示词", "复制参考提示词", "健康度报告"),
    relation("R009", "S007", "L005", "用轻应用搭建周期报告台，自动聚合项目数据。", values("确定报告结构", "连接项目数据", "配置生成周期", "发布报告入口"), "搭建说明", "查看搭建说明", "周期数据报告台"),
    relation("R010", "S008", "T004", "复制软件交付项目模板，使用关联关系与变更记录完成影响评估。", values("复制模板", "调整工作项关系", "配置变更流程", "导入项目"), "直接链接", "使用模板", "可追踪变更的交付空间"),
    relation("R011", "S009", "P010", "在测试管理增强插件中聚合缺陷数据并开展根因分析。", values("接入缺陷数据", "统一原因字段", "生成聚类视图", "建立改进专项"), "PRD", "下载 PRD", "根因簇与趋势"),
    relation("R012", "S010", "P003", "使用合同审核插件识别风险与履约关键条款。", values("上传合同", "配置审核规则", "生成风险清单", "关联履约节点"), "PRD", "下载 PRD", "合同风险与条款清单"),
    relation("R013", "S011", "O002", "参考翼云销 LTC 解决方案连接客户诉求、方案推荐与后续交付。", values("查看方案范围", "梳理客户流程", "配置方案资产库", "规划实施阶段"), "直接链接", "查看解决方案", "客户方案匹配流程"),
    relation("R014", "S012", "A006", "生成多语言发布内容并保留原文语义。", values("选择版本数据", "补充术语要求", "选择目标语言", "校对发布"), "参考提示词", "复制参考提示词", "多语言发布说明"),
    relation("R015", "S013", "P002", "通过 ITSM·工单通完成内外系统闭环。", values("定义字段映射", "配置建单规则", "配置状态同步", "联调回传"), "PRD", "下载 PRD", "工单集成方案"),
    relation("R016", "S014", "P007", "接入 GitLab 并按任务编号自动关联代码活动。", values("授权代码仓库", "配置编号规则", "设置状态流转", "验证事件"), "PRD", "下载 PRD", "研发集成方案"),
    relation("R017", "S015", "L001", "用轻应用搭建一页式管理驾驶舱。", values("确定指标", "连接数据源", "搭建页面", "配置权限", "发布"), "搭建说明", "查看搭建说明", "管理驾驶舱"),
    relation("R018", "S016", "L002", "用轻应用连接会议议题、项目数据和决议。", values("设计议题结构", "连接项目数据", "配置会后任务", "发布入口"), "搭建说明", "查看搭建说明", "会议联动汇报台"),
    relation("R019", "S017", "T002", "复制软件研发管理模板并按团队流程完成初始化。", values("打开模板", "复制到空间", "调整流程字段", "配置权限", "导入项目"), "直接链接", "使用模板", "可运行的研发空间"),
    relation("R020", "S018", "O004", "查看 ASPICE 汽车软件研发方案并结合组织现状规划实施。", values("查看方案范围", "评估现状差距", "确定实施阶段", "启动方案设计"), "直接链接", "查看解决方案", "解决方案实施蓝图"),
]


README_ROWS = [
    ["文件用途", "本工作簿是“发现更多可能”页面的内容数据库。后续页面内容以此文件为准。"],
    ["编辑顺序", "先维护“产品表”，再维护“场景表”，最后用“场景产品关系表”连接两者。"],
    ["真实性原则", "所有“模拟待校准”内容仅用于演示。真实产品名称、客户、数据、图片和链接上线前必须核实。"],
    ["多选分隔符", f"行业、角色、标签、能力、步骤等多选字段统一使用全角竖线 {SEP} 分隔。"],
    ["推荐页取数", "场景表 + 场景产品关系表；上半部分取场景信息，下方左侧取场景说明，右侧取使用方法。"],
    ["产品目录取数", "产品表；产品详情中的典型场景通过关系表反查。"],
    ["AI 提示词边界", "AI 应用产品本身不展示提示词；参考提示词只存在于推荐场景与产品的关系记录中。"],
    ["轻应用边界", "产品类型可为“轻应用”，但“目录是否展示”必须为“否”，只通过推荐场景出现。"],
    ["图片填写", "可填写 HTTPS URL 或项目内相对路径。空白时页面使用默认视觉。"],
    ["链接填写", "模板、解决方案填写真实目标链接；插件填写 PRD；轻应用填写搭建说明；AI 应用填写配置说明。"],
    ["当前模拟规模", "推荐场景 18；AI 应用 12；插件 12；模板 12；解决方案 6；轻应用 6（仅推荐）。"],
]

FIELD_ROWS = [
    ["工作表", "字段", "必填", "填写说明"],
    ["场景表", "场景ID", "是", "唯一且稳定，建议 S001 起，不随标题变化。"],
    ["场景表", "卡片短描述", "是", "建议 40～70 字，说明发生什么，不写产品功能堆砌。"],
    ["场景表", "问题描述", "是", "详情页场景背景，解释用户为什么需要这个实践。"],
    ["场景表", "场景说明", "是", "详情页左栏，解释流程如何运转，不写按钮说明。"],
    ["场景表", "预期价值", "是", f"多个价值使用 {SEP} 分隔。"],
    ["场景表", "封面类型", "是", "流程节点或图片。"],
    ["产品表", "产品名称", "是", "使用真实发布名称，禁止用场景名替代产品名。"],
    ["产品表", "目录是否展示", "是", "轻应用必须为否，其余按实际情况。"],
    ["产品表", "来源URL", "核实内容必填", "记录名称、描述或案例的公开来源，方便复核。"],
    ["关系表", "使用方法概述", "是", "推荐详情右栏的使用方法摘要。"],
    ["关系表", "操作步骤", "是", f"按顺序填写，步骤间使用 {SEP} 分隔。"],
    ["关系表", "交付类型", "是", "参考提示词、PRD、搭建说明或直接链接。"],
    ["关系表", "参考提示词", "条件必填", "只用于推荐场景中的 AI 最佳实践，不属于 AI 应用产品本身。"],
    ["关系表", "PRD正文", "条件必填", "插件场景的可读 PRD，使用 Markdown；页面直接展示并支持下载。"],
]

ENUM_ROWS = [
    ["枚举名称", "可选值", "备注"],
    ["产品类型", values("AI应用", "插件", "轻应用", "模板", "解决方案"), "轻应用只在推荐出现"],
    ["产品子类型", values("AI节点", "AI字段"), "官网当前精选 AI 应用按 AI 节点与 AI 字段展示"],
    ["封面类型", values("流程节点", "图片"), ""],
    ["是否", values("是", "否"), ""],
    ["内容状态", values("模拟待校准", "草稿", "可发布"), "只有核实后的内容才设为可发布"],
    ["交付类型", values("参考提示词", "PRD", "搭建说明", "直接链接"), ""],
    ["行业", values("互联网", "汽车", "消费电子", "制造", "金融", "游戏", "教育", "医疗", "零售", "能源"), ""],
    ["角色", values("产品经理", "项目经理", "研发", "测试", "设计", "运营", "销售", "高管"), ""],
]


HEADER_FILL = PatternFill("solid", fgColor="3B5BDB")
SECTION_FILL = PatternFill("solid", fgColor="EEF2FF")
WARNING_FILL = PatternFill("solid", fgColor="FFF4E6")
READY_FILL = PatternFill("solid", fgColor="E6FCF5")
THIN_GRAY = Side(style="thin", color="DDE1EA")


def append_dict_rows(ws, headers, rows):
    ws.append(headers)
    for item in rows:
        ws.append([item.get(header, "") for header in headers])


def style_table(ws, freeze="A2", filter_table=True):
    ws.freeze_panes = freeze
    if filter_table and ws.max_row > 1:
        ws.auto_filter.ref = ws.dimensions
    ws.row_dimensions[1].height = 30
    for cell in ws[1]:
        cell.fill = HEADER_FILL
        cell.font = Font(color="FFFFFF", bold=True, size=11)
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = Border(bottom=Side(style="medium", color="2948B1"))
    for row in ws.iter_rows(min_row=2):
        for cell in row:
            cell.alignment = Alignment(vertical="top", wrap_text=True)
            cell.border = Border(bottom=THIN_GRAY)
    for column_cells in ws.columns:
        letter = get_column_letter(column_cells[0].column)
        max_length = max(len(str(cell.value or "")) for cell in column_cells[:80])
        ws.column_dimensions[letter].width = min(max(max_length + 2, 12), 36)
    ws.sheet_view.showGridLines = False


def add_list_validation(ws, column_name, formula, last_row):
    headers = [cell.value for cell in ws[1]]
    column = headers.index(column_name) + 1
    dv = DataValidation(type="list", formula1=formula, allow_blank=True)
    dv.error = "请选择下拉列表中的值"
    dv.errorTitle = "值不符合规范"
    ws.add_data_validation(dv)
    dv.add(f"{get_column_letter(column)}2:{get_column_letter(column)}{last_row}")


def add_status_formatting(ws, status_header):
    headers = [cell.value for cell in ws[1]]
    column = headers.index(status_header) + 1
    letter = get_column_letter(column)
    end = max(ws.max_row, 300)
    ws.conditional_formatting.add(
        f"{letter}2:{letter}{end}",
        FormulaRule(formula=[f'${letter}2="模拟待校准"'], fill=WARNING_FILL),
    )
    ws.conditional_formatting.add(
        f"{letter}2:{letter}{end}",
        FormulaRule(formula=[f'${letter}2="可发布"'], fill=READY_FILL),
    )


def build_workbook():
    wb = Workbook()
    readme = wb.active
    readme.title = "使用说明"
    readme.append(["内容数据库使用说明", "说明"])
    for row in README_ROWS:
        readme.append(row)
    readme.append([])
    readme.append(["数据统计", "数量"])
    readme.append(["推荐场景", len(SCENARIOS)])
    for ptype in ["AI应用", "插件", "模板", "解决方案", "轻应用"]:
        readme.append([ptype, sum(1 for item in PRODUCTS if item["产品类型"] == ptype)])
    readme.append(["场景产品关系", len(RELATIONS)])
    style_table(readme, filter_table=False)
    readme.column_dimensions["A"].width = 22
    readme.column_dimensions["B"].width = 100
    for row in [1, len(README_ROWS) + 3]:
        for cell in readme[row]:
            cell.fill = HEADER_FILL
            cell.font = Font(color="FFFFFF", bold=True)

    ws_scenarios = wb.create_sheet("场景表")
    append_dict_rows(ws_scenarios, SCENARIO_HEADERS, SCENARIOS)
    style_table(ws_scenarios)
    add_list_validation(ws_scenarios, "封面类型", '"流程节点,图片"', 300)
    add_list_validation(ws_scenarios, "是否推荐", '"是,否"', 300)
    add_list_validation(ws_scenarios, "内容状态", '"模拟待校准,草稿,可发布"', 300)
    add_status_formatting(ws_scenarios, "内容状态")

    ws_products = wb.create_sheet("产品表")
    append_dict_rows(ws_products, PRODUCT_HEADERS, PRODUCTS)
    style_table(ws_products)
    add_list_validation(ws_products, "产品类型", '"AI应用,插件,轻应用,模板,解决方案"', 300)
    add_list_validation(ws_products, "目录是否展示", '"是,否"', 300)
    add_list_validation(ws_products, "内容状态", '"模拟待校准,草稿,可发布"', 300)
    add_status_formatting(ws_products, "内容状态")

    ws_relations = wb.create_sheet("场景产品关系表")
    append_dict_rows(ws_relations, RELATION_HEADERS, RELATIONS)
    style_table(ws_relations)
    add_list_validation(ws_relations, "是否主要实现", '"是,否"', 300)
    add_list_validation(ws_relations, "交付类型", '"参考提示词,PRD,搭建说明,直接链接"', 300)
    add_list_validation(ws_relations, "内容状态", '"模拟待校准,草稿,可发布"', 300)
    add_status_formatting(ws_relations, "内容状态")

    fields = wb.create_sheet("字段说明")
    for row in FIELD_ROWS:
        fields.append(row)
    style_table(fields, filter_table=False)
    fields.column_dimensions["A"].width = 20
    fields.column_dimensions["B"].width = 24
    fields.column_dimensions["C"].width = 14
    fields.column_dimensions["D"].width = 90

    enums = wb.create_sheet("枚举与规范")
    for row in ENUM_ROWS:
        enums.append(row)
    style_table(enums, filter_table=False)
    enums.column_dimensions["A"].width = 22
    enums.column_dimensions["B"].width = 90
    enums.column_dimensions["C"].width = 40

    checks = wb.create_sheet("数据检查")
    checks.append(["检查项", "结果", "说明"])
    checks.append(["场景数量", f'=COUNTA(\'场景表\'!A:A)-1', "推荐演示建议 18 条"])
    checks.append(["产品数量", f'=COUNTA(\'产品表\'!A:A)-1', "含仅推荐出现的轻应用"])
    checks.append(["关系数量", f'=COUNTA(\'场景产品关系表\'!A:A)-1', "每个推荐场景至少一条关系"])
    checks.append(["未关联场景数", '=COUNTIF(\'场景产品关系表\'!B:B,"")-1', "应为 0；空白预留行不计入实际导入"])
    checks.append(["可发布场景数", '=COUNTIF(\'场景表\'!P:P,"可发布")', "上线前逐条核实后更新"])
    checks.append(["可发布产品数", '=COUNTIF(\'产品表\'!T:T,"可发布")', "上线前逐条核实后更新"])
    style_table(checks, filter_table=False)
    checks.column_dimensions["A"].width = 26
    checks.column_dimensions["B"].width = 18
    checks.column_dimensions["C"].width = 60

    wb.save(OUTPUT)


def verify_workbook():
    wb = load_workbook(OUTPUT, data_only=False)
    expected_sheets = ["使用说明", "场景表", "产品表", "场景产品关系表", "字段说明", "枚举与规范", "数据检查"]
    assert wb.sheetnames == expected_sheets
    assert wb["场景表"].max_row - 1 == 18
    assert wb["产品表"].max_row - 1 == 48
    assert wb["场景产品关系表"].max_row - 1 == 20

    scenario_ids = {cell.value for cell in wb["场景表"]["A"][1:]}
    product_ids = {cell.value for cell in wb["产品表"]["A"][1:]}
    relation_sids = {cell.value for cell in wb["场景产品关系表"]["B"][1:]}
    relation_pids = {cell.value for cell in wb["场景产品关系表"]["C"][1:]}
    assert relation_sids <= scenario_ids
    assert relation_pids <= product_ids
    assert scenario_ids <= relation_sids
    return {
        "sheets": wb.sheetnames,
        "scenarios": len(scenario_ids),
        "products": len(product_ids),
        "relations": wb["场景产品关系表"].max_row - 1,
        "path": str(OUTPUT),
    }


if __name__ == "__main__":
    build_workbook()
    print(verify_workbook())
