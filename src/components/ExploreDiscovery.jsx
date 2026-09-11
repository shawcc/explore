import { ArrowLeft } from "lucide-react";
import { AiScenarioWorkspace } from "./AiScenarioWorkspace.jsx";
import { DiscoveryEditorial } from "./DiscoveryEditorial.jsx";
import { ExploreCatalog, ExploreContentHub } from "./ExploreContentHub.jsx";

const contentSections = ["stories", "courses", "practices", "customers", "updates"];

export function ExploreDiscovery({
  items,
  query = "",
  section = "home",
  contentId = "",
  catalog = "ai",
  onNavigate,
}) {
  const navigateHome = () => onNavigate({ section: "home" });

  return (
    <section className={`explore-discovery${section === "scenarios" ? " is-scenario-view" : ""}`} aria-label="探索发现">
      {section === "home" && (
        <DiscoveryEditorial
          items={items}
          query={query}
          onOpenSection={(nextSection) => onNavigate({ section: nextSection })}
          onOpenContent={(nextSection, item) => onNavigate({ section: nextSection, item })}
        />
      )}

      {contentSections.includes(section) && (
        <ExploreContentHub
          items={items}
          query={query}
          section={section}
          contentId={contentId}
          onOpenItem={(item) => onNavigate({ section, item })}
          onBack={() => onNavigate({ section })}
          onHome={navigateHome}
        />
      )}

      {section === "catalog" && (
        <ExploreCatalog
          items={items}
          query={query}
          catalog={catalog}
        />
      )}

      {section === "scenarios" && (
        <>
          <button type="button" className="explore-back-button" onClick={navigateHome}>
            <ArrowLeft size={15} />返回发现首页
          </button>
          <AiScenarioWorkspace items={items.filter((item) => item.type === "ai")} query={query} />
        </>
      )}
    </section>
  );
}
