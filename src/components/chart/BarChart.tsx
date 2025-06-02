"use client";

import { useEffect, useState } from "react";
import ChartWrapper from "./ChartWrapper";

interface DataItem {
  label: string;
  value: number;
}

interface BarChartProps {
  data?: DataItem[];
  width?: number;
  height?: number;
  fixedMaxValue?: number | null;
  stepSize?: number;
  barGap?: number;
}

const defaultData: DataItem[] = [
  { label: "1월", value: 60 },
  { label: "2월", value: 35 },
  { label: "3월", value: 15 },
  { label: "4월", value: 40 },
  { label: "5월", value: 80 },
  { label: "6월", value: 60 },
  { label: "7월", value: 35 },
  { label: "8월", value: 65 },
  { label: "9월", value: 25 },
  { label: "10월", value: 80 },
  { label: "11월", value: 70 },
  { label: "12월", value: 95 },
];

export default function BarChart({
  data = defaultData,
  width = 600,
  height = 300,
  fixedMaxValue = null,
  stepSize = 20,
  barGap = 30,
}: BarChartProps) {
  const [animated, setAnimated] = useState(false); // 막대 애니메이션

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const padding = 30;
  const chartWidth = width - padding * 2;

  // barWidth 자동 계산 (간격 포함 고려)
  const barWidth = (chartWidth - barGap * (data.length - 1)) / data.length; // gap은 N - 1개

  // 최대값 계산 (고정값 우선)
  const rawMax = Math.max(...data.map((d) => d.value));
  const maxValue =
    fixedMaxValue !== null
      ? fixedMaxValue
      : Math.ceil(rawMax / stepSize) * stepSize; // 예. rawMax=85, stepSize=20인 경우 -> Math.ceil(85/20) * 20 = 100

  // 눈금선 값 배열 만들기
  const steps: number[] = [];
  for (let i = 0; i <= maxValue; i += stepSize) {
    steps.push(i);
  }

  return (
    <ChartWrapper width={width} height={height}>
      {/* Y축 눈금선 */}
      {steps.map((value, i) => {
        // 전체 값 대비 현재 값의 비율 (0 ~ 1 사이)
        const ratio = value / maxValue;

        // SVG 좌표계에서 y값 계산
        // 1. SVG는 y=0이 위쪽, y가 커질수록 아래로 내려가는 좌표계를 사용
        // 2. (1 - ratio)로 비율을 반전시켜 값이 클수록 막대가 위로 올라가도록 함
        const y = padding + (1 - ratio) * (height - padding * 2);
        return (
          <g key={i}>
            <line
              x1={padding}
              x2={width - padding}
              y1={y}
              y2={y}
              stroke="#ccc"
              strokeDasharray="2 2"
            />
            <text
              x={padding - 10}
              y={y + 3}
              textAnchor="end"
              fontSize="9"
              fill="#777"
            >
              {value}
            </text>
          </g>
        );
      })}

      {/* 막대들 */}
      {data.map((d, i) => {
        const barHeight = (d.value / maxValue) * (height - padding * 2);
        const x = padding + i * (barWidth + barGap);
        const y = animated ? height - padding - barHeight : height - padding;
        const animatedHeight = animated ? barHeight : 0;

        return (
          <g key={`bar-${i}`}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={animatedHeight}
              fill="#4E95FD"
              style={{
                transition: "all 0.6s ease-out",
              }}
            />
            <text
              x={x + barWidth / 2}
              y={height - 15}
              fontSize="9"
              textAnchor="middle"
              fill="#777"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </ChartWrapper>
  );
}
