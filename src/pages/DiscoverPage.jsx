import { useEffect, useMemo, useRef, useState } from "react";
import { BriefcaseBusiness, Building2, FolderOpen, Heart, LayoutTemplate, Plus, Search, Sparkles, X } from "lucide-react";
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

function flattenSearchValue(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(flattenSearchValue).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(flattenSearchValue).join(" ");
  return "";
}

function getSearchText(item) {
  const detailValues = [
    item.fullDescription,
    item.background,
    item.scenarios,
    item.configuration,
    item.permissions,
    item.includes,
    item.coverage,
  ];
  return [
    item.name,
    item.summary,
    item.provider,
    item.developer,
    item.aiForm,
    item.tags,
    item.positions,
    ...detailValues,
  ]
    .map(flattenSearchValue)
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase("zh-CN");
}

function getDetailMatch(item, normalizedQuery) {
  const directoryText = flattenSearchValue([
    item.name,
    item.summary,
    item.provider,
    item.developer,
    item.aiForm,
    item.tags,
    item.positions,
  ]).toLocaleLowerCase("zh-CN");
  if (directoryText.includes(normalizedQuery)) return "";

  const detailFields = [
    item.fullDescription,
    item.background,
    item.scenarios,
    item.configuration,
    item.permissions,
    item.includes,
    item.coverage,
  ];
  return detailFields
    .flatMap((value) => (
      value && typeof value === "object" ? Object.values(value) : [value]
    ))
    .map(flattenSearchValue)
    .find((value) => value.toLocaleLowerCase("zh-CN").includes(normalizedQuery)) || "";
}

function GlobalSearch({ value, onChange }) {
  return (
    <label className="discover-global-search">
      <Search size={16} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.currentTarget.blur();
            onChange("");
          }
        }}
        placeholder="搜索 AI 应用、插件和模板"
        aria-label="搜索发现中的全部内容"
      />
      {value && (
        <button type="button" onClick={() => onChange("")} aria-label="清空搜索">
          <X size={14} />
        </button>
      )}
    </label>
  );
}

function SearchResultGroup({ type, label, items, query }) {
  if (items.length === 0) return null;

  return (
    <section className="discover-search-group" aria-label={`${label}搜索结果`}>
      <header>
        <div>
          <AppIcon name={type} size={16} />
          <h3>{label}</h3>
        </div>
        <span>{items.length}</span>
      </header>
      <div className={`supply-grid supply-grid-${type} discover-search-grid`}>
        {items.map((item) => (
          <SupplyCard
            key={item.id}
            item={item}
            showAiForm={type === "ai"}
            searchMatchDetail={getDetailMatch(item, query)}
          />
        ))}
      </div>
    </section>
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
  const [globalQuery, setGlobalQuery] = useState(searchParams.get("query") || "");
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
    const plugins = items.filter((item) => (
      item.type === "plugin"
      && (pluginCategory === "all" || item.tags.includes(pluginCategory))
      && (pluginDeveloper === "all" || item.pluginDeveloperScope === pluginDeveloper)
      && (pluginPrice === "all" || (pluginPrice === "paid" ? item.isPaid : !item.isPaid))
    ));
    return [...plugins].sort((left, right) => {
      if (pluginSort === "usage") return right.usageCount - left.usageCount;
      return right.score - left.score;
    });
  }, [items, pluginCategory, pluginDeveloper, pluginPrice, pluginSort]);
  const visibleTemplates = useMemo(() => {
    return {
      template: grouped.template,
      solution: grouped.solution,
    };
  }, [grouped]);
  const normalizedGlobalQuery = globalQuery.trim().toLocaleLowerCase("zh-CN");
  const globalSearchResults = useMemo(() => {
    if (!normalizedGlobalQuery) return null;

    const matches = items
      .filter((item) => getSearchText(item).includes(normalizedGlobalQuery))
      .sort((left, right) => {
        const leftName = left.name.toLocaleLowerCase("zh-CN");
        const rightName = right.name.toLocaleLowerCase("zh-CN");
        const leftRank = leftName === normalizedGlobalQuery ? 0 : leftName.startsWith(normalizedGlobalQuery) ? 1 : leftName.includes(normalizedGlobalQuery) ? 2 : 3;
        const rightRank = rightName === normalizedGlobalQuery ? 0 : rightName.startsWith(normalizedGlobalQuery) ? 1 : rightName.includes(normalizedGlobalQuery) ? 2 : 3;
        return leftRank - rightRank || (right.score || 0) - (left.score || 0);
      });

    return {
      ai: matches.filter((item) => item.type === "ai"),
      plugin: matches.filter((item) => item.type === "plugin"),
      template: matches.filter((item) => item.type === "template" || item.type === "solution"),
    };
  }, [items, normalizedGlobalQuery]);
  const isSearching = Boolean(globalSearchResults);
  const globalResultCount = isSearching
    ? Object.values(globalSearchResults).reduce((total, resultItems) => total + resultItems.length, 0)
    : 0;

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
    setGlobalQuery("");
    setSearchParams((current) => {
      current.set("type", type);
      current.delete("goal");
      current.delete("query");
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

  const updateGlobalQuery = (value) => {
    setGlobalQuery(value);
    setSearchParams((current) => {
      if (value.trim()) current.set("query", value);
      else current.delete("query");
      return current;
    }, { replace: true });
  };

  return (
    <main className="page discover-page-new">
      <div className="page-heading discover-heading">
        <div className="discover-title">
          <span className="discover-title-icon"><img src="/nav-icons/discover.png" alt="" /></span>
          <h1>发现</h1>
        </div>
      </div>

      <nav className={`discover-category-nav${isSearching ? " is-searching" : ""}`} aria-label="内容类型">
        {discoverTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`discover-category-${tab.id}${!isSearching && activeTab === tab.id ? " is-active" : ""}`}
            onClick={() => switchTab(tab.id)}
          >
            <AppIcon name={tab.icon} size={14} />
            {tab.label}
          </button>
        ))}
        <GlobalSearch value={globalQuery} onChange={updateGlobalQuery} />
      </nav>

      <div className={`discover-content-layout${!isSearching && activeTab === "ai" ? " has-ai-nav" : ""}${!isSearching && activeTab === "plugin" ? " has-plugin-nav" : ""}${!isSearching && templateWorkspaceActive ? " has-template-nav" : ""}${isSearching ? " is-searching" : ""}`}>
      {!isSearching && templateWorkspaceActive && (
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
      {!isSearching && activeTab === "plugin" && (
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
      {!isSearching && activeTab === "ai" && (
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
      {!isSearching && activeTab === "plugin" && (
        <div className="catalog-toolbar plugin-toolbar" aria-label="插件筛选与排序">
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
      {!isSearching && isLegacy && (
        <div className="legacy-notice">
          原“模板中心”已升级为“发现”，你访问的模板内容仍可在这里查看。
        </div>
      )}

      {isSearching ? (
        <section className="discover-search-results" aria-live="polite">
          <header className="discover-search-summary">
            <div>
              <h2>搜索结果</h2>
              <span>“{globalQuery.trim()}”</span>
            </div>
            <strong>{globalResultCount} 个结果</strong>
          </header>
          {globalResultCount > 0 ? (
            <div className="discover-search-groups">
              <SearchResultGroup type="ai" label="AI 应用" items={globalSearchResults.ai} query={normalizedGlobalQuery} />
              <SearchResultGroup type="plugin" label="插件" items={globalSearchResults.plugin} query={normalizedGlobalQuery} />
              <SearchResultGroup type="template" label="模板与解决方案" items={globalSearchResults.template} query={normalizedGlobalQuery} />
            </div>
          ) : (
            <div className="catalog-empty discover-search-empty">
              <Search size={22} />
              <strong>没有找到相关内容</strong>
              <span>可以尝试更短或不同的关键词。</span>
            </div>
          )}
        </section>
      ) : templateWorkspaceActive && ["mine", "enterprise", "favorites"].includes(templateView) ? (
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
