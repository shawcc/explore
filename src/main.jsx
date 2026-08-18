import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell.jsx";
import { DemoProvider } from "./context/DemoContext.jsx";
import { AiAdminPage } from "./pages/AiAdminPage.jsx";
import { AiEditPage } from "./pages/AiEditPage.jsx";
import { DetailPage } from "./pages/OnlineDetailPage.jsx";
import { DiscoverPage } from "./pages/DiscoverPage.jsx";
import { DistributionPage } from "./pages/DistributionPage.jsx";
import "./styles.css";

function PlaceholderPage({ title }) {
  return (
    <main className="page placeholder-page">
      <h1>{title}</h1>
      <p>该页面仅用于模拟飞书项目一级导航。请点击“发现”进入本次评审内容。</p>
    </main>
  );
}

function App() {
  return (
    <DemoProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Navigate to="/discover" replace />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/discover/:type/:id" element={<DetailPage />} />
            <Route path="/admin/ai-apps" element={<AiAdminPage />} />
            <Route path="/admin/ai-apps/new" element={<AiEditPage />} />
            <Route path="/admin/ai-apps/:id/edit" element={<AiEditPage />} />
            <Route path="/admin/distribution" element={<DistributionPage />} />
            <Route path="/demo/settings" element={<Navigate to="/discover" replace />} />
            <Route path="/template-center" element={<Navigate to="/discover?type=template&from=template-center" replace />} />
            <Route path="/workbench" element={<PlaceholderPage title="工作台" />} />
            <Route path="/ai-assistant" element={<PlaceholderPage title="AI 助手" />} />
            <Route path="/my-work" element={<PlaceholderPage title="我的工作" />} />
            <Route path="/spaces" element={<PlaceholderPage title="空间" />} />
            <Route path="/favorites" element={<PlaceholderPage title="收藏" />} />
            <Route path="/teams" element={<PlaceholderPage title="团队" />} />
            <Route path="/notifications" element={<PlaceholderPage title="通知" />} />
            <Route path="*" element={<Navigate to="/discover" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DemoProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
