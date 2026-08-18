import { MoreHorizontal, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppIcon } from "../components/AppIcon.jsx";
import { useDemo } from "../context/DemoContext.jsx";

export function AiAdminPage() {
  const navigate = useNavigate();
  const { adminItems, setAdminItems, notify } = useDemo();
  const rows = adminItems.filter((item) => item.type === "ai");

  const updateItem = (id, patch, message) => {
    setAdminItems((items) => items.map((item) => item.id === id ? { ...item, ...patch } : item));
    notify(message);
  };

  return (
    <main className="page admin-page">
      <div className="page-heading">
        <div>
          <h1>AI 应用管理</h1>
          <p>分别维护 AI 字段、AI 节点和 AI 操作应用</p>
        </div>
        <button type="button" className="primary-button" onClick={() => navigate("/admin/ai-apps/new")}><Plus size={16} />新建 AI 应用</button>
      </div>

      <div className="admin-summary">
        <div><span>全部应用</span><strong>{rows.length}</strong></div>
        <div><span>已发布</span><strong>{rows.filter((item) => item.status === "已发布").length}</strong></div>
        <div><span>草稿</span><strong>1</strong></div>
        <div><span>发现页展示</span><strong>{rows.filter((item) => !item.isHidden).length}</strong></div>
      </div>

      <div className="table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>AI 应用</th>
                <th>发布状态</th>
                <th>应用类型</th>
                <th>能力配置</th>
                <th>内容负责人</th>
                <th>更新时间</th>
                <th>发现展示</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => (
                <tr key={item.id}>
                  <td>
                    <div className="table-item-name">
                      <span className="mini-app-icon"><AppIcon name={item.icon} size={18} /></span>
                      <div><strong>{item.name}</strong><span>{item.summary}</span></div>
                    </div>
                  </td>
                  <td><span className={`status-pill status-${item.status === "已发布" ? "published" : "offline"}`}>{item.status}</span></td>
                  <td><div className="tag-list compact"><span>{item.aiForm}</span></div></td>
                  <td><button type="button" className="text-button" onClick={() => notify("已打开该应用的专属输入、处理和输出配置", "info")}>查看配置</button></td>
                  <td>{item.owner}</td>
                  <td>2026-08-{String(9 - (index % 4)).padStart(2, "0")} 16:32</td>
                  <td>
                    <label className="inline-switch">
                      <input type="checkbox" checked={!item.isHidden} onChange={(event) => updateItem(item.id, { isHidden: !event.target.checked }, event.target.checked ? "已在发现页展示" : "已从发现页隐藏")} />
                      <span />
                    </label>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button type="button" onClick={() => navigate(`/admin/ai-apps/${item.id}/edit`)}>编辑</button>
                      <button type="button" onClick={() => updateItem(item.id, { status: item.status === "已发布" ? "已下线" : "已发布" }, item.status === "已发布" ? "应用已下线" : "应用已发布")}>
                        {item.status === "已发布" ? "下线" : "发布"}
                      </button>
                      <button type="button" aria-label="更多操作"><MoreHorizontal size={17} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
