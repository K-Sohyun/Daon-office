// src/components/layout/Sidebar/index.tsx
"use client";

import { useLayout } from "@/contexts/LayoutContext";
import VerticalSidebar from "./VerticalSidebar";
import IconSidebar from "./IconSidebar";
import TwoColumnSidebar from "./TwoColumnSidebar";

export default function Sidebar() {
  const { layoutMode } = useLayout();

  if (layoutMode === "horizontal") return null;

  switch (layoutMode) {
    case "icons":
      return <IconSidebar />;
    case "two-column":
      return <TwoColumnSidebar />;
    default:
      return <VerticalSidebar />;
  }
}
