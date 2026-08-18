import { createContext, useContext, useMemo, useState } from "react";
import { categoryOrder, supplies } from "../data/mockData.js";

const DemoContext = createContext(null);

function isPinActive(item) {
  if (!item.isPinned || !item.pinEndAt) return false;
  return new Date(item.pinEndAt).getTime() > new Date("2026-08-11T00:00:00").getTime();
}

export function DemoProvider({ children }) {
  const [firstVisit, setFirstVisit] = useState(true);
  const [toast, setToast] = useState(null);
  const [adminItems, setAdminItems] = useState(supplies);
  const [lastDiscoverLocation, setLastDiscoverLocation] = useState("/discover");

  const notify = (message, tone = "success") => {
    setToast({ message, tone, id: Date.now() });
  };

  const visibleItems = useMemo(() => {
    return adminItems.filter((item) => (
      item.status !== "已下线"
      && !item.isHidden
      && item.showInDiscover !== false
    ));
  }, [adminItems]);

  const orderedItems = useMemo(() => {
    const list = [...visibleItems];
    return list.sort((a, b) => {
      if (a.type !== b.type) return categoryOrder.indexOf(a.type) - categoryOrder.indexOf(b.type);
      const aPinned = isPinActive(a);
      const bPinned = isPinActive(b);
      if (aPinned !== bPinned) return aPinned ? -1 : 1;
      if (aPinned && bPinned) return (a.pinOrder || 99) - (b.pinOrder || 99);
      return b.score - a.score;
    });
  }, [visibleItems]);

  const value = {
    firstVisit,
    setFirstVisit,
    toast,
    setToast,
    notify,
    items: orderedItems,
    adminItems,
    setAdminItems,
    lastDiscoverLocation,
    setLastDiscoverLocation,
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) throw new Error("useDemo must be used within DemoProvider");
  return context;
}
