import { Fragment, useEffect, useRef, useState } from "react";
import { ArrowLeft, Bot, Check, ChevronDown, ChevronRight, Eye, FileInput, FileOutput, GitBranch, Heart, Info, MoreHorizontal, MousePointerClick, PencilLine, Play, Search, Share2, ShieldCheck, Sparkles, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { AppGlyph } from "../components/AppGlyph.jsx";
import { AppIcon } from "../components/AppIcon.jsx";
import { useDemo } from "../context/DemoContext.jsx";
import { supplies } from "../data/mockData.js";

const TYPE_LABELS = {
  ai: "AI 应用",
  plugin: "插件",
  template: "模板",
  solution: "解决方案",
};

const DEFAULT_AI_PERMISSIONS = [
  "读取工作项基础信息",
  "读取已授权的字段内容",
  "将处理结果写回指定位置",
];

function getRequiredConfigFields(item) {
  if (item.configuration?.requiredFields?.length) return item.configuration.requiredFields;

  return [
    { label: "输入内容", value: item.configuration?.input || `选择${item.name}需要处理的工作项内容`, control: "select" },
    { label: "处理要求", value: item.configuration?.processing || `填写${item.name}的处理目标和输出要求`, control: "textarea" },
  ];
}

function getRequiredConfigSummary(item) {
  return getRequiredConfigFields(item).map(({ label }) => `“${label}”`).join("、");
}

function getAiUsageRecipe(item) {
  const nodeInput = (item.configuration?.input || `填写${item.name}处理所需的工作项内容`).replace(/[。；;]+$/, "");
  const nodeOutput = (item.configuration?.output || item.summary).replace(/[。；;]+$/, "");
  const requiredConfigSummary = getRequiredConfigSummary(item);
  const recipes = {
    "AI 节点": {
      preparation: "准备一条包含真实业务内容的测试工作项，并确认当前账号可以查看实例、进入节点和运行 AI 应用。",
      steps: [
        {
            title: "选择实例",
          detail: "进入工作项实例列表，选择一条包含待处理内容的测试实例并打开详情。",
        },
        {
          title: "选择目标节点",
          detail: "在实例流程中找到需要 AI 处理的节点，点击该节点进入节点详情。",
        },
        {
          title: `选择“${item.name}”`,
          detail: `在节点实操区选择“AI 应用”，再从应用列表中选择“${item.name}”。`,
        },
        {
          title: "填写必填配置",
          detail: `依次完成${requiredConfigSummary}；${nodeInput}，并按页面要求确认每一项输入。`,
        },
        {
          title: "运行 AI 应用",
          detail: "检查输入内容和指令无误后，点击“运行”，等待应用完成处理。",
        },
        {
          title: "查看运行结果",
          detail: `在运行结果区确认是否达到预期：${nodeOutput}。如结果不符合预期，调整输入或指令后重新运行。`,
        },
      ],
    },
    "AI 操作": {
      preparation: "准备一条包含真实业务内容的测试工作项，并确认当前空间已具备应用所需权限。",
      steps: [
        { title: "添加到工作项操作", detail: `在需要人工触发的位置添加“${item.name}”操作。` },
        { title: "连接工作项内容", detail: "选择执行操作时允许该应用读取的字段或关联内容。" },
        { title: "保存并试用操作", detail: "保存后，在测试工作项中执行一次并检查生成结果。" },
      ],
    },
    "AI 字段": {
      preparation: "准备一条包含真实业务内容的测试工作项，并确认当前空间已具备应用所需权限。",
      steps: [
        { title: "添加 AI 字段", detail: `在目标工作项类型中添加“${item.name}”字段。` },
        { title: `选择“${item.name}”`, detail: `在 AI 字段应用列表中选择“${item.name}”，进入该应用的专属配置。` },
        { title: "填写必填配置", detail: `依次完成${requiredConfigSummary}，所有带星号的项目都需要填写。` },
        { title: "保存并查看结果", detail: "保存字段配置后，使用一条完整数据生成结果并核对内容。" },
      ],
    },
  };
  const formRecipe = recipes[item.aiForm] || recipes["AI 节点"];

  return {
    preparation: formRecipe.preparation,
    output: item.summary,
    steps: formRecipe.steps,
    checks: [
      ...(item.permissions || DEFAULT_AI_PERMISSIONS).slice(0, 2),
      "使用测试工作项确认生成内容符合预期后，再应用到正式流程。",
    ],
  };
}

function AiUsageVisual({ item, compact = false }) {
  const formClass = item.aiForm === "AI 操作" ? "action" : item.aiForm === "AI 字段" ? "field" : "node";
  return (
    <div className={`ai-usage-visual ai-usage-visual-${formClass}${compact ? " is-compact" : ""}`} aria-label={`${item.aiForm}配置位置示意`}>
      <div className="ai-usage-placement-visual">
        {formClass === "node" && (
          <div className="ai-node-stage">
            <div className="ai-node-stage-head"><span>当前实例</span><strong>测试实例</strong></div>
            <div className="ai-node-canvas">
              <span className="ai-node-placeholder">上一节点</span>
              <i />
              <span className="ai-node-app">
                <AppGlyph item={item} size={20} />
                <span><small>目标节点</small><b>{item.name}</b></span>
              </span>
              <i />
              <span className="ai-node-placeholder">下一节点</span>
            </div>
          </div>
        )}
        {formClass === "action" && (
          <div className="ai-action-canvas">
            <span className="ai-action-work-item"><i /><i /><i /></span>
            <button type="button" tabIndex={-1}><MousePointerClick size={14} />{item.name}</button>
          </div>
        )}
        {formClass === "field" && (
          <div className="ai-field-canvas">
            <span><small>工作项内容</small><i /></span>
            <span className="ai-field-app"><small>{item.name}</small><AppGlyph item={item} size={20} /></span>
          </div>
        )}
      </div>
      {!compact && (
        <div className="ai-usage-dataflow-visual">
          <span><FileInput size={16} /><small>工作项内容</small></span>
          <i />
          <span className="is-app"><AppGlyph item={item} size={22} /><small>{item.name}</small></span>
          <i />
          <span><FileOutput size={16} /><small>生成结果</small></span>
        </div>
      )}
    </div>
  );
}

function HeroVisual({ item }) {
  if (item.coverImage) {
    return <img className="online-detail-cover" src={item.coverImage} alt={`${item.name}封面`} />;
  }

  return (
    <div className={`online-app-cover online-app-cover-${item.type}`}>
      <AppGlyph item={item} size={58} />
      <div><strong>{item.name}</strong><span>{item.summary}</span></div>
    </div>
  );
}

function DetailHero({ item, favorite, onFavorite, onPrimary, onShare }) {
  const isApp = item.type === "ai" || item.type === "plugin";
  const showShare = item.type !== "ai";
  const showFavorite = item.type === "template" || item.type === "solution";
  return (
    <section className="online-detail-hero">
      <div className="online-detail-intro">
        <div className="online-detail-title-row">
          {isApp && <AppGlyph item={item} size={44} className="online-detail-app-icon" />}
          <div>
            <h1>{item.name}</h1>
            <p>{item.summary}</p>
          </div>
        </div>
        {item.type !== "ai" && (
          <div className="online-detail-facts">
            {item.type === "template" && <span><small>使用</small><strong>{item.usageCount?.toLocaleString("zh-CN") || "—"}</strong></span>}
            <span><small>标签</small><b>{item.tags.join("、")}</b></span>
          </div>
        )}
        <div className="online-detail-actions">
          <button type="button" className="primary-button" onClick={onPrimary}>
            {item.type === "ai" && "查看如何使用"}
            {item.type === "plugin" && "安装插件"}
            {item.type === "template" && "使用模板"}
            {item.type === "solution" && "查看完整方案"}
            <ChevronRight size={15} />
          </button>
          {showShare && <button type="button" className="secondary-button" onClick={onShare}><Share2 size={14} />分享</button>}
          {showFavorite && (
            <button type="button" className={`secondary-button${favorite ? " is-active" : ""}`} onClick={onFavorite}>
              <Heart size={14} fill={favorite ? "currentColor" : "none"} />{favorite ? "已收藏" : "收藏"}
            </button>
          )}
        </div>
      </div>
      <HeroVisual item={item} />
    </section>
  );
}

function EditorImage({ item, caption }) {
  if (!item.coverImage) return null;
  return (
    <figure>
      <img src={item.coverImage} alt={caption} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function getAiStepIcons(item) {
  if (item.aiForm === "AI 节点") {
    return [FileInput, GitBranch, Bot, PencilLine, Play, Eye];
  }
  if (item.aiForm === "AI 字段") {
    return [FileOutput, MousePointerClick, Bot, Check];
  }
  return [MousePointerClick, FileInput, Check];
}

function AiArticle({ item, onOpenGuide }) {
  const recipe = getAiUsageRecipe(item);
  const stepIcons = getAiStepIcons(item);
  const stepCount = recipe.steps.length;
  return (
    <>
      <h2>能力介绍</h2>
      <p>{item.fullDescription || item.summary}</p>
      <p>该应用会读取当前工作项中被授权的字段、文本或关联内容，按照预设目标完成处理，并将结果回写到指定位置。实际可读取的数据范围由空间权限和具体配置共同决定。</p>

      <section className="ai-usage-recipe-preview" aria-labelledby="ai-usage-recipe-title">
        <header>
          <div>
            <span><Sparkles size={14} />使用指南 · {stepCount} 步完成</span>
            <h2 id="ai-usage-recipe-title">如何使用</h2>
            <p>{item.aiForm === "AI 节点" ? "从选择实例到查看结果，按顺序完成一次节点实操。" : "按照标准路径完成配置，建议先用测试工作项验证效果。"}</p>
          </div>
          <small>{item.aiForm}</small>
        </header>
        <div className="ai-usage-recipe-main">
          <AiUsageVisual item={item} compact />
          <ol className={`ai-usage-recipe-steps${stepCount > 3 ? " is-six-step" : ""}`}>
            {recipe.steps.map((step, index) => {
              const StepIcon = stepIcons[index];
              return (
                <li key={step.title}>
                  <i><StepIcon size={15} /></i>
                  <span><small>步骤 {index + 1}</small><strong>{step.title}</strong><b>{step.detail}</b></span>
                </li>
              );
            })}
          </ol>
        </div>
        <footer className="ai-usage-recipe-result">
          <div><span>完成后</span><p>{recipe.output}</p></div>
          <button type="button" onClick={onOpenGuide}>查看完整步骤<ChevronRight size={14} /></button>
        </footer>
      </section>

      <h2>典型场景</h2>
      <ul>{(item.scenarios || []).map((scenario) => <li key={scenario}>{scenario}</li>)}</ul>

      <blockquote>AI 生成内容可能存在偏差。涉及关键决策、合规判断或对外发布时，建议保留人工确认。</blockquote>
    </>
  );
}

function MeegoWorkflowScene({ item, converted = false }) {
  const nodeGroups = [
    ["IOS开发", "Android开发", "FE开发"],
    ["IOS测试", "Android测试", "FE测试"],
  ];

  return (
    <div className="ai-real-workflow">
      <div className="ai-real-flow-canvas">
        <div className="ai-real-flow-chain">
          <span className="ai-real-flow-node is-done"><i />UI设计</span>
          <b />
          <span className="ai-real-flow-node is-done"><i />需求详评</span>
          <b />
          <span className="ai-real-flow-node is-done"><i />技术方案评审</span>
          <b />
        </div>
        {nodeGroups.map((group, groupIndex) => (
          <div className="ai-real-flow-stack" key={group[0]}>
            {group.map((name) => {
              const selected = name === "Android测试";
              return (
                <span className={`ai-real-flow-node${selected ? " is-selected" : ""}`} key={name}>
                  <i className={groupIndex === 1 ? "is-waiting" : ""} />
                  {selected && converted && <AppGlyph item={item} size={14} />}
                  {name}
                </span>
              );
            })}
          </div>
        ))}
        <b className="ai-real-flow-release-line" />
        <span className="ai-real-flow-node is-muted"><i />需求发布上线</span>
      </div>
      <section className="ai-real-node-detail">
        <header>
          <div><ChevronDown size={13} /><i /><strong>Android测试</strong><span>进行中</span></div>
          <div>
            {!converted && <button type="button" tabIndex={-1}><Sparkles size={15} />转为 AI 节点</button>}
            {!converted && <button type="button" className="is-primary" tabIndex={-1}>完成</button>}
            <MoreHorizontal size={17} />
          </div>
        </header>
        {converted ? (
          <div className="ai-real-runtime-row">
            <span><Sparkles size={15} /><strong>{item.name}已停止运行</strong></span>
            <div>
              <button type="button" tabIndex={-1}>修改 AI 配置</button>
              <button type="button" className="is-start" tabIndex={-1}><Play size={14} fill="currentColor" />启动</button>
              <MoreHorizontal size={16} />
            </div>
          </div>
        ) : (
          <div className="ai-real-node-fields">
            <span><small>负责人</small><b>肖赫</b></span>
            <span><small>总估分</small><b>待填</b></span>
            <span><small>总排期</small><b>待填</b></span>
          </div>
        )}
      </section>
    </div>
  );
}

function AiNodeGuideScene({ item, stepIndex, recipe }) {
  const appCandidates = [
    { name: item.name, current: true },
    { name: "AI 智能洞察" },
    { name: "AI 智能填单" },
    { name: "AI PRD 质检" },
    { name: "智能体连接器" },
    { name: "AI 生成云文档" },
    { name: "相似工作项查询" },
    { name: "PRD 完整性审核" },
  ].filter((candidate, index, candidates) => candidates.findIndex((entry) => entry.name === candidate.name) === index);
  const outputText = item.configuration?.output || item.summary;
  const requiredFields = getRequiredConfigFields(item);

  if (stepIndex === 0) {
    return (
      <div className="ai-guide-demo ai-real-instance-table">
        <div className="ai-real-table-row is-head">
          <span>需求名称</span><span>需求状态</span><span>当前负责人</span><span>优先级</span><span>业务线</span>
        </div>
        {[
          ["移动端订单管理页面优化", "测试中", "P0", "其他"],
          ["直播课堂教师端页面优化", "收集用户反馈", "P2", "其他"],
          ["AI 内容审核后台申诉处理", "收集用户反馈", "P1", "AI"],
          ["智能风控模型接入征信数据", "需求上线", "P2", "基础建设"],
          ["多语言客服新增越南语支持", "方案设计", "P1", "基础建设"],
        ].map(([name, status, priority, line], index) => (
          <button type="button" className={`ai-real-table-row${index === 2 ? " is-selected" : ""}`} key={name} tabIndex={-1}>
            <span><i>{index + 1}</i><strong>{name}</strong></span>
            <span><b className={`status-${index}`}>{status}</b></span>
            <span><i className="ai-real-avatar">肖</i>肖赫</span>
            <span><b className="ai-real-priority">{priority}</b></span>
            <span><b className="ai-real-line">{line}</b>{index === 2 && <Check size={13} />}</span>
          </button>
        ))}
      </div>
    );
  }

  if (stepIndex === 1) return <MeegoWorkflowScene item={item} />;

  if (stepIndex === 2) {
    return (
      <div className="ai-guide-demo ai-real-market-demo">
        <header><span><Sparkles size={15} />AI 节点市场</span><X size={15} /></header>
        <div className="ai-real-market-tools">
          <label><Search size={14} /><span>搜索</span></label>
          <button type="button" tabIndex={-1}>新建 AI 节点</button>
        </div>
        <div className="ai-real-market-banner"><strong>使用 <b>AI 节点</b><br />流程一键智能化，实现百倍效能</strong><Sparkles size={28} /></div>
        <div className="ai-real-market-grid">
          {appCandidates.map((candidate) => (
            <button type="button" className={candidate.current ? "is-selected" : ""} key={candidate.name} tabIndex={-1}>
              <span className="ai-real-market-icon">
                {candidate.current ? <AppGlyph item={item} size={24} /> : <Bot size={20} />}
              </span>
              <strong>{candidate.name}</strong>
              <small>{candidate.current ? "已选择当前应用" : "嵌入业务流程的智能节点"}</small>
              {candidate.current && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (stepIndex === 3) {
    return (
      <div className="ai-guide-demo ai-real-config-demo">
        <header><strong>修改 AI 配置</strong><X size={15} /></header>
        <div className="ai-real-config-app">
          <AppGlyph item={item} size={28} />
          <div><strong>{item.name}</strong><span>{item.summary}</span></div>
          <button type="button" tabIndex={-1}><Sparkles size={14} />更换 AI 节点</button>
        </div>
        <div className="ai-real-config-fields">
          {requiredFields.map(({ label, value, control }) => (
            <label key={label}>
              <span>{label}<b>*</b><Info size={12} /></span>
              <div className={control === "textarea" ? "is-textarea" : ""}>{value}{control === "select" && <ChevronDown size={14} />}</div>
            </label>
          ))}
          <label className="is-inline">
            <span>生成后为工作项成员授权<Info size={12} /></span>
            <div>全部人员可查看<ChevronDown size={14} /></div>
          </label>
        </div>
        <footer>
          <button type="button" tabIndex={-1}>取消</button>
          <button type="button" className="is-primary" tabIndex={-1}>确定</button>
        </footer>
      </div>
    );
  }

  if (stepIndex === 4) return <MeegoWorkflowScene item={item} converted />;

  return (
    <div className="ai-guide-demo ai-guide-result-demo">
      <div className="ai-guide-result-status"><i><Check size={18} /></i><div><strong>运行完成</strong><span>刚刚 · 用时 4.2 秒</span></div></div>
      <section>
        <header><strong>运行结果</strong><span>已生成</span></header>
        <p>{outputText}</p>
        <div><span><Check size={13} />格式符合要求</span><span><Check size={13} />可写回工作项</span></div>
      </section>
      <small>{recipe.steps[5].detail}</small>
    </div>
  );
}

function AiNodeConfigScene({ item, stepIndex }) {
  const apps = [item.name, "AI 智能洞察", "AI 智能填单", "AI PRD 质检", "AI 生成云文档"];
  const requiredFields = getRequiredConfigFields(item);
  const showConfiguration = stepIndex >= 2;
  const showAppList = stepIndex === 3;
  const showRules = stepIndex === 4;

  return (
    <div className={`ai-admin-demo is-stage-${stepIndex}`}>
      <header>
        <strong><i><Check size={10} /></i>需求</strong>
        <nav>
          <span>基本信息</span><span>字段管理</span><span>页面布局</span><span className="is-active">流程管理</span><span>角色管理</span>
        </nav>
        <X size={14} />
      </header>
      <div className="ai-admin-workspace">
        <main>
          <div className="ai-admin-toolbar">
            <strong>技术性能需求</strong>
            <div><span><Search size={12} />查找</span><span>批量操作</span><span>对齐流程图</span><span>预览</span></div>
          </div>
          <div className="ai-admin-canvas">
            {["需求提出", "需求价值决策", "需求方案设计", "UI设计", "需求详评"].map((name, index) => (
              <Fragment key={name}>
                <span className={`ai-admin-flow-node${index === 3 && stepIndex >= 1 ? " is-selected" : ""}`}><i />{name}</span>
                {index < 4 && <b />}
              </Fragment>
            ))}
          </div>
        </main>
        <aside>
          <div className="ai-admin-node-title"><i />{stepIndex >= 3 && <AppGlyph item={item} size={18} />}<strong>UI设计</strong><Sparkles size={14} /></div>
          <div className="ai-admin-panel-tabs"><span>节点信息</span><span className={stepIndex >= 2 ? "is-active" : ""}>AI 配置</span><span>节点流转</span><span>节点子项</span></div>
          {showConfiguration ? (
            <div className="ai-admin-settings">
              <strong>选择 AI 节点应用</strong>
              <div className={`ai-admin-app-select${stepIndex === 3 ? " is-focused" : ""}`}>
                {stepIndex >= 4 && <AppGlyph item={item} size={18} />}
                <span>{stepIndex >= 4 ? item.name : "选择 AI 节点应用"}</span>
                <ChevronDown size={14} />
              </div>
              {showAppList && (
                <div className="ai-admin-app-list">
                  {apps.map((name, index) => (
                    <span className={index === 0 ? "is-selected" : ""} key={name}>
                      {index === 0 ? <AppGlyph item={item} size={18} /> : <Bot size={15} />}
                      {name}
                      {index === 0 && <Check size={12} />}
                    </span>
                  ))}
                  <span><Sparkles size={15} />更多 AI 节点<ChevronRight size={12} /></span>
                </div>
              )}
              {showRules && (
                <div className="ai-admin-rule-panel">
                  <small>必填配置 · {requiredFields.length} 项</small>
                  <section>
                    <header><strong>{item.name}配置</strong><MoreHorizontal size={14} /></header>
                    {requiredFields.map(({ label, value, control }) => (
                      <label key={label}>
                        <span>{label} <b>*</b><Info size={11} /></span>
                        <div className={control === "textarea" ? "ai-admin-instruction" : ""}>{value}{control === "select" && <ChevronDown size={12} />}</div>
                      </label>
                    ))}
                  </section>
                </div>
              )}
            </div>
          ) : (
            <div className="ai-admin-panel-empty">选择节点后，在“AI 配置”中设置应用与执行规则</div>
          )}
        </aside>
      </div>
    </div>
  );
}

function AiNodeWalkthrough({ item, recipe, stepIcons }) {
  const [guideMode, setGuideMode] = useState("instance");
  const [activeStep, setActiveStep] = useState(0);
  const requiredConfigSummary = getRequiredConfigSummary(item);
  const adminSteps = [
    { title: "进入流程管理", detail: "以空间管理员身份进入目标工作项类型，在顶部选择“流程管理”并打开流程图。" },
    { title: "选择目标节点", detail: "在流程图中选择需要接入 AI 能力的节点，右侧将显示该节点的配置面板。" },
    { title: "打开 AI 配置", detail: "在节点配置面板中切换到“AI 配置”，开始设置该节点使用的 AI 能力。" },
    { title: "选择 AI 节点应用", detail: `展开应用选择器，从列表中选择“${item.name}”；也可以进入 AI 节点市场查看更多应用。` },
    { title: "填写必填项并保存", detail: `完成${requiredConfigSummary}，确认所有必填项有效后保存流程配置。` },
  ];
  const adminIcons = [GitBranch, MousePointerClick, Sparkles, Bot, Check];
  const isAdmin = guideMode === "admin";
  const steps = isAdmin ? adminSteps : recipe.steps;
  const icons = isAdmin ? adminIcons : stepIcons;
  const active = steps[activeStep];

  const switchMode = (mode) => {
    setGuideMode(mode);
    setActiveStep(0);
  };

  return (
    <div className="ai-node-guide-shell">
      <div className="ai-guide-mode-switch" role="tablist" aria-label="使用场景">
        <button type="button" role="tab" aria-selected={!isAdmin} className={!isAdmin ? "is-active" : ""} onClick={() => switchMode("instance")}>
          实例侧使用<span>普通成员 · 6 步</span>
        </button>
        <button type="button" role="tab" aria-selected={isAdmin} className={isAdmin ? "is-active" : ""} onClick={() => switchMode("admin")}>
          配置侧配置<span>空间管理员 · 5 步</span>
        </button>
      </div>
      <div className="ai-node-walkthrough">
        <nav className={`ai-node-step-tabs${isAdmin ? " is-admin" : ""}`} role="tablist" aria-label={isAdmin ? "AI 节点配置步骤" : "AI 节点使用步骤"} aria-orientation="vertical">
          <span>{isAdmin ? "管理员配置步骤" : "实例操作步骤"}</span>
          {steps.map((step, index) => {
            const StepIcon = icons[index];
            return (
              <button
                id={`ai-node-${guideMode}-step-${index}-tab`}
                type="button"
                role="tab"
                aria-selected={activeStep === index}
                aria-controls="ai-node-step-panel"
                className={activeStep === index ? "is-active" : ""}
                onClick={() => setActiveStep(index)}
                key={step.title}
              >
                <i>{activeStep > index ? <Check size={14} /> : index + 1}</i>
                <span><strong>{step.title}</strong><small>{activeStep === index ? "正在查看" : `步骤 ${index + 1}`}</small></span>
                <StepIcon size={15} />
              </button>
            );
          })}
        </nav>
        <section
          id="ai-node-step-panel"
          className="ai-node-step-panel"
          role="tabpanel"
          aria-labelledby={`ai-node-${guideMode}-step-${activeStep}-tab`}
        >
          <header>
            <span>{isAdmin ? "配置侧" : "实例侧"} · 步骤 {activeStep + 1} / {steps.length}</span>
            <h3>{active.title}</h3>
            <p>{active.detail}</p>
          </header>
          {isAdmin
            ? <AiNodeConfigScene item={item} stepIndex={activeStep} />
            : <AiNodeGuideScene item={item} stepIndex={activeStep} recipe={recipe} />}
          <footer>
            <button type="button" disabled={activeStep === 0} onClick={() => setActiveStep((value) => Math.max(0, value - 1))}>
              <ArrowLeft size={14} />上一步
            </button>
            <button type="button" className="is-primary" disabled={activeStep === steps.length - 1} onClick={() => setActiveStep((value) => Math.min(steps.length - 1, value + 1))}>
              下一步<ChevronRight size={14} />
            </button>
          </footer>
        </section>
      </div>
    </div>
  );
}

function AiFieldAdminScene({ item, stepIndex }) {
  const apps = [item.name, "自定义指令", "关键内容提取", "文本优化"];
  const requiredFields = getRequiredConfigFields(item);
  const showAppList = stepIndex === 2;
  const showConfig = stepIndex === 3;
  const fields = [
    ["排期", "日期区间", "schedule"],
    ["需求文档", "URL链接", "wiki"],
    ["需求描述", "富文本", "description"],
    ["业务线", "级联单选", "business"],
    ["完成日期", "日期", "finish_time"],
    ["需求名称", "单行文本", "name"],
  ];

  return (
    <div className={`ai-field-admin-demo is-stage-${stepIndex}`}>
      <header>
        <strong><i><Check size={10} /></i>需求</strong>
        <nav><span>基本信息</span><span className="is-active">字段管理</span><span>页面布局</span><span>流程管理</span><span>角色管理</span></nav>
        <X size={14} />
      </header>
      <div className="ai-field-admin-workspace">
        <main>
          <div className="ai-field-admin-tools"><span><Search size={13} />搜索字段名称、对接标识和 ID</span><button type="button" tabIndex={-1}><Sparkles size={13} />新建 AI 字段</button><button type="button" tabIndex={-1}>新建字段</button></div>
          <div className="ai-field-admin-table">
            <div className="is-head"><span>字段名称</span><span>字段类型</span><span>有效性</span><span>对接标识</span></div>
            {fields.map(([name, type, id], rowIndex) => (
              <div className={rowIndex === 0 && stepIndex >= 1 ? "is-selected" : ""} key={name}>
                <span><strong>{name}</strong></span><span><b>{type}</b></span><span>-</span><span>{id}</span>
              </div>
            ))}
          </div>
        </main>
        <aside>
          <header><strong>排期</strong><small>系统字段</small><MoreHorizontal size={15} /></header>
          <p>字段类型：日期区间</p>
          <section>
            <h4>基础信息配置</h4>
            <label><span>字段名称 <b>*</b></span><div>排期</div></label>
            <label><span>关联的 AI 字段应用</span><div className={showAppList ? "is-focused" : ""}>{showConfig && <AppGlyph item={item} size={18} />}<em>{showConfig ? item.name : "请选择"}</em><ChevronDown size={13} /></div></label>
            {showAppList && (
              <div className="ai-field-admin-app-list">
                {apps.map((name, appIndex) => <span className={appIndex === 0 ? "is-selected" : ""} key={name}>{appIndex === 0 ? <AppGlyph item={item} size={18} /> : <Bot size={14} />}{name}{appIndex === 0 && <Check size={11} />}</span>)}
                <span><Sparkles size={14} />AI 字段应用市场<ChevronRight size={12} /></span>
              </div>
            )}
            {showConfig && (
              <div className="ai-field-admin-ai-config">
                <label><i /><span>启用 AI 字段自动计算</span></label>
                <h4><b>AI</b>{item.name}配置</h4>
                {requiredFields.map(({ label, value, control }) => (
                  <div key={label}>
                    <span>{label} <b>*</b></span>
                    <em className={control === "textarea" ? "is-textarea" : ""}>{value}{control === "select" && <ChevronDown size={12} />}</em>
                  </div>
                ))}
                <button type="button" tabIndex={-1}>保存字段配置</button>
              </div>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}

function AiFieldInstanceScene({ item, stepIndex }) {
  const rows = [
    ["数聚-采购的成本问题", "2026-08-18", "P2", "使用问题", "反馈关闭"],
    ["云启-传感器响应异常", "2026-08-18", "P2", "使用问题", "确认反馈"],
    ["自动化功能失效", "2026-08-18", "P2", "bug", "bug上线"],
    ["星途-希望在多语言", "2026-08-18", "P1", "需求建议", "需求进展"],
    ["智联-在线文档问题", "2026-08-18", "P1", "需求建议", "PM评估"],
  ];
  const apps = [item.name, "停滞风险预警", "价值评估", "延期风险判断", "文本优化", "分类打标"];
  const requiredFields = getRequiredConfigFields(item);
  const showMenu = stepIndex === 2;
  const showEditor = stepIndex === 3;

  return (
    <div className={`ai-field-instance-demo is-stage-${stepIndex}`}>
      <header><strong>反馈进展跟踪</strong><span>条件视图</span><div>另存为　分享　···</div></header>
      <div className="ai-field-instance-tools"><span>筛选</span><span>排序 · 创建时间</span><span>分组 · 优先级</span><span>设置颜色</span><span><Search size={12} />查找</span></div>
      <div className="ai-field-instance-table">
        <div className="is-head"><span>名称</span><span>创建时间</span><span>优先级</span><span>反馈类型</span><span>状态</span><button type="button" className={stepIndex >= 1 ? "is-highlighted" : ""} tabIndex={-1}>+</button></div>
        <strong className="ai-field-group-label">P2　<small>共 5 个</small></strong>
        {rows.map(([name, date, priority, type, status]) => <div key={name}><span>{name}</span><span>{date}</span><span><b>{priority}</b></span><span><b>{type}</b></span><span><b>{status}</b></span></div>)}
      </div>
      {showMenu && (
        <div className="ai-field-instance-menu">
          <strong>添加基础表格列</strong>
          <small>添加 AI 字段应用</small>
          {apps.map((name, appIndex) => <span className={appIndex === 0 ? "is-selected" : ""} key={name}>{appIndex === 0 ? <AppGlyph item={item} size={18} /> : <Bot size={14} />}{name}{appIndex === 0 && <Check size={11} />}</span>)}
          <span><Sparkles size={14} />AI 字段应用市场<ChevronRight size={12} /></span>
        </div>
      )}
      {showEditor && (
        <aside className="ai-field-instance-editor">
          <header><AppGlyph item={item} size={22} /><strong>{item.name}编辑列</strong><X size={14} /></header>
          <label><span>表格列名称 <Info size={11} /></span><div>{item.name}</div></label>
          <button type="button" tabIndex={-1}>更多设置<ChevronRight size={12} /></button>
          <section>
            <h4><b>AI</b>{item.name}配置</h4>
            {requiredFields.map(({ label, value, control }) => (
              <label key={label}>
                <span>{label} <b>*</b></span>
                <div className={control === "textarea" ? "is-textarea" : ""}>{value}{control === "select" && <ChevronDown size={12} />}</div>
              </label>
            ))}
          </section>
          <button type="button" className="is-primary" tabIndex={-1}>生成结果</button>
        </aside>
      )}
    </div>
  );
}

function AiFieldWalkthrough({ item }) {
  const [guideMode, setGuideMode] = useState("admin");
  const [activeStep, setActiveStep] = useState(0);
  const requiredConfigSummary = getRequiredConfigSummary(item);
  const adminSteps = [
    { title: "进入字段管理", detail: "以空间管理员身份进入目标工作项类型，在顶部选择“字段管理”。" },
    { title: "选择或新建字段", detail: "选择需要接入 AI 的字段，或点击“新建 AI 字段”创建新字段。" },
    { title: "关联 AI 字段应用", detail: `展开“关联的 AI 字段应用”，从列表中选择“${item.name}”。` },
    { title: "填写必填项并保存", detail: `完成${requiredConfigSummary}，确认带星号的项目均已填写后保存字段配置。` },
  ];
  const instanceSteps = [
    { title: "打开表格视图", detail: "进入工作项实例的表格视图，定位需要新增 AI 字段的列位置。" },
    { title: "添加 AI 字段列", detail: "点击表头中的新增列入口，打开字段类型与 AI 字段应用菜单。" },
    { title: "选择 AI 字段应用", detail: `从列表中选择“${item.name}”，创建对应的 AI 字段列。` },
    { title: "配置并生成结果", detail: `填写表格列名称，并完成${requiredConfigSummary}；生成后核对字段结果。` },
  ];
  const icons = [FileOutput, MousePointerClick, Bot, Check];
  const isAdmin = guideMode === "admin";
  const steps = isAdmin ? adminSteps : instanceSteps;
  const active = steps[activeStep];
  const switchMode = (mode) => { setGuideMode(mode); setActiveStep(0); };

  return (
    <div className="ai-node-guide-shell ai-field-guide-shell">
      <div className="ai-guide-mode-switch" role="tablist" aria-label="AI 字段使用场景">
        <button type="button" role="tab" aria-selected={isAdmin} className={isAdmin ? "is-active" : ""} onClick={() => switchMode("admin")}>配置侧设置<span>空间管理员 · 4 步</span></button>
        <button type="button" role="tab" aria-selected={!isAdmin} className={!isAdmin ? "is-active" : ""} onClick={() => switchMode("instance")}>实例侧添加<span>表格使用者 · 4 步</span></button>
      </div>
      <div className="ai-node-walkthrough">
        <nav className="ai-node-step-tabs is-four-step" role="tablist" aria-label={isAdmin ? "AI 字段配置步骤" : "AI 字段实例步骤"} aria-orientation="vertical">
          <span>{isAdmin ? "管理员配置步骤" : "实例添加步骤"}</span>
          {steps.map((step, stepIndex) => {
            const StepIcon = icons[stepIndex];
            return <button id={`ai-field-${guideMode}-step-${stepIndex}-tab`} type="button" role="tab" aria-selected={activeStep === stepIndex} aria-controls="ai-field-step-panel" className={activeStep === stepIndex ? "is-active" : ""} onClick={() => setActiveStep(stepIndex)} key={step.title}><i>{activeStep > stepIndex ? <Check size={14} /> : stepIndex + 1}</i><span><strong>{step.title}</strong><small>{activeStep === stepIndex ? "正在查看" : `步骤 ${stepIndex + 1}`}</small></span><StepIcon size={15} /></button>;
          })}
        </nav>
        <section id="ai-field-step-panel" className="ai-node-step-panel" role="tabpanel" aria-labelledby={`ai-field-${guideMode}-step-${activeStep}-tab`}>
          <header><span>{isAdmin ? "配置侧" : "实例侧"} · 步骤 {activeStep + 1} / 4</span><h3>{active.title}</h3><p>{active.detail}</p></header>
          {isAdmin ? <AiFieldAdminScene item={item} stepIndex={activeStep} /> : <AiFieldInstanceScene item={item} stepIndex={activeStep} />}
          <footer><button type="button" disabled={activeStep === 0} onClick={() => setActiveStep((value) => Math.max(0, value - 1))}><ArrowLeft size={14} />上一步</button><button type="button" className="is-primary" disabled={activeStep === 3} onClick={() => setActiveStep((value) => Math.min(3, value + 1))}>下一步<ChevronRight size={14} /></button></footer>
        </section>
      </div>
    </div>
  );
}

function AiConfigurationDialog({ item, onClose }) {
  const recipe = getAiUsageRecipe(item);
  const stepIcons = getAiStepIcons(item);
  const stepCount = recipe.steps.length;
  const dialogRef = useRef(null);
  const isInteractiveGuide = item.aiForm === "AI 节点" || item.aiForm === "AI 字段";

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  return (
    <div className="ai-usage-dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        ref={dialogRef}
        className={`ai-usage-dialog${isInteractiveGuide ? " is-node-walkthrough" : ""}`}
        role="dialog"
        tabIndex={-1}
        aria-modal="true"
        aria-labelledby="ai-configuration-dialog-title"
        aria-describedby="ai-configuration-dialog-description"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header>
          <div className="ai-usage-dialog-title">
            <AppGlyph item={item} size={40} />
            <div>
              <span className="ai-usage-dialog-source">{item.aiForm} · 使用指南</span>
              <h2 id="ai-configuration-dialog-title">{item.name}</h2>
              <p id="ai-configuration-dialog-description">
                {item.aiForm === "AI 节点"
                  ? "覆盖实例侧使用与管理员配置两条路径。"
                  : item.aiForm === "AI 字段"
                    ? "覆盖配置侧设置与实例侧添加两条路径。"
                    : `${stepCount} 步完成配置，建议先使用测试数据验证。`}
              </p>
            </div>
          </div>
          <button type="button" aria-label="关闭使用指引" onClick={onClose}><X size={18} /></button>
        </header>
        {item.aiForm === "AI 节点" ? (
          <AiNodeWalkthrough item={item} recipe={recipe} stepIcons={stepIcons} />
        ) : item.aiForm === "AI 字段" ? (
          <AiFieldWalkthrough item={item} />
        ) : (
          <div className="ai-usage-dialog-body">
            <aside className="ai-usage-dialog-scene">
              <span>配置位置</span>
              <AiUsageVisual item={item} compact />
              <div className="ai-usage-dialog-outcome">
                <Sparkles size={16} />
                <div><small>完成后</small><p>{recipe.output}</p></div>
              </div>
            </aside>
            <div className="ai-usage-dialog-guide">
              <div className="ai-usage-dialog-preparation">
                <FileInput size={16} />
                <div><strong>开始前</strong><p>{recipe.preparation}</p></div>
              </div>
              <ol>
                {recipe.steps.map((step, index) => {
                  const StepIcon = stepIcons[index];
                  return (
                    <li key={step.title}>
                      <i><StepIcon size={16} /></i>
                      <div><small>步骤 {index + 1}</small><strong>{step.title}</strong><span>{step.detail}</span></div>
                    </li>
                  );
                })}
              </ol>
              <section className="ai-usage-dialog-checks">
                <strong>发布前确认</strong>
                <ul>{recipe.checks.map((check) => <li key={check}><Check size={14} />{check}</li>)}</ul>
              </section>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function AiPermissions({ item }) {
  const permissions = item.permissions || DEFAULT_AI_PERMISSIONS;
  return (
    <>
      <h2>权限说明</h2>
      <p>以下权限仅对应当前{item.aiForm}应用，不与其他类型的同名应用合并计算。</p>
      <div className="ai-permission-groups">
        <section className="ai-permission-group">
          <div className="ai-permission-group-heading">
            <strong>应用权限</strong>
            <span>{item.aiForm}</span>
          </div>
          <ul>
            {permissions.map((permission) => (
              <li key={permission}><ShieldCheck size={16} />{permission}</li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

function AiDetailTabs({ activeTab, onChange }) {
  const tabs = [
    { id: "overview", label: "概述" },
    { id: "permissions", label: "权限" },
  ];
  return (
    <div className="online-detail-tabs" role="tablist" aria-label="AI 应用详情">
      {tabs.map((tab) => (
        <button
          id={`ai-${tab.id}-tab`}
          key={tab.id}
          type="button"
          role="tab"
          aria-controls={`ai-${tab.id}-panel`}
          aria-selected={activeTab === tab.id}
          className={activeTab === tab.id ? "is-active" : ""}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function PluginArticle({ item }) {
  const isGitLab = item.name === "GitLab";
  return (
    <>
      <h2>功能介绍</h2>
      <p>{item.summary}</p>
      {isGitLab ? (
        <>
          <p>通过简单的安装和配置，研发同学可以将 GitLab 的 Branch、Commit、Merge Request 和飞书项目工作项关联，并通过 Merge Request 状态变化自动流转节点或状态。</p>
          <ul>
            <li>支持 Branch、Commit 和 Merge Request 关联。</li>
            <li>支持所有飞书项目工作项类型。</li>
            <li>支持只关联、自动流转和必填卡点等模式。</li>
            <li>支持按仓库配置不同节点或状态的流转规则。</li>
          </ul>
        </>
      ) : (
        <ul>
          <li>在飞书项目原有工作流和工作项页面中提供扩展能力。</li>
          <li>适用于{item.tags.slice(0, 2).join("、")}等业务场景。</li>
          <li>具体能力和可配置范围以插件安装页为准。</li>
        </ul>
      )}

      <h2>安装与配置</h2>
      <p>插件由空间管理员安装。进入空间配置，在插件管理中添加插件，并按照页面指引完成授权和业务配置。</p>
      <ol>
        <li><strong>安装插件。</strong>由空间管理员在目标空间中添加插件。</li>
        <li><strong>确认权限。</strong>检查插件读取、写入和外部系统连接范围。</li>
        <li><strong>完成配置。</strong>{isGitLab ? "选择仓库、事件以及需要流转的节点或状态。" : "连接目标字段、页面或外部系统。"}</li>
        <li><strong>验证并启用。</strong>先使用测试工作项验证结果，再用于正式流程。</li>
      </ol>

      {isGitLab && (
        <>
          <h2>使用方式</h2>
          <h3>只关联，不自动流转</h3>
          <p>在 Branch、Commit 或 Merge Request 中填写工作项 ID，即可在工作项详情页查看关联的代码信息。</p>
          <h3>关联并自动流转</h3>
          <p>配置流转规则后，当 Merge Request 完成时，插件会根据仓库和事件规则自动流转对应节点或状态。</p>
        </>
      )}

      <h2>权限说明</h2>
      <p>插件只在已安装的空间内生效。实际权限以线上安装页展示为准，安装前请确认数据访问范围以及外部服务的连接方式。</p>
    </>
  );
}

function TemplateArticle({ item }) {
  const isSolution = item.type === "solution";
  const modules = item.includes || item.coverage || [];
  const isSoftware = item.id === "template-software-dev";
  const background = isSoftware
    ? "随着互联网行业规模不断增长，产品快速迭代和信息速率提升给团队协作带来新的挑战。需求管理混乱、代码管理复杂、协作流程冗长、信息同步滞后等问题，会导致需求口径不一、缺陷追踪断档、迭代范围频繁变更和版本发布信息不同步。"
    : item.background || item.fullDescription || item.summary;

  return (
    <>
      <h2>{isSolution ? "方案背景" : "业务背景"}</h2>
      <p>{background}</p>
      <p>{isSolution ? `${item.name}围绕${modules.join("、")}建立完整的业务闭环，通过统一流程、责任分工和数据视图减少协作断点。` : `${item.name}通过完整空间与工作项配置搭建工作流，让流程驱动协作，让过程数据能够沉淀和复盘。`}</p>
      <EditorImage item={item} caption={`${item.name}${isSolution ? "方案" : "模板"}概览`} />

      <h2>{isSolution ? "方案亮点" : "模板亮点"}</h2>
      {modules.map((module, index) => (
        <Fragment key={module}>
          <h3>亮点{index + 1}：{module}</h3>
          <p>围绕{module}建立标准结构、责任分工和可追踪的数据视图，帮助团队在统一流程中推进工作并及时发现问题。</p>
        </Fragment>
      ))}

      <h2>使用介绍</h2>
      <h3>{isSolution ? "确认业务范围" : "复制模板并选择目标空间"}</h3>
      <p>{isSolution ? "确认组织需要覆盖的业务环节、系统边界和参与角色，再结合现有流程设计落地范围。" : "使用模板后会复制工作项、流程和视图配置。建议先在测试空间熟悉结构，再用于正式项目。"}</p>
      <h3>根据团队实际情况调整配置</h3>
      <p>结合角色分工、字段口径和流程规则调整默认配置，保留真正需要的流程，减少无效步骤。</p>
      <h3>导入或创建首批数据</h3>
      <p>使用示例数据完成验证后，再迁移真实项目或创建首个工作项，并在运行过程中持续复盘。</p>
    </>
  );
}

function DetailAside({ item, onHelp }) {
  const modules = item.includes || item.coverage || [];
  return (
    <aside className="online-detail-aside">
      <h2>{TYPE_LABELS[item.type]}信息</h2>
      <dl>
        <div><dt>{item.type === "ai" ? "创作者" : item.type === "plugin" ? "开发者" : "维护方"}</dt><dd>{item.developer || item.provider}</dd></div>
        <div><dt>更新时间</dt><dd>2026-08-13</dd></div>
        <div><dt>语言</dt><dd>简体中文</dd></div>
        {item.type === "ai" && <div><dt>应用类型</dt><dd>{item.aiForm}</dd></div>}
        {item.type === "plugin" && <div><dt>价格</dt><dd>{item.isPaid ? "付费" : "免费"}</dd></div>}
      </dl>
      {item.type === "ai" && (
        <section>
          <h3>帮助与支持</h3>
          <button type="button" className="online-detail-help-link" onClick={onHelp}>查看帮助文档</button>
        </section>
      )}
      {modules.length > 0 && (
        <section>
          <h3>{item.type === "solution" ? "方案组成" : "配置与数据"}</h3>
          {modules.map((value) => (
            <span key={value}><AppIcon name="check" size={14} />{value}</span>
          ))}
        </section>
      )}
    </aside>
  );
}

export function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lastDiscoverLocation, notify } = useDemo();
  const [favorite, setFavorite] = useState(false);
  const [activeDetailTab, setActiveDetailTab] = useState("overview");
  const [usageGuideOpen, setUsageGuideOpen] = useState(false);
  const usageGuideReturnFocus = useRef(null);
  const item = supplies.find((candidate) => candidate.id === id)
    || supplies.find((candidate) => candidate.baseId === id);
  const back = () => navigate(sessionStorage.getItem("discover-return") || lastDiscoverLocation || "/discover");

  useEffect(() => {
    if (!usageGuideOpen) {
      usageGuideReturnFocus.current?.focus();
      return undefined;
    }
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setUsageGuideOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [usageGuideOpen]);

  if (!item) {
    return (
      <main className="page online-detail-page">
        <button type="button" className="online-detail-back" onClick={back}><ArrowLeft size={15} />返回发现</button>
        <div className="not-found-state"><div className="not-found-code">404</div><h1>该内容已下架或无法访问</h1><p>内容可能已停止发布、超出当前租户可用范围，或链接已经失效。</p></div>
      </main>
    );
  }

  const openUsageGuide = (event) => {
    usageGuideReturnFocus.current = event?.currentTarget || document.activeElement;
    setUsageGuideOpen(true);
  };

  const primaryAction = (event) => {
    if (item.type === "ai") openUsageGuide(event);
    else notify(item.type === "plugin" ? "已模拟进入插件安装页" : item.type === "template" ? "已模拟打开模板使用流程" : "已模拟打开完整方案");
  };

  return (
    <main className={`page online-detail-page online-detail-page-${item.type}`}>
      <button type="button" className="online-detail-back" onClick={back}><ArrowLeft size={15} />返回发现</button>
      <DetailHero
        item={item}
        favorite={favorite}
        onFavorite={() => setFavorite((value) => !value)}
        onShare={() => notify("分享链接已复制")}
        onPrimary={primaryAction}
      />
      <div className="online-detail-content">
        <article className="online-editor-body">
          {item.type === "ai" && (
            <>
              <AiDetailTabs activeTab={activeDetailTab} onChange={setActiveDetailTab} />
              <div
                id={`ai-${activeDetailTab}-panel`}
                className="online-detail-tab-panel"
                role="tabpanel"
                aria-labelledby={`ai-${activeDetailTab}-tab`}
              >
                {activeDetailTab === "overview" && <AiArticle item={item} onOpenGuide={openUsageGuide} />}
                {activeDetailTab === "permissions" && <AiPermissions item={item} />}
              </div>
            </>
          )}
          {item.type === "plugin" && <PluginArticle item={item} />}
          {(item.type === "template" || item.type === "solution") && <TemplateArticle item={item} />}
        </article>
        <DetailAside item={item} onHelp={() => notify("已模拟打开帮助文档")} />
      </div>
      {item.type === "ai" && usageGuideOpen && (
        <AiConfigurationDialog item={item} onClose={() => setUsageGuideOpen(false)} />
      )}
    </main>
  );
}
