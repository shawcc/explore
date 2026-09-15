import {
  ArrowRight,
  BookOpenText,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Maximize2,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { aiAssistantOfficialTemplates } from "../data/aiOfficialTemplates.js";
import { discoveryEditorialContent } from "../data/discoveryEditorial.js";
import { ProductUpdates } from "./ProductUpdates.jsx";

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
  query = "",
  onOpenSection,
  onOpenContent,
}) {
  const [copiedId, setCopiedId] = useState("");
  const [openTemplate, setOpenTemplate] = useState(null);
  const [showAllTemplates, setShowAllTemplates] = useState(false);
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
  const visibleTemplates = aiAssistantOfficialTemplates.filter((entry) => includesQuery(entry, normalizedQuery));
  const practiceFeed = buildPracticeFeed(discoveryEditorialContent)
    .filter((entry) => includesQuery(entry, normalizedQuery))
    .slice(0, 4);
  const [featuredPractice, ...secondaryPractices] = practiceFeed;
  const isFilteringTemplates = Boolean(normalizedQuery);
  const featuredTemplate = visibleTemplates.find(
    (template) => template.id === "requirement-test-case-design",
  ) || visibleTemplates[0];
  const quickTemplates = visibleTemplates
    .filter((template) => template.id !== featuredTemplate?.id)
    .slice(0, 3);
  const previewTemplateIds = new Set([
    featuredTemplate?.id,
    ...quickTemplates.map((template) => template.id),
  ]);
  const remainingTemplates = visibleTemplates.filter(
    (template) => !previewTemplateIds.has(template.id),
  );

  const handleCopy = async (template) => {
    await copyText(template.prompt);
    setCopiedId(template.id);
    window.setTimeout(() => setCopiedId((current) => current === template.id ? "" : current), 1800);
  };

  return (
    <>
      <div className="discovery-journal is-utility-led">
      <section className="assistant-task-library" aria-labelledby="assistant-task-library-title">
        <header className="utility-section-heading">
          <div>
            <span>AI 助手最佳实践</span>
            <h2 id="assistant-task-library-title">Prompt 灵感</h2>
            <small>{visibleTemplates.length} 个官方模板</small>
          </div>
          {!isFilteringTemplates && visibleTemplates.length > 4 && (
            <button
              type="button"
              aria-expanded={showAllTemplates}
              onClick={() => setShowAllTemplates((current) => !current)}
            >
              {showAllTemplates ? "收起全部" : `查看全部 ${visibleTemplates.length} 个`}
              {showAllTemplates ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          )}
        </header>

        {visibleTemplates.length > 0 ? (
          isFilteringTemplates ? (
            <div className="assistant-prompt-archive is-search-result">
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
            <>
              <div className="assistant-prompt-editorial">
                <PromptTemplateCard
                  template={featuredTemplate}
                  copied={copiedId === featuredTemplate.id}
                  onCopy={handleCopy}
                  onOpen={setOpenTemplate}
                  variant="featured"
                />
                <div className="assistant-prompt-quick-list">
                  {quickTemplates.map((template) => (
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
              </div>
              {showAllTemplates && remainingTemplates.length > 0 && (
                <div className="assistant-prompt-archive">
                  {remainingTemplates.map((template) => (
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
              )}
            </>
          )
        ) : (
          <div className="journal-empty">
            <Sparkles size={20} />
            <strong>没有匹配的 Prompt</strong>
          </div>
        )}
      </section>

      <div id="product-updates">
        <ProductUpdates
          query={query}
          compact
          onBrowseAll={() => onOpenSection("updates")}
          onOpenUpdate={(item) => onOpenContent("updates", item)}
        />
      </div>

      <section className="ai-practice-section" aria-labelledby="ai-practice-title">
        <header className="utility-section-heading">
          <div>
            <span>课程 · 案例 · 方法</span>
            <h2 id="ai-practice-title">实践与案例</h2>
          </div>
          <button type="button" onClick={() => onOpenSection("stories")}>
            查看全部<ArrowRight size={15} />
          </button>
        </header>
        {practiceFeed.length > 0 ? (
          <div className="ai-practice-showcase">
            <PracticeCard entry={featuredPractice} onOpen={onOpenContent} featured />
            <div className="ai-practice-grid">
              {secondaryPractices.map((entry) => (
                <PracticeCard entry={entry} onOpen={onOpenContent} key={`${entry.kind}-${entry.id}`} />
              ))}
            </div>
          </div>
        ) : (
          <div className="journal-empty">
            <BookOpenText size={20} />
            <strong>没有匹配的实践内容</strong>
          </div>
        )}
      </section>
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
