import {
  ArrowRight,
  BookOpenText,
  Building2,
  CalendarDays,
  Check,
  Copy,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
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

function renderPromptContent(prompt) {
  return prompt.split(promptVariablePattern).map((part, index) => (
    promptVariables.includes(part) ? (
      <span className="assistant-prompt-variable" key={`${part}-${index}`}>{part}</span>
    ) : part
  ));
}

function PromptTemplateCard({
  template,
  copied,
  onCopy,
}) {
  return (
    <article className="assistant-prompt-card">
      <div className="assistant-prompt-scene">
        <h3>{template.title}</h3>
        <p>{template.scenario}</p>
      </div>
      <div className="assistant-prompt-content">
        <pre>{renderPromptContent(template.prompt)}</pre>
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

function buildPracticeFeed(content) {
  const groups = [
    content.customerStories.map((entry) => ({
      ...entry,
      kind: "customer",
      section: "stories",
      typeLabel: "客户案例",
      sourceLabel: "业务现场",
    })),
    content.liveClasses.map((entry) => ({
      ...entry,
      kind: "course",
      section: "stories",
      typeLabel: "直播回放",
      sourceLabel: "官方课程",
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
  const image = entry.image || entry.coverImage;

  return (
    <article className={`ai-practice-card is-${entry.kind}${featured ? " is-featured" : ""}`}>
      <button type="button" onClick={() => onOpen(entry.section, entry.id)} aria-label={`查看${entry.title}`} />
      {image ? (
        <img src={image} alt={entry.imageAlt || `${entry.title}内容封面`} />
      ) : (
        <div className="ai-practice-placeholder"><TypeIcon size={26} /></div>
      )}
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
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");
  const visibleTemplates = aiAssistantOfficialTemplates.filter((entry) => includesQuery(entry, normalizedQuery));
  const practiceFeed = buildPracticeFeed(discoveryEditorialContent)
    .filter((entry) => includesQuery(entry, normalizedQuery))
    .slice(0, 6);
  const [featuredPractice, ...secondaryPractices] = practiceFeed;

  const handleCopy = async (template) => {
    await copyText(template.prompt);
    setCopiedId(template.id);
    window.setTimeout(() => setCopiedId((current) => current === template.id ? "" : current), 1800);
  };

  return (
    <div className="discovery-journal is-utility-led">
      <section className="assistant-task-library" aria-labelledby="assistant-task-library-title">
        <header className="utility-section-heading">
          <div>
            <h2 id="assistant-task-library-title">Prompt 灵感</h2>
          </div>
        </header>

        {visibleTemplates.length > 0 ? (
          <div className="assistant-prompt-grid">
            {visibleTemplates.map((template) => (
              <PromptTemplateCard
                template={template}
                copied={copiedId === template.id}
                onCopy={handleCopy}
                key={template.id}
              />
            ))}
          </div>
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
  );
}
