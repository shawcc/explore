import { useEffect, useMemo, useRef, useState } from "react";
import { BriefcaseBusiness, Building2, FolderOpen, Heart, LayoutTemplate, Plus, Search, Sparkles } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { SupplyCard } from "../components/SupplyCard.jsx";
import { AppIcon } from "../components/AppIcon.jsx";
import { ErrorPanel, SkeletonGrid } from "../components/StatePanels.jsx";
import { useDemo } from "../context/DemoContext.jsx";
import { categoryOrder, TYPE_META } from "../data/mockData.js";

function CategorySection({ type, items, state, onRetry, sectionId, title, gridClassName = "" }) {
  const meta = TYPE_META[type];
  if (state === "empty") return null;

  return (
    <section id={sectionId || `category-${type}`} className={`discover-section discover-section-${type}`} aria-label={title || meta.label}>
      {title && (
        <header className="ai-form-section-header">
          <h2>{title}</h2>
        </header>
      )}
      {state === "loading" ? (
        <SkeletonGrid count={type === "solution" ? 2 : 3} />
      ) : state === "error" ? (
        <ErrorPanel onRetry={onRetry} />
      ) : items.length === 0 ? (
        <div className="catalog-empty">
          <Search size={22} />
          <strong>没有找到匹配内容</strong>
          <span>可以调整搜索词或筛选条件后重试。</span>
        </div>
      ) : (
        <div className={`supply-grid supply-grid-${type}${gridClassName ? ` ${gridClassName}` : ""}`}>
          {items.map((item) => <SupplyCard key={item.id} item={item} />)}
        </div>
      )}
    </section>
  );
}

const templateViewGroups = [
  {
    label: null,
    items: [
      { id: "official", label: "官方推荐", icon: Sparkles },
      { id: "mine", label: "我的模板", icon: FolderOpen },
      { id: "enterprise", label: "企业模板", icon: Building2 },
      { id: "favorites", label: "收藏", icon: Heart },
    ],
  },
  {
    label: "类型",
    items: [
      { id: "solutions", label: "解决方案", icon: BriefcaseBusiness },
      { id: "templates", label: "模板", icon: LayoutTemplate },
    ],
  },
];

const discoverTabs = [
  { id: "ai", label: "AI 应用", icon: "ai" },
  { id: "plugin", label: "插件", icon: "plugin" },
  { id: "template", label: "模板", icon: "template" },
];

const aiForms = ["AI 节点", "AI 操作", "AI 字段"];
const pluginDeveloperScopes = [
  { id: "all", label: "全部" },
  { id: "market", label: "市场插件" },
  { id: "enterprise", label: "企业插件" },
];

function CatalogSearch({ value, onChange, placeholder }) {
  return (
    <label className="catalog-search">
      <Search size={14} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </label>
  );
}

function TemplateWorkspace({ view, templates, onCreate, onUseOfficial }) {
  const templateViews = templateViewGroups.flatMap((group) => group.items);
  const viewMeta = templateViews.find((item) => item.id === view);
  const ViewIcon = viewMeta.icon;
  const sourceItems = view === "mine"
    ? templates.slice(0, 2)
    : view === "enterprise"
      ? templates.slice(2, 7)
      : templates.filter((_, index) => [0, 3, 5].includes(index));

  return (
    <section className="template-workspace" aria-label={viewMeta.label}>
      {sourceItems.length > 0 || view === "mine" ? (
        <div className="supply-grid supply-grid-template template-asset-grid">
          {view === "mine" && (
            <button type="button" className="template-create-card" onClick={onCreate}>
              <Plus size={28} strokeWidth={1.6} />
              <span>创建模板</span>
            </button>
          )}
          {sourceItems.map((item) => (
            <SupplyCard
              key={`${view}-${item.id}`}
              item={{
                ...item,
                name: view === "mine" ? `${item.name}（我的副本）` : item.name,
                provider: view === "enterprise" ? "当前企业" : item.provider,
              }}
            />
          ))}
        </div>
      ) : (
        <div className="template-asset-empty">
          <ViewIcon size={26} />
          <strong>这里还没有模板</strong>
          <span>可以从官方推荐中选择模板使用，或创建一个新模板。</span>
          <button type="button" onClick={onUseOfficial}>浏览官方推荐</button>
        </div>
      )}
    </section>
  );
}

export function DiscoverPage() {
  const { items, notify } = useDemo();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialType = searchParams.get("type");
  const [activeTab, setActiveTab] = useState(
    initialType === "solution" || initialType === "template"
      ? "template"
      : initialType === "plugin"
        ? "plugin"
        : "ai",
  );
  const [templateView, setTemplateView] = useState(
    initialType === "solution" ? "solutions" : searchParams.get("templateView") || "official",
  );
  const [pluginCategory, setPluginCategory] = useState(searchParams.get("pluginCategory") || "all");
  const [pluginQuery, setPluginQuery] = useState(searchParams.get("query") || "");
  const [pluginDeveloper, setPluginDeveloper] = useState(
    pluginDeveloperScopes.some((scope) => scope.id === searchParams.get("developer"))
      ? searchParams.get("developer")
      : "all",
  );
  const [pluginPrice, setPluginPrice] = useState(searchParams.get("price") || "all");
  const [pluginSort, setPluginSort] = useState(searchParams.get("sort") || "default");
  const [aiForm, setAiForm] = useState(
    aiForms.includes(searchParams.get("aiForm")) ? searchParams.get("aiForm") : aiForms[0],
  );
  const tabScroll = useRef({});
  const isLegacy = searchParams.get("from") === "template-center";

  const grouped = useMemo(() => Object.fromEntries(
    categoryOrder.map((type) => [type, items.filter((item) => item.type === type)]),
  ), [items]);
  const aiApplicationsByForm = useMemo(() => Object.fromEntries(
    aiForms.map((form) => [
      form,
      grouped.ai.filter((item) => item.aiForm === form),
    ]),
  ), [grouped.ai]);
  const pluginCategories = useMemo(() => {
    const plugins = items.filter((item) => (
      item.type === "plugin"
      && (pluginDeveloper === "all" || item.pluginDeveloperScope === pluginDeveloper)
    ));
    const counts = new Map();
    plugins.forEach((item) => item.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1)));
    return [
      { id: "all", label: "全部" },
      ...[...counts.entries()]
        .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], "zh-CN"))
        .map(([label]) => ({ id: label, label })),
    ];
  }, [items, pluginDeveloper]);
  const visiblePlugins = useMemo(() => {
    const normalizedQuery = pluginQuery.trim().toLocaleLowerCase("zh-CN");
    const plugins = items.filter((item) => (
      item.type === "plugin"
      && (pluginCategory === "all" || item.tags.includes(pluginCategory))
      && (pluginDeveloper === "all" || item.pluginDeveloperScope === pluginDeveloper)
      && (pluginPrice === "all" || (pluginPrice === "paid" ? item.isPaid : !item.isPaid))
      && (!normalizedQuery || `${item.name} ${item.summary} ${item.tags.join(" ")}`.toLocaleLowerCase("zh-CN").includes(normalizedQuery))
    ));
    return [...plugins].sort((left, right) => {
      if (pluginSort === "usage") return right.usageCount - left.usageCount;
      return right.score - left.score;
    });
  }, [items, pluginCategory, pluginDeveloper, pluginPrice, pluginQuery, pluginSort]);
  const visibleTemplates = useMemo(() => {
    return {
      template: grouped.template,
      solution: grouped.solution,
    };
  }, [grouped]);

  useEffect(() => {
    const saved = Number(sessionStorage.getItem("discover-scroll") || 0);
    requestAnimationFrame(() => window.scrollTo({ top: saved, behavior: "instant" }));
    const remember = () => sessionStorage.setItem("discover-scroll", String(window.scrollY));
    window.addEventListener("scroll", remember, { passive: true });
    return () => window.removeEventListener("scroll", remember);
  }, []);

  useEffect(() => {
    if (isLegacy) {
      setActiveTab("template");
      setSearchParams({ type: "template", from: "template-center" }, { replace: true });
    }
  }, [isLegacy, setSearchParams]);

  const switchTab = (type) => {
    tabScroll.current[activeTab] = window.scrollY;
    setActiveTab(type);
    setSearchParams((current) => {
      current.set("type", type);
      current.delete("goal");
      return current;
    });
    requestAnimationFrame(() => window.scrollTo({ top: tabScroll.current[type] || 0, behavior: "instant" }));
  };

  const templateWorkspaceActive = activeTab === "template";

  const selectTemplateView = (view) => {
    setTemplateView(view);
    setActiveTab("template");
    setSearchParams((current) => {
      current.set("type", "template");
      if (view !== "official") current.delete("goal");
      if (view === "official") current.delete("templateView");
      else current.set("templateView", view);
      return current;
    });
  };

  const selectPluginCategory = (category) => {
    setPluginCategory(category);
    setSearchParams((current) => {
      current.set("type", "plugin");
      if (category === "all") current.delete("pluginCategory");
      else current.set("pluginCategory", category);
      return current;
    });
  };

  const selectPluginDeveloper = (developer) => {
    setPluginDeveloper(developer);
    setPluginCategory("all");
    setSearchParams((current) => {
      current.set("type", "plugin");
      current.delete("pluginCategory");
      if (developer === "all") current.delete("developer");
      else current.set("developer", developer);
      return current;
    });
  };

  const selectAiForm = (form) => {
    setAiForm(form);
    setSearchParams((current) => {
      current.set("type", "ai");
      current.set("aiForm", form);
      return current;
    });
  };

  const updatePluginControl = (key, value, setter, defaultValue = "all") => {
    setter(value);
    setSearchParams((current) => {
      current.set("type", "plugin");
      if (value === defaultValue) current.delete(key);
      else current.set(key, value);
      return current;
    });
  };

  return (
    <main className="page discover-page-new">
      <div className="page-heading discover-heading">
        <div className="discover-title">
          <span className="discover-title-icon"><img src="/nav-icons/discover.png" alt="" /></span>
          <h1>发现</h1>
        </div>
      </div>

      <nav className="discover-category-nav" aria-label="内容类型">
        {discoverTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`discover-category-${tab.id}${activeTab === tab.id ? " is-active" : ""}`}
            onClick={() => switchTab(tab.id)}
          >
            <AppIcon name={tab.icon} size={14} />
            {tab.label}
          </button>
        ))}
      </nav>

      <div className={`discover-content-layout${activeTab === "ai" ? " has-ai-nav" : ""}${activeTab === "plugin" ? " has-plugin-nav" : ""}${templateWorkspaceActive ? " has-template-nav" : ""}`}>
      {templateWorkspaceActive && (
        <nav className="template-view-nav" aria-label="模板功能">
          {templateViewGroups.map((group, index) => (
            <div className="market-nav-group" key={group.label || "assets"}>
              {group.label && <strong>{group.label}</strong>}
              {group.items.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={templateView === id ? "is-active" : ""}
                  onClick={() => selectTemplateView(id)}
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
              {index === 0 && <span className="market-nav-divider" />}
            </div>
          ))}
        </nav>
      )}
      {activeTab === "plugin" && (
        <nav className="plugin-category-nav" aria-label="插件分类">
          <div className="market-nav-group">
            <strong>开发者</strong>
            {pluginDeveloperScopes.map((scope) => (
              <button
                key={scope.id}
                type="button"
                className={pluginDeveloper === scope.id ? "is-active" : ""}
                onClick={() => selectPluginDeveloper(scope.id)}
              >
                <span>{scope.label}</span>
              </button>
            ))}
            <span className="market-nav-divider" />
          </div>
          <div className="market-nav-group">
            <strong>分类</strong>
            {pluginCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={pluginCategory === category.id ? "is-active" : ""}
                onClick={() => selectPluginCategory(category.id)}
              >
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
      {activeTab === "ai" && (
        <nav className="ai-category-nav" aria-label="AI 应用形态">
          {aiForms.map((form) => (
            <button
              key={form}
              type="button"
              className={aiForm === form ? "is-active" : ""}
              aria-current={aiForm === form ? "page" : undefined}
              onClick={() => selectAiForm(form)}
            >
              <span>{form}</span>
            </button>
          ))}
        </nav>
      )}

      <div className="discover-content-main">
      {activeTab === "plugin" && (
        <div className="catalog-toolbar plugin-toolbar" aria-label="插件筛选与排序">
          <CatalogSearch value={pluginQuery} onChange={setPluginQuery} placeholder="搜索插件" />
          <div className="catalog-toolbar-filters">
            <label>
              <span>价格</span>
              <select
                value={pluginPrice}
                onChange={(event) => updatePluginControl("price", event.target.value, setPluginPrice)}
              >
                <option value="all">全部</option>
                <option value="free">免费</option>
                <option value="paid">付费</option>
              </select>
            </label>
            <label>
              <span>排序</span>
              <select
                value={pluginSort}
                onChange={(event) => updatePluginControl("sort", event.target.value, setPluginSort, "default")}
              >
                <option value="default">综合排序</option>
                <option value="usage">使用最多</option>
              </select>
            </label>
          </div>
        </div>
      )}
      {isLegacy && (
        <div className="legacy-notice">
          原“模板中心”已升级为“发现”，你访问的模板内容仍可在这里查看。
        </div>
      )}

      {templateWorkspaceActive && ["mine", "enterprise", "favorites"].includes(templateView) ? (
        <TemplateWorkspace
          view={templateView}
          templates={items.filter((item) => item.type === "template")}
          onCreate={() => notify("已打开模板创建入口")}
          onUseOfficial={() => selectTemplateView("official")}
        />
      ) : (
        <div className="tab-content">
          {activeTab === "plugin" ? (
            <CategorySection
              type="plugin"
              items={visiblePlugins}
              gridClassName={pluginDeveloper === "enterprise" ? "supply-grid-enterprise-plugin" : ""}
              state="normal"
            />
          ) : templateWorkspaceActive && templateView === "solutions" ? (
            <CategorySection
              type="solution"
              items={visibleTemplates.solution}
              state="normal"
            />
          ) : templateWorkspaceActive ? (
            <CategorySection
              type="template"
              items={templateView === "official" ? visibleTemplates.template.slice(0, 6) : visibleTemplates.template}
              state="normal"
            />
          ) : activeTab === "ai" ? (
            <CategorySection
              type="ai"
              items={aiApplicationsByForm[aiForm]}
              state="normal"
            />
          ) : (
            <div className="goal-empty">
              <strong>暂无匹配内容</strong>
              <span>可以调整筛选条件后重试。</span>
            </div>
          )}
        </div>
      )}
      </div>
      </div>
    </main>
  );
}
