import { useLayout } from "@/contexts/LayoutContext";

export function useSidebarWidth(): number {
  const { layoutMode } = useLayout();

  switch (layoutMode) {
    case "icons":
      return 70;
    case "two-column":
      return 300;
    case "horizontal":
      return 0;
    case "vertical":
    default:
      return 240;
  }
}
