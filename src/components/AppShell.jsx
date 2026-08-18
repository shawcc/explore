import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  HelpCircle,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Settings2,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { AppIcon } from "./AppIcon.jsx";
import { useDemo } from "../context/DemoContext.jsx";

const primaryNav = [
  ["主页", "/workbench", "home", "/nav-icons/home.png"],
  ["AI 助手", "/ai-assistant", "ai", "/nav-icons/ai-assistant.png"],
  ["我的工作", "/my-work", "account", "/nav-icons/my-work.png"],
  ["团队", "/teams", "teams", "/nav-icons/team.png"],
  ["发现", "/discover", "discover", "/nav-icons/discover.png"],
];

const workspaceNav = [
  ["空间主页", "database"],
  ["需求", "check"],
  ["缺陷", "file-check"],
  ["人员排期", "timesheet"],
  ["图表", "chart"],
  ["空间配置", "settings"],
];

export function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstVisit, setFirstVisit, toast, setToast } = useDemo();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast, setToast]);

  const inAdmin = location.pathname.startsWith("/admin");

  return (
    <div className={`app-frame${sidebarCollapsed ? " sidebar-is-collapsed" : ""}`}>
      <aside className="product-sidebar">
        <div className="sidebar-topbar">
          <button className="brand" type="button" onClick={() => navigate("/discover")} aria-label="返回发现">
          <span className="brand-mark"><span /><span /><span /></span>
          </button>
          <button
            type="button"
            className="sidebar-collapse"
            aria-label={sidebarCollapsed ? "展开侧边栏" : "收起侧边栏"}
            aria-expanded={!sidebarCollapsed}
            onClick={() => setSidebarCollapsed((current) => !current)}
          >
            {sidebarCollapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          </button>
        </div>
        <label className="sidebar-search">
          <Search size={15} />
          <input aria-label="搜索" placeholder="搜索（⌘ + K）" />
        </label>
        <nav className="global-nav" aria-label="一级导航">
          {primaryNav.map(([label, path, icon, iconSrc]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `global-nav-item${isActive || (path === "/discover" && inAdmin) ? " is-active" : ""}`}
            >
              <span className={`nav-product-icon nav-product-icon-${icon}`}>
                <img src={iconSrc} alt="" />
              </span>
              <span>{label}</span>
              {label === "发现" && location.pathname === "/discover" && firstVisit && (
                <span className="upgrade-popover" role="status">
                  <button
                    type="button"
                    aria-label="关闭升级提示"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      setFirstVisit(false);
                    }}
                  >
                    <X size={14} />
                  </button>
                  <strong>模板中心已升级为发现</strong>
                  <span>模板仍可在本页查看</span>
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="workspace-divider" />
        <button type="button" className="workspace-switcher">
          <span className="workspace-avatar">超</span>
          <strong>超级多语言</strong>
          <ChevronDown size={13} />
          <SlidersHorizontal size={14} />
        </button>
        <div className="sidebar-section-title"><ChevronDown size={12} />功能</div>
        <nav className="workspace-nav" aria-label="空间功能">
          {workspaceNav.map(([label, icon]) => (
            <button type="button" key={label}>
              <AppIcon name={icon} size={15} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-section muted">
          <button type="button"><ChevronRight size={12} />空间置顶 <span>＋</span></button>
          <small>暂无数据</small>
        </div>
        <div className="sidebar-section muted">
          <button type="button"><ChevronRight size={12} />个人 <span>＋</span></button>
          <small>暂无数据</small>
        </div>

        <div className="sidebar-footer">
          <button type="button" className="icon-button" aria-label="帮助"><HelpCircle size={18} /></button>
        </div>
      </aside>

      {inAdmin && (
        <aside className="admin-sidebar">
          <div className="admin-title">
            <Settings2 size={18} />
            <span>发现管理</span>
          </div>
          <NavLink to="/admin/ai-apps">AI 应用管理</NavLink>
          <NavLink to="/admin/distribution">渠道排序管理</NavLink>
          <NavLink to="/discover">返回用户页面</NavLink>
        </aside>
      )}

      <div className={inAdmin ? "app-content with-admin-sidebar" : "app-content"}>
        <Outlet />
      </div>

      {toast && (
        <div className={`toast toast-${toast.tone}`} role="status" aria-live="polite">
          {toast.message}
        </div>
      )}
    </div>
  );
}
