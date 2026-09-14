import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, Boxes, Sparkles, Target } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useDemo } from "../context/DemoContext.jsx";
import { AI_SCENE_GOALS, buildAiScenarioCatalog } from "../data/aiScenarios.js";
import { AppGlyph } from "./AppGlyph.jsx";

const sourceFilters = [
  { id: "all", label: "全部场景" },
  { id: "official-template", label: "官方模板" },
  { id: "application-scene", label: "应用场景" },
];

const formFilters = ["全部形态", "AI 节点", "AI 字段", "AI 操作"];

function sceneSearchText(scene) {
  return [
    scene.title,
    scene.description,
    scene.appName,
    scene.form,
    scene.role,
    scene.context,
    scene.outcome,
    ...(scene.tags || []),
  ].filter(Boolean).join(" ").toLocaleLowerCase("zh-CN");
}

function SceneCard({ scene, onNavigate }) {
  const official = scene.kind === "official-template";

  return (
    <article className={`ai-scene-card${official ? " is-official" : ""}`}>
      <Link
        to={scene.detailRoute}
        className="ai-scene-card-link"
        aria-label={`查看${scene.title}关联的${scene.appName}`}
        onClick={onNavigate}
      />
      <header>
        <AppGlyph item={scene.appItem} size={40} />
        <div>
          <span className="ai-scene-source">
            {official && <BadgeCheck size={13} />}
            {scene.sourceLabel}
          </span>
          <h3>{scene.title}</h3>
        </div>
      </header>
      <p>{scene.description}</p>
      <div className="ai-scene-tags">
        <span>{scene.form}</span>
        {scene.role && <span>{scene.role}</span>}
        {scene.tags.slice(0, 1).map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <footer>
        <span>由 {scene.appName} 提供</span>
        <strong>{official ? "查看 AI 助手" : "查看应用"}<ArrowRight size={14} /></strong>
      </footer>
    </article>
  );
}

function SceneSection({ goal, scenes, onNavigate }) {
  if (scenes.length === 0) return null;

  return (
    <section className="ai-scene-section" aria-labelledby={`ai-scene-goal-${goal.id}`}>
      <header>
        <div>
          <h2 id={`ai-scene-goal-${goal.id}`}>{goal.label}</h2>
          <p>{goal.description}</p>
        </div>
        <span>{scenes.length} 个场景</span>
      </header>
      <div className="ai-scene-grid">
        {scenes.map((scene) => <SceneCard key={scene.id} scene={scene} onNavigate={onNavigate} />)}
      </div>
    </section>
  );
}

export function AiScenarioWorkspace({ items, query = "" }) {
  const location = useLocation();
  const { setLastDiscoverLocation } = useDemo();
  const [source, setSource] = useState("all");
  const [goal, setGoal] = useState("all");
  const [form, setForm] = useState("全部形态");
  const catalog = useMemo(() => buildAiScenarioCatalog(items), [items]);
  const normalizedQuery = query.trim().toLocaleLowerCase("zh-CN");

  const sourceScenes = source === "all"
    ? catalog.all
    : catalog.all.filter((scene) => scene.kind === source);
  const goalCounts = Object.fromEntries(AI_SCENE_GOALS.map((item) => [
    item.id,
    sourceScenes.filter((scene) => scene.goalId === item.id).length,
  ]));
  const goalScenes = goal === "all"
    ? sourceScenes
    : sourceScenes.filter((scene) => scene.goalId === goal);
  const formCounts = Object.fromEntries(formFilters.map((label) => [
    label,
    label === "全部形态"
      ? goalScenes.length
      : goalScenes.filter((scene) => scene.form === label).length,
  ]));
  const visibleScenes = goalScenes.filter((scene) => (
    (form === "全部形态" || scene.form === form)
    && (!normalizedQuery || sceneSearchText(scene).includes(normalizedQuery))
  ));
  const officialScenes = visibleScenes.filter((scene) => scene.kind === "official-template");
  const applicationScenes = visibleScenes.filter((scene) => scene.kind === "application-scene");

  const rememberLocation = () => {
    const current = `${location.pathname}${location.search}${location.hash}`;
    setLastDiscoverLocation(current);
    sessionStorage.setItem("discover-return", current);
  };

  const selectSource = (nextSource) => {
    setSource(nextSource);
    setGoal("all");
    setForm(nextSource === "official-template" ? "AI 节点" : "全部形态");
  };

  const selectGoal = (nextGoal) => {
    setGoal(nextGoal);
    setForm("全部形态");
  };

  return (
    <div className="ai-scenario-workspace">
      <aside className="ai-scenario-nav" aria-label="AI 场景筛选">
        <div>
          <strong>场景来源</strong>
          {sourceFilters.map((filter) => {
            const count = filter.id === "all"
              ? catalog.all.length
              : catalog.all.filter((scene) => scene.kind === filter.id).length;
            return (
              <button
                type="button"
                className={source === filter.id ? "is-active" : ""}
                aria-pressed={source === filter.id}
                onClick={() => selectSource(filter.id)}
                key={filter.id}
              >
                <span>{filter.label}</span><small>{count}</small>
              </button>
            );
          })}
        </div>
        <div>
          <strong>工作目标</strong>
          <button
            type="button"
            className={goal === "all" ? "is-active" : ""}
            aria-pressed={goal === "all"}
            onClick={() => selectGoal("all")}
          >
            <span>全部目标</span><small>{sourceScenes.length}</small>
          </button>
          {AI_SCENE_GOALS.filter((item) => goalCounts[item.id] > 0).map((item) => (
            <button
              type="button"
              className={goal === item.id ? "is-active" : ""}
              aria-pressed={goal === item.id}
              onClick={() => selectGoal(item.id)}
              key={item.id}
            >
              <span>{item.label}</span><small>{goalCounts[item.id]}</small>
            </button>
          ))}
        </div>
      </aside>

      <div className="ai-scenario-main">
        <header className="ai-scenario-overview">
          <div>
            <span><Target size={15} />按工作任务发现 AI</span>
            <h2>选择场景，直接采用经过整理的 AI 能力</h2>
          </div>
          <dl>
            <div><dt>AI 能力</dt><dd>{catalog.applicationScenes.length}</dd></div>
            <div><dt>官方模板</dt><dd>{catalog.officialTemplates.length}</dd></div>
          </dl>
        </header>

        <div className="ai-scenario-toolbar" aria-label="AI 形态筛选">
          <div>
            <Boxes size={15} />
            <span>使用形态</span>
          </div>
          <div className="ai-scenario-form-tabs">
            {formFilters.filter((label) => label === "全部形态" || formCounts[label] > 0).map((label) => (
              <button
                type="button"
                className={form === label ? "is-active" : ""}
                aria-pressed={form === label}
                onClick={() => setForm(label)}
                key={label}
              >
                {label}<small>{formCounts[label]}</small>
              </button>
            ))}
          </div>
        </div>

        {officialScenes.length > 0 && (
          <section className="ai-scene-section ai-scene-official-section" aria-labelledby="ai-official-scenes">
            <header>
              <div>
                <h2 id="ai-official-scenes"><Sparkles size={17} />AI 助手官方模板</h2>
                <p>来自 AI 助手节点的现成业务场景，可作为团队配置起点</p>
              </div>
              <span>{officialScenes.length} 个模板</span>
            </header>
            <div className="ai-scene-grid is-official-grid">
              {officialScenes.map((scene) => <SceneCard key={scene.id} scene={scene} onNavigate={rememberLocation} />)}
            </div>
          </section>
        )}

        {AI_SCENE_GOALS.map((item) => (
          <SceneSection
            key={item.id}
            goal={item}
            scenes={applicationScenes.filter((scene) => scene.goalId === item.id)}
            onNavigate={rememberLocation}
          />
        ))}

        {visibleScenes.length === 0 && (
          <div className="ai-scene-empty">
            <Target size={24} />
            <strong>没有匹配的 AI 场景</strong>
            <span>可以调整工作目标、使用形态或搜索词。</span>
          </div>
        )}
      </div>
    </div>
  );
}
