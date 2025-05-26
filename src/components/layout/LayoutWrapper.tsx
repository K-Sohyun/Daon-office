"use client";

import { useSidebarWidth } from "@/hooks/useSidebarWidth";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarWidth = useSidebarWidth();

  return (
    <div
      style={{
        marginLeft: `${sidebarWidth}px`,
        transition: "margin 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}
