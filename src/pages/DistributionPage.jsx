import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Eye, GripVertical, Pin, PinOff } from "lucide-react";
import { useDemo } from "../context/DemoContext.jsx";
import { categoryOrder, TYPE_META } from "../data/mockData.js";

export function DistributionPage() {
  const { adminItems, setAdminItems, notify } = useDemo();
  const [activeType, setActiveType] = useState("ai");
  const [preview, setPreview] = useState(false);
  const [draggedId, setDraggedId] = useState(null);

  const rows = useMemo(() => adminItems
    .filter((item) => item.type === activeType)
    .sort((a, b) => {
      if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
      if (a.isPinned) return (a.pinOrder || 99) - (b.pinOrder || 99);
      return b.score - a.score;
    }), [adminItems, activeType]);
  const pinnedCount = rows.filter((item) => item.isPinned).length;

  const patchItem = (id, patch) => setAdminItems((items) => items.map((item) => item.id === id ? { ...item, ...patch } : item));

  const togglePin = (item) => {
    if (!item.isPinned && pinnedCount >= 3) {
      notify("每类最多置顶 3 个内容，请先取消其他置顶", "error");
      return;
    }
    if (!item.isPinned && !item.pinEndAt) {
      patchItem(item.id, {
        isPinned: true,
        pinOrder: pinnedCount + 1,
        pinStartAt: "2026-08-11",
        pinEndAt: "2026-09-11",
      });
      notify("已置顶，并设置默认一个月后失效");
      return;
    }
    patchItem(item.id, { isPinned: false, pinOrder: null });
    notify("已取消置顶");
  };

  const move = (item, direction) => {
    const pinned = rows.filter((row) => row.isPinned);
    const index = pinned.findIndex((row) => row.id === item.id);
    const target = pinned[index + direction];
    if (!target) return;
    patchItem(item.id, { pinOrder: target.pinOrder });
    patchItem(target.id, { pinOrder: item.pinOrder });
  };

  const dropOn = (target) => {
    if (!draggedId || draggedId === target.id || !target.isPinned) return;
    const source = rows.find((row) => row.id === draggedId);
    if (!source?.isPinned) return;
    patchItem(source.id, { pinOrder: target.pinOrder });
    patchItem(target.id, { pinOrder: source.pinOrder });
    setDraggedId(null);
    notify("置顶顺序已调整");
  };

  return (
    <main className="page admin-page distribution-page">
      <div className="page-heading">
        <div><h1>渠道排序管理</h1><p>仅管理置顶、有效时间和渠道隐藏；非置顶内容继续按动态规则排序</p></div>
        <button type="button" className="secondary-button" onClick={() => setPreview(!preview)}><Eye size={16} />{preview ? "关闭预览" : "预览用户侧顺序"}</button>
      </div>

      <nav className="category-tabs admin-tabs" aria-label="供给分类">
        {categoryOrder.map((type) => (
          <button key={type} type="button" className={activeType === type ? "is-active" : ""} onClick={() => setActiveType(type)}>
            {TYPE_META[type].label}<span>{adminItems.filter((item) => item.type === type).length}</span>
          </button>
        ))}
      </nav>

      <div className="distribution-summary">
        <div><Pin size={17} /><span>当前置顶</span><strong>{pinnedCount} / 3</strong></div>
        <p>置顶内容优先展示，到期后自动回到默认动态顺序。</p>
      </div>

      {preview && (
        <section className="order-preview">
          <h2>用户侧顺序预览</h2>
          <div>
            {rows.filter((item) => !item.isHidden).map((item, index) => (
              <span key={item.id}><b>{index + 1}</b>{item.name}{item.isPinned && <em>置顶</em>}</span>
            ))}
          </div>
        </section>
      )}

      <div className="table-card">
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>顺序</th>
                <th>内容</th>
                <th>置顶</th>
                <th>置顶顺序</th>
                <th>生效时间</th>
                <th>失效时间</th>
                <th>渠道隐藏</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => (
                <tr
                  key={item.id}
                  draggable={item.isPinned}
                  onDragStart={() => setDraggedId(item.id)}
                  onDragOver={(event) => item.isPinned && event.preventDefault()}
                  onDrop={() => dropOn(item)}
                  className={item.isPinned ? "is-pinned-row" : ""}
                >
                  <td><span className="order-cell">{item.isPinned ? <GripVertical size={16} /> : null}{index + 1}</span></td>
                  <td><div className="distribution-name"><strong>{item.name}</strong><span>{item.summary}</span></div></td>
                  <td>{item.isPinned ? <span className="status-pill status-pinned"><Pin size={12} />置顶</span> : "—"}</td>
                  <td>
                    {item.isPinned ? (
                      <div className="order-actions">
                        <button type="button" aria-label="上移" onClick={() => move(item, -1)}><ArrowUp size={14} /></button>
                        <b>{item.pinOrder}</b>
                        <button type="button" aria-label="下移" onClick={() => move(item, 1)}><ArrowDown size={14} /></button>
                      </div>
                    ) : "动态排序"}
                  </td>
                  <td><input type="date" disabled={!item.isPinned} value={item.pinStartAt || ""} onChange={(event) => patchItem(item.id, { pinStartAt: event.target.value })} /></td>
                  <td>
                    <input
                      type="date"
                      className={item.isPinned && !item.pinEndAt ? "input-error" : ""}
                      disabled={!item.isPinned}
                      value={item.pinEndAt || ""}
                      onChange={(event) => patchItem(item.id, { pinEndAt: event.target.value })}
                      required={item.isPinned}
                    />
                  </td>
                  <td>
                    <label className="inline-switch"><input type="checkbox" checked={item.isHidden} onChange={(event) => { patchItem(item.id, { isHidden: event.target.checked }); notify(event.target.checked ? "已从发现渠道隐藏" : "已恢复渠道展示"); }} /><span /></label>
                  </td>
                  <td><button type="button" className="text-button" onClick={() => togglePin(item)}>{item.isPinned ? <><PinOff size={14} />取消置顶</> : <><Pin size={14} />添加置顶</>}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
