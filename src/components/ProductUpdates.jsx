import {
  ArrowRight,
  Bot,
  ChartNoAxesCombined,
  Layers3,
  Network,
} from "lucide-react";
import { useState } from "react";
import { productReleaseUpdates } from "../data/productReleases.js";

export { productReleaseUpdates as productUpdateSpecs };

const filters = [
  { id: "all", label: "全部" },
  { id: "ai", label: "AI 能力" },
  { id: "project", label: "项目管理" },
  { id: "data", label: "数据与度量" },
];

const groupIcons = {
  ai: Bot,
  project: Network,
  data: ChartNoAxesCombined,
};

function UpdateItem({ entry, onOpen }) {
  const UpdateIcon = groupIcons[entry.group] || Layers3;

  return (
    <article className={`update-list-item is-${entry.group}`}>
      <button
        type="button"
        className="update-card-hit-area"
        aria-label={`查看${entry.title}`}
        onClick={() => onOpen?.(entry.id)}
      />
      <time dateTime={entry.date}>{entry.monthLabel.replace("2026 年 ", "")}</time>
      <span className="update-release-mark"><UpdateIcon size={20} /></span>
      <div className="update-list-copy">
        <div className="update-list-meta">
          <span>{entry.category}</span>
          <span>飞书项目官方</span>
        </div>
        <h3>{entry.title}</h3>
        <p>{entry.summary}</p>
      </div>
      <div className="update-list-action"><span>查看详情</span><ArrowRight size={15} /></div>
    </article>
  );
}

function ReleaseShowcase({ entries, onOpen }) {
  const [latest, ...recent] = entries;

  return (
    <div className="release-showcase">
      <article className="release-feature">
        <button type="button" aria-label={`查看${latest.title}`} onClick={() => onOpen?.(latest.id)} />
        <div className="release-feature-media">
          <img src={latest.image} alt={latest.imageAlt} />
          <span>本期更新</span>
        </div>
        <div className="release-feature-copy">
          <div>
            <span>{latest.monthLabel}</span>
            <small>{latest.category}</small>
          </div>
          <h3>{latest.title}</h3>
          <p>{latest.summary}</p>
          <strong>查看更新详情<ArrowRight size={15} /></strong>
        </div>
      </article>

      <div className="release-recent-stack">
        <header>
          <span>近期上新</span>
          <small>飞书项目官方</small>
        </header>
        {recent.map((entry) => (
          <article className={`release-recent-card is-${entry.group}`} key={entry.id}>
            <button type="button" aria-label={`查看${entry.title}`} onClick={() => onOpen?.(entry.id)} />
            <img src={entry.image} alt={entry.imageAlt} />
            <div>
              <span>{entry.monthLabel}</span>
              <h3>{entry.title}</h3>
              <footer>
                <small>{entry.category}</small>
                <ArrowRight size={15} />
              </footer>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ProductUpdates({
  query = "",
  compact = false,
  onBrowseAll,
  onOpenUpdate,
}) {
  const [filter, setFilter] = useState("all");
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
  const visibleUpdates = productReleaseUpdates.filter((entry) => (
    (filter === "all" || entry.group === filter)
    && (!normalizedQuery || Object.values(entry)
      .filter((value) => typeof value === "string")
      .join(" ")
      .toLocaleLowerCase("zh-CN")
      .includes(normalizedQuery))
  ));
  const displayedUpdates = compact ? visibleUpdates.slice(0, 4) : visibleUpdates;

  return (
    <section className={`product-updates${compact ? " is-compact" : ""}`} aria-labelledby="product-updates-title">
      <header className="updates-header">
        <div>
          <span>最近更新</span>
          <h2 id="product-updates-title">产品上新</h2>
          {compact && <small>{displayedUpdates.length} 次近期发布</small>}
        </div>
        {compact && onBrowseAll ? (
          <button type="button" className="updates-browse-all" onClick={onBrowseAll}>
            查看全部更新<ArrowRight size={15} />
          </button>
        ) : (
          <small>{productReleaseUpdates.length} 个月更新</small>
        )}
      </header>

      {!compact && (
        <div className="updates-filter-bar" aria-label="更新类型筛选">
          {filters.map((item) => {
            const count = item.id === "all"
              ? productReleaseUpdates.length
              : productReleaseUpdates.filter((entry) => entry.group === item.id).length;
            return (
              <button
                type="button"
                className={filter === item.id ? "is-active" : ""}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
                key={item.id}
              >
                {item.label}<small>{count}</small>
              </button>
            );
          })}
        </div>
      )}

      {normalizedQuery && (
        <div className="updates-search-note">
          “{query.trim()}”匹配到 <strong>{visibleUpdates.length}</strong> 项内容
        </div>
      )}

      {displayedUpdates.length > 0 && compact ? (
        <ReleaseShowcase entries={displayedUpdates} onOpen={onOpenUpdate || onBrowseAll} />
      ) : displayedUpdates.length > 0 ? (
        <section className="updates-period" aria-label="月度产品更新">
          <header>
            <strong>{compact ? "最近更新" : "更新记录"}</strong>
            <span>{compact ? "2026 年 5–8 月" : "2026 年 1–8 月"}</span>
          </header>
          <div className="updates-list">
            {displayedUpdates.map((entry) => (
              <UpdateItem entry={entry} onOpen={onOpenUpdate || onBrowseAll} key={entry.id} />
            ))}
          </div>
        </section>
      ) : (
        <div className="updates-empty">
          <Layers3 size={24} />
          <strong>没有匹配的更新</strong>
          <span>可以更换类型或搜索关键词。</span>
        </div>
      )}
    </section>
  );
}
