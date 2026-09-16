import { useEffect, useState } from "react";
import { AppIcon } from "./AppIcon.jsx";

export function AppGlyph({ item, size = 28, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageFailed(false);
    setImageLoaded(false);
  }, [item.appIcon]);

  return (
    <span className={`app-glyph app-glyph-${item.type} ${className}`.trim()}>
      <AppIcon name={item.icon || item.type} size={size} />
      {item.appIcon && !imageFailed && (
        <img
          className={imageLoaded ? "is-loaded" : ""}
          src={item.appIcon}
          alt={`${item.name}图标`}
          loading="lazy"
          onError={() => setImageFailed(true)}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </span>
  );
}
