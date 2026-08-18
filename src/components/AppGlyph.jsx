import { AppIcon } from "./AppIcon.jsx";

export function AppGlyph({ item, size = 28, className = "" }) {
  return (
    <span className={`app-glyph app-glyph-${item.type} ${className}`.trim()}>
      {item.appIcon ? (
        <img
          src={item.appIcon}
          alt={`${item.name}图标`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <AppIcon name={item.icon || item.type} size={size} />
      )}
    </span>
  );
}
