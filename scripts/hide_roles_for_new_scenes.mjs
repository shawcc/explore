import fs from "node:fs";

const file = new URL("../src/main.jsx", import.meta.url);
let source = fs.readFileSync(file, "utf8");

function replaceOnce(before, after) {
  const first = source.indexOf(before);
  if (first === -1) throw new Error(`Missing target: ${before.slice(0, 100)}`);
  if (source.indexOf(before, first + before.length) !== -1) throw new Error("Target is not unique");
  source = source.replace(before, after);
}

replaceOnce(
  `  const exampleScenarioDesc = item.exampleScenarioDesc || item.scenario || item.desc;`,
  `  const exampleScenarioDesc = item.exampleScenarioDesc || item.scenario || item.desc;
  const showRoleContext = !(isSceneOnlyVariant && ["模板", "解决方案"].includes(item.kind));`,
);

replaceOnce(
  `                    <span>{rolesText}</span>`,
  `                    {showRoleContext && <span>{rolesText}</span>}`,
);

replaceOnce(
  `                        <div><span>角色</span><strong>{rolesText}</strong></div>`,
  `                        {showRoleContext && <div><span>角色</span><strong>{rolesText}</strong></div>}`,
);

replaceOnce(
  `      <nav className="filter-nav" aria-label="行业与角色筛选">`,
  `      <nav className="filter-nav" aria-label={isSceneOnlyVariant && activeTab === "新场景" ? "行业筛选" : "行业与角色筛选"}>`,
);

replaceOnce(
  `        <div className="filter-row">
          <span className="filter-label">角色</span>
          <div className="filter-scroll">
            <button type="button" className={\`cat-pill\${activeFilter === "全部" ? " is-active" : ""}\`} onClick={() => setActiveFilter("全部")}>全部</button>
            {roles.map((r) => (
              <button key={r} type="button" className={\`cat-pill\${activeFilter === r ? " is-active" : ""}\`} onClick={() => setActiveFilter(r)}>
                {r}
              </button>
            ))}
          </div>
        </div>`,
  `        {(!isSceneOnlyVariant || activeTab === "好方法") && (
          <div className="filter-row">
            <span className="filter-label">角色</span>
            <div className="filter-scroll">
              <button type="button" className={\`cat-pill\${activeFilter === "全部" ? " is-active" : ""}\`} onClick={() => setActiveFilter("全部")}>全部</button>
              {roles.map((r) => (
                <button key={r} type="button" className={\`cat-pill\${activeFilter === r ? " is-active" : ""}\`} onClick={() => setActiveFilter(r)}>
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}`,
);

const temporary = new URL("../src/.main.jsx.hide-roles.tmp", import.meta.url);
fs.writeFileSync(temporary, source);
fs.renameSync(temporary, file);
