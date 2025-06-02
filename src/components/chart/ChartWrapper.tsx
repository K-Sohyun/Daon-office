"use client";

interface ChartWrapperProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
}

export default function ChartWrapper({
  width = 600,
  height = 300,
  children,
}: ChartWrapperProps) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </svg>
  );
}
