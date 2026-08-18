import { Fragment, useEffect, useState } from "react";
import { ArrowLeft, ChevronRight, Heart, Share2, ShieldCheck, X } from "lucide-react";
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
            {item.type === "ai" && "查看配置说明"}
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

function AiArticle({ item }) {
  return (
    <>
      <h2>能力介绍</h2>
      <p>{item.fullDescription || item.summary}</p>
      <p>该应用会读取当前工作项中被授权的字段、文本或关联内容，按照预设目标完成处理，并将结果回写到指定位置。实际可读取的数据范围由空间权限和具体配置共同决定。</p>

      <h2>典型场景</h2>
      <ul>{(item.scenarios || []).map((scenario) => <li key={scenario}>{scenario}</li>)}</ul>

      <blockquote>AI 生成内容可能存在偏差。涉及关键决策、合规判断或对外发布时，建议保留人工确认。</blockquote>
    </>
  );
}

function AiConfigurationDialog({ item, onClose }) {
  const configuration = item.configuration;
  return (
    <div className="ai-usage-dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="ai-usage-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-configuration-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <h2 id="ai-configuration-dialog-title">{item.name}配置说明</h2>
            <p>以下内容是该{item.aiForm}应用的专属配置，不是通用的节点或字段创建教程。</p>
          </div>
          <button type="button" aria-label="关闭使用指引" onClick={onClose}><X size={18} /></button>
        </header>
        <ol>
          <li><strong>输入内容</strong><span>{configuration.input}</span></li>
          <li><strong>处理要求</strong><span>{configuration.processing}</span></li>
          <li><strong>输出结果</strong><span>{configuration.output}</span></li>
          <li><strong>配置示例</strong><span>{configuration.example}</span></li>
        </ol>
        <p className="ai-usage-dialog-note">如何新增 AI 节点、AI 字段或 AI 操作属于平台通用帮助，不在单个应用详情中重复展示。</p>
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
  const item = supplies.find((candidate) => candidate.id === id)
    || supplies.find((candidate) => candidate.baseId === id);
  const back = () => navigate(sessionStorage.getItem("discover-return") || lastDiscoverLocation || "/discover");

  useEffect(() => {
    if (!usageGuideOpen) return undefined;
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

  const primaryAction = () => {
    if (item.type === "ai") {
      setUsageGuideOpen(true);
    }
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
                {activeDetailTab === "overview" && <AiArticle item={item} />}
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
