"use client";

import ChartWrapper from "../ChartWrapper";
import styles from "./PieChart.module.scss";

interface PieDataItem {
  label: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieDataItem[];
  radius?: number;
  strokeWidth?: number;
  size?: number; // SVG 너비와 높이
}

export default function PieChart({
  data,
  size = 250,
  radius = 80,
  strokeWidth = 40,
}: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const center = size / 2;
  const r = radius;
  const circumference = 2 * Math.PI * r;
  let cumulative = 0;

  return (
    <div className={styles.container}>
      <ChartWrapper width={size} height={size}>
        {data.map((item, index) => {
          const valueRatio = item.value / total;
          const dash = valueRatio * circumference;
          const gap = circumference - dash;
          const rotation = (cumulative / total) * 360;
          cumulative += item.value;

          return (
            <circle
              key={index}
              r={r}
              cx={center}
              cy={center}
              fill="transparent"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-rotation * (circumference / 360)}
              transform={`rotate(-90 ${center} ${center})`}
              className={`${styles.slice} ${styles[`slice-${index}`]}`}
            />
          );
        })}
      </ChartWrapper>
    </div>
  );
}
