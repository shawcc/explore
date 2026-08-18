import { useEffect, useState } from "react";
import { AlertTriangle, ArrowLeft, Check, ImagePlus, Info, Save, Send, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { AppIcon } from "../components/AppIcon.jsx";
import { SupplyCard } from "../components/SupplyCard.jsx";
import { useDemo } from "../context/DemoContext.jsx";
import { supplies } from "../data/mockData.js";

const emptyForm = {
  name: "",
  summary: "",
  description: "",
  scenarios: "",
  owner: "",
  showInDiscover: true,
  aiForm: "AI 节点",
  input: "",
  processing: "",
  output: "",
  example: "",
};

export function AiEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adminItems, setAdminItems, notify } = useDemo();
  const source = id ? supplies.find((item) => item.id === id) : null;
  const [form, setForm] = useState(() => source ? {
    name: source.name,
    summary: source.summary,
    description: source.fullDescription,
    scenarios: source.scenarios.join("、"),
    owner: source.owner,
    showInDiscover: !source.isHidden,
    aiForm: source.aiForm,
    input: source.configuration?.input || "",
    processing: source.configuration?.processing || "",
    output: source.configuration?.output || "",
    example: source.configuration?.example || "",
  } : emptyForm);
  const [dirty, setDirty] = useState(false);
  const [errors, setErrors] = useState({});
  const [leaveConfirm, setLeaveConfirm] = useState(false);

  const setField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setDirty(true);
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  useEffect(() => {
    const beforeUnload = (event) => {
      if (!dirty) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", beforeUnload);
    return () => window.removeEventListener("beforeunload", beforeUnload);
  }, [dirty]);

  const preview = {
    id: "preview",
    type: "ai",
    name: form.name || "未命名 AI 应用",
    icon: "sparkles",
    summary: form.summary || "填写一句话结果描述后，将在这里预览卡片效果",
    provider: "Meego 官方",
    tags: form.scenarios ? form.scenarios.split("、").slice(0, 2) : ["适用场景"],
    aiForm: form.aiForm,
    supportedForms: [form.aiForm],
    isPinned: false,
    isNew: false,
    availableScopes: ["standard"],
    detailRoute: "#",
    score: 0,
  };

  const validate = (publishing) => {
    const next = {};
    if (!form.name.trim()) next.name = "请输入 AI 应用名称";
    if (!form.summary.trim()) next.summary = "请输入一句话结果描述";
    if (!form.description.trim()) next.description = "请输入详细介绍";
    if (!form.owner.trim()) next.owner = "请输入内容负责人";
    if (!form.input.trim()) next.input = "请输入该应用需要的输入内容";
    if (!form.processing.trim()) next.processing = "请输入该应用的处理要求";
    if (!form.output.trim()) next.output = "请输入该应用的输出结果";
    if (!form.example.trim()) next.example = "请输入专属配置示例";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const save = (publishing) => {
    if (!validate(publishing)) {
      notify("请先补全必填信息", "error");
      return;
    }
    const itemId = source?.id || `ai-${Date.now()}`;
    const updated = {
      ...(source || supplies[0]),
      id: itemId,
      name: form.name,
      summary: form.summary,
      fullDescription: form.description,
      scenarios: form.scenarios.split("、").filter(Boolean),
      owner: form.owner,
      aiForm: form.aiForm,
      supportedForms: [form.aiForm],
      relatedFieldApps: [],
      relatedNodeApps: [],
      relatedActionApps: [],
      configuration: {
        input: form.input,
        processing: form.processing,
        output: form.output,
        example: form.example,
      },
      detailRoute: `/discover/ai/${itemId}`,
      isHidden: !form.showInDiscover,
      status: publishing ? "已发布" : "草稿",
    };
    setAdminItems((items) => source ? items.map((item) => item.id === source.id ? updated : item) : [...items, updated]);
    setDirty(false);
    notify(publishing ? "AI 应用发布成功" : "草稿已保存");
    navigate("/admin/ai-apps");
  };

  return (
    <main className="page admin-page edit-page">
      <button type="button" className="back-button" onClick={() => dirty ? setLeaveConfirm(true) : navigate("/admin/ai-apps")}><ArrowLeft size={17} />返回 AI 应用管理</button>
      <div className="page-heading">
        <div><h1>{source ? `编辑 ${source.name}` : "新建 AI 应用"}</h1><p>每条记录对应一个独立的 AI 字段、AI 节点或 AI 操作应用</p></div>
      </div>

      <div className="edit-layout">
        <div className="edit-form">
          <section className="form-section">
            <header><span>1</span><div><h2>基础信息</h2><p>用于发现页卡片和应用详情展示</p></div></header>
            <div className="form-grid">
              <label className="form-field full"><span>AI 应用名称 <b>*</b></span><input value={form.name} onChange={(event) => setField("name", event.target.value)} maxLength={40} placeholder="例如：AI 智能填单" />{errors.name && <em>{errors.name}</em>}</label>
              <div className="form-field full"><span>应用图标</span><button type="button" className="icon-upload" onClick={() => notify("已模拟打开图标选择器", "info")}><span><AppIcon name="sparkles" size={24} /></span><ImagePlus size={16} />选择图标</button></div>
              <label className="form-field full"><span>一句话结果描述 <b>*</b></span><input value={form.summary} onChange={(event) => setField("summary", event.target.value)} maxLength={80} placeholder="说明用户最终能得到什么结果" /><small>{form.summary.length}/80</small>{errors.summary && <em>{errors.summary}</em>}</label>
              <label className="form-field full"><span>详细介绍 <b>*</b></span><textarea value={form.description} onChange={(event) => setField("description", event.target.value)} rows={5} placeholder="说明能力范围、输入和输出" />{errors.description && <em>{errors.description}</em>}</label>
              <label className="form-field"><span>适用场景</span><input value={form.scenarios} onChange={(event) => setField("scenarios", event.target.value)} placeholder="使用、分隔多个场景" /></label>
              <label className="form-field"><span>内容负责人 <b>*</b></span><input value={form.owner} onChange={(event) => setField("owner", event.target.value)} placeholder="团队或负责人" />{errors.owner && <em>{errors.owner}</em>}</label>
              <label className="checkbox-field full"><input type="checkbox" checked={form.showInDiscover} onChange={(event) => setField("showInDiscover", event.target.checked)} /><span>在发现页展示</span></label>
            </div>
          </section>

          <section className="form-section">
            <header><span>2</span><div><h2>应用类型与配置</h2><p>类型单选，配置内容仅服务于当前独立应用</p></div></header>
            <div className="form-grid">
              <label className="form-field full">
                <span>应用类型 <b>*</b></span>
                <select value={form.aiForm} onChange={(event) => setField("aiForm", event.target.value)}>
                  <option value="AI 字段">AI 字段</option>
                  <option value="AI 节点">AI 节点</option>
                  <option value="AI 操作">AI 操作</option>
                </select>
              </label>
              <label className="form-field full"><span>输入内容 <b>*</b></span><textarea value={form.input} onChange={(event) => setField("input", event.target.value)} rows={3} placeholder="该应用读取哪些字段、文档或工作项内容" />{errors.input && <em>{errors.input}</em>}</label>
              <label className="form-field full"><span>处理要求 <b>*</b></span><textarea value={form.processing} onChange={(event) => setField("processing", event.target.value)} rows={3} placeholder="该应用特有的规则、限制和处理逻辑" />{errors.processing && <em>{errors.processing}</em>}</label>
              <label className="form-field full"><span>输出结果 <b>*</b></span><textarea value={form.output} onChange={(event) => setField("output", event.target.value)} rows={3} placeholder="该应用最终产出或回写什么内容" />{errors.output && <em>{errors.output}</em>}</label>
              <label className="form-field full"><span>配置示例 <b>*</b></span><textarea value={form.example} onChange={(event) => setField("example", event.target.value)} rows={3} placeholder="给出一个能帮助用户判断是否适用的具体示例" />{errors.example && <em>{errors.example}</em>}</label>
            </div>
          </section>
        </div>

        <aside className="preview-panel">
          <div className="preview-heading"><div><h2>卡片实时预览</h2><p>发现页默认样式</p></div><Info size={17} /></div>
          <SupplyCard item={preview} />
          <div className="publish-checklist">
            <h3>发布检查</h3>
            <span className={form.name && form.summary ? "done" : ""}><Check size={14} />基础展示信息完整</span>
            <span className={form.aiForm ? "done" : ""}><Check size={14} />已选择唯一应用类型</span>
            <span className={form.input && form.processing && form.output && form.example ? "done" : ""}><Check size={14} />专属配置说明完整</span>
          </div>
        </aside>
      </div>

      <div className="sticky-form-actions">
        <button type="button" className="secondary-button" onClick={() => dirty ? setLeaveConfirm(true) : navigate("/admin/ai-apps")}><X size={15} />取消</button>
        <button type="button" className="secondary-button" onClick={() => save(false)}><Save size={15} />保存草稿</button>
        <button type="button" className="primary-button" onClick={() => save(true)}><Send size={15} />发布</button>
      </div>

      {leaveConfirm && (
        <div className="dialog-mask">
          <section className="action-dialog" role="dialog" aria-modal="true">
            <div className="dialog-icon warning"><AlertTriangle /></div>
            <h2>放弃未保存的修改？</h2>
            <p>离开后，本次修改将不会保留。</p>
            <div className="dialog-actions">
              <button type="button" className="secondary-button" onClick={() => setLeaveConfirm(false)}>继续编辑</button>
              <button type="button" className="danger-button" onClick={() => { setDirty(false); navigate("/admin/ai-apps"); }}>放弃修改</button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
