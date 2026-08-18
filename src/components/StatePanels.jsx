import { AlertCircle, RefreshCw } from "lucide-react";

export function SkeletonGrid({ count = 3 }) {
  return (
    <div className="supply-grid" aria-label="内容加载中" aria-busy="true">
      {Array.from({ length: count }, (_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-line skeleton-icon" />
          <div className="skeleton-line wide" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      ))}
    </div>
  );
}

export function ErrorPanel({ title = "内容加载失败", description = "暂时无法加载该分类，请稍后重试。", onRetry }) {
  return (
    <div className="state-panel state-error" role="alert">
      <AlertCircle size={24} />
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <button type="button" className="secondary-button" onClick={onRetry}><RefreshCw size={15} />重试</button>
    </div>
  );
}

export function EmptyPanel({ title = "暂时没有可展示的内容", description = "内容发布后会显示在这里。" }) {
  return (
    <div className="state-panel">
      <div className="empty-illustration"><span /><span /><span /></div>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
}
