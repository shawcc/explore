import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useDemo } from "../context/DemoContext.jsx";
import { TYPE_META } from "../data/mockData.js";
import { AppGlyph } from "./AppGlyph.jsx";
import { AppIcon } from "./AppIcon.jsx";

function AppPreview({ item }) {
  return (
    <div className={`product-preview app-directory-preview app-directory-preview-${item.type}`}>
      <AppGlyph item={item} size={28} />
      <div className="app-directory-identity">
        <strong>{item.name}</strong>
      </div>
    </div>
  );
}

function TemplatePreview({ item }) {
  if (item.coverImage) {
    return (
      <div className="product-preview catalog-cover-preview">
        <img src={item.coverImage} alt={`${item.name}${item.imageSourceStatus || "线上封面"}`} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`product-preview template-board-preview preview-${item.cover}`}>
      <div className="board-topbar">
        <div><AppIcon name={item.cover} size={14} /><strong>{item.name}</strong></div>
        <span>看板</span>
      </div>
      <div className="board-columns">
        {["待处理", "进行中", "已完成"].map((label, index) => (
          <div className="board-column" key={label}>
            <header><span>{label}</span><b>{index + 2}</b></header>
            <i className={`task task-${index + 1}`} />
            <i className="task short" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionPreview({ item }) {
  const stages = item.coverage?.slice(0, 4) || item.tags;
  if (item.coverImage) {
    return (
      <div className="product-preview catalog-cover-preview">
        <img src={item.coverImage} alt={`${item.name}${item.imageSourceStatus || "线上封面"}`} loading="lazy" />
      </div>
    );
  }
  return (
    <div className={`product-preview solution-map-preview preview-${item.cover}`}>
      <div className="solution-orbit">
        <span className="solution-core"><AppIcon name={item.cover} size={22} /></span>
        {stages.map((stage, index) => (
          <span className={`solution-stage stage-${index + 1}`} key={stage}>
            <i>{index + 1}</i>{stage}
          </span>
        ))}
      </div>
      <div className="solution-metric">
        <span>业务闭环</span>
        <strong>{stages.length}</strong>
        <small>个关键环节</small>
      </div>
    </div>
  );
}

function Cover({ item }) {
  if (item.type === "ai" || item.type === "plugin") return <AppPreview item={item} />;
  if (item.type === "template") return <TemplatePreview item={item} />;
  return <SolutionPreview item={item} />;
}

export function SupplyCard({ item, showAiForm = false, searchMatchDetail = "" }) {
  const location = useLocation();
  const { setLastDiscoverLocation } = useDemo();
  const meta = TYPE_META[item.type];
  const isApp = item.type === "ai" || item.type === "plugin";

  const rememberLocation = () => {
    const current = `${location.pathname}${location.search}${location.hash}`;
    setLastDiscoverLocation(current);
    sessionStorage.setItem("discover-return", current);
  };

  return (
    <article className={`supply-card supply-card-${item.type}`}>
      <Link to={item.detailRoute} onClick={rememberLocation} className="card-hit-area" aria-label={`查看${item.name}详情`} />
      <div className="card-visual">
        <Cover item={item} />
      </div>
      <div className="card-content">
        {!isApp && <h3>{item.name}</h3>}
        <p className="card-summary">{item.summary}</p>
        {searchMatchDetail && (
          <p className="search-match-detail">
            <span>匹配详情</span>
            {searchMatchDetail}
          </p>
        )}

        {item.type === "ai" && showAiForm && (
          <div className="card-specific app-card-meta search-ai-form">
            <div className="tag-list"><span>{item.aiForm}</span></div>
          </div>
        )}
        {item.type === "plugin" && (
          <div className="card-specific app-card-meta">
            <div className="tag-list">{item.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        )}
        {item.type === "template" && (
          <div className="card-specific template-meta">
            <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        )}
        {item.type === "solution" && (
          <div className="card-specific">
            <span className="specific-label">场景</span>
            <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        )}

        <div className="card-action">
          <span>{item.type === "template" ? "查看模板" : item.type === "solution" ? "查看方案" : "查看详情"}</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </article>
  );
}
