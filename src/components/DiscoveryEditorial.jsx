import {
  ArrowRight,
  BookOpenText,
  Building2,
  CalendarDays,
  Check,
  Copy,
  Maximize2,
  PackageOpen,
  Puzzle,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { aiAssistantOfficialTemplates } from "../data/aiOfficialTemplates.js";
import { discoveryEditorialContent } from "../data/discoveryEditorial.js";
import { productReleaseUpdates } from "../data/productReleases.js";
import { SupplyCard } from "./SupplyCard.jsx";

function includesQuery(content, query) {
  if (!query) return true;
  return Object.values(content)
    .flat(2)
    .filter((value) => typeof value === "string")
    .join(" ")
    .toLocaleLowerCase("zh-CN")
    .includes(query);
}

function formatDate(value) {
  if (!value) return "";
  const [, month, day] = value.split("-");
  return `${Number(month)} 月 ${Number(day)} 日`;
}

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

const promptVariables = ["填入云文档地址", "指定节点字段", "指定字段", "PRD字段", "SRD字段", "节点名称"];
const promptVariablePattern = new RegExp(`(${promptVariables.join("|")})`, "g");

function FieldVariableIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16">
      <rect height="8" rx="1.5" width="13" x="1.5" y="4" />
      <path d="M5 6v4M4.2 6h1.6M4.2 10h1.6" />
    </svg>
  );
}

function renderPromptContent(prompt) {
  const parts = prompt.split(promptVariablePattern);

  return parts.map((part, index) => {
    if (promptVariables.includes(part)) {
      return (
        <span className="assistant-prompt-variable" key={`${part}-${index}`}>
          <FieldVariableIcon />
          {part}
        </span>
      );
    }

    let content = part;
    if (promptVariables.includes(parts[index - 1])) content = content.replace(/^\s+/, " ");
    if (promptVariables.includes(parts[index + 1])) content = content.replace(/\s+$/, " ");
    return content;
  });
}

function PromptTemplateCard({
  template,
  copied,
  onCopy,
  onOpen,
  variant = "",
}) {
  const promptRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const prompt = promptRef.current;
    if (!prompt) return undefined;

    const measure = () => {
      setIsOverflowing(prompt.scrollHeight > prompt.clientHeight + 1);
    };
    const observer = new ResizeObserver(measure);

    measure();
    observer.observe(prompt);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [template.prompt]);

  return (
    <article className={`assistant-prompt-card${variant ? ` is-${variant}` : ""}`}>
      {variant === "featured" && (
        <div className="assistant-prompt-feature-media">
          <img
            src="/ai-details/node-ai-assistant-hero.jpg"
            alt="AI 助手官方应用场景"
          />
        </div>
      )}
      <div className="assistant-prompt-scene">
        <h3>{template.title}</h3>
        <p>{template.scenario}</p>
      </div>
      <div className="assistant-prompt-content">
        <div className={`assistant-prompt-preview${isOverflowing ? " is-overflowing" : ""}`}>
          <pre ref={promptRef}>{renderPromptContent(template.prompt)}</pre>
          {isOverflowing && (
            <button
              type="button"
              className="assistant-prompt-expand"
              onClick={() => onOpen(template)}
              title="查看完整 Prompt"
              aria-label={`查看${template.title}完整 Prompt`}
            >
              <Maximize2 size={15} />
            </button>
          )}
        </div>
        <footer className="assistant-prompt-footer">
          <div className="assistant-prompt-surfaces" aria-label="适用形态">
            <span>{template.subtype === "AI节点" ? "AI 节点" : template.subtype}</span>
          </div>
          <button
            type="button"
            className={copied ? "is-copied" : ""}
            onClick={() => onCopy(template)}
            title={copied ? "已复制" : "复制提示词"}
            aria-label={`复制${template.title}提示词`}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </footer>
      </div>
    </article>
  );
}

function PromptDialog({ template, copied, onClose, onCopy }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("has-prompt-dialog");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("has-prompt-dialog");
    };
  }, [onClose]);

  return (
    <div className="assistant-prompt-dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <article
        className="assistant-prompt-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-prompt-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header>
          <div>
            <span>AI 节点</span>
            <h2 id="assistant-prompt-dialog-title">{template.title}</h2>
            <p>{template.scenario}</p>
          </div>
          <button type="button" onClick={onClose} title="关闭" aria-label="关闭完整 Prompt">
            <X size={18} />
          </button>
        </header>
        <div className="assistant-prompt-dialog-content">
          <pre>{renderPromptContent(template.prompt)}</pre>
        </div>
        <footer>
          <span>完整 Prompt</span>
          <button
            type="button"
            className={copied ? "is-copied" : ""}
            onClick={() => onCopy(template)}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "已复制" : "复制 Prompt"}
          </button>
        </footer>
      </article>
    </div>
  );
}

function buildPracticeFeed(content) {
  const groups = [
    content.liveClasses.map((entry) => ({
      ...entry,
      kind: "course",
      section: "stories",
      typeLabel: "直播回放",
      sourceLabel: "官方课程",
    })),
    content.customerStories.map((entry) => ({
      ...entry,
      kind: "customer",
      section: "stories",
      typeLabel: "客户案例",
      sourceLabel: "业务现场",
    })),
    content.bestPractices.map((entry) => ({
      ...entry,
      kind: "practice",
      section: "stories",
      typeLabel: "最佳实践",
      sourceLabel: entry.label,
    })),
  ];
  const longest = Math.max(...groups.map((group) => group.length));

  return Array.from({ length: longest }, (_, index) => groups.map((group) => group[index]))
    .flat()
    .filter(Boolean);
}

function uniqueByBaseId(items) {
  const seen = new Set();

  return items.filter((item) => {
    const key = item.baseId || item.id;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function MarketplaceSection({
  title,
  count,
  actionLabel,
  onAction,
  children,
  className = "",
}) {
  return (
    <section className={`marketplace-section${className ? ` ${className}` : ""}`}>
      <header className="marketplace-section-header">
        <div>
          <h2>{title}</h2>
          {count !== undefined && <span>{count}</span>}
        </div>
        <button type="button" onClick={onAction}>
          {actionLabel || "查看更多"}<ArrowRight size={15} />
        </button>
      </header>
      {children}
    </section>
  );
}

function SkillCard({ template, onOpen }) {
  return (
    <article className="marketplace-skill-card">
      <button
        type="button"
        aria-label={`查看${template.title}`}
        onClick={() => onOpen(template)}
      />
      <div className="marketplace-skill-preview" aria-hidden="true">
        <span><Sparkles size={13} />Agent Skill</span>
        <p>{template.prompt}</p>
      </div>
      <div className="marketplace-skill-copy">
        <h3>{template.title}</h3>
        <p>{template.scenario}</p>
        <footer>
          <span>{template.subtype === "AI节点" ? "AI 节点" : template.subtype}</span>
          <ArrowRight size={14} />
        </footer>
      </div>
    </article>
  );
}

function PracticeCard({ entry, onOpen, featured = false }) {
  const TypeIcon = entry.kind === "customer"
    ? Building2
    : entry.kind === "course"
      ? CalendarDays
      : BookOpenText;
  const image = entry.coverImage || entry.image;

  return (
    <article className={`ai-practice-card is-${entry.kind}${featured ? " is-featured" : ""}`}>
      <button type="button" onClick={() => onOpen(entry.section, entry.id)} aria-label={`查看${entry.title}`} />
      <div className="ai-practice-media">
        {image ? (
          <img src={image} alt={entry.imageAlt || `${entry.title}内容封面`} />
        ) : (
          <div className="ai-practice-placeholder"><TypeIcon size={26} /></div>
        )}
      </div>
      <div className="ai-practice-copy">
        <div className="ai-practice-meta">
          <span><TypeIcon size={13} />{entry.typeLabel}</span>
          <small>{formatDate(entry.date) || entry.sourceLabel}</small>
        </div>
        <h3>{entry.title}</h3>
        <p>{entry.summary}</p>
        <footer>
          <span>{entry.customer || entry.speaker || entry.sourceLabel}</span>
          <ArrowRight size={15} />
        </footer>
      </div>
    </article>
  );
}

export function DiscoveryEditorial({
  items = [],
  query = "",
  onOpenSection,
  onOpenContent,
  onOpenCatalog,
}) {
  const [copiedId, setCopiedId] = useState("");
  const [openTemplate, setOpenTemplate] = useState(null);
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
  const visibleTemplates = aiAssistantOfficialTemplates.filter((entry) => includesQuery(entry, normalizedQuery));
  const practiceFeed = buildPracticeFeed(discoveryEditorialContent)
    .filter((entry) => includesQuery(entry, normalizedQuery))
    .slice(0, 3);
  const visibleItems = items.filter(
    (entry) => !entry.isHidden && includesQuery(entry, normalizedQuery),
  );
  const templateItems = [
    ...visibleItems.filter((entry) => entry.type === "solution"),
    ...visibleItems.filter((entry) => entry.type === "template"),
  ].slice(0, 4);
  const aiItems = uniqueByBaseId(
    visibleItems.filter((entry) => entry.type === "ai"),
  ).slice(0, 6);
  const pluginItems = visibleItems
    .filter((entry) => entry.type === "plugin")
    .sort((left, right) => (right.usageCount || 0) - (left.usageCount || 0))
    .slice(0, 6);
  const featuredUpdate = productReleaseUpdates[0];

  const handleCopy = async (template) => {
    await copyText(template.prompt);
    setCopiedId(template.id);
    window.setTimeout(() => setCopiedId((current) => current === template.id ? "" : current), 1800);
  };

  return (
    <>
      <div className="discovery-marketplace-home">
        {!normalizedQuery && (
          <section className="marketplace-promo-grid" aria-label="精选推荐">
            <article className="marketplace-promo is-primary">
              <div className="marketplace-promo-copy">
                <span><Sparkles size={14} />飞书项目 AI</span>
                <h2>轻应用现已支持 AI 搭建</h2>
                <p>基于真实项目数据，用自然语言快速搭建业务应用。</p>
                <button type="button" onClick={() => onOpenCatalog("ai")}>
                  了解 AI 应用<ArrowRight size={15} />
                </button>
              </div>
              <img src="/product-updates/2026-03-lite-app.webp" alt="飞书项目轻应用产品界面" />
            </article>
            <article className="marketplace-promo is-secondary">
              <button
                type="button"
                aria-label={`查看${featuredUpdate.title}`}
                onClick={() => onOpenContent("updates", featuredUpdate.id)}
              />
              <img src={featuredUpdate.image} alt={featuredUpdate.imageAlt} />
              <div>
                <span>产品上新</span>
                <h2>{featuredUpdate.title}</h2>
                <p>{featuredUpdate.summary}</p>
              </div>
            </article>
          </section>
        )}

        {templateItems.length > 0 && (
          <MarketplaceSection
            title="热门模板"
            count={`${templateItems.length} 个精选`}
            onAction={() => onOpenCatalog("template")}
          >
            <div className="marketplace-template-grid">
              {templateItems.map((item) => <SupplyCard item={item} key={item.id} />)}
            </div>
          </MarketplaceSection>
        )}

        {visibleTemplates.length > 0 && (
          <MarketplaceSection
            title="热门 Agent Skills"
            count={`${visibleTemplates.length} 个官方技能`}
            onAction={() => onOpenSection("skills")}
          >
            <div className="marketplace-skill-grid">
              {visibleTemplates.slice(0, 4).map((template) => (
                <SkillCard template={template} onOpen={setOpenTemplate} key={template.id} />
              ))}
            </div>
          </MarketplaceSection>
        )}

        {aiItems.length > 0 && (
          <MarketplaceSection
            title="热门 AI 应用"
            count="覆盖项目关键流程"
            onAction={() => onOpenCatalog("ai")}
          >
            <div className="marketplace-directory-grid is-ai">
              {aiItems.map((item) => <SupplyCard item={item} key={item.id} />)}
            </div>
          </MarketplaceSection>
        )}

        {pluginItems.length > 0 && (
          <MarketplaceSection
            title="热门插件"
            count="连接项目与外部工具"
            onAction={() => onOpenCatalog("plugin")}
          >
            <div className="marketplace-directory-grid is-plugin">
              {pluginItems.map((item) => <SupplyCard item={item} key={item.id} />)}
            </div>
          </MarketplaceSection>
        )}

        {practiceFeed.length > 0 && (
          <MarketplaceSection
            title="实践与案例"
            count="课程 · 案例 · 方法"
            onAction={() => onOpenSection("stories")}
          >
            <div className="marketplace-practice-grid">
              {practiceFeed.map((entry) => (
                <PracticeCard entry={entry} onOpen={onOpenContent} key={`${entry.kind}-${entry.id}`} />
              ))}
            </div>
          </MarketplaceSection>
        )}

        {normalizedQuery
          && templateItems.length === 0
          && visibleTemplates.length === 0
          && aiItems.length === 0
          && pluginItems.length === 0
          && practiceFeed.length === 0 && (
          <div className="journal-empty">
            <PackageOpen size={22} />
            <strong>没有找到相关资源</strong>
            <span>可以尝试更短或不同的关键词。</span>
          </div>
        )}
      </div>
      {openTemplate && createPortal(
        <PromptDialog
          template={openTemplate}
          copied={copiedId === openTemplate.id}
          onClose={() => setOpenTemplate(null)}
          onCopy={handleCopy}
        />,
        document.body,
      )}
    </>
  );
}

export function AgentSkillsCatalog({ query = "" }) {
  const [copiedId, setCopiedId] = useState("");
  const [openTemplate, setOpenTemplate] = useState(null);
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
  const visibleTemplates = aiAssistantOfficialTemplates.filter(
    (entry) => includesQuery(entry, normalizedQuery),
  );

  const handleCopy = async (template) => {
    await copyText(template.prompt);
    setCopiedId(template.id);
    window.setTimeout(() => setCopiedId((current) => current === template.id ? "" : current), 1800);
  };

  return (
    <>
      <section className="agent-skills-catalog" aria-labelledby="agent-skills-title">
        <header>
          <div>
            <span><Puzzle size={15} />官方能力库</span>
            <h2 id="agent-skills-title">Agent Skills</h2>
            <p>把成熟的项目工作方法直接交给 AI 助手执行。</p>
          </div>
          <strong>{visibleTemplates.length} 个技能</strong>
        </header>
        {visibleTemplates.length > 0 ? (
          <div className="agent-skills-grid">
            {visibleTemplates.map((template) => (
              <PromptTemplateCard
                template={template}
                copied={copiedId === template.id}
                onCopy={handleCopy}
                onOpen={setOpenTemplate}
                variant="compact"
                key={template.id}
              />
            ))}
          </div>
        ) : (
          <div className="journal-empty">
            <Sparkles size={20} />
            <strong>没有匹配的 Agent Skill</strong>
          </div>
        )}
      </section>
      {openTemplate && createPortal(
        <PromptDialog
          template={openTemplate}
          copied={copiedId === openTemplate.id}
          onClose={() => setOpenTemplate(null)}
          onCopy={handleCopy}
        />,
        document.body,
      )}
    </>
  );
}
