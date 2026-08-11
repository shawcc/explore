// Generated from 发现页内容数据库.xlsx. Do not edit manually.
export const scenarios = [
  {
    "id": "S001",
    "title": "补全客户信息",
    "kind": "AI 应用",
    "workGoal": "信息提取与补全",
    "subtype": "AI节点",
    "featureName": "AI 智能填单",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网"
    ],
    "roles": [
      "产品经理"
    ],
    "featured": true,
    "desc": "AI 节点自动从会议纪要、邮件中提取关键信息，一键回填到飞书项目字段，无需手动逐条录入。",
    "problem": "当前“补全客户信息”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "需求评审后，AI 节点自动从会议纪要、邮件中提取关键信息，一键回填到飞书项目字段，无需手动逐条录入。",
    "capabilities": [
      "减少人工处理",
      "统一输出结构",
      "降低信息遗漏"
    ],
    "tags": [
      "信息提取",
      "自动回填"
    ],
    "image": "https://aka.doubaocdn.com/s/IMKcg667UN",
    "customer": "",
    "metrics": "",
    "meta": "信息提取 · 自动回填",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 智能填单，自动完成补全客户信息。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“补全客户信息”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：需求评审后，AI 节点自动从会议纪要、邮件中提取关键信息，一键回填到飞书项目字段，无需手动逐条录入。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "补全客户信息",
    "targetUrl": ""
  },
  {
    "id": "S002",
    "title": "拆解会议任务",
    "kind": "AI 应用",
    "workGoal": "计划拆解与协同",
    "subtype": "AI节点",
    "featureName": "智能会议分析",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网"
    ],
    "roles": [
      "项目经理"
    ],
    "featured": true,
    "desc": "AI 节点自动提取所有待办项和决策要点，一键生成飞书项目子任务并关联到对应工作项，从讨论到执行无缝衔接。",
    "problem": "当前“拆解会议任务”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "需求评审会结束后，AI 节点自动提取所有待办项和决策要点，一键生成飞书项目子任务并关联到对应工作项，从讨论到执行无缝衔接。",
    "capabilities": [
      "统一拆解口径",
      "减少遗漏",
      "加快进入执行"
    ],
    "tags": [
      "会议分析",
      "自动建单"
    ],
    "image": "https://aka.doubaocdn.com/s/cqI7oo1jGy",
    "customer": "",
    "metrics": "",
    "meta": "会议分析 · 自动建单",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 智能会议分析，自动完成拆解会议任务。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“拆解会议任务”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：需求评审会结束后，AI 节点自动提取所有待办项和决策要点，一键生成飞书项目子任务并关联到对应工作项，从讨论到执行无缝衔接。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "拆解会议任务",
    "targetUrl": ""
  },
  {
    "id": "S003",
    "title": "创建外部工单",
    "kind": "AI 应用",
    "workGoal": "分类分派与流转",
    "subtype": "AI节点",
    "featureName": "AI 助手",
    "tag": "AI 应用",
    "industry": "医疗",
    "role": "运营",
    "industries": [
      "医疗"
    ],
    "roles": [
      "运营"
    ],
    "featured": true,
    "desc": "客服系统、邮件、飞书群中的用户反馈，AI 节点自动识别并创建为标准工单，无需人工逐个录入，大幅提升工单处理效率。",
    "problem": "当前“创建外部工单”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "客服系统、邮件、飞书群中的用户反馈，AI 节点自动识别并创建为标准工单，无需人工逐个录入，大幅提升工单处理效率。",
    "capabilities": [
      "减少人工处理",
      "统一输出结构",
      "降低信息遗漏"
    ],
    "tags": [
      "工单识别",
      "自动建单"
    ],
    "image": "https://aka.doubaocdn.com/s/OJkgxeTgKd",
    "customer": "",
    "metrics": "",
    "meta": "工单识别 · 自动建单",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 助手，自动完成创建外部工单。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“创建外部工单”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：客服系统、邮件、飞书群中的用户反馈，AI 节点自动识别并创建为标准工单，无需人工逐个录入，大幅提升工单处理效率。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "创建外部工单",
    "targetUrl": ""
  },
  {
    "id": "S004",
    "title": "创建邮件任务",
    "kind": "AI 应用",
    "workGoal": "计划拆解与协同",
    "subtype": "AI节点",
    "featureName": "AI 助手",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网"
    ],
    "roles": [
      "产品经理"
    ],
    "featured": true,
    "desc": "客户或合作方通过邮件提交的需求，AI 节点自动解析邮件内容并生成飞书项目工作项，避免遗漏重要邮件中的待办事项。",
    "problem": "当前“创建邮件任务”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "客户或合作方通过邮件提交的需求，AI 节点自动解析邮件内容并生成飞书项目工作项，避免遗漏重要邮件中的待办事项。",
    "capabilities": [
      "减少人工处理",
      "统一输出结构",
      "降低信息遗漏"
    ],
    "tags": [
      "邮件解析",
      "自动建单"
    ],
    "image": "https://aka.doubaocdn.com/s/bv0qSfwVgG",
    "customer": "",
    "metrics": "",
    "meta": "邮件解析 · 自动建单",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 助手，自动完成创建邮件任务。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“创建邮件任务”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：客户或合作方通过邮件提交的需求，AI 节点自动解析邮件内容并生成飞书项目工作项，避免遗漏重要邮件中的待办事项。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "创建邮件任务",
    "targetUrl": ""
  },
  {
    "id": "S005",
    "title": "提取合同条款",
    "kind": "AI 应用",
    "workGoal": "信息提取与补全",
    "subtype": "AI节点",
    "featureName": "AI 助手",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "销售",
    "industries": [
      "金融"
    ],
    "roles": [
      "销售"
    ],
    "featured": true,
    "desc": "AI 节点自动提取金额、期限、违约责任等关键条款，结构化录入到工作项字段，减少人工核对时间。",
    "problem": "当前“提取合同条款”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "上传合同文件后，AI 节点自动提取金额、期限、违约责任等关键条款，结构化录入到工作项字段，减少人工核对时间。",
    "capabilities": [
      "减少人工处理",
      "统一输出结构",
      "降低信息遗漏"
    ],
    "tags": [
      "合同解析",
      "条款提取"
    ],
    "image": "https://aka.doubaocdn.com/s/DJabXgkph8",
    "customer": "",
    "metrics": "",
    "meta": "合同解析 · 条款提取",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 助手，自动完成提取合同条款。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“提取合同条款”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：上传合同文件后，AI 节点自动提取金额、期限、违约责任等关键条款，结构化录入到工作项字段，减少人工核对时间。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "提取合同条款",
    "targetUrl": ""
  },
  {
    "id": "S006",
    "title": "分类客户反馈",
    "kind": "AI 应用",
    "workGoal": "分类分派与流转",
    "subtype": "AI节点",
    "featureName": "AI 助手",
    "tag": "AI 应用",
    "industry": "游戏",
    "role": "运营",
    "industries": [
      "游戏"
    ],
    "roles": [
      "运营"
    ],
    "featured": true,
    "desc": "AI 节点自动判断是 Bug、需求还是咨询，秒级路由到对应模块，减少人工分类和转派时间。",
    "problem": "当前“分类客户反馈”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "客服收到用户反馈后，AI 节点自动判断是 Bug、需求还是咨询，秒级路由到对应模块，减少人工分类和转派时间。",
    "capabilities": [
      "缩短流转时间",
      "提升判断一致性",
      "减少人工分派"
    ],
    "tags": [
      "语义分类",
      "自动路由"
    ],
    "image": "https://aka.doubaocdn.com/s/OJkgxeTgKd",
    "customer": "",
    "metrics": "",
    "meta": "语义分类 · 自动路由",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 助手，自动完成分类客户反馈。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“分类客户反馈”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：客服收到用户反馈后，AI 节点自动判断是 Bug、需求还是咨询，秒级路由到对应模块，减少人工分类和转派时间。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "分类客户反馈",
    "targetUrl": ""
  },
  {
    "id": "S007",
    "title": "分派研发需求",
    "kind": "AI 应用",
    "workGoal": "分类分派与流转",
    "subtype": "AI节点",
    "featureName": "AI 智能分配",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网"
    ],
    "roles": [
      "项目经理"
    ],
    "featured": true,
    "desc": "新需求进入开发阶段时，AI 节点自动匹配最合适的开发人员，兼顾技能匹配度和当前工作负载，避免忙闲不均，减少人工派单时间。",
    "problem": "当前“分派研发需求”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "新需求进入开发阶段时，AI 节点自动匹配最合适的开发人员，兼顾技能匹配度和当前工作负载，避免忙闲不均，减少人工派单时间。",
    "capabilities": [
      "缩短流转时间",
      "提升判断一致性",
      "减少人工分派"
    ],
    "tags": [
      "技能匹配",
      "负载均衡"
    ],
    "image": "https://aka.doubaocdn.com/s/nvmVJKYDTY",
    "customer": "",
    "metrics": "",
    "meta": "技能匹配 · 负载均衡",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 智能分配，自动完成分派研发需求。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“分派研发需求”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：新需求进入开发阶段时，AI 节点自动匹配最合适的开发人员，兼顾技能匹配度和当前工作负载，避免忙闲不均，减少人工派单时间。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "分派研发需求",
    "targetUrl": ""
  },
  {
    "id": "S008",
    "title": "评定缺陷等级",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 缺陷分级",
    "tag": "AI 应用",
    "industry": "游戏",
    "role": "测试",
    "industries": [
      "游戏"
    ],
    "roles": [
      "测试"
    ],
    "featured": true,
    "desc": "测试提交 Bug 后，AI 根据严重程度、影响范围和修复成本自动分级，并推荐对应的处理人。",
    "problem": "当前“评定缺陷等级”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "测试提交 Bug 后，AI 根据严重程度、影响范围和修复成本自动分级，并推荐对应的处理人。",
    "capabilities": [
      "缩短流转时间",
      "提升判断一致性",
      "减少人工分派"
    ],
    "tags": [
      "严重度分级",
      "自动指派"
    ],
    "image": "https://aka.doubaocdn.com/s/CvvUzmrizE",
    "customer": "",
    "metrics": "",
    "meta": "严重度分级 · 自动指派",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 缺陷分级，自动完成评定缺陷等级。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“评定缺陷等级”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：测试提交 Bug 后，AI 根据严重程度、影响范围和修复成本自动分级，并推荐对应的处理人。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "评定缺陷等级",
    "targetUrl": ""
  },
  {
    "id": "S009",
    "title": "分流客服工单",
    "kind": "AI 应用",
    "workGoal": "分类分派与流转",
    "subtype": "AI节点",
    "featureName": "AI 工单分流",
    "tag": "AI 应用",
    "industry": "零售",
    "role": "运营",
    "industries": [
      "零售"
    ],
    "roles": [
      "运营"
    ],
    "featured": true,
    "desc": "电商平台的客服工单根据产品线、问题类型和用户等级自动分流到对应处理组，SLA 超时自动升级。",
    "problem": "当前“分流客服工单”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "电商平台的客服工单根据产品线、问题类型和用户等级自动分流到对应处理组，SLA 超时自动升级。",
    "capabilities": [
      "缩短流转时间",
      "提升判断一致性",
      "减少人工分派"
    ],
    "tags": [
      "多级分流",
      "SLA 管控"
    ],
    "image": "https://aka.doubaocdn.com/s/RAu5lPDwZP",
    "customer": "",
    "metrics": "",
    "meta": "多级分流 · SLA 管控",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 工单分流，自动完成分流客服工单。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“分流客服工单”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：电商平台的客服工单根据产品线、问题类型和用户等级自动分流到对应处理组，SLA 超时自动升级。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "分流客服工单",
    "targetUrl": ""
  },
  {
    "id": "S010",
    "title": "检查交付质量",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 质量检查",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "测试",
    "industries": [
      "互联网"
    ],
    "roles": [
      "测试"
    ],
    "featured": true,
    "desc": "提测节点中，AI 节点自动检查代码是否关联了需求、测试用例是否覆盖了验收标准，不符合的自动驳回并给出原因。",
    "problem": "当前“检查交付质量”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "提测节点中，AI 节点自动检查代码是否关联了需求、测试用例是否覆盖了验收标准，不符合的自动驳回并给出原因。",
    "capabilities": [
      "前置发现问题",
      "统一审核标准",
      "降低合规风险"
    ],
    "tags": [
      "自动检查",
      "质量门禁"
    ],
    "image": "https://aka.doubaocdn.com/s/CvvUzmrizE",
    "customer": "",
    "metrics": "",
    "meta": "自动检查 · 质量门禁",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 质量检查，自动完成检查交付质量。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“检查交付质量”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：提测节点中，AI 节点自动检查代码是否关联了需求、测试用例是否覆盖了验收标准，不符合的自动驳回并给出原因。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "检查交付质量",
    "targetUrl": ""
  },
  {
    "id": "S011",
    "title": "检查需求合规",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 合规审计",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "高管",
    "industries": [
      "金融"
    ],
    "roles": [
      "高管"
    ],
    "featured": true,
    "desc": "需求提交审批前，AI 节点自动检查是否满足了合规要求：是否完成了风险评估、是否获得了法务审批、是否标注了数据安全等级。",
    "problem": "当前“检查需求合规”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "需求提交审批前，AI 节点自动检查是否满足了合规要求：是否完成了风险评估、是否获得了法务审批、是否标注了数据安全等级。",
    "capabilities": [
      "前置发现问题",
      "统一审核标准",
      "降低合规风险"
    ],
    "tags": [
      "合规检查",
      "风险评估"
    ],
    "image": "https://aka.doubaocdn.com/s/DJabXgkph8",
    "customer": "",
    "metrics": "",
    "meta": "合规检查 · 风险评估",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 合规审计，自动完成检查需求合规。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“检查需求合规”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：需求提交审批前，AI 节点自动检查是否满足了合规要求：是否完成了风险评估、是否获得了法务审批、是否标注了数据安全等级。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "检查需求合规",
    "targetUrl": ""
  },
  {
    "id": "S012",
    "title": "检查代码提交",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 代码审查",
    "tag": "AI 应用",
    "industry": "汽车",
    "role": "研发",
    "industries": [
      "汽车"
    ],
    "roles": [
      "研发"
    ],
    "featured": true,
    "desc": "代码提交时，AI 节点自动检查是否关联了工作项、是否通过了 Code Review、是否包含必要的测试，不合规的提交自动拦截并通知开发者。",
    "problem": "当前“检查代码提交”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "代码提交时，AI 节点自动检查是否关联了工作项、是否通过了 Code Review、是否包含必要的测试，不合规的提交自动拦截并通知开发者。",
    "capabilities": [
      "前置发现问题",
      "统一审核标准",
      "降低合规风险"
    ],
    "tags": [
      "代码审查",
      "合规拦截"
    ],
    "image": "https://aka.doubaocdn.com/s/a3S9pUgsCz",
    "customer": "",
    "metrics": "",
    "meta": "代码审查 · 合规拦截",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 代码审查，自动完成检查代码提交。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“检查代码提交”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：代码提交时，AI 节点自动检查是否关联了工作项、是否通过了 Code Review、是否包含必要的测试，不合规的提交自动拦截并通知开发者。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "检查代码提交",
    "targetUrl": ""
  },
  {
    "id": "S019",
    "title": "检查设计规范",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 设计审查",
    "tag": "AI 应用",
    "industry": "消费电子",
    "role": "设计",
    "industries": [
      "消费电子"
    ],
    "roles": [
      "设计"
    ],
    "featured": true,
    "desc": "设计师提交设计稿后，AI 节点自动检查组件库一致性、间距规范、色彩规范等，不符合规范的自动标注并给出修改建议。",
    "problem": "当前“检查设计规范”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "设计师提交设计稿后，AI 节点自动检查组件库一致性、间距规范、色彩规范等，不符合规范的自动标注并给出修改建议。",
    "capabilities": [
      "前置发现问题",
      "统一审核标准",
      "降低合规风险"
    ],
    "tags": [
      "设计规范",
      "组件一致性"
    ],
    "image": "https://aka.doubaocdn.com/s/bv0qSfwVgG",
    "customer": "",
    "metrics": "",
    "meta": "设计规范 · 组件一致性",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 设计审查，自动完成检查设计规范。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“检查设计规范”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：设计师提交设计稿后，AI 节点自动检查组件库一致性、间距规范、色彩规范等，不符合规范的自动标注并给出修改建议。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "检查设计规范",
    "targetUrl": ""
  },
  {
    "id": "S013",
    "title": "外部工单接入项目闭环",
    "kind": "插件",
    "workGoal": "计划拆解与协同",
    "subtype": "工单集成",
    "featureName": "ITSM·工单通",
    "tag": "插件",
    "industry": "互联网",
    "role": "运营",
    "industries": [
      "互联网",
      "医疗",
      "零售"
    ],
    "roles": [
      "运营",
      "研发",
      "项目经理"
    ],
    "featured": true,
    "desc": "将客服或服务台工单自动创建为项目工作项，并同步状态与处理结果。",
    "problem": "外部工单与研发项目割裂，客服需要反复追问进度，状态同步依赖人工。",
    "scenario": "通过插件接入外部工单，映射字段、自动建单并同步状态，完成后将结果回传原系统。",
    "capabilities": [
      "打通内外流程",
      "减少状态搬运",
      "提升客户响应透明度"
    ],
    "tags": [
      "系统集成",
      "工单管理",
      "状态同步"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E5%A4%96%E9%83%A8%E5%B7%A5%E5%8D%95%E6%8E%A5%E5%85%A5%E9%A1%B9%E7%9B%AE%E9%97%AD%E7%8E%AF%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "customer": "",
    "metrics": "",
    "meta": "系统集成 · 工单管理",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "通过 ITSM·工单通完成内外系统闭环。",
    "steps": [
      "定义字段映射",
      "配置建单规则",
      "配置状态同步",
      "联调回传"
    ],
    "deliveryType": "PRD",
    "prompt": "",
    "prdContent": "# 外部工单接入项目闭环\n\n> 示例 PRD，用于说明复刻范围；实施前需结合目标工单系统 API、字段权限和状态模型校准。\n\n## 1. 背景与目标\n客服或 IT 服务台中的外部工单与项目执行系统分离，人工转录容易遗漏上下文，处理状态也无法及时回传。插件需要把符合条件的外部工单自动创建为飞书项目工作项，并持续同步关键状态和处理结果。\n\n## 2. 用户与使用场景\n- 客服运营：希望将需要研发处理的工单一键升级为项目任务。\n- 项目经理：希望在项目内统一查看负责人、优先级和处理进度。\n- 研发人员：希望直接获得问题描述、附件和客户影响范围。\n\n## 3. 功能范围\n### 3.1 工单转项目任务\n- 支持按工单类型、优先级或人工操作触发建单。\n- 映射标题、描述、客户、优先级、附件、来源链接等字段。\n- 保存外部工单 ID，避免重复创建。\n\n### 3.2 双向状态同步\n- 外部工单升级后，将项目状态、负责人和处理结论回传。\n- 对无法映射的状态保留原值，并记录同步日志。\n- 同步失败时自动重试，并向管理员发送告警。\n\n### 3.3 权限与审计\n- 仅同步当前连接身份有权访问的数据。\n- 敏感字段支持配置为不同步或脱敏。\n- 记录建单、更新、失败和人工重试事件。\n\n## 4. 核心流程\n1. 外部工单达到触发条件。\n2. 插件读取工单详情并校验必填字段。\n3. 根据映射规则创建或更新项目工作项。\n4. 写回项目工作项链接和同步状态。\n5. 后续状态变化通过事件触发双向同步。\n\n## 5. 字段映射\n- 工单标题 → 工作项标题\n- 问题描述 → 工作项描述\n- 客户与影响范围 → 客户信息、影响范围字段\n- 紧急程度 → 优先级\n- 工单处理人 → 工作项负责人\n- 附件与原始链接 → 附件、来源链接\n\n## 6. 异常处理\n- 必填字段缺失：停止建单并提示补全。\n- 重复工单：更新已有工作项，不重复创建。\n- 用户匹配失败：保留原处理人文本并进入待分配队列。\n- API 限流或超时：指数退避重试，超过阈值后告警。\n\n## 7. 验收标准\n- 同一外部工单不会生成多个项目工作项。\n- 字段映射结果与配置一致，附件和来源链接可访问。\n- 项目状态变化可在约定时间内回传外部系统。\n- 同步失败有明确日志、错误原因和人工重试入口。\n- 无权限用户无法通过插件读取敏感工单内容。\n",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "下载 PRD",
    "configurationNotes": "示例说明；请根据真实字段、权限、流程状态和产品能力调整。",
    "expectedOutput": "工单集成方案",
    "targetUrl": ""
  },
  {
    "id": "S020",
    "title": "评估变更影响",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 影响分析",
    "tag": "AI 应用",
    "industry": "汽车",
    "role": "产品经理",
    "industries": [
      "汽车"
    ],
    "roles": [
      "产品经理"
    ],
    "featured": true,
    "desc": "当需求发生变更时，AI 节点自动分析影响的上下游模块、关联任务和依赖关系，输出影响范围评估报告。",
    "problem": "当前“评估变更影响”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "当需求发生变更时，AI 节点自动分析影响的上下游模块、关联任务和依赖关系，输出影响范围评估报告。",
    "capabilities": [
      "缩短评估时间",
      "提供决策依据",
      "暴露关键风险"
    ],
    "tags": [
      "变更影响",
      "依赖分析"
    ],
    "image": "https://aka.doubaocdn.com/s/nvmVJKYDTY",
    "customer": "",
    "metrics": "",
    "meta": "变更影响 · 依赖分析",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 影响分析，自动完成评估变更影响。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“评估变更影响”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：当需求发生变更时，AI 节点自动分析影响的上下游模块、关联任务和依赖关系，输出影响范围评估报告。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "评估变更影响",
    "targetUrl": ""
  },
  {
    "id": "S014",
    "title": "代码提交关联研发任务",
    "kind": "插件",
    "workGoal": "计划拆解与协同",
    "subtype": "代码集成",
    "featureName": "GitLab 研发连接器",
    "tag": "插件",
    "industry": "互联网",
    "role": "研发",
    "industries": [
      "互联网",
      "汽车",
      "消费电子"
    ],
    "roles": [
      "研发",
      "项目经理",
      "测试"
    ],
    "featured": true,
    "desc": "自动将分支、提交和合并请求关联研发任务，并同步开发状态。",
    "problem": "代码与任务信息分散，项目进度依赖开发手动更新，追溯成本高。",
    "scenario": "通过代码仓库插件识别任务编号，关联分支、提交和合并请求，并按规则更新任务状态。",
    "capabilities": [
      "减少手动更新",
      "提升研发可追溯性",
      "让进度更实时"
    ],
    "tags": [
      "研发协同",
      "代码关联",
      "自动流转"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E4%BB%A3%E7%A0%81%E6%8F%90%E4%BA%A4%E5%85%B3%E8%81%94%E7%A0%94%E5%8F%91%E4%BB%BB%E5%8A%A1%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "customer": "",
    "metrics": "",
    "meta": "研发协同 · 代码关联",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "接入 GitLab 并按任务编号自动关联代码活动。",
    "steps": [
      "授权代码仓库",
      "配置编号规则",
      "设置状态流转",
      "验证事件"
    ],
    "deliveryType": "PRD",
    "prompt": "",
    "prdContent": "# 代码提交关联研发任务\n\n> 示例 PRD，用于说明复刻范围；实施前需根据代码平台事件、分支规范和研发流程校准。\n\n## 1. 背景与目标\n代码分支、提交和合并请求与研发任务依赖人工关联，项目状态无法反映真实开发进展。插件需要识别代码活动中的任务编号，自动建立关联，并按规则更新研发任务状态。\n\n## 2. 用户与使用场景\n- 研发人员：在正常提交代码时自动关联任务，减少重复操作。\n- 项目经理：查看任务即可了解分支、提交和合并请求进展。\n- 测试人员：在代码合并后及时获得可提测信号。\n\n## 3. 功能范围\n### 3.1 任务编号识别\n- 从分支名、提交信息和合并请求标题中识别任务编号。\n- 支持配置编号正则、项目空间和工作项类型。\n- 一个代码活动可关联多个任务，并提示异常编号。\n\n### 3.2 代码活动回写\n- 将仓库、分支、提交、合并请求和流水线链接写入任务。\n- 展示提交人、发生时间、当前状态和最新结果。\n- 对已存在的关联进行幂等更新。\n\n### 3.3 自动状态流转\n- 创建分支后，可将任务更新为“开发中”。\n- 合并请求创建后，可更新为“待评审”。\n- 合并且流水线通过后，可更新为“待测试”。\n- 所有状态规则均可关闭或按项目单独配置。\n\n## 4. 核心流程\n1. 代码平台发送 Push、Merge Request 或 Pipeline 事件。\n2. 插件校验签名并解析任务编号。\n3. 查询目标工作项及当前状态。\n4. 写入代码活动，并按规则决定是否流转状态。\n5. 保存处理结果，失败事件进入重试队列。\n\n## 5. 配置项\n- 代码平台地址、仓库范围和访问凭证\n- 任务编号识别规则\n- 事件类型与状态流转映射\n- 是否允许跨项目关联\n- 机器人评论模板与通知对象\n\n## 6. 异常处理\n- 未识别任务编号：记录事件但不更新工作项。\n- 工作项不存在或无权限：标记失败并通知提交人。\n- 状态不满足流转条件：只写入代码活动，不强制改状态。\n- 重复事件：按事件 ID 幂等处理。\n- Webhook 验签失败：拒绝请求并记录安全日志。\n\n## 7. 验收标准\n- 符合规则的分支、提交和合并请求能正确关联任务。\n- 重复事件不会产生重复关联或重复评论。\n- 状态流转严格遵循配置，不覆盖人工终态。\n- 失败事件可查询、重试，并显示明确错误原因。\n- 访问凭证加密存储，Webhook 请求完成签名校验。\n",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "下载 PRD",
    "configurationNotes": "示例说明；请根据真实字段、权限、流程状态和产品能力调整。",
    "expectedOutput": "研发集成方案",
    "targetUrl": ""
  },
  {
    "id": "S021",
    "title": "预警供应链风险",
    "kind": "AI 应用",
    "workGoal": "分析评估与预警",
    "subtype": "AI节点",
    "featureName": "AI 风险预警",
    "tag": "AI 应用",
    "industry": "制造",
    "role": "高管",
    "industries": [
      "制造"
    ],
    "roles": [
      "高管"
    ],
    "featured": true,
    "desc": "供应链关键节点出现异常时（如供应商延期、原材料涨价），AI 节点自动预警并评估对项目交付的影响，推荐替代方案。",
    "problem": "当前“预警供应链风险”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "供应链关键节点出现异常时（如供应商延期、原材料涨价），AI 节点自动预警并评估对项目交付的影响，推荐替代方案。",
    "capabilities": [
      "提前识别风险",
      "缩短响应时间",
      "推动责任闭环"
    ],
    "tags": [
      "供应链",
      "风险预警"
    ],
    "image": "https://aka.doubaocdn.com/s/Gkf92x6XVm",
    "customer": "",
    "metrics": "",
    "meta": "供应链 · 风险预警",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 风险预警，自动完成预警供应链风险。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“预警供应链风险”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：供应链关键节点出现异常时（如供应商延期、原材料涨价），AI 节点自动预警并评估对项目交付的影响，推荐替代方案。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "预警供应链风险",
    "targetUrl": ""
  },
  {
    "id": "S015",
    "title": "管理驾驶舱快速搭建",
    "kind": "轻应用",
    "workGoal": "计划拆解与协同",
    "subtype": "管理驾驶舱",
    "featureName": "项目管理驾驶舱",
    "tag": "轻应用",
    "industry": "互联网",
    "role": "高管",
    "industries": [
      "互联网",
      "制造",
      "汽车"
    ],
    "roles": [
      "高管",
      "项目经理",
      "运营"
    ],
    "featured": true,
    "desc": "聚合项目进度、风险、资源和质量指标，为管理者提供一页式视图。",
    "problem": "管理数据散落在多个视图，汇报依赖截图和手工表格，缺少统一入口。",
    "scenario": "按角色组合指标卡、趋势图和风险列表，连接项目数据源，形成可按组织筛选的驾驶舱。",
    "capabilities": [
      "缩短管理取数路径",
      "统一经营视图",
      "支持持续复盘"
    ],
    "tags": [
      "轻应用",
      "管理驾驶舱",
      "数据可视化"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20lightweight%20business%20app%20cover%20for%20%E7%AE%A1%E7%90%86%E9%A9%BE%E9%A9%B6%E8%88%B1%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%3A%20a%20polished%20ready-to-use%20operations%20cockpit%20with%20KPI%20cards%2C%20charts%2C%20project%20risks%2C%20approvals%20and%20action%20list%2C%20realistic%20Chinese%20SaaS%20product%20UI%2C%20light%20theme%20with%20green%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "customer": "",
    "metrics": "",
    "meta": "轻应用 · 管理驾驶舱",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "用轻应用搭建一页式管理驾驶舱。",
    "steps": [
      "确定指标",
      "连接数据源",
      "搭建页面",
      "配置权限",
      "发布"
    ],
    "deliveryType": "搭建说明",
    "prompt": "",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "查看搭建说明",
    "configurationNotes": "示例说明；请根据真实字段、权限、流程状态和产品能力调整。",
    "expectedOutput": "管理驾驶舱",
    "targetUrl": ""
  },
  {
    "id": "S022",
    "title": "起草发布说明",
    "kind": "AI 应用",
    "workGoal": "内容撰写与总结",
    "subtype": "AI节点",
    "featureName": "AI 发布说明",
    "tag": "AI 应用",
    "industry": "消费电子",
    "role": "研发",
    "industries": [
      "消费电子"
    ],
    "roles": [
      "研发"
    ],
    "featured": true,
    "desc": "版本发布前，AI 根据本版本的需求、缺陷和变更记录自动生成 Release Notes，包含功能清单、修复列表和已知问题，研发只需微调即可发布。",
    "problem": "当前“起草发布说明”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "版本发布前，AI 根据本版本的需求、缺陷和变更记录自动生成 Release Notes，包含功能清单、修复列表和已知问题，研发只需微调即可发布。",
    "capabilities": [
      "减少人工处理",
      "统一输出结构",
      "降低信息遗漏"
    ],
    "tags": [
      "发布说明",
      "自动生成"
    ],
    "image": "https://aka.doubaocdn.com/s/bv0qSfwVgG",
    "customer": "",
    "metrics": "",
    "meta": "发布说明 · 自动生成",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 发布说明，自动完成起草发布说明。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“起草发布说明”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：版本发布前，AI 根据本版本的需求、缺陷和变更记录自动生成 Release Notes，包含功能清单、修复列表和已知问题，研发只需微调即可发布。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "起草发布说明",
    "targetUrl": ""
  },
  {
    "id": "S016",
    "title": "会议联动项目汇报",
    "kind": "轻应用",
    "workGoal": "计划拆解与协同",
    "subtype": "会议协同",
    "featureName": "会议联动汇报台",
    "tag": "轻应用",
    "industry": "医疗",
    "role": "项目经理",
    "industries": [
      "医疗",
      "制造",
      "互联网"
    ],
    "roles": [
      "项目经理",
      "高管",
      "运营"
    ],
    "featured": true,
    "desc": "会前自动准备项目材料，会中展示关键数据，会后跟踪决议执行。",
    "problem": "例会材料准备耗时，会议与项目数据割裂，决议缺少持续跟踪。",
    "scenario": "轻应用按会议议题聚合项目数据，会后将决议转为任务，并持续展示执行状态。",
    "capabilities": [
      "减少会前准备",
      "连接会议与执行",
      "提升决议闭环率"
    ],
    "tags": [
      "轻应用",
      "会议协同",
      "项目汇报"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20lightweight%20business%20app%20cover%20for%20%E4%BC%9A%E8%AE%AE%E8%81%94%E5%8A%A8%E9%A1%B9%E7%9B%AE%E6%B1%87%E6%8A%A5%3A%20a%20polished%20ready-to-use%20operations%20cockpit%20with%20KPI%20cards%2C%20charts%2C%20project%20risks%2C%20approvals%20and%20action%20list%2C%20realistic%20Chinese%20SaaS%20product%20UI%2C%20light%20theme%20with%20green%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "customer": "",
    "metrics": "",
    "meta": "轻应用 · 会议协同",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "用轻应用连接会议议题、项目数据和决议。",
    "steps": [
      "设计议题结构",
      "连接项目数据",
      "配置会后任务",
      "发布入口"
    ],
    "deliveryType": "搭建说明",
    "prompt": "",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "查看搭建说明",
    "configurationNotes": "示例说明；请根据真实字段、权限、流程状态和产品能力调整。",
    "expectedOutput": "会议联动汇报台",
    "targetUrl": ""
  },
  {
    "id": "S023",
    "title": "拆解项目计划",
    "kind": "AI 应用",
    "workGoal": "计划拆解与协同",
    "subtype": "AI节点",
    "featureName": "AI 项目规划",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网"
    ],
    "roles": [
      "项目经理"
    ],
    "featured": true,
    "desc": "立项后，AI 根据历史项目数据和行业模板，自动拆解出任务清单、推荐排期和关键里程碑，项目经理只需微调即可启动。",
    "problem": "当前“拆解项目计划”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "立项后，AI 根据历史项目数据和行业模板，自动拆解出任务清单、推荐排期和关键里程碑，项目经理只需微调即可启动。",
    "capabilities": [
      "统一拆解口径",
      "减少遗漏",
      "加快进入执行"
    ],
    "tags": [
      "项目拆解",
      "智能排期"
    ],
    "image": "https://aka.doubaocdn.com/s/nvmVJKYDTY",
    "customer": "",
    "metrics": "",
    "meta": "项目拆解 · 智能排期",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 项目规划，自动完成拆解项目计划。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“拆解项目计划”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：立项后，AI 根据历史项目数据和行业模板，自动拆解出任务清单、推荐排期和关键里程碑，项目经理只需微调即可启动。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "拆解项目计划",
    "targetUrl": ""
  },
  {
    "id": "S017",
    "title": "软件研发流程快速启用",
    "kind": "模板",
    "workGoal": "",
    "subtype": "研发管理",
    "featureName": "软件研发管理",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "消费电子",
      "汽车"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试"
    ],
    "featured": true,
    "desc": "用一套预置模板快速搭建需求、开发、测试和发布的研发流程。",
    "problem": "新团队从零设计流程成本高，字段、状态和视图容易缺失或不一致。",
    "scenario": "复制研发模板后，根据团队规模调整工作项、流程、权限和度量视图，再导入存量项目。",
    "capabilities": [
      "降低初始化成本",
      "复用成熟流程",
      "缩短上线周期"
    ],
    "tags": [
      "模板",
      "研发管理",
      "流程搭建"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E8%BD%AF%E4%BB%B6%E7%A0%94%E5%8F%91%E6%B5%81%E7%A8%8B%E5%BF%AB%E9%80%9F%E5%90%AF%E7%94%A8%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "customer": "",
    "metrics": "",
    "meta": "模板 · 研发管理",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "复制软件研发管理模板并按团队流程完成初始化。",
    "steps": [
      "打开模板",
      "复制到空间",
      "调整流程字段",
      "配置权限",
      "导入项目"
    ],
    "deliveryType": "直接链接",
    "prompt": "",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "使用模板",
    "configurationNotes": "示例说明；请根据真实字段、权限、流程状态和产品能力调整。",
    "expectedOutput": "可运行的研发空间",
    "templateUrl": ""
  },
  {
    "id": "S024",
    "title": "生成测试用例",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "智能测试用例生成",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "测试",
    "industries": [
      "互联网"
    ],
    "roles": [
      "测试"
    ],
    "featured": true,
    "desc": "需求进入测试阶段后，AI 根据需求描述和验收标准生成覆盖主流程、边界条件和异常场景的测试用例。",
    "problem": "测试人员需要逐条阅读需求并设计用例，重复劳动多，边界条件和异常流程容易遗漏。",
    "scenario": "需求进入测试阶段时，读取 PRD、验收标准和关联原型，按团队用例模板生成前置条件、操作步骤、预期结果和优先级，并标记需要人工补充的特殊场景。",
    "capabilities": [
      "缩短用例设计时间",
      "提升场景覆盖率",
      "统一测试用例格式"
    ],
    "tags": [
      "测试用例",
      "边界分析",
      "质量保障"
    ],
    "image": "https://aka.doubaocdn.com/s/CvvUzmrizE",
    "customer": "",
    "metrics": "",
    "meta": "测试用例 · 边界分析",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在需求进入测试阶段时生成结构化测试用例，并写入测试管理流程。",
    "steps": [
      "选择测试触发节点",
      "关联 PRD 与原型",
      "配置用例模板",
      "生成并评审"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是测试用例设计助手。请结合当前需求、验收标准和关联原型，生成结构化测试用例，覆盖主流程、分支流程、边界条件、异常输入、权限差异和状态转换。每条用例包含用例名称、前置条件、操作步骤、预期结果和优先级；无法确认的规则标记为“待确认”，不要虚构系统行为。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "结构化测试用例",
    "targetUrl": ""
  },
  {
    "id": "S018",
    "title": "整车研发跨域协同",
    "kind": "解决方案",
    "workGoal": "",
    "subtype": "汽车研发",
    "featureName": "ASPICE 汽车软件研发方案",
    "tag": "解决方案",
    "industry": "汽车",
    "role": "项目经理",
    "industries": [
      "汽车",
      "制造"
    ],
    "roles": [
      "项目经理",
      "研发",
      "高管"
    ],
    "featured": true,
    "desc": "围绕车型项目连接多域计划、评审、风险和交付，实现跨团队协同。",
    "problem": "整车研发周期长、参与域多，计划依赖关系和风险传递难以统一管理。",
    "scenario": "基于解决方案搭建车型项目、跨域计划、关键评审与风险闭环，并连接组织级里程碑。",
    "capabilities": [
      "统一跨域协作语言",
      "提升计划透明度",
      "强化风险闭环"
    ],
    "tags": [
      "解决方案",
      "整车研发",
      "跨域协同"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20solution%20cover%20for%20%E6%95%B4%E8%BD%A6%E7%A0%94%E5%8F%91%E8%B7%A8%E5%9F%9F%E5%8D%8F%E5%90%8C%3A%20a%20wide%20enterprise%20operating%20model%20showing%20connected%20strategy%2C%20project%20portfolio%2C%20milestones%2C%20delivery%20workflow%20and%20management%20dashboard%2C%20architectural%20overview%20blended%20with%20realistic%20software%20UI%2C%20navy%20and%20cyan%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "customer": "",
    "metrics": "",
    "meta": "解决方案 · 整车研发",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "查看 ASPICE 汽车软件研发方案并结合组织现状规划实施。",
    "steps": [
      "查看方案范围",
      "评估现状差距",
      "确定实施阶段",
      "启动方案设计"
    ],
    "deliveryType": "直接链接",
    "prompt": "",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "查看解决方案",
    "configurationNotes": "示例说明；请根据真实字段、权限、流程状态和产品能力调整。",
    "expectedOutput": "解决方案实施蓝图",
    "solutionUrl": ""
  },
  {
    "id": "S025",
    "title": "响应系统故障",
    "kind": "AI 应用",
    "workGoal": "计划拆解与协同",
    "subtype": "AI节点",
    "featureName": "AI 智能运维",
    "tag": "AI 应用",
    "industry": "汽车",
    "role": "研发",
    "industries": [
      "汽车"
    ],
    "roles": [
      "研发"
    ],
    "featured": true,
    "desc": "线上系统出现异常时，AI 节点自动检测告警、分析根因、创建事故单并通知值班人员，缩短故障发现到响应的时间。",
    "problem": "当前“响应系统故障”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "线上系统出现异常时，AI 节点自动检测告警、分析根因、创建事故单并通知值班人员，缩短故障发现到响应的时间。",
    "capabilities": [
      "缩短发现到响应时间",
      "自动沉淀上下文",
      "加快问题闭环"
    ],
    "tags": [
      "故障检测",
      "自动响应"
    ],
    "image": "https://aka.doubaocdn.com/s/RHeb6ZPb6p",
    "customer": "",
    "metrics": "",
    "meta": "故障检测 · 自动响应",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 智能运维，自动完成响应系统故障。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“响应系统故障”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：线上系统出现异常时，AI 节点自动检测告警、分析根因、创建事故单并通知值班人员，缩短故障发现到响应的时间。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "响应系统故障",
    "targetUrl": ""
  },
  {
    "id": "S026",
    "title": "补全需求描述",
    "kind": "AI 应用",
    "workGoal": "信息提取与补全",
    "subtype": "AI节点",
    "featureName": "AI 智能填单",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网"
    ],
    "roles": [
      "产品经理"
    ],
    "featured": true,
    "desc": "新建需求时，AI 根据标题自动补全背景描述、验收标准等字段，减少重复录入，提升需求质量。",
    "problem": "当前“补全需求描述”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "新建需求时，AI 根据标题自动补全背景描述、验收标准等字段，减少重复录入，提升需求质量。",
    "capabilities": [
      "减少人工处理",
      "统一输出结构",
      "降低信息遗漏"
    ],
    "tags": [
      "智能填单",
      "需求补全"
    ],
    "image": "https://aka.doubaocdn.com/s/IMKcg667UN",
    "customer": "",
    "metrics": "",
    "meta": "智能填单 · 需求补全",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 智能填单，自动完成补全需求描述。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“补全需求描述”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：新建需求时，AI 根据标题自动补全背景描述、验收标准等字段，减少重复录入，提升需求质量。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "补全需求描述",
    "targetUrl": ""
  },
  {
    "id": "S027",
    "title": "生成缺陷报告",
    "kind": "AI 应用",
    "workGoal": "内容撰写与总结",
    "subtype": "AI节点",
    "featureName": "AI 缺陷报告",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "测试",
    "industries": [
      "互联网"
    ],
    "roles": [
      "测试"
    ],
    "featured": true,
    "desc": "测试发现问题后，AI 根据截图和简要描述自动生成完整的缺陷报告，包含复现步骤、预期结果和严重度评估。",
    "problem": "当前“生成缺陷报告”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "测试发现问题后，AI 根据截图和简要描述自动生成完整的缺陷报告，包含复现步骤、预期结果和严重度评估。",
    "capabilities": [
      "减少人工处理",
      "统一输出结构",
      "降低信息遗漏"
    ],
    "tags": [
      "缺陷报告",
      "自动补全"
    ],
    "image": "https://aka.doubaocdn.com/s/CvvUzmrizE",
    "customer": "",
    "metrics": "",
    "meta": "缺陷报告 · 自动补全",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 缺陷报告，自动完成生成缺陷报告。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“生成缺陷报告”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：测试发现问题后，AI 根据截图和简要描述自动生成完整的缺陷报告，包含复现步骤、预期结果和严重度评估。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "生成缺陷报告",
    "targetUrl": ""
  },
  {
    "id": "S028",
    "title": "补全企业信息",
    "kind": "AI 应用",
    "workGoal": "信息提取与补全",
    "subtype": "AI节点",
    "featureName": "AI 信息补全",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "销售",
    "industries": [
      "金融"
    ],
    "roles": [
      "销售"
    ],
    "featured": true,
    "desc": "录入客户/线索时，AI 节点自动查询并补全企业名称、信用代码、地址等工商信息，减少手动录入。",
    "problem": "当前“补全企业信息”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "录入客户/线索时，AI 节点自动查询并补全企业名称、信用代码、地址等工商信息，减少手动录入。",
    "capabilities": [
      "减少人工处理",
      "统一输出结构",
      "降低信息遗漏"
    ],
    "tags": [
      "客户信息",
      "自动补全"
    ],
    "image": "https://aka.doubaocdn.com/s/TYVL9Q4ue4",
    "customer": "",
    "metrics": "",
    "meta": "客户信息 · 自动补全",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 信息补全，自动完成补全企业信息。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“补全企业信息”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：录入客户/线索时，AI 节点自动查询并补全企业名称、信用代码、地址等工商信息，减少手动录入。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "补全企业信息",
    "targetUrl": ""
  },
  {
    "id": "S029",
    "title": "审查金融合规",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 合规审计",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "高管",
    "industries": [
      "金融"
    ],
    "roles": [
      "高管"
    ],
    "featured": true,
    "desc": "金融项目关键节点，AI 节点自动检查是否满足监管合规要求：风险评估完成、法务审批通过、数据安全等级标注。",
    "problem": "当前“审查金融合规”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "金融项目关键节点，AI 节点自动检查是否满足监管合规要求：风险评估完成、法务审批通过、数据安全等级标注。",
    "capabilities": [
      "前置发现问题",
      "统一审核标准",
      "降低合规风险"
    ],
    "tags": [
      "合规审查",
      "金融监管"
    ],
    "image": "https://aka.doubaocdn.com/s/DJabXgkph8",
    "customer": "",
    "metrics": "",
    "meta": "合规审查 · 金融监管",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 合规审计，自动完成审查金融合规。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“审查金融合规”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：金融项目关键节点，AI 节点自动检查是否满足监管合规要求：风险评估完成、法务审批通过、数据安全等级标注。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "审查金融合规",
    "targetUrl": ""
  },
  {
    "id": "S030",
    "title": "评估投资风险",
    "kind": "AI 应用",
    "workGoal": "分析评估与预警",
    "subtype": "AI节点",
    "featureName": "AI 风险分析",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "高管",
    "industries": [
      "金融"
    ],
    "roles": [
      "高管"
    ],
    "featured": true,
    "desc": "投资项目立项前，AI 节点自动评估风险等级，分析市场环境、政策变化和财务指标，输出风险评估报告。",
    "problem": "当前“评估投资风险”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "投资项目立项前，AI 节点自动评估风险等级，分析市场环境、政策变化和财务指标，输出风险评估报告。",
    "capabilities": [
      "缩短评估时间",
      "提供决策依据",
      "暴露关键风险"
    ],
    "tags": [
      "投资风险",
      "智能评估"
    ],
    "image": "https://aka.doubaocdn.com/s/DJabXgkph8",
    "customer": "",
    "metrics": "",
    "meta": "投资风险 · 智能评估",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 风险分析，自动完成评估投资风险。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“评估投资风险”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：投资项目立项前，AI 节点自动评估风险等级，分析市场环境、政策变化和财务指标，输出风险评估报告。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "评估投资风险",
    "targetUrl": ""
  },
  {
    "id": "S031",
    "title": "评估销售线索",
    "kind": "AI 应用",
    "workGoal": "分析评估与预警",
    "subtype": "AI节点",
    "featureName": "AI 线索评分",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "销售",
    "industries": [
      "金融"
    ],
    "roles": [
      "销售"
    ],
    "featured": true,
    "desc": "销售线索进入系统后，AI 根据企业规模、行业、行为数据自动评分，帮销售优先跟进高价值线索。",
    "problem": "当前“评估销售线索”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "销售线索进入系统后，AI 根据企业规模、行业、行为数据自动评分，帮销售优先跟进高价值线索。",
    "capabilities": [
      "缩短评估时间",
      "提供决策依据",
      "暴露关键风险"
    ],
    "tags": [
      "线索评分",
      "优先级排序"
    ],
    "image": "https://aka.doubaocdn.com/s/Bx4o2nVU1J",
    "customer": "",
    "metrics": "",
    "meta": "线索评分 · 优先级排序",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 线索评分，自动完成评估销售线索。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“评估销售线索”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：销售线索进入系统后，AI 根据企业规模、行业、行为数据自动评分，帮销售优先跟进高价值线索。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "评估销售线索",
    "targetUrl": ""
  },
  {
    "id": "S032",
    "title": "预警项目延期",
    "kind": "AI 应用",
    "workGoal": "分析评估与预警",
    "subtype": "AI节点",
    "featureName": "AI 风险预警",
    "tag": "AI 应用",
    "industry": "制造",
    "role": "项目经理",
    "industries": [
      "制造"
    ],
    "roles": [
      "项目经理"
    ],
    "featured": true,
    "desc": "AI 实时监控项目进度，当关键节点临近截止日期但未完成时，自动预警并通知相关责任人。",
    "problem": "当前“预警项目延期”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "AI 实时监控项目进度，当关键节点临近截止日期但未完成时，自动预警并通知相关责任人。",
    "capabilities": [
      "提前识别风险",
      "缩短响应时间",
      "推动责任闭环"
    ],
    "tags": [
      "进度预警",
      "自动通知"
    ],
    "image": "https://aka.doubaocdn.com/s/Gkf92x6XVm",
    "customer": "",
    "metrics": "",
    "meta": "进度预警 · 自动通知",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 风险预警，自动完成预警项目延期。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“预警项目延期”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：AI 实时监控项目进度，当关键节点临近截止日期但未完成时，自动预警并通知相关责任人。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "预警项目延期",
    "targetUrl": ""
  },
  {
    "id": "S033",
    "title": "预警预算超支",
    "kind": "AI 应用",
    "workGoal": "分析评估与预警",
    "subtype": "AI节点",
    "featureName": "AI 成本预警",
    "tag": "AI 应用",
    "industry": "制造",
    "role": "高管",
    "industries": [
      "制造"
    ],
    "roles": [
      "高管"
    ],
    "featured": true,
    "desc": "AI 实时监控项目预算使用情况，当实际支出接近或超出预算时自动预警，推荐成本优化方案。",
    "problem": "当前“预警预算超支”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "AI 实时监控项目预算使用情况，当实际支出接近或超出预算时自动预警，推荐成本优化方案。",
    "capabilities": [
      "提前识别风险",
      "缩短响应时间",
      "推动责任闭环"
    ],
    "tags": [
      "预算监控",
      "超支预警"
    ],
    "image": "https://aka.doubaocdn.com/s/Gkf92x6XVm",
    "customer": "",
    "metrics": "",
    "meta": "预算监控 · 超支预警",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 成本预警，自动完成预警预算超支。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“预警预算超支”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：AI 实时监控项目预算使用情况，当实际支出接近或超出预算时自动预警，推荐成本优化方案。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "预警预算超支",
    "targetUrl": ""
  },
  {
    "id": "S034",
    "title": "预警客户流失",
    "kind": "AI 应用",
    "workGoal": "分析评估与预警",
    "subtype": "AI节点",
    "featureName": "AI 流失预警",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "销售",
    "industries": [
      "金融"
    ],
    "roles": [
      "销售"
    ],
    "featured": true,
    "desc": "AI 分析客户活跃度、使用频率和反馈数据，识别有流失风险的客户并自动预警，建议挽留策略。",
    "problem": "当前“预警客户流失”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "AI 分析客户活跃度、使用频率和反馈数据，识别有流失风险的客户并自动预警，建议挽留策略。",
    "capabilities": [
      "提前识别风险",
      "缩短响应时间",
      "推动责任闭环"
    ],
    "tags": [
      "客户流失",
      "预警挽留"
    ],
    "image": "https://aka.doubaocdn.com/s/TYVL9Q4ue4",
    "customer": "",
    "metrics": "",
    "meta": "客户流失 · 预警挽留",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 流失预警，自动完成预警客户流失。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“预警客户流失”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：AI 分析客户活跃度、使用频率和反馈数据，识别有流失风险的客户并自动预警，建议挽留策略。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "预警客户流失",
    "targetUrl": ""
  },
  {
    "id": "S035",
    "title": "检查申报材料",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 合规审计",
    "tag": "AI 应用",
    "industry": "教育",
    "role": "运营",
    "industries": [
      "教育"
    ],
    "roles": [
      "运营"
    ],
    "featured": true,
    "desc": "科研项目申报时，AI 节点自动检查申报材料的完整性和合规性，标注缺失项和格式问题，减少人工审核时间。",
    "problem": "当前“检查申报材料”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "科研项目申报时，AI 节点自动检查申报材料的完整性和合规性，标注缺失项和格式问题，减少人工审核时间。",
    "capabilities": [
      "前置发现问题",
      "统一审核标准",
      "降低合规风险"
    ],
    "tags": [
      "申报审查",
      "合规检查"
    ],
    "image": "https://aka.doubaocdn.com/s/hYfl2K2xZW",
    "customer": "",
    "metrics": "",
    "meta": "申报审查 · 合规检查",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 合规审计，自动完成检查申报材料。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“检查申报材料”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：科研项目申报时，AI 节点自动检查申报材料的完整性和合规性，标注缺失项和格式问题，减少人工审核时间。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "检查申报材料",
    "targetUrl": ""
  },
  {
    "id": "S036",
    "title": "评估门店选址",
    "kind": "AI 应用",
    "workGoal": "分析评估与预警",
    "subtype": "AI节点",
    "featureName": "AI 选址评估",
    "tag": "AI 应用",
    "industry": "零售",
    "role": "运营",
    "industries": [
      "零售"
    ],
    "roles": [
      "运营"
    ],
    "featured": true,
    "desc": "门店筹建时，AI 综合分析商圈数据、人流量、竞品分布和租金水平，输出选址评估报告和推荐方案。",
    "problem": "当前“评估门店选址”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "门店筹建时，AI 综合分析商圈数据、人流量、竞品分布和租金水平，输出选址评估报告和推荐方案。",
    "capabilities": [
      "缩短评估时间",
      "提供决策依据",
      "暴露关键风险"
    ],
    "tags": [
      "选址评估",
      "数据驱动"
    ],
    "image": "https://aka.doubaocdn.com/s/Bx4o2nVU1J",
    "customer": "",
    "metrics": "",
    "meta": "选址评估 · 数据驱动",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 选址评估，自动完成评估门店选址。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“评估门店选址”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：门店筹建时，AI 综合分析商圈数据、人流量、竞品分布和租金水平，输出选址评估报告和推荐方案。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "评估门店选址",
    "targetUrl": ""
  },
  {
    "id": "S037",
    "title": "审核报名资格",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI节点",
    "featureName": "AI 资格审核",
    "tag": "AI 应用",
    "industry": "教育",
    "role": "运营",
    "industries": [
      "教育"
    ],
    "roles": [
      "运营"
    ],
    "featured": true,
    "desc": "学科赛事报名时，AI 节点自动审核参赛资格：年级、学科、往届成绩等，不符合条件的自动驳回并说明原因。",
    "problem": "当前“审核报名资格”依赖人工读取材料、判断规则并执行后续操作，处理效率和结果一致性容易受个人经验影响。",
    "scenario": "学科赛事报名时，AI 节点自动审核参赛资格：年级、学科、往届成绩等，不符合条件的自动驳回并说明原因。",
    "capabilities": [
      "前置发现问题",
      "统一审核标准",
      "降低合规风险"
    ],
    "tags": [
      "报名审核",
      "资格校验"
    ],
    "image": "https://aka.doubaocdn.com/s/hYfl2K2xZW",
    "customer": "",
    "metrics": "",
    "meta": "报名审核 · 资格校验",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 资格审核，自动完成审核报名资格。",
    "steps": [
      "选择触发节点",
      "配置输入材料",
      "定义输出字段",
      "用样例验证"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目流程中的“审核报名资格”助手。请结合当前工作项、关联字段和附件完成以下任务：1. 按场景规则处理输入信息；2. 输出可直接写回项目的结构化结果；3. 标注判断依据和待人工确认项；4. 不补充材料中不存在的事实。场景要求：学科赛事报名时，AI 节点自动审核参赛资格：年级、学科、往届成绩等，不符合条件的自动驳回并说明原因。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "审核报名资格",
    "targetUrl": ""
  },
  {
    "id": "S038",
    "title": "撰写产品 PRD",
    "kind": "AI 应用",
    "workGoal": "内容撰写与总结",
    "subtype": "AI节点",
    "featureName": "AI 生成云文档",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "消费电子",
      "零售"
    ],
    "roles": [
      "产品经理"
    ],
    "featured": true,
    "desc": "需求进入方案阶段后，AI 汇总背景、目标、范围、用户故事和验收标准，生成结构化 PRD 初稿。",
    "problem": "产品经理需要从访谈、会议纪要和零散需求中反复整理 PRD，文档结构与信息完整度依赖个人经验。",
    "scenario": "需求进入方案阶段时，读取当前需求及关联的访谈记录、会议纪要和参考资料，按团队模板生成包含背景、目标、范围、用户故事、方案说明、验收标准和风险项的 PRD 初稿，并标记待确认信息。",
    "capabilities": [
      "缩短文档起草时间",
      "统一 PRD 结构",
      "减少关键信息遗漏"
    ],
    "tags": [
      "需求文档",
      "结构化写作",
      "PRD"
    ],
    "image": "",
    "customer": "",
    "metrics": "",
    "meta": "需求文档 · 结构化写作",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 生成云文档，自动完成撰写产品 PRD。",
    "steps": [
      "选择需求节点",
      "关联背景材料",
      "配置 PRD 模板",
      "生成并人工确认"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是产品需求文档助手。请结合当前需求、访谈记录、会议纪要和关联资料，按照“背景与问题、目标与指标、用户与场景、功能范围、用户故事、方案说明、验收标准、风险与待确认项”的结构生成 PRD 初稿。仅使用已有材料，不明确的信息标记为“待确认”，不要虚构数据或结论。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "结构化 PRD 初稿",
    "targetUrl": ""
  },
  {
    "id": "S039",
    "title": "走查产品需求",
    "kind": "AI 应用",
    "workGoal": "质量检查与审核",
    "subtype": "AI字段",
    "featureName": "自定义指令",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "消费电子",
      "游戏"
    ],
    "roles": [
      "产品经理",
      "项目经理"
    ],
    "featured": true,
    "desc": "需求提交评审前，AI 按 PM 走查清单检查目标、场景、范围、逻辑和验收标准，输出修改建议。",
    "problem": "需求走查依赖产品经理个人经验，范围遗漏、逻辑断点和验收标准不清常在正式评审时才暴露。",
    "scenario": "需求提交评审前，读取 PRD、原型和关联背景，按团队 PM 走查清单检查目标是否明确、用户场景是否闭环、范围边界是否清晰、异常流程是否覆盖、验收标准是否可验证，并将问题和修改建议回写到工作项。",
    "capabilities": [
      "前置发现需求问题",
      "统一走查标准",
      "提升正式评审效率"
    ],
    "tags": [
      "需求走查",
      "逻辑检查",
      "评审准备"
    ],
    "image": "",
    "customer": "",
    "metrics": "",
    "meta": "需求走查 · 逻辑检查",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置自定义指令，自动完成走查产品需求。",
    "steps": [
      "配置走查清单",
      "关联 PRD 与原型",
      "执行需求检查",
      "确认修改建议"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是资深产品经理，请在需求提交正式评审前完成 PM 走查。检查：1. 背景、目标和成功指标是否明确；2. 用户角色与核心场景是否完整；3. 功能范围和非目标是否清晰；4. 主流程、异常流程和权限逻辑是否闭环；5. 验收标准是否具体可验证。按“问题位置、问题描述、影响、修改建议、严重程度”输出，不替作者补写未经确认的业务事实。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "需求走查问题清单",
    "targetUrl": ""
  },
  {
    "id": "S040",
    "title": "总结项目成果",
    "kind": "AI 应用",
    "workGoal": "内容撰写与总结",
    "subtype": "AI字段",
    "featureName": "内容总结",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "制造",
      "教育",
      "能源"
    ],
    "roles": [
      "项目经理",
      "高管"
    ],
    "featured": true,
    "desc": "项目或阶段结束后，AI 汇总目标达成、关键交付、风险处理和经验教训，生成项目总结初稿。",
    "problem": "项目总结依赖人工跨任务、文档和会议记录取数，容易只罗列过程，缺少目标对照和可复用经验。",
    "scenario": "项目进入结项或阶段验收节点后，读取目标、里程碑、交付物、风险、变更和关键决策，生成包含目标达成情况、关键成果、问题与处理、经验教训和后续行动的项目总结，并保留信息来源。",
    "capabilities": [
      "降低总结成本",
      "沉淀项目经验",
      "形成后续行动闭环"
    ],
    "tags": [
      "项目总结",
      "成果沉淀",
      "经验复用"
    ],
    "image": "",
    "customer": "",
    "metrics": "",
    "meta": "项目总结 · 成果沉淀",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置内容总结，自动完成总结项目成果。",
    "steps": [
      "选择结项节点",
      "汇总项目数据",
      "配置总结结构",
      "生成并确认"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是项目总结助手。请结合项目目标、里程碑、交付物、风险记录、变更记录和关键决策，生成项目总结。结构包括：目标达成情况、关键成果、未完成事项、主要问题与处理、有效做法、经验教训、后续行动。每项结论注明依据；无法从材料确认的内容标记“待补充”，不要夸大成果。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "项目总结初稿",
    "targetUrl": ""
  },
  {
    "id": "S041",
    "title": "撰写产品手册",
    "kind": "AI 应用",
    "workGoal": "内容撰写与总结",
    "subtype": "AI节点",
    "featureName": "AI 生成云文档",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "消费电子",
      "教育"
    ],
    "roles": [
      "产品经理",
      "运营"
    ],
    "featured": true,
    "desc": "版本验收后，AI 汇总功能说明、操作步骤和注意事项，生成面向用户的产品手册初稿。",
    "problem": "产品手册需要人工汇总需求、原型和操作说明，更新经常滞后于版本，用户难以及时理解新功能。",
    "scenario": "版本进入验收或发布节点后，读取已交付需求、功能说明、操作步骤、权限限制和常见问题，按产品手册目录生成面向用户的云文档，并标记缺失截图和待确认内容。",
    "capabilities": [
      "缩短手册编写时间",
      "保持文档与版本一致",
      "降低用户学习成本"
    ],
    "tags": [
      "产品手册",
      "用户文档",
      "知识沉淀"
    ],
    "image": "",
    "customer": "",
    "metrics": "",
    "meta": "产品手册 · 用户文档",
    "contentStatus": "模拟待校准",
    "sourceType": "scenario",
    "implementationSummary": "在对应流程节点中配置AI 生成云文档，自动完成撰写产品手册。",
    "steps": [
      "选择发布节点",
      "关联版本材料",
      "配置手册目录",
      "生成并人工校对"
    ],
    "deliveryType": "参考提示词",
    "prompt": "你是产品文档助手。请结合当前版本的需求说明、功能描述、操作步骤、权限规则和常见问题，按照“产品概述、适用对象、功能说明、操作指引、权限与限制、常见问题、版本信息”的结构生成产品手册初稿。使用面向最终用户的语言；缺失截图或无法确认的信息标记为“待补充”。",
    "prdContent": "",
    "prdUrl": "",
    "guideUrl": "",
    "ctaLabel": "复制参考提示词",
    "configurationNotes": "示例内容；上线前需校验字段、权限、触发条件和人工复核机制。",
    "expectedOutput": "产品手册初稿",
    "targetUrl": ""
  }
];

export const products = [
  {
    "id": "A001",
    "title": "自定义指令",
    "featureName": "自定义指令",
    "kind": "AI 应用",
    "subtype": "AI字段",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "灵活编写提示词，定制个性化 AI 输出。",
    "detailDescription": "自定义指令用于灵活编写提示词，定制个性化 AI 输出，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "自定义提示词",
      "字段输出",
      "个性化配置"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "走查产品需求",
    "exampleScenarioDesc": "需求提交评审前，读取 PRD、原型和关联背景，按团队 PM 走查清单检查目标是否明确、用户场景是否闭环、范围边界是否清晰、异常流程是否覆盖、验收标准是否可验证，并将问题和修改建议回写到工作项。",
    "relatedScenarios": [
      "走查产品需求"
    ],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A002",
    "title": "智能打分",
    "featureName": "智能打分",
    "kind": "AI 应用",
    "subtype": "AI字段",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "按标准智能量化评分，提升评估效率。",
    "detailDescription": "智能打分用于按标准智能量化评分，提升评估效率，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "评分标准",
      "量化评估",
      "结果写入"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A003",
    "title": "分类打标",
    "featureName": "分类打标",
    "kind": "AI 应用",
    "subtype": "AI字段",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "智能匹配分类标签，提升内容检索效率。",
    "detailDescription": "分类打标用于智能匹配分类标签，提升内容检索效率，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "智能分类",
      "标签匹配",
      "字段写入"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A004",
    "title": "关键内容提取",
    "featureName": "关键内容提取",
    "kind": "AI 应用",
    "subtype": "AI字段",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "精准提取关键信息，提升文本处理效率。",
    "detailDescription": "关键内容提取用于精准提取关键信息，提升文本处理效率，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "信息提取",
      "结构化输出",
      "字段写入"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A005",
    "title": "内容总结",
    "featureName": "内容总结",
    "kind": "AI 应用",
    "subtype": "AI字段",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "智能提炼长文本，生成清晰结构化总结。",
    "detailDescription": "内容总结用于智能提炼长文本，生成清晰结构化总结，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "长文总结",
      "结构化摘要",
      "字段生成"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "总结项目成果",
    "exampleScenarioDesc": "项目进入结项或阶段验收节点后，读取目标、里程碑、交付物、风险、变更和关键决策，生成包含目标达成情况、关键成果、问题与处理、经验教训和后续行动的项目总结，并保留信息来源。",
    "relatedScenarios": [
      "总结项目成果"
    ],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A006",
    "title": "智能翻译",
    "featureName": "智能翻译",
    "kind": "AI 应用",
    "subtype": "AI字段",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "精准翻译多语言内容，保留原文语义结构。",
    "detailDescription": "智能翻译用于精准翻译多语言内容，保留原文语义结构，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "多语言翻译",
      "语义保留",
      "字段生成"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A007",
    "title": "AI 智能洞察",
    "featureName": "AI 智能洞察",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "一键分析项目数据，生成洞察报告。",
    "detailDescription": "AI 智能洞察用于一键分析项目数据，生成洞察报告，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "项目分析",
      "洞察报告",
      "风险识别"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A008",
    "title": "AI 智能填单",
    "featureName": "AI 智能填单",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "智能提取文档信息，一键回填项目字段。",
    "detailDescription": "AI 智能填单用于智能提取文档信息，一键回填项目字段，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "文档提取",
      "字段映射",
      "一键回填"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "补全客户信息",
    "exampleScenarioDesc": "需求评审后，AI 节点自动从会议纪要、邮件中提取关键信息，一键回填到飞书项目字段，无需手动逐条录入。",
    "relatedScenarios": [
      "补全客户信息",
      "补全需求描述"
    ],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A009",
    "title": "智能测试用例生成",
    "featureName": "智能测试用例生成",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "智能生成测试用例，提升覆盖率与交付效率。",
    "detailDescription": "智能测试用例生成用于智能生成测试用例，提升覆盖率与交付效率，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "用例生成",
      "覆盖提升",
      "质量协同"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "生成测试用例",
    "exampleScenarioDesc": "需求进入测试阶段时，读取 PRD、验收标准和关联原型，按团队用例模板生成前置条件、操作步骤、预期结果和优先级，并标记需要人工补充的特殊场景。",
    "relatedScenarios": [
      "生成测试用例"
    ],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A010",
    "title": "智能体连接器",
    "featureName": "智能体连接器",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "连接 Agent 与项目，自动流转任务。",
    "detailDescription": "智能体连接器用于连接 Agent 与项目，自动流转任务，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "Agent 连接",
      "任务流转",
      "项目协同"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A011",
    "title": "AI 生成云文档",
    "featureName": "AI 生成云文档",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "智能生成规范需求文档，提升 PRD 产出效率。",
    "detailDescription": "AI 生成云文档用于智能生成规范需求文档，提升 PRD 产出效率，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "需求文档",
      "规范生成",
      "云文档"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "撰写产品 PRD",
    "exampleScenarioDesc": "需求进入方案阶段时，读取当前需求及关联的访谈记录、会议纪要和参考资料，按团队模板生成包含背景、目标、范围、用户故事、方案说明、验收标准和风险项的 PRD 初稿，并标记待确认信息。",
    "relatedScenarios": [
      "撰写产品 PRD",
      "撰写产品手册"
    ],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A012",
    "title": "智能会议分析",
    "featureName": "智能会议分析",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "产品经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "产品经理",
      "项目经理",
      "研发",
      "测试"
    ],
    "desc": "智能分析会议内容，一键生成项目子任务。",
    "detailDescription": "智能会议分析用于智能分析会议内容，一键生成项目子任务，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "会议分析",
      "子任务生成",
      "行动项提取"
    ],
    "image": "",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "拆解会议任务",
    "exampleScenarioDesc": "需求评审会结束后，AI 节点自动提取所有待办项和决策要点，一键生成飞书项目子任务并关联到对应工作项，从讨论到执行无缝衔接。",
    "relatedScenarios": [
      "拆解会议任务"
    ],
    "contentStatus": "草稿",
    "sourceType": "product"
  },
  {
    "id": "A013",
    "title": "AI 助手",
    "featureName": "AI 助手",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "医疗",
    "role": "运营",
    "industries": [
      "医疗"
    ],
    "roles": [
      "运营"
    ],
    "desc": "在项目流程中执行“创建外部工单”，并将结构化结果写回工作项。",
    "detailDescription": "AI 助手用于在明确的流程触发点执行创建外部工单，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "工单识别",
      "自动建单"
    ],
    "image": "https://aka.doubaocdn.com/s/OJkgxeTgKd",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "创建外部工单",
    "exampleScenarioDesc": "客服系统、邮件、飞书群中的用户反馈，AI 节点自动识别并创建为标准工单，无需人工逐个录入，大幅提升工单处理效率。",
    "relatedScenarios": [
      "创建外部工单",
      "创建邮件任务",
      "提取合同条款",
      "分类客户反馈"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A014",
    "title": "AI 智能分配",
    "featureName": "AI 智能分配",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网"
    ],
    "roles": [
      "项目经理"
    ],
    "desc": "在项目流程中执行“分派研发需求”，并将结构化结果写回工作项。",
    "detailDescription": "AI 智能分配用于在明确的流程触发点执行分派研发需求，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "技能匹配",
      "负载均衡"
    ],
    "image": "https://aka.doubaocdn.com/s/nvmVJKYDTY",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "分派研发需求",
    "exampleScenarioDesc": "新需求进入开发阶段时，AI 节点自动匹配最合适的开发人员，兼顾技能匹配度和当前工作负载，避免忙闲不均，减少人工派单时间。",
    "relatedScenarios": [
      "分派研发需求"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A015",
    "title": "AI 缺陷分级",
    "featureName": "AI 缺陷分级",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "游戏",
    "role": "测试",
    "industries": [
      "游戏"
    ],
    "roles": [
      "测试"
    ],
    "desc": "在项目流程中执行“评定缺陷等级”，并将结构化结果写回工作项。",
    "detailDescription": "AI 缺陷分级用于在明确的流程触发点执行评定缺陷等级，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "严重度分级",
      "自动指派"
    ],
    "image": "https://aka.doubaocdn.com/s/CvvUzmrizE",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "评定缺陷等级",
    "exampleScenarioDesc": "测试提交 Bug 后，AI 根据严重程度、影响范围和修复成本自动分级，并推荐对应的处理人。",
    "relatedScenarios": [
      "评定缺陷等级"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A016",
    "title": "AI 工单分流",
    "featureName": "AI 工单分流",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "零售",
    "role": "运营",
    "industries": [
      "零售"
    ],
    "roles": [
      "运营"
    ],
    "desc": "在项目流程中执行“分流客服工单”，并将结构化结果写回工作项。",
    "detailDescription": "AI 工单分流用于在明确的流程触发点执行分流客服工单，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "多级分流",
      "SLA 管控"
    ],
    "image": "https://aka.doubaocdn.com/s/RAu5lPDwZP",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "分流客服工单",
    "exampleScenarioDesc": "电商平台的客服工单根据产品线、问题类型和用户等级自动分流到对应处理组，SLA 超时自动升级。",
    "relatedScenarios": [
      "分流客服工单"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A017",
    "title": "AI 质量检查",
    "featureName": "AI 质量检查",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "测试",
    "industries": [
      "互联网"
    ],
    "roles": [
      "测试"
    ],
    "desc": "在项目流程中执行“检查交付质量”，并将结构化结果写回工作项。",
    "detailDescription": "AI 质量检查用于在明确的流程触发点执行检查交付质量，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "自动检查",
      "质量门禁"
    ],
    "image": "https://aka.doubaocdn.com/s/CvvUzmrizE",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "检查交付质量",
    "exampleScenarioDesc": "提测节点中，AI 节点自动检查代码是否关联了需求、测试用例是否覆盖了验收标准，不符合的自动驳回并给出原因。",
    "relatedScenarios": [
      "检查交付质量"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A018",
    "title": "AI 合规审计",
    "featureName": "AI 合规审计",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "高管",
    "industries": [
      "金融"
    ],
    "roles": [
      "高管"
    ],
    "desc": "在项目流程中执行“检查需求合规”，并将结构化结果写回工作项。",
    "detailDescription": "AI 合规审计用于在明确的流程触发点执行检查需求合规，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "合规检查",
      "风险评估"
    ],
    "image": "https://aka.doubaocdn.com/s/DJabXgkph8",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "检查需求合规",
    "exampleScenarioDesc": "需求提交审批前，AI 节点自动检查是否满足了合规要求：是否完成了风险评估、是否获得了法务审批、是否标注了数据安全等级。",
    "relatedScenarios": [
      "检查需求合规",
      "审查金融合规",
      "检查申报材料"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A019",
    "title": "AI 代码审查",
    "featureName": "AI 代码审查",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "汽车",
    "role": "研发",
    "industries": [
      "汽车"
    ],
    "roles": [
      "研发"
    ],
    "desc": "在项目流程中执行“检查代码提交”，并将结构化结果写回工作项。",
    "detailDescription": "AI 代码审查用于在明确的流程触发点执行检查代码提交，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "代码审查",
      "合规拦截"
    ],
    "image": "https://aka.doubaocdn.com/s/a3S9pUgsCz",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "检查代码提交",
    "exampleScenarioDesc": "代码提交时，AI 节点自动检查是否关联了工作项、是否通过了 Code Review、是否包含必要的测试，不合规的提交自动拦截并通知开发者。",
    "relatedScenarios": [
      "检查代码提交"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A020",
    "title": "AI 设计审查",
    "featureName": "AI 设计审查",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "消费电子",
    "role": "设计",
    "industries": [
      "消费电子"
    ],
    "roles": [
      "设计"
    ],
    "desc": "在项目流程中执行“检查设计规范”，并将结构化结果写回工作项。",
    "detailDescription": "AI 设计审查用于在明确的流程触发点执行检查设计规范，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "设计规范",
      "组件一致性"
    ],
    "image": "https://aka.doubaocdn.com/s/bv0qSfwVgG",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "检查设计规范",
    "exampleScenarioDesc": "设计师提交设计稿后，AI 节点自动检查组件库一致性、间距规范、色彩规范等，不符合规范的自动标注并给出修改建议。",
    "relatedScenarios": [
      "检查设计规范"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A021",
    "title": "AI 影响分析",
    "featureName": "AI 影响分析",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "汽车",
    "role": "产品经理",
    "industries": [
      "汽车"
    ],
    "roles": [
      "产品经理"
    ],
    "desc": "在项目流程中执行“评估变更影响”，并将结构化结果写回工作项。",
    "detailDescription": "AI 影响分析用于在明确的流程触发点执行评估变更影响，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "变更影响",
      "依赖分析"
    ],
    "image": "https://aka.doubaocdn.com/s/nvmVJKYDTY",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "评估变更影响",
    "exampleScenarioDesc": "当需求发生变更时，AI 节点自动分析影响的上下游模块、关联任务和依赖关系，输出影响范围评估报告。",
    "relatedScenarios": [
      "评估变更影响"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A022",
    "title": "AI 风险预警",
    "featureName": "AI 风险预警",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "制造",
    "role": "高管",
    "industries": [
      "制造"
    ],
    "roles": [
      "高管"
    ],
    "desc": "在项目流程中执行“预警供应链风险”，并将结构化结果写回工作项。",
    "detailDescription": "AI 风险预警用于在明确的流程触发点执行预警供应链风险，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "供应链",
      "风险预警"
    ],
    "image": "https://aka.doubaocdn.com/s/Gkf92x6XVm",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "预警供应链风险",
    "exampleScenarioDesc": "供应链关键节点出现异常时（如供应商延期、原材料涨价），AI 节点自动预警并评估对项目交付的影响，推荐替代方案。",
    "relatedScenarios": [
      "预警供应链风险",
      "预警项目延期"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A023",
    "title": "AI 发布说明",
    "featureName": "AI 发布说明",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "消费电子",
    "role": "研发",
    "industries": [
      "消费电子"
    ],
    "roles": [
      "研发"
    ],
    "desc": "在项目流程中执行“起草发布说明”，并将结构化结果写回工作项。",
    "detailDescription": "AI 发布说明用于在明确的流程触发点执行起草发布说明，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "发布说明",
      "自动生成"
    ],
    "image": "https://aka.doubaocdn.com/s/bv0qSfwVgG",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "起草发布说明",
    "exampleScenarioDesc": "版本发布前，AI 根据本版本的需求、缺陷和变更记录自动生成 Release Notes，包含功能清单、修复列表和已知问题，研发只需微调即可发布。",
    "relatedScenarios": [
      "起草发布说明"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A024",
    "title": "AI 项目规划",
    "featureName": "AI 项目规划",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网"
    ],
    "roles": [
      "项目经理"
    ],
    "desc": "在项目流程中执行“拆解项目计划”，并将结构化结果写回工作项。",
    "detailDescription": "AI 项目规划用于在明确的流程触发点执行拆解项目计划，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "项目拆解",
      "智能排期"
    ],
    "image": "https://aka.doubaocdn.com/s/nvmVJKYDTY",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "拆解项目计划",
    "exampleScenarioDesc": "立项后，AI 根据历史项目数据和行业模板，自动拆解出任务清单、推荐排期和关键里程碑，项目经理只需微调即可启动。",
    "relatedScenarios": [
      "拆解项目计划"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A025",
    "title": "AI 智能运维",
    "featureName": "AI 智能运维",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "汽车",
    "role": "研发",
    "industries": [
      "汽车"
    ],
    "roles": [
      "研发"
    ],
    "desc": "在项目流程中执行“响应系统故障”，并将结构化结果写回工作项。",
    "detailDescription": "AI 智能运维用于在明确的流程触发点执行响应系统故障，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "故障检测",
      "自动响应"
    ],
    "image": "https://aka.doubaocdn.com/s/RHeb6ZPb6p",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "响应系统故障",
    "exampleScenarioDesc": "线上系统出现异常时，AI 节点自动检测告警、分析根因、创建事故单并通知值班人员，缩短故障发现到响应的时间。",
    "relatedScenarios": [
      "响应系统故障"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A026",
    "title": "AI 缺陷报告",
    "featureName": "AI 缺陷报告",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "互联网",
    "role": "测试",
    "industries": [
      "互联网"
    ],
    "roles": [
      "测试"
    ],
    "desc": "在项目流程中执行“生成缺陷报告”，并将结构化结果写回工作项。",
    "detailDescription": "AI 缺陷报告用于在明确的流程触发点执行生成缺陷报告，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "缺陷报告",
      "自动补全"
    ],
    "image": "https://aka.doubaocdn.com/s/CvvUzmrizE",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "生成缺陷报告",
    "exampleScenarioDesc": "测试发现问题后，AI 根据截图和简要描述自动生成完整的缺陷报告，包含复现步骤、预期结果和严重度评估。",
    "relatedScenarios": [
      "生成缺陷报告"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A027",
    "title": "AI 信息补全",
    "featureName": "AI 信息补全",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "销售",
    "industries": [
      "金融"
    ],
    "roles": [
      "销售"
    ],
    "desc": "在项目流程中执行“补全企业信息”，并将结构化结果写回工作项。",
    "detailDescription": "AI 信息补全用于在明确的流程触发点执行补全企业信息，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "客户信息",
      "自动补全"
    ],
    "image": "https://aka.doubaocdn.com/s/TYVL9Q4ue4",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "补全企业信息",
    "exampleScenarioDesc": "录入客户/线索时，AI 节点自动查询并补全企业名称、信用代码、地址等工商信息，减少手动录入。",
    "relatedScenarios": [
      "补全企业信息"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A028",
    "title": "AI 风险分析",
    "featureName": "AI 风险分析",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "高管",
    "industries": [
      "金融"
    ],
    "roles": [
      "高管"
    ],
    "desc": "在项目流程中执行“评估投资风险”，并将结构化结果写回工作项。",
    "detailDescription": "AI 风险分析用于在明确的流程触发点执行评估投资风险，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "投资风险",
      "智能评估"
    ],
    "image": "https://aka.doubaocdn.com/s/DJabXgkph8",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "评估投资风险",
    "exampleScenarioDesc": "投资项目立项前，AI 节点自动评估风险等级，分析市场环境、政策变化和财务指标，输出风险评估报告。",
    "relatedScenarios": [
      "评估投资风险"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A029",
    "title": "AI 线索评分",
    "featureName": "AI 线索评分",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "销售",
    "industries": [
      "金融"
    ],
    "roles": [
      "销售"
    ],
    "desc": "在项目流程中执行“评估销售线索”，并将结构化结果写回工作项。",
    "detailDescription": "AI 线索评分用于在明确的流程触发点执行评估销售线索，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "线索评分",
      "优先级排序"
    ],
    "image": "https://aka.doubaocdn.com/s/Bx4o2nVU1J",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "评估销售线索",
    "exampleScenarioDesc": "销售线索进入系统后，AI 根据企业规模、行业、行为数据自动评分，帮销售优先跟进高价值线索。",
    "relatedScenarios": [
      "评估销售线索"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A030",
    "title": "AI 成本预警",
    "featureName": "AI 成本预警",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "制造",
    "role": "高管",
    "industries": [
      "制造"
    ],
    "roles": [
      "高管"
    ],
    "desc": "在项目流程中执行“预警预算超支”，并将结构化结果写回工作项。",
    "detailDescription": "AI 成本预警用于在明确的流程触发点执行预警预算超支，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "预算监控",
      "超支预警"
    ],
    "image": "https://aka.doubaocdn.com/s/Gkf92x6XVm",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "预警预算超支",
    "exampleScenarioDesc": "AI 实时监控项目预算使用情况，当实际支出接近或超出预算时自动预警，推荐成本优化方案。",
    "relatedScenarios": [
      "预警预算超支"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A031",
    "title": "AI 流失预警",
    "featureName": "AI 流失预警",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "金融",
    "role": "销售",
    "industries": [
      "金融"
    ],
    "roles": [
      "销售"
    ],
    "desc": "在项目流程中执行“预警客户流失”，并将结构化结果写回工作项。",
    "detailDescription": "AI 流失预警用于在明确的流程触发点执行预警客户流失，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "客户流失",
      "预警挽留"
    ],
    "image": "https://aka.doubaocdn.com/s/TYVL9Q4ue4",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "预警客户流失",
    "exampleScenarioDesc": "AI 分析客户活跃度、使用频率和反馈数据，识别有流失风险的客户并自动预警，建议挽留策略。",
    "relatedScenarios": [
      "预警客户流失"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A032",
    "title": "AI 选址评估",
    "featureName": "AI 选址评估",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "零售",
    "role": "运营",
    "industries": [
      "零售"
    ],
    "roles": [
      "运营"
    ],
    "desc": "在项目流程中执行“评估门店选址”，并将结构化结果写回工作项。",
    "detailDescription": "AI 选址评估用于在明确的流程触发点执行评估门店选址，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "选址评估",
      "数据驱动"
    ],
    "image": "https://aka.doubaocdn.com/s/Bx4o2nVU1J",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "评估门店选址",
    "exampleScenarioDesc": "门店筹建时，AI 综合分析商圈数据、人流量、竞品分布和租金水平，输出选址评估报告和推荐方案。",
    "relatedScenarios": [
      "评估门店选址"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "A033",
    "title": "AI 资格审核",
    "featureName": "AI 资格审核",
    "kind": "AI 应用",
    "subtype": "AI节点",
    "tag": "AI 应用",
    "industry": "教育",
    "role": "运营",
    "industries": [
      "教育"
    ],
    "roles": [
      "运营"
    ],
    "desc": "在项目流程中执行“审核报名资格”，并将结构化结果写回工作项。",
    "detailDescription": "AI 资格审核用于在明确的流程触发点执行审核报名资格，输入来自当前工作项及关联材料，输出可用于字段回填、流程判断或后续任务。",
    "capabilities": [
      "报名审核",
      "资格校验"
    ],
    "image": "https://aka.doubaocdn.com/s/hYfl2K2xZW",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "审核报名资格",
    "exampleScenarioDesc": "学科赛事报名时，AI 节点自动审核参赛资格：年级、学科、往届成绩等，不符合条件的自动驳回并说明原因。",
    "relatedScenarios": [
      "审核报名资格"
    ],
    "contentStatus": "模拟待校准",
    "sourceType": "product"
  },
  {
    "id": "P001",
    "title": "工时资源管理",
    "featureName": "工时资源管理",
    "kind": "插件",
    "subtype": "资源管理",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "连接人力资源与运营成本，支持工时填报、审批、统计与多维分析。",
    "detailDescription": "工时资源管理用于连接人力资源与运营成本，支持工时填报、审批、统计与多维分析，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "工时填报",
      "工时审批",
      "多维分析"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E5%B7%A5%E6%97%B6%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P002",
    "title": "ITSM·工单通",
    "featureName": "ITSM·工单通",
    "kind": "插件",
    "subtype": "工单集成",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "打通内外流程闭环，支持服务门户、审批流、客户管理与 SLA 管控。",
    "detailDescription": "ITSM·工单通用于打通内外流程闭环，支持服务门户、审批流、客户管理与 SLA 管控，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "服务门户",
      "工单建单",
      "SLA 管控"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20ITSM%C2%B7%E5%B7%A5%E5%8D%95%E9%80%9A%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "外部工单接入项目闭环",
    "exampleScenarioDesc": "通过插件接入外部工单，映射字段、自动建单并同步状态，完成后将结果回传原系统。",
    "relatedScenarios": [
      "外部工单接入项目闭环"
    ],
    "contentStatus": "草稿",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P003",
    "title": "合同审核",
    "featureName": "合同审核",
    "kind": "插件",
    "subtype": "合同管理",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "通过 AI 辅助合同审查，自动识别风险并输出风险清单。",
    "detailDescription": "合同审核用于通过 AI 辅助合同审查，自动识别风险并输出风险清单，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "合同审查",
      "风险识别",
      "风险清单"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E5%90%88%E5%90%8C%E5%AE%A1%E6%A0%B8%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P004",
    "title": "文件资源管理",
    "featureName": "文件资源管理",
    "kind": "插件",
    "subtype": "文档集成",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "支持项目文件集中管理、异步上传、权限配置与统一检索。",
    "detailDescription": "文件资源管理用于支持项目文件集中管理、异步上传、权限配置与统一检索，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "文件管理",
      "异步上传",
      "权限配置"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E6%96%87%E4%BB%B6%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P005",
    "title": "组织架构",
    "featureName": "组织架构",
    "kind": "插件",
    "subtype": "数据展示",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "将客户对接人按层级关系可视化呈现。",
    "detailDescription": "组织架构用于将客户对接人按层级关系可视化呈现，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "组织关系",
      "联系人信息",
      "可视化展示"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E7%BB%84%E7%BB%87%E6%9E%B6%E6%9E%84%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P006",
    "title": "企业信息补全",
    "featureName": "企业信息补全",
    "kind": "插件",
    "subtype": "数据服务",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "录入客户时自动查询企业基础信息，减少重复数据。",
    "detailDescription": "企业信息补全用于录入客户时自动查询企业基础信息，减少重复数据，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "企业查询",
      "信息补全",
      "重复校验"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E4%BC%81%E4%B8%9A%E4%BF%A1%E6%81%AF%E8%A1%A5%E5%85%A8%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P007",
    "title": "GitLab 研发连接器",
    "featureName": "GitLab 研发连接器",
    "kind": "插件",
    "subtype": "代码集成",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "关联 Branch、Commit、MR 与工作项，并通过 Merge 事件自动流转。",
    "detailDescription": "GitLab 研发连接器用于关联 Branch、Commit、MR 与工作项，并通过 Merge 事件自动流转，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "代码关联",
      "状态同步",
      "研发追溯"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20GitLab%20%E7%A0%94%E5%8F%91%E8%BF%9E%E6%8E%A5%E5%99%A8%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "代码提交关联研发任务",
    "exampleScenarioDesc": "通过代码仓库插件识别任务编号，关联分支、提交和合并请求，并按规则更新任务状态。",
    "relatedScenarios": [
      "代码提交关联研发任务"
    ],
    "contentStatus": "草稿",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P008",
    "title": "多维表格同步",
    "featureName": "多维表格同步",
    "kind": "插件",
    "subtype": "数据同步",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "在项目工作项与多维表格间同步结构化数据。",
    "detailDescription": "多维表格同步用于在项目工作项与多维表格间同步结构化数据，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "双向同步",
      "字段映射",
      "冲突处理"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E5%A4%9A%E7%BB%B4%E8%A1%A8%E6%A0%BC%E5%90%8C%E6%AD%A5%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P009",
    "title": "飞书消息转任务",
    "featureName": "飞书消息转任务",
    "kind": "插件",
    "subtype": "消息集成",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "将会话消息快速创建为项目任务并保留来源。",
    "detailDescription": "飞书消息转任务用于将会话消息快速创建为项目任务并保留来源，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "消息建单",
      "上下文保留",
      "任务关联"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E9%A3%9E%E4%B9%A6%E6%B6%88%E6%81%AF%E8%BD%AC%E4%BB%BB%E5%8A%A1%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P010",
    "title": "测试管理增强",
    "featureName": "测试管理增强",
    "kind": "插件",
    "subtype": "质量管理",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "管理测试计划、用例、执行与缺陷关联。",
    "detailDescription": "测试管理增强用于管理测试计划、用例、执行与缺陷关联，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "用例管理",
      "执行跟踪",
      "覆盖分析"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E6%B5%8B%E8%AF%95%E7%AE%A1%E7%90%86%E5%A2%9E%E5%BC%BA%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P011",
    "title": "审批流程增强",
    "featureName": "审批流程增强",
    "kind": "插件",
    "subtype": "流程增强",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "为复杂业务提供多级审批与条件流转能力。",
    "detailDescription": "审批流程增强用于为复杂业务提供多级审批与条件流转能力，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "条件审批",
      "多级流转",
      "审计记录"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E5%AE%A1%E6%89%B9%E6%B5%81%E7%A8%8B%E5%A2%9E%E5%BC%BA%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "P012",
    "title": "开放 API 调试台",
    "featureName": "开放 API 调试台",
    "kind": "插件",
    "subtype": "开发工具",
    "tag": "插件",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "金融"
    ],
    "roles": [
      "项目经理",
      "研发",
      "测试",
      "运营"
    ],
    "desc": "辅助调试项目开放接口与事件订阅。",
    "detailDescription": "开放 API 调试台用于辅助调试项目开放接口与事件订阅，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "接口调试",
      "事件验证",
      "日志查看"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20plugin%20cover%20for%20%E5%BC%80%E6%94%BE%20API%20%E8%B0%83%E8%AF%95%E5%8F%B0%3A%20a%20clean%20enterprise%20software%20integration%20card%20showing%20connected%20systems%2C%20structured%20data%20flow%20and%20project%20task%20interface%2C%20realistic%20SaaS%20UI%2C%20light%20theme%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "prdUrl": ""
  },
  {
    "id": "T001",
    "title": "DSTE战略到执行",
    "featureName": "DSTE战略到执行",
    "kind": "模板",
    "subtype": "战略管理",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "打通战略制定、目标分解、项目推进与经营复盘。",
    "detailDescription": "DSTE战略到执行用于打通战略制定、目标分解、项目推进与经营复盘，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "战略地图",
      "指标看板",
      "执行闭环"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20DSTE%E6%88%98%E7%95%A5%E5%88%B0%E6%89%A7%E8%A1%8C%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T002",
    "title": "软件研发管理",
    "featureName": "软件研发管理",
    "kind": "模板",
    "subtype": "研发管理",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "覆盖需求、任务、缺陷、迭代、测试、代码与发布全流程。",
    "detailDescription": "软件研发管理用于覆盖需求、任务、缺陷、迭代、测试、代码与发布全流程，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "需求管理",
      "迭代管理",
      "质量追踪"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E8%BD%AF%E4%BB%B6%E7%A0%94%E5%8F%91%E7%AE%A1%E7%90%86%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "软件研发流程快速启用",
    "exampleScenarioDesc": "复制研发模板后，根据团队规模调整工作项、流程、权限和度量视图，再导入存量项目。",
    "relatedScenarios": [
      "软件研发流程快速启用"
    ],
    "contentStatus": "草稿",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T003",
    "title": "内容制作全流程",
    "featureName": "内容制作全流程",
    "kind": "模板",
    "subtype": "内容运营",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "覆盖创意收集、选题、素材、创作、分发与复盘。",
    "detailDescription": "内容制作全流程用于覆盖创意收集、选题、素材、创作、分发与复盘，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "内容策划",
      "素材沉淀",
      "分发复盘"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E5%86%85%E5%AE%B9%E5%88%B6%E4%BD%9C%E5%85%A8%E6%B5%81%E7%A8%8B%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T004",
    "title": "软件交付项目模板",
    "featureName": "软件交付项目模板",
    "kind": "模板",
    "subtype": "项目交付",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "管理交付计划、风险、验收与上线。",
    "detailDescription": "软件交付项目模板用于管理交付计划、风险、验收与上线，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "计划管理",
      "风险跟踪",
      "交付验收"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E8%BD%AF%E4%BB%B6%E4%BA%A4%E4%BB%98%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T005",
    "title": "版本发布管理模板",
    "featureName": "版本发布管理模板",
    "kind": "模板",
    "subtype": "发布管理",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "协调多端版本、变更、检查与发布。",
    "detailDescription": "版本发布管理模板用于协调多端版本、变更、检查与发布，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "版本计划",
      "发布门禁",
      "变更记录"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E7%AE%A1%E7%90%86%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T006",
    "title": "测试全流程模板",
    "featureName": "测试全流程模板",
    "kind": "模板",
    "subtype": "质量管理",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "组织测试计划、用例执行和缺陷闭环。",
    "detailDescription": "测试全流程模板用于组织测试计划、用例执行和缺陷闭环，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "测试计划",
      "用例执行",
      "缺陷管理"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E6%B5%8B%E8%AF%95%E5%85%A8%E6%B5%81%E7%A8%8B%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T007",
    "title": "市场活动项目模板",
    "featureName": "市场活动项目模板",
    "kind": "模板",
    "subtype": "营销运营",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "管理活动策划、素材、执行与复盘。",
    "detailDescription": "市场活动项目模板用于管理活动策划、素材、执行与复盘，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "活动计划",
      "素材协作",
      "效果复盘"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E5%B8%82%E5%9C%BA%E6%B4%BB%E5%8A%A8%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T008",
    "title": "内容生产流程模板",
    "featureName": "内容生产流程模板",
    "kind": "模板",
    "subtype": "内容运营",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "管理选题、脚本、制作、发布和数据复盘。",
    "detailDescription": "内容生产流程模板用于管理选题、脚本、制作、发布和数据复盘，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "内容策划",
      "制作协同",
      "发布复盘"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E5%86%85%E5%AE%B9%E7%94%9F%E4%BA%A7%E6%B5%81%E7%A8%8B%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T009",
    "title": "门店开业项目模板",
    "featureName": "门店开业项目模板",
    "kind": "模板",
    "subtype": "零售运营",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "管理选址、筹备、验收和开业节点。",
    "detailDescription": "门店开业项目模板用于管理选址、筹备、验收和开业节点，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "筹备计划",
      "节点验收",
      "问题闭环"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E9%97%A8%E5%BA%97%E5%BC%80%E4%B8%9A%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T010",
    "title": "合同履约管理模板",
    "featureName": "合同履约管理模板",
    "kind": "模板",
    "subtype": "合同管理",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "连接合同条款、交付计划与验收回款。",
    "detailDescription": "合同履约管理模板用于连接合同条款、交付计划与验收回款，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "条款记录",
      "履约计划",
      "验收回款"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E5%90%88%E5%90%8C%E5%B1%A5%E7%BA%A6%E7%AE%A1%E7%90%86%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T011",
    "title": "战略执行管理模板",
    "featureName": "战略执行管理模板",
    "kind": "模板",
    "subtype": "战略管理",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "连接目标、项目集、项目与执行任务。",
    "detailDescription": "战略执行管理模板用于连接目标、项目集、项目与执行任务，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "目标分解",
      "项目组合",
      "执行跟踪"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E6%88%98%E7%95%A5%E6%89%A7%E8%A1%8C%E7%AE%A1%E7%90%86%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "T012",
    "title": "供应商项目模板",
    "featureName": "供应商项目模板",
    "kind": "模板",
    "subtype": "供应链管理",
    "tag": "模板",
    "industry": "互联网",
    "role": "项目经理",
    "industries": [
      "互联网",
      "汽车",
      "制造",
      "零售"
    ],
    "roles": [
      "项目经理",
      "产品经理",
      "运营",
      "高管"
    ],
    "desc": "管理供应商准入、交付、质量与改进。",
    "detailDescription": "供应商项目模板用于管理供应商准入、交付、质量与改进，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "供应商准入",
      "交付跟踪",
      "质量改进"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20template%20cover%20for%20%E4%BE%9B%E5%BA%94%E5%95%86%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF%3A%20a%20realistic%20close-up%20of%20an%20enterprise%20project%20management%20workspace%2C%20structured%20workflow%20board%2C%20task%20cards%2C%20status%20columns%20and%20timeline%2C%20clean%20Chinese%20SaaS%20interface%2C%20light%20neutral%20canvas%2C%20blue%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "templateUrl": ""
  },
  {
    "id": "O001",
    "title": "规模化敏捷",
    "featureName": "规模化敏捷",
    "kind": "解决方案",
    "subtype": "敏捷研发",
    "tag": "解决方案",
    "industry": "汽车",
    "role": "高管",
    "industries": [
      "汽车",
      "制造",
      "金融",
      "互联网"
    ],
    "roles": [
      "高管",
      "项目经理",
      "研发"
    ],
    "desc": "基于 SAFe 框架支持 PI Planning 全流程管理。",
    "detailDescription": "规模化敏捷用于基于 SAFe 框架支持 PI Planning 全流程管理，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "ART 看板",
      "团队看板",
      "依赖报告"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20solution%20cover%20for%20%E8%A7%84%E6%A8%A1%E5%8C%96%E6%95%8F%E6%8D%B7%3A%20a%20wide%20enterprise%20operating%20model%20showing%20connected%20strategy%2C%20project%20portfolio%2C%20milestones%2C%20delivery%20workflow%20and%20management%20dashboard%2C%20architectural%20overview%20blended%20with%20realistic%20software%20UI%2C%20navy%20and%20cyan%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "solutionUrl": ""
  },
  {
    "id": "O002",
    "title": "翼云销LTC解决方案",
    "featureName": "翼云销LTC解决方案",
    "kind": "解决方案",
    "subtype": "LTC管理",
    "tag": "解决方案",
    "industry": "汽车",
    "role": "高管",
    "industries": [
      "汽车",
      "制造",
      "金融",
      "互联网"
    ],
    "roles": [
      "高管",
      "项目经理",
      "研发"
    ],
    "desc": "以 AI 为核心打通线索、商机、签约、交付到回款全流程。",
    "detailDescription": "翼云销LTC解决方案用于以 AI 为核心打通线索、商机、签约、交付到回款全流程，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "客户录入",
      "方案推荐",
      "风险预警"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20solution%20cover%20for%20%E7%BF%BC%E4%BA%91%E9%94%80LTC%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%3A%20a%20wide%20enterprise%20operating%20model%20showing%20connected%20strategy%2C%20project%20portfolio%2C%20milestones%2C%20delivery%20workflow%20and%20management%20dashboard%2C%20architectural%20overview%20blended%20with%20realistic%20software%20UI%2C%20navy%20and%20cyan%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "solutionUrl": ""
  },
  {
    "id": "O003",
    "title": "Zadig DevOps 一体化解决方案",
    "featureName": "Zadig DevOps 一体化解决方案",
    "kind": "解决方案",
    "subtype": "DevOps",
    "tag": "解决方案",
    "industry": "汽车",
    "role": "高管",
    "industries": [
      "汽车",
      "制造",
      "金融",
      "互联网"
    ],
    "roles": [
      "高管",
      "项目经理",
      "研发"
    ],
    "desc": "打通需求、开发、自测、测试到生产发布全流程。",
    "detailDescription": "Zadig DevOps 一体化解决方案用于打通需求、开发、自测、测试到生产发布全流程，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "构建部署",
      "测试审批",
      "状态同步"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20solution%20cover%20for%20Zadig%20DevOps%20%E4%B8%80%E4%BD%93%E5%8C%96%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%3A%20a%20wide%20enterprise%20operating%20model%20showing%20connected%20strategy%2C%20project%20portfolio%2C%20milestones%2C%20delivery%20workflow%20and%20management%20dashboard%2C%20architectural%20overview%20blended%20with%20realistic%20software%20UI%2C%20navy%20and%20cyan%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "草稿",
    "sourceType": "product",
    "solutionUrl": ""
  },
  {
    "id": "O004",
    "title": "ASPICE 汽车软件研发方案",
    "featureName": "ASPICE 汽车软件研发方案",
    "kind": "解决方案",
    "subtype": "汽车研发",
    "tag": "解决方案",
    "industry": "汽车",
    "role": "高管",
    "industries": [
      "汽车",
      "制造",
      "金融",
      "互联网"
    ],
    "roles": [
      "高管",
      "项目经理",
      "研发"
    ],
    "desc": "连接项目、知识库与云文档，支撑汽车软件 V 模型和认证。",
    "detailDescription": "ASPICE 汽车软件研发方案用于连接项目、知识库与云文档，支撑汽车软件 V 模型和认证，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "需求条目化",
      "版本管理",
      "V 模型"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20solution%20cover%20for%20ASPICE%20%E6%B1%BD%E8%BD%A6%E8%BD%AF%E4%BB%B6%E7%A0%94%E5%8F%91%E6%96%B9%E6%A1%88%3A%20a%20wide%20enterprise%20operating%20model%20showing%20connected%20strategy%2C%20project%20portfolio%2C%20milestones%2C%20delivery%20workflow%20and%20management%20dashboard%2C%20architectural%20overview%20blended%20with%20realistic%20software%20UI%2C%20navy%20and%20cyan%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "https://project.feishu.cn/home/developers",
    "exampleScenario": "整车研发跨域协同",
    "exampleScenarioDesc": "基于解决方案搭建车型项目、跨域计划、关键评审与风险闭环，并连接组织级里程碑。",
    "relatedScenarios": [
      "整车研发跨域协同"
    ],
    "contentStatus": "草稿",
    "sourceType": "product",
    "solutionUrl": ""
  },
  {
    "id": "O005",
    "title": "制造业项目协同解决方案",
    "featureName": "制造业项目协同解决方案",
    "kind": "解决方案",
    "subtype": "制造行业",
    "tag": "解决方案",
    "industry": "汽车",
    "role": "高管",
    "industries": [
      "汽车",
      "制造",
      "金融",
      "互联网"
    ],
    "roles": [
      "高管",
      "项目经理",
      "研发"
    ],
    "desc": "管理研发、供应链、质量和交付协同。",
    "detailDescription": "制造业项目协同解决方案用于管理研发、供应链、质量和交付协同，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "研发协同",
      "供应链风险",
      "质量追踪"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20solution%20cover%20for%20%E5%88%B6%E9%80%A0%E4%B8%9A%E9%A1%B9%E7%9B%AE%E5%8D%8F%E5%90%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%3A%20a%20wide%20enterprise%20operating%20model%20showing%20connected%20strategy%2C%20project%20portfolio%2C%20milestones%2C%20delivery%20workflow%20and%20management%20dashboard%2C%20architectural%20overview%20blended%20with%20realistic%20software%20UI%2C%20navy%20and%20cyan%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "solutionUrl": ""
  },
  {
    "id": "O006",
    "title": "金融科技项目治理方案",
    "featureName": "金融科技项目治理方案",
    "kind": "解决方案",
    "subtype": "金融行业",
    "tag": "解决方案",
    "industry": "汽车",
    "role": "高管",
    "industries": [
      "汽车",
      "制造",
      "金融",
      "互联网"
    ],
    "roles": [
      "高管",
      "项目经理",
      "研发"
    ],
    "desc": "加强需求、合规、研发和发布治理。",
    "detailDescription": "金融科技项目治理方案用于加强需求、合规、研发和发布治理，可作为相关最佳实践的实现资产。",
    "capabilities": [
      "需求治理",
      "合规检查",
      "发布审计"
    ],
    "image": "https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=Website%20solution%20cover%20for%20%E9%87%91%E8%9E%8D%E7%A7%91%E6%8A%80%E9%A1%B9%E7%9B%AE%E6%B2%BB%E7%90%86%E6%96%B9%E6%A1%88%3A%20a%20wide%20enterprise%20operating%20model%20showing%20connected%20strategy%2C%20project%20portfolio%2C%20milestones%2C%20delivery%20workflow%20and%20management%20dashboard%2C%20architectural%20overview%20blended%20with%20realistic%20software%20UI%2C%20navy%20and%20cyan%20accents%2C%20no%20readable%20text&image_size=landscape_16_9",
    "icon": "",
    "provider": "飞书项目（模拟）",
    "updatedAt": "",
    "useUrl": "",
    "guideUrl": "",
    "productDocUrl": "",
    "sourceUrl": "",
    "exampleScenario": "",
    "exampleScenarioDesc": "",
    "relatedScenarios": [],
    "contentStatus": "模拟待校准",
    "sourceType": "product",
    "solutionUrl": ""
  }
];
