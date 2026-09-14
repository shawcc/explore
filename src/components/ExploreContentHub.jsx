import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Bot,
  Building2,
  CalendarDays,
  ChartNoAxesCombined,
  Layers3,
  Network,
  PackageSearch,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useDemo } from "../context/DemoContext.jsx";
import { discoveryEditorialContent } from "../data/discoveryEditorial.js";
import { PRODUCT_RELEASE_SOURCE, productReleaseUpdates } from "../data/productReleases.js";
import { AppGlyph } from "./AppGlyph.jsx";
import { SupplyCard } from "./SupplyCard.jsx";

const SECTION_META = {
  stories: {
    eyebrow: "真实经验",
    title: "实践与案例",
    description: "客户案例、课程回放和最佳实践统一收录。",
    icon: BookOpenText,
  },
  courses: {
    eyebrow: "系统学习",
    title: "直播课程",
    description: "从业务 Agent 到开放生态，按主题回看已经验证过的 AI 实战课程。",
    icon: CalendarDays,
  },
  practices: {
    eyebrow: "方法库",
    title: "最佳实践",
    description: "把一次成功使用整理成下一次可以直接复用的方法。",
    icon: BookOpenText,
  },
  customers: {
    eyebrow: "AI 业务现场",
    title: "客户实践",
    description: "查看 AI Workflow 如何进入真实业务流程，以及其中可以复用的路径。",
    icon: Building2,
  },
  updates: {
    eyebrow: "按月发布",
    title: "产品上新",
    description: "按月份查看飞书项目的重要功能迭代与能力升级。",
    icon: Layers3,
  },
};

const CATALOG_LABELS = {
  ai: "AI 应用",
  plugin: "插件",
  template: "模板",
};

const AI_FORM_FILTERS = ["AI 节点", "AI 操作", "AI 字段"];
const PLUGIN_SOURCE_FILTERS = [
  { id: "all", label: "全部" },
  { id: "market", label: "市场插件" },
  { id: "enterprise", label: "企业插件" },
];
const TEMPLATE_TYPE_FILTERS = [
  { id: "all", label: "全部" },
  { id: "template", label: "模板" },
  { id: "solution", label: "解决方案" },
];

function buildTagFilters(items) {
  const counts = new Map();
  items.forEach((item) => {
    (item.tags || []).forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
  });
  return [
    { id: "all", label: "全部", count: items.length },
    ...[...counts.entries()]
      .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], "zh-CN"))
      .map(([label, count]) => ({ id: label, label, count })),
  ];
}

function CatalogFilterGroup({ label, options, value, onChange }) {
  return (
    <div className="explore-catalog-filter-group">
      <strong>{label}</strong>
      {options.map((option) => (
        <button
          type="button"
          className={value === option.id ? "is-active" : ""}
          aria-pressed={value === option.id}
          onClick={() => onChange(option.id)}
          key={option.id}
        >
          <span>{option.label}</span>
          <small>{option.count}</small>
        </button>
      ))}
    </div>
  );
}

function findItem(items, ref) {
  if (!ref) return null;
  return items.find((item) => (
    item.type === "ai"
    && item.baseId === ref.baseId
    && (!ref.form || item.aiForm === ref.form)
  ));
}

function formatDate(value) {
  if (!value) return "近期";
  const [, month, day] = value.split("-");
  return `${Number(month)} 月 ${Number(day)} 日`;
}

function matchesQuery(entry, query) {
  if (!query) return true;
  return Object.values(entry)
    .flat(2)
    .filter((value) => typeof value === "string")
    .join(" ")
    .toLocaleLowerCase("zh-CN")
    .includes(query);
}

function getEntries(section, items) {
  const { liveClasses, bestPractices, customerStories } = discoveryEditorialContent;
  if (section === "stories") {
    const groups = [
      customerStories.map((entry) => ({ ...entry, kind: "customer", item: findItem(items, entry.itemRef) })),
      liveClasses.map((entry) => ({ ...entry, kind: "course", item: findItem(items, entry.itemRef) })),
      bestPractices.map((entry) => ({ ...entry, kind: "practice", item: findItem(items, entry.itemRef) })),
    ];
    const longest = Math.max(...groups.map((group) => group.length));
    return Array.from({ length: longest }, (_, index) => groups.map((group) => group[index]))
      .flat()
      .filter(Boolean);
  }
  if (section === "courses") {
    return liveClasses.map((entry) => ({ ...entry, kind: "course", item: findItem(items, entry.itemRef) }));
  }
  if (section === "practices") {
    return bestPractices.map((entry) => ({ ...entry, kind: "practice", item: findItem(items, entry.itemRef) }));
  }
  if (section === "customers") {
    return customerStories.map((entry) => ({ ...entry, kind: "customer", item: findItem(items, entry.itemRef) }));
  }
  return productReleaseUpdates.map((entry) => ({ ...entry, kind: "update" }));
}

function ContentVisual({ entry, index }) {
  if (entry.image || entry.coverImage) {
    return (
      <div className="explore-library-image">
        <img src={entry.coverImage || entry.image} alt={entry.imageAlt || `${entry.title}内容封面`} />
        {entry.imageAlt && <span>行业场景示意</span>}
      </div>
    );
  }

  if (entry.item) {
    return (
      <div className={`explore-library-glyph is-${entry.kind}`}>
        <AppGlyph item={entry.item} size={42} />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
    );
  }

  if (entry.kind === "update") {
    const UpdateIcon = entry.group === "ai"
      ? Bot
      : entry.group === "project"
        ? Network
        : ChartNoAxesCombined;
    return (
      <div className={`explore-library-glyph is-update is-${entry.group}`}>
        <UpdateIcon size={54} />
        <span>{entry.monthLabel.replace("2026 年 ", "")}</span>
      </div>
    );
  }

  return <div className={`explore-library-glyph is-${entry.kind}`}><span>{String(index + 1).padStart(2, "0")}</span></div>;
}

function ContentCard({ entry, index, onOpen }) {
  return (
    <article className={`explore-library-card is-${entry.kind}`}>
      <button type="button" className="explore-card-hit" onClick={() => onOpen(entry.id)} aria-label={`查看${entry.title}`} />
      <ContentVisual entry={entry} index={index} />
      <div className="explore-library-copy">
        <span>
          {entry.kind === "course" && formatDate(entry.date)}
          {entry.kind === "practice" && entry.label}
          {entry.kind === "customer" && `${entry.customer} · ${entry.industry}`}
          {entry.kind === "update" && `${entry.monthLabel} · ${entry.category}`}
        </span>
        <h2>{entry.title}</h2>
        <p>{entry.summary}</p>
        <footer>
          {entry.participants && <span><Users size={13} />{entry.participants.toLocaleString("zh-CN")} 人参与</span>}
          {entry.status && <span>{entry.status}</span>}
          {entry.item?.provider && <span>{entry.item.provider}</span>}
          {entry.kind === "update" && <span>飞书项目官方</span>}
          <strong>阅读全文<ArrowRight size={15} /></strong>
        </footer>
      </div>
    </article>
  );
}

function ContentDetail({ section, entry, onBack }) {
  const location = useLocation();
  const { setLastDiscoverLocation } = useDemo();
  const meta = SECTION_META[section];
  const SectionIcon = meta.icon;
  const rememberLocation = () => {
    const current = `${location.pathname}${location.search}${location.hash}`;
    setLastDiscoverLocation(current);
    sessionStorage.setItem("discover-return", current);
  };
  const detailImage = entry.coverImage || entry.image;

  return (
    <article className={`explore-content-detail is-${entry.kind}`}>
      <button type="button" className="explore-detail-back" onClick={onBack}>
        <ArrowLeft size={15} />返回{meta.title}
      </button>
      <header className="explore-detail-hero">
        <div className="explore-detail-intro">
          <span><SectionIcon size={15} />{meta.eyebrow}</span>
          <h1>{entry.title}</h1>
          <p>{entry.summary}</p>
          <div className="explore-detail-meta">
            {entry.date && <time dateTime={entry.date}>{entry.monthLabel || formatDate(entry.date)}</time>}
            {entry.customer && <strong>{entry.customer} · {entry.industry}</strong>}
            {entry.participants && <strong>{entry.participants.toLocaleString("zh-CN")} 人参与</strong>}
            {entry.status && <strong>{entry.status}</strong>}
          </div>
        </div>
        <div className="explore-detail-visual">
          {detailImage ? (
            <>
              <img src={detailImage} alt={entry.imageAlt || `${entry.title}内容封面`} />
              {entry.imageAlt && <span>行业场景示意</span>}
            </>
          ) : entry.item ? (
            <div className="explore-detail-glyph">
              <AppGlyph item={entry.item} size={72} />
              <small>{entry.item.aiForm || entry.item.type}</small>
            </div>
          ) : entry.kind === "update" ? (
            <div className="explore-detail-glyph is-update">
              <Layers3 size={54} />
              <small>{entry.monthLabel}</small>
            </div>
          ) : null}
        </div>
      </header>

      <div className="explore-detail-body">
        <section>
          <span>内容摘要</span>
          <h2>
            {entry.kind === "customer" ? "从问题到闭环" :
              entry.kind === "course" ? "课程覆盖内容" :
                entry.kind === "practice" ? "这套方法解决什么问题" : "这次更新带来了什么"}
          </h2>
          <p>{entry.summary}</p>
          {entry.kind === "customer" && (
            <ol className="explore-detail-steps">
              {entry.steps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}
            </ol>
          )}
          {entry.kind === "course" && (
            <div className="explore-detail-stats">
              <div><strong>{entry.participants.toLocaleString("zh-CN")}</strong><span>参与人次</span></div>
              {entry.submissions && <div><strong>{entry.submissions}</strong><span>收到作业</span></div>}
              {entry.speaker && <div><strong>{entry.speaker}</strong><span>课程讲师</span></div>}
            </div>
          )}
          {entry.kind === "practice" && entry.item && (
            <p className="explore-detail-note">关联能力：{entry.item.name}。进入能力详情可查看配置方式和使用指南。</p>
          )}
          {entry.kind === "update" && (
            <p className="explore-detail-note">{entry.detail}</p>
          )}
        </section>
        <aside>
          <span>关联能力</span>
          {entry.item ? (
            <>
              <AppGlyph item={entry.item} size={34} />
              <h3>{entry.item.name}</h3>
              <p>{entry.item.summary}</p>
              <Link to={entry.item.detailRoute} onClick={rememberLocation}>
                查看能力详情<ArrowRight size={15} />
              </Link>
            </>
          ) : entry.kind === "update" ? (
            <>
              <Layers3 size={34} />
              <h3>飞书项目产品更新日志</h3>
              <p>该条内容来自飞书项目官方产品上新页面。</p>
              <a href={PRODUCT_RELEASE_SOURCE} target="_blank" rel="noreferrer">
                查看官方更新日志<ArrowRight size={15} />
              </a>
            </>
          ) : (
            <p>该内容暂未关联具体能力。</p>
          )}
        </aside>
      </div>
    </article>
  );
}

export function ExploreContentHub({ items, query = "", section, contentId, onOpenItem, onBack, onHome }) {
  const meta = SECTION_META[section] || SECTION_META.courses;
  const SectionIcon = meta.icon;
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
  const entries = getEntries(section, items);
  const visibleEntries = entries.filter((entry) => matchesQuery(entry, normalizedQuery));
  const selected = contentId ? entries.find((entry) => entry.id === contentId) : null;

  if (selected) return <ContentDetail section={section} entry={selected} onBack={onBack} />;

  return (
    <section className={`explore-library is-${section}`} aria-labelledby={`explore-${section}-title`}>
      <button type="button" className="explore-section-back" onClick={onHome}>
        <ArrowLeft size={15} />返回发现首页
      </button>
      <header className="explore-library-heading">
        <div>
          <span><SectionIcon size={15} />{meta.eyebrow}</span>
          <h1 id={`explore-${section}-title`}>{meta.title}</h1>
          <p>{meta.description}</p>
        </div>
        <strong>{visibleEntries.length} 篇内容</strong>
      </header>
      {visibleEntries.length > 0 ? (
        <div className="explore-library-list">
          {visibleEntries.map((entry, index) => (
            <ContentCard entry={entry} index={index} onOpen={onOpenItem} key={entry.id} />
          ))}
        </div>
      ) : (
        <div className="explore-hub-empty">
          <PackageSearch size={24} />
          <strong>没有匹配的内容</strong>
          <span>可以尝试更短或不同的关键词。</span>
        </div>
      )}
    </section>
  );
}

export function ExploreCatalog({ items, query = "", catalog = "ai" }) {
  const label = CATALOG_LABELS[catalog] || CATALOG_LABELS.ai;
  const [filters, setFilters] = useState({
    aiForm: AI_FORM_FILTERS[0],
    pluginSource: "all",
    pluginCategory: "all",
    templateType: "all",
    templateCategory: "all",
  });
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
  const sourceItems = items.filter((item) => (
    catalog === "template"
      ? item.type === "template" || item.type === "solution"
      : item.type === catalog
  ));
  const pluginSourceItems = sourceItems.filter((item) => (
    filters.pluginSource === "all" || item.pluginDeveloperScope === filters.pluginSource
  ));
  const templateTypeItems = sourceItems.filter((item) => (
    filters.templateType === "all" || item.type === filters.templateType
  ));
  const pluginTagFilters = buildTagFilters(pluginSourceItems);
  const templateTagFilters = buildTagFilters(templateTypeItems);
  const filterGroups = catalog === "ai"
    ? [{
      label: "形态",
      value: filters.aiForm,
      options: AI_FORM_FILTERS.map((form) => ({
        id: form,
        label: form,
        count: sourceItems.filter((item) => item.aiForm === form).length,
      })),
      onChange: (value) => setFilters((current) => ({ ...current, aiForm: value })),
    }]
    : catalog === "plugin"
      ? [
        {
          label: "来源",
          value: filters.pluginSource,
          options: PLUGIN_SOURCE_FILTERS.map((option) => ({
            ...option,
            count: sourceItems.filter((item) => (
              option.id === "all" || item.pluginDeveloperScope === option.id
            )).length,
          })),
          onChange: (value) => setFilters((current) => ({
            ...current,
            pluginSource: value,
            pluginCategory: "all",
          })),
        },
        {
          label: "分类",
          value: filters.pluginCategory,
          options: pluginTagFilters,
          onChange: (value) => setFilters((current) => ({ ...current, pluginCategory: value })),
        },
      ]
      : [
        {
          label: "类型",
          value: filters.templateType,
          options: TEMPLATE_TYPE_FILTERS.map((option) => ({
            ...option,
            count: sourceItems.filter((item) => option.id === "all" || item.type === option.id).length,
          })),
          onChange: (value) => setFilters((current) => ({
            ...current,
            templateType: value,
            templateCategory: "all",
          })),
        },
        {
          label: "场景",
          value: filters.templateCategory,
          options: templateTagFilters,
          onChange: (value) => setFilters((current) => ({ ...current, templateCategory: value })),
        },
      ];
  const filteredItems = sourceItems.filter((item) => {
    if (catalog === "ai") return item.aiForm === filters.aiForm;
    if (catalog === "plugin") {
      return (filters.pluginSource === "all" || item.pluginDeveloperScope === filters.pluginSource)
        && (filters.pluginCategory === "all" || item.tags.includes(filters.pluginCategory));
    }
    return (filters.templateType === "all" || item.type === filters.templateType)
      && (filters.templateCategory === "all" || item.tags.includes(filters.templateCategory));
  });
  const catalogItems = filteredItems.filter((item) => (
    !normalizedQuery
    || `${item.name} ${item.summary} ${(item.tags || []).join(" ")} ${item.aiForm || ""}`.toLocaleLowerCase("zh-CN").includes(normalizedQuery)
  ));

  return (
    <section className="explore-catalog" aria-label={`${label}仓库`}>
      <div className="explore-catalog-layout">
        <aside className="explore-catalog-filters" aria-label={`${label}分类`}>
          {filterGroups.map((group) => (
            <CatalogFilterGroup {...group} key={group.label} />
          ))}
        </aside>
        <div className="explore-catalog-results">
          {catalogItems.length > 0 ? (
            <div className={`supply-grid supply-grid-${catalog === "template" ? "template" : catalog} explore-catalog-grid`}>
              {catalogItems.map((item) => <SupplyCard item={item} key={item.id} />)}
            </div>
          ) : (
            <div className="explore-hub-empty">
              <PackageSearch size={24} />
              <strong>没有匹配的{label}</strong>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
