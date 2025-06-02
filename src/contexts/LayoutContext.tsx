"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type LayoutMode = "vertical" | "horizontal" | "two-column" | "icons";

interface LayoutContextType {
  layoutMode: LayoutMode;
  setLayoutMode: (mode: LayoutMode) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("vertical");

  return (
    <LayoutContext.Provider value={{ layoutMode, setLayoutMode }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error("useLayout은 LayoutProvider 내에서 사용해야 합니다.");
  return context;
}
