import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./flow-preview.css";
import { products, scenarios } from "./content-data.js";

const isSceneOnlyVariant = new URLSearchParams(window.location.search).get("view") === "scene-only";
const tabs = isSceneOnlyVariant
  ? ["好方法", "新场景"]
  : ["推荐", "AI 应用", "插件", "模板", "解决方案"];
const scenarioGroups = {
  "好方法": ["AI 应用", "插件", "轻应用"],
  "新场景": ["模板", "解决方案"],
};
const groupDescriptions = {
  "好方法": "从具体问题出发，找到可以直接使用、配置或快速复刻的工作方法。",
  "新场景": "参考成熟模板与行业方案，探索可以落地的新业务和新管理模式。",
};
const workGoals = [
  "信息提取与补全",
  "内容撰写与总结",
  "计划拆解与协同",
  "分类分派与流转",
  "质量检查与审核",
  "分析评估与预警",
];
const industries = ["互联网", "汽车", "消费电子", "制造", "金融", "游戏", "教育", "医疗", "零售", "能源"];
const roles = ["产品经理", "项目经理", "研发", "测试", "设计", "运营", "销售", "高管"];

function formatAudience(values, fallback) {
  return values?.length ? values.join("、") : fallback;
}

/* ===== 图标 ===== */

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" stroke="none">
      <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11-7.36a1 1 0 0 0 0-1.72l-11-7.36A1 1 0 0 0 8 5.14z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.7 3.7 5.8a.5.5 0 0 1 .3.5v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a.5.5 0 0 1 .3-.5A7 7 0 0 0 12 2z" />
      <path d="M10 21h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/* ===== 弹窗 ===== */

function getDeliveryConfig(item, mode) {
  if (item.kind === "AI 应用") {
    if (mode === "catalog") {
      return {
        eyebrow: "产品配置",
        title: "能力已封装在 AI 应用中",
        description: "提示词与执行逻辑已经封装到产品能力中。使用时只需按照配置说明选择触发位置、输入字段和输出字段。",
        assetLabel: "查看配置说明",
        asset: item.guideUrl,
        missingLabel: "配置说明待补充",
      };
    }
    return {
      eyebrow: "最佳实践素材",
      title: "先阅读，再决定是否使用",
      description: "下方展示完整参考提示词。确认符合需求后，可复制并结合团队字段、流程规则和输出格式继续修改。",
      previewType: "prompt",
      assetLabel: "复制参考提示词",
      asset: item.prompt,
      missingLabel: "参考提示词待补充",
      copyText: item.prompt,
      actionLabel: "查看配置指引",
      action: item.guideUrl,
    };
  }
  if (item.kind === "插件") {
    return {
      eyebrow: "复刻引导",
      title: "先评估 PRD，再决定是否复刻",
      description: "页面先展示场景 PRD 概览。确认范围符合需求后，可下载完整 PRD，交给 CodeAM 或团队自己的开发工具。",
      previewType: "prd",
      assetLabel: "下载完整 PRD",
      asset: item.prdContent || item.prdUrl,
      missingLabel: "PRD 待补充",
      actionLabel: "使用 CodeAM",
      action: item.codeamUrl,
    };
  }
  if (item.kind === "轻应用") {
    return {
      eyebrow: "搭建引导",
      title: "按照说明搭建轻应用",
      description: "根据搭建说明配置页面、数据源与权限，在自己的业务空间中完成发布。",
      assetLabel: "查看搭建说明",
      asset: item.guideUrl,
      missingLabel: "搭建说明待补充",
    };
  }
  if (item.kind === "模板") {
    return {
      eyebrow: "直接使用",
      title: "使用这套模板",
      description: "进入模板详情确认流程与字段，复制到自己的工作空间后按团队需要调整。",
      assetLabel: "使用模板",
      asset: item.templateUrl,
      missingLabel: "模板链接待补充",
    };
  }
  return {
    eyebrow: "了解方案",
    title: "查看完整解决方案",
    description: "进入解决方案详情，了解适用范围、实施路径与交付方式。",
    assetLabel: "查看解决方案",
    asset: item.solutionUrl,
    missingLabel: "解决方案链接待补充",
  };
}

function PrdDocument({ content, item }) {
  if (!content) {
    return (
      <dl>
        <div><dt>目标</dt><dd>{item.problem || item.desc}</dd></div>
        <div><dt>核心要求</dt><dd>{item.scenario || item.implementationSummary}</dd></div>
        {item.steps?.length > 0 && (
          <div>
            <dt>实现步骤</dt>
            <dd>{item.steps.map((step, index) => <span key={step}>{index + 1}. {step}</span>)}</dd>
          </div>
        )}
        {item.expectedOutput && <div><dt>验收产出</dt><dd>{item.expectedOutput}</dd></div>}
      </dl>
    );
  }

  const sections = content
    .split(/\n(?=## )/)
    .map((section) => section.trim())
    .filter((section) => section.startsWith("## "));

  return (
    <div className="prd-document">
      {sections.map((section) => {
        const [heading, ...body] = section.split("\n");
        return (
          <section key={heading}>
            <h4>{heading.replace(/^##\s+/, "")}</h4>
            <div>
              {body.filter(Boolean).map((line, index) => {
                if (line.startsWith("### ")) return <h5 key={`${line}-${index}`}>{line.slice(4)}</h5>;
                if (line.startsWith("- ")) return <p className="prd-bullet" key={`${line}-${index}`}>{line.slice(2)}</p>;
                if (/^\d+\.\s/.test(line)) return <p className="prd-step" key={`${line}-${index}`}>{line}</p>;
                return <p key={`${line}-${index}`}>{line}</p>;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function DeliveryPreview({ item, delivery, onAction }) {
  if (delivery.previewType === "prompt") {
    return (
      <section className="delivery-preview delivery-prompt">
        <header>
          <div>
            <span>REFERENCE PROMPT</span>
            <strong>参考提示词</strong>
          </div>
        </header>
        <pre>{item.prompt || "参考提示词待补充"}</pre>
        <footer>
          <button type="button" className={!delivery.asset ? "is-missing" : ""} onClick={onAction}>
            <CopyIcon />
            {delivery.assetLabel}
          </button>
        </footer>
      </section>
    );
  }

  if (delivery.previewType === "prd") {
    return (
      <section className="delivery-preview delivery-prd">
        <header>
          <div>
            <span>PRD OVERVIEW</span>
            <strong>场景 PRD 概览</strong>
          </div>
        </header>
        <PrdDocument content={item.prdContent} item={item} />
        <footer>
          <button type="button" className={!delivery.asset ? "is-missing" : ""} onClick={onAction}>
            <CodeIcon />
            {delivery.assetLabel}
          </button>
        </footer>
      </section>
    );
  }

  return null;
}

function DetailModal({ detail, onClose, onNotify }) {
  const item = detail?.item;
  const mode = detail?.mode || "scenario";
  useEffect(() => {
    if (!item) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [item, onClose]);

  if (!item) return null;
  const isAI = item.kind === "AI 应用";
  const hasCapabilities = item.capabilities?.length > 0;
  const hasHighlights = item.highlights?.length > 0;
  const isCatalog = mode === "catalog";
  const delivery = getDeliveryConfig(item, mode);
  const displayTitle = isCatalog ? (item.featureName || item.title) : item.title;
  const industriesText = formatAudience(item.industries, item.industry);
  const rolesText = formatAudience(item.roles, item.role);
  const exampleScenario = item.exampleScenario || item.title;
  const exampleScenarioDesc = item.exampleScenarioDesc || item.scenario || item.desc;
  const showRoleContext = !(isSceneOnlyVariant && ["模板", "解决方案"].includes(item.kind));
  const showUsageMethod = !["模板", "解决方案"].includes(item.kind);
  const handleAsset = async () => {
    if (!delivery.asset) {
      onNotify(delivery.missingLabel);
      return;
    }
    if (delivery.copyText) {
      await navigator.clipboard.writeText(delivery.copyText);
      onNotify("参考提示词已复制");
      return;
    }
    if (delivery.previewType === "prd" && item.prdContent) {
      const blob = new Blob([item.prdContent], { type: "text/markdown;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${item.title}-PRD.md`;
      anchor.click();
      URL.revokeObjectURL(url);
      onNotify("PRD 已下载");
      return;
    }
    window.open(delivery.asset, "_blank", "noopener,noreferrer");
  };

  return createPortal(
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section className={`detail-modal ${isCatalog ? "is-catalog-detail" : "is-scenario-detail"}`} role="dialog" aria-modal="true" aria-labelledby="detail-title" onMouseDown={(e) => e.stopPropagation()}>
        <header className="modal-topbar">
          <div className="modal-breadcrumb">
            <span>发现</span>
            <span>/</span>
            <strong>{isCatalog ? `${item.kind}目录` : "场景方案"}</strong>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="关闭详情">
            <CloseIcon />
          </button>
        </header>

        <div className="modal-scroll">
          {isCatalog ? (
            <>
              <div className="product-detail-hero">
                <div className="product-identity">
                  <div className="product-identity-row">
                    <span className="product-identity-icon" aria-hidden="true">✦</span>
                    <div>
                      <div className="product-title-line">
                        <h2 id="detail-title">{displayTitle}</h2>
                        <span>{item.kind}</span>
                      </div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`product-primary-cta${delivery.asset ? "" : " is-missing"}`}
                    onClick={handleAsset}
                  >
                    {delivery.assetLabel}
                  </button>
                  {!delivery.asset && <span className="product-missing-note">{delivery.missingLabel}</span>}
                </div>
                <div className="product-detail-preview">
                  {isAI ? (
                    <>
                      <span className="product-preview-label">✦ {displayTitle}</span>
                      <strong>{item.capabilities?.[0] || displayTitle}</strong>
                      <span>覆盖场景：{exampleScenario}</span>
                    </>
                  ) : (
                    <>
                      <img src={item.image} alt={displayTitle} loading="lazy" />
                      <span className="product-preview-caption">{displayTitle}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="modal-tabs product-tabs" aria-label="产品详情栏目">
                <span className="is-active">概述</span>
                <span>适用场景</span>
              </div>

              <div className="product-detail-body">
                <div className="product-overview">
                  <h3>产品能力</h3>
                  <p>{item.detailDescription || item.desc}</p>
                  {(hasCapabilities || hasHighlights) && (
                    <ul className="product-capability-list">
                      {(hasCapabilities ? item.capabilities : item.highlights).map((value) => (
                        <li key={value}><CheckIcon /><span>{value}</span></li>
                      ))}
                    </ul>
                  )}
                  <div className="product-scene-block">
                    <span>典型使用场景</span>
                    <strong>{exampleScenario}</strong>
                    <p>{exampleScenarioDesc}</p>
                  </div>
                </div>
                <aside className="product-basic-info">
                  <h3>基本信息</h3>
                  <dl>
                    <div><dt>产品类型</dt><dd>{item.kind}</dd></div>
                    <div><dt>能力形态</dt><dd>{item.subtype || item.kind}</dd></div>
                    <div><dt>适用行业</dt><dd>{industriesText}</dd></div>
                    <div><dt>适用角色</dt><dd>{rolesText}</dd></div>
                    {item.provider && <div><dt>提供方</dt><dd>{item.provider}</dd></div>}
                  </dl>
                </aside>
              </div>
            </>
          ) : (
            <>
              <div className="modal-hero">
                <div className="modal-hero-copy">
                  <span className="modal-kind">场景方案</span>
                  <h2 id="detail-title">{item.title}</h2>
                  <p className="modal-desc">{item.desc}</p>
                  <div className="modal-context-tags">
                    <span>{industriesText}</span>
                    {showRoleContext && <span>{rolesText}</span>}
                  </div>
                </div>
                {(isAI || item.image) && (
                  <div className="modal-image">
                    {isAI ? (
                      <FlowNode title={item.title} />
                    ) : (
                      <img src={item.image} alt={item.title} loading="lazy" />
                    )}
                  </div>
                )}
              </div>

              <div className={`modal-content-grid scenario-content-grid${showUsageMethod ? "" : " without-usage"}`}>
                <div className="modal-main-content">
                  <div className="modal-section">
                    <h3 className="modal-section-title"><TargetIcon /><span>场景说明</span></h3>
                    <p className="modal-section-text">{item.scenario || item.desc}</p>
                  </div>
                  {(hasCapabilities || hasHighlights) && (
                    <div className="modal-section">
                      <h3 className="modal-section-title"><LightbulbIcon /><span>方案能带来什么</span></h3>
                      <ul className="modal-list">
                        {(hasCapabilities ? item.capabilities : item.highlights).map((value) => (
                          <li key={value}><CheckIcon /><span>{value}</span></li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {(item.teamSize || item.customer) && (
                    <div className="modal-section">
                      <h3 className="modal-section-title"><PeopleIcon /><span>适合谁使用</span></h3>
                      <div className="modal-audience">
                        <div><span>行业</span><strong>{industriesText}</strong></div>
                        {showRoleContext && <div><span>角色</span><strong>{rolesText}</strong></div>}
                        {item.teamSize && <div><span>团队规模</span><strong>{item.teamSize}</strong></div>}
                        {item.customer && <div><span>参考客户</span><strong>{item.customer}</strong></div>}
                      </div>
                    </div>
                  )}
                </div>

                {showUsageMethod && <aside className="modal-product-card">
                  <h3 className="scenario-use-title">使用方法</h3>
                  {!delivery.previewType && (
                    <>
                      <span className="modal-product-eyebrow">{delivery.eyebrow}</span>
                      <div className="modal-product-title">
                        <span className="modal-product-mark" aria-hidden="true">✦</span>
                        <div>
                          <strong>{delivery.title}</strong>
                          <span>{item.kind}</span>
                        </div>
                      </div>
                      <p>{delivery.description}</p>
                    </>
                  )}
                  <DeliveryPreview item={item} delivery={delivery} onAction={handleAsset} />
                  {!delivery.previewType && item.steps?.length > 0 && (
                    <ol className="scenario-step-list">
                      {item.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                  )}
                  {!delivery.previewType && item.expectedOutput && (
                    <div className="scenario-output">
                      <span>预期交付</span>
                      <strong>{item.expectedOutput}</strong>
                    </div>
                  )}
                  {!delivery.previewType && item.meta && <div className="modal-product-meta">{item.meta}</div>}
                  {!delivery.previewType && (
                    <button
                      type="button"
                      className={`product-detail-button${delivery.asset ? "" : " is-missing"}`}
                      onClick={handleAsset}
                    >
                      {delivery.assetLabel}
                    </button>
                  )}
                  {!delivery.previewType && !delivery.asset && <span className="modal-asset-status">{delivery.missingLabel}</span>}
                  {!delivery.previewType && delivery.actionLabel && (
                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => delivery.action
                        ? window.open(delivery.action, "_blank", "noopener,noreferrer")
                        : onNotify(`${delivery.actionLabel}链接待补充`)}
                    >
                      {delivery.actionLabel}
                    </button>
                  )}
                </aside>}
              </div>
            </>
          )}
        </div>
      </section>
    </div>,
    document.body,
  );
}

/* ===== 流程节点图 ===== */

function FlowNode({ title }) {
  return (
    <div className="flow-canvas" aria-label={`${title}流程节点示意图`}>
      <div className="flow-track" />
      <div className="flow-ghost flow-ghost-left" />
      <div className="flow-node">
        <span className="flow-port" aria-hidden="true" />
        <span className="flow-app-mark" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="presentation">
            <path d="M16 1.5c1.7 8.5 5.9 12.8 14.5 14.5C21.9 17.7 17.7 22 16 30.5 14.3 22 10.1 17.7 1.5 16 10.1 14.3 14.3 10 16 1.5Z" />
          </svg>
        </span>
        <div className="flow-node-name" title={title}>
          {title}
        </div>
      </div>
      <div className="flow-ghost flow-ghost-right" />
    </div>
  );
}

/* ===== 卡片 ===== */

function MethodCard({ item, onDetail }) {
  const isAI = item.kind === "AI 应用";
  const isPlugin = item.kind === "插件";

  let actionLabel = "复制使用";
  let ActionIcon = CopyIcon;
  let actionClass = "light-action";

  if (isAI) {
    actionLabel = "查看用法";
    ActionIcon = TargetIcon;
    actionClass = "ai-action";
  } else if (isPlugin) {
    actionLabel = "获取 PRD";
    ActionIcon = CodeIcon;
    actionClass = "plugin-action";
  } else {
    actionLabel = "搭建说明";
  }

  return (
    <article className="method-card scene-card" onClick={() => onDetail(item)}>
      <div className="card-image">
        {isAI ? (
          <FlowNode title={item.title} />
        ) : (
          <img src={item.image} alt={item.title} loading="lazy" />
        )}
      </div>
      <div className="card-body">
        <div className="scene-label-row">
          <span className="scene-label"><span aria-hidden="true">✦</span> 最佳实践</span>
          <span className="scene-kind">{item.workGoal || (isAI ? "AI 助手" : item.kind)}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="card-footer">
          {isAI ? (
            <span className="card-tool" title="该场景使用 AI 助手实现">
              <span>使用</span>AI 助手
            </span>
          ) : item.featureName && (
            <span className="card-tool" title={item.featureName}>
              <span>使用</span>{item.featureName}
            </span>
          )}
          <button type="button" className={`method-action ${actionClass}`} onClick={(e) => { e.stopPropagation(); onDetail(item); }}>
            <ActionIcon /> {actionLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

function BusinessCard({ item, onDetail }) {
  return (
    <article className="business-card scene-card" onClick={() => onDetail(item)}>
      <div className="card-image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="card-body">
        <span className="business-badge">场景方案 · {item.kind}</span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="card-footer">
          <span className="card-meta">{item.meta}</span>
          <button type="button" className="business-action" onClick={(e) => { e.stopPropagation(); onDetail(item); }}>查看详情</button>
        </div>
      </div>
    </article>
  );
}

function CatalogCard({ item, onDetail }) {
  const isProductNamed = ["AI 应用", "插件"].includes(item.kind);
  const productName = isProductNamed ? (item.featureName || item.title) : item.title;
  const scenarioName = item.exampleScenario || item.capabilities?.[0] || "更多项目协同场景";
  const summary = item.desc || item.detailDescription;
  const actionLabel = item.kind === "模板"
    ? "查看模板"
    : item.kind === "解决方案"
      ? "查看方案"
      : "查看产品";

  return (
    <article className="catalog-card" onClick={() => onDetail(item)}>
      <div className={`catalog-cover catalog-cover-${item.kind === "AI 应用" ? "ai" : "asset"}`}>
        {isProductNamed ? (
          <>
            <span className="catalog-app-icon" aria-hidden="true">✦</span>
            <span className="catalog-cover-name">{productName}</span>
            <span className="catalog-cover-kind">{item.kind}</span>
          </>
        ) : (
          <>
            <img src={item.image} alt="" loading="lazy" />
            <span className="catalog-cover-overlay" />
            <span className="catalog-cover-name">{productName}</span>
          </>
        )}
      </div>
      <div className="catalog-body">
        <div className="catalog-heading">
          <span className="catalog-mini-icon" aria-hidden="true">✦</span>
          <div>
            <h3>{productName}</h3>
            <span>{item.kind}</span>
          </div>
        </div>
        <p>{summary}</p>
        <div className="catalog-scenario">
          <span>适用场景</span>
          <strong>{scenarioName}</strong>
        </div>
        <button
          type="button"
          className="catalog-action"
          onClick={(e) => {
            e.stopPropagation();
            onDetail(item);
          }}
        >
          {actionLabel}
        </button>
      </div>
    </article>
  );
}

/* ===== 主应用 ===== */

function App() {
  const [activeTab, setActiveTab] = useState(isSceneOnlyVariant ? "好方法" : "推荐");
  const [activeWorkGoal, setActiveWorkGoal] = useState("全部");
  const [activeIndustry, setActiveIndustry] = useState("全部");
  const [activeRole, setActiveRole] = useState("全部");
  const [detail, setDetail] = useState(null);
  const [toast, setToast] = useState("");

  const filteredItems = useMemo(() => {
    let items;
    if (isSceneOnlyVariant) {
      items = scenarios.filter(
        (item) => item.featured && scenarioGroups[activeTab].includes(item.kind),
      );
    } else {
      items = activeTab === "推荐"
        ? scenarios.filter((item) => item.featured)
        : products.filter((item) => item.tag === activeTab);
    }

    if (isSceneOnlyVariant && activeTab === "好方法" && activeWorkGoal !== "全部") {
      items = items.filter((item) => item.workGoal === activeWorkGoal);
    }
    if (activeIndustry !== "全部") {
      items = items.filter(
        (item) => item.industries?.includes(activeIndustry) || item.industry === activeIndustry,
      );
    }
    if ((!isSceneOnlyVariant || activeTab === "好方法") && activeRole !== "全部") {
      items = items.filter(
        (item) => item.roles?.includes(activeRole) || item.role === activeRole,
      );
    }
    return items;
  }, [activeTab, activeWorkGoal, activeIndustry, activeRole]);

  const methodItems = useMemo(() => filteredItems.filter((item) => ["AI 应用", "插件", "轻应用"].includes(item.kind)), [filteredItems]);
  const businessItems = useMemo(() => filteredItems.filter((item) => ["模板", "解决方案"].includes(item.kind)), [filteredItems]);
  const showSections = !isSceneOnlyVariant && activeTab === "推荐";
  const openScenario = (item) => setDetail({ item, mode: "scenario" });
  const openCatalog = (item) => setDetail({ item, mode: "catalog" });

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  return (
    <main className="discover-page">
      <header className="hero">
        <div className="hero-content">
          <h1>发现更多可能</h1>
        </div>
      </header>

      <nav className="tab-nav" aria-label={isSceneOnlyVariant ? "场景分类" : "产品类型"}>
        <div className="tab-scroll">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              className={isSceneOnlyVariant
                ? `tab-btn scene-group-tab${activeTab === t ? " is-active" : ""}`
                : `tab-btn${t === "推荐" ? " is-featured" : ""}${activeTab === t ? " is-active" : ""}`}
              onClick={() => {
                setActiveTab(t);
                setActiveWorkGoal("全部");
                setActiveIndustry("全部");
                setActiveRole("全部");
              }}
            >
              {isSceneOnlyVariant && (
                <span className="tab-featured-mark" aria-hidden="true">{t === "好方法" ? "✦" : "↗"}</span>
              )}
              {!isSceneOnlyVariant && t === "推荐" && <span className="tab-featured-mark" aria-hidden="true">✦</span>}
              {t}
            </button>
          ))}
        </div>
      </nav>

      <nav className="filter-nav" aria-label={isSceneOnlyVariant && activeTab === "新场景" ? "行业筛选" : "场景筛选"}>
        {isSceneOnlyVariant && activeTab === "好方法" && (
          <div className="filter-row work-goal-filter">
            <span className="filter-label">工作目标</span>
            <div className="filter-scroll">
              <button type="button" className={`cat-pill${activeWorkGoal === "全部" ? " is-active" : ""}`} onClick={() => setActiveWorkGoal("全部")}>全部</button>
              {workGoals.map((goal) => (
                <button key={goal} type="button" className={`cat-pill${activeWorkGoal === goal ? " is-active" : ""}`} onClick={() => setActiveWorkGoal(goal)}>
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="filter-row">
          <span className="filter-label">行业</span>
          <div className="filter-scroll">
            <button type="button" className={`cat-pill${activeIndustry === "全部" ? " is-active" : ""}`} onClick={() => setActiveIndustry("全部")}>全部</button>
            {industries.map((industry) => (
              <button key={industry} type="button" className={`cat-pill${activeIndustry === industry ? " is-active" : ""}`} onClick={() => setActiveIndustry(industry)}>
                {industry}
              </button>
            ))}
          </div>
        </div>
        {(!isSceneOnlyVariant || activeTab === "好方法") && (
          <div className="filter-row">
            <span className="filter-label">角色</span>
            <div className="filter-scroll">
              <button type="button" className={`cat-pill${activeRole === "全部" ? " is-active" : ""}`} onClick={() => setActiveRole("全部")}>全部</button>
              {roles.map((role) => (
                <button key={role} type="button" className={`cat-pill${activeRole === role ? " is-active" : ""}`} onClick={() => setActiveRole(role)}>
                  {role}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {isSceneOnlyVariant ? (
              <div className={`content-shell scene-group-content is-${activeTab === "好方法" ? "methods" : "scenes"}`}>
                <section aria-labelledby="sec-content">
                  <div className="section-head">
                    <div>
                      <h2 id="sec-content">{activeTab}</h2>
                      <p>{groupDescriptions[activeTab]}</p>
                    </div>
                    <span className="section-count">{filteredItems.length} 个场景</span>
                  </div>
                  <div className={activeTab === "好方法" ? "methods-grid" : "business-grid"}>
                    {filteredItems.map((item) => (
                      activeTab === "好方法"
                        ? <MethodCard key={item.id} item={item} onDetail={openScenario} />
                        : <BusinessCard key={item.id} item={item} onDetail={openScenario} />
                    ))}
                    {filteredItems.length === 0 && (
                      <div className="empty-state">
                        <span>该分类下暂无内容</span>
                        <p>{activeTab === "好方法" ? "尝试切换其他工作目标、行业或角色。" : "尝试切换其他行业。"}</p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
      ) : (
              <div className="content-shell">
                {showSections ? (
                  <>
                    <section className="methods-section" aria-labelledby="sec-methods">
                      <div className="section-head">
                        <div>
                          <h2 id="sec-methods">新方法</h2>
                          <p>从具体问题出发，找到可以直接使用或快速复刻的新方法。</p>
                        </div>
                        <span className="section-count">{methodItems.length} 个</span>
                      </div>
                      <div className="methods-grid">
                        {methodItems.map((item) => <MethodCard key={item.id} item={item} onDetail={openScenario} />)}
                        {methodItems.length === 0 && <div className="empty-state"><span>该分类下暂无内容</span><p>尝试切换其他行业或角色。</p></div>}
                      </div>
                    </section>
                    <section className="business-section" aria-labelledby="sec-business">
                      <div className="section-head">
                        <div>
                          <h2 id="sec-business">新业务</h2>
                          <p>模板和解决方案 — 参考一整套已经组织好的工作方式，搭起新的协作模式。</p>
                        </div>
                        <span className="section-count">{businessItems.length} 个</span>
                      </div>
                      <div className="business-grid">
                        {businessItems.map((item) => <BusinessCard key={item.id} item={item} onDetail={openScenario} />)}
                        {businessItems.length === 0 && <div className="empty-state"><span>该分类下暂无内容</span><p>尝试切换其他行业或角色。</p></div>}
                      </div>
                    </section>
                  </>
                ) : (
                  <section aria-labelledby="sec-content">
                    <div className="section-head">
                      <div>
                        <h2 id="sec-content">{activeTab}</h2>
                        <p>按产品与能力浏览，查看它能覆盖哪些场景 · {filteredItems.length} 项</p>
                      </div>
                    </div>
                    <div className="methods-grid">
                      {filteredItems.map((item) => <CatalogCard key={item.id} item={item} onDetail={openCatalog} />)}
                      {filteredItems.length === 0 && <div className="empty-state"><span>该分类下暂无内容</span><p>尝试切换其他行业或角色。</p></div>}
                    </div>
                  </section>
                )}
              </div>
      )}

      <footer className="page-footer">
        <p>更多内容持续上线中，敬请期待。</p>
      </footer>

      <DetailModal
        detail={detail}
        onClose={() => setDetail(null)}
        onNotify={setToast}
      />
      <div className={`toast ${toast ? "is-visible" : ""}`} role="status" aria-live="polite">
        <span className="toast-check">✓</span> {toast}
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
