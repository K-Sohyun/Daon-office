"use client";

import { useEffect, useRef, useState } from "react";
import ChartWrapper from "../ChartWrapper";
import styles from "./BarChart.module.scss";

// 데이터 타입 정의
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

// 임시 데이터
const defaultData: DataItem[] = [
  { label: "1월", value: 64 },
  { label: "2월", value: 40 },
  { label: "3월", value: 58 },
  { label: "4월", value: 63 },
  { label: "5월", value: 26 },
  { label: "6월", value: 80 },
  { label: "7월", value: 54 },
  { label: "8월", value: 63 },
  { label: "9월", value: 60 },
  { label: "10월", value: 78 },
  { label: "11월", value: 55 },
  { label: "12월", value: 94 },
];

export default function BarChart({
  data = defaultData,
  width = 600,
  height = 300,
  fixedMaxValue = null,
  stepSize = 20,
  barGap = 30,
}: BarChartProps) {
  // 차트 애니메이션
  const [animated, setAnimated] = useState(false);
  // 차트 툴팁
  const [tooltip, setTooltip] = useState<{
    label: string;
    value: number;
    x: number;
    y: number;
  } | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null); // wrapper 위치 계산용

  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const padding = 30;
  const chartWidth = width - padding * 2;

  // barWidth 자동 계산 (간격 포함 고려)
  const barWidth = (chartWidth - barGap * (data.length - 1)) / data.length;

  // 최대값 계산 (고정값 우선)
  const rawMax = Math.max(...data.map((d) => d.value));
  const maxValue =
    fixedMaxValue !== null
      ? fixedMaxValue
      : Math.ceil(rawMax / stepSize) * stepSize;

  // 눈금선 값 배열 만들기
  const steps: number[] = [];
  for (let i = 0; i <= maxValue; i += stepSize) {
    steps.push(i);
  }

  return (
    <div className={styles.chartWrapper} ref={wrapperRef}>
      {/* 툴팁 위치 계산을 위한 div */}
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
            <g
              key={`bar-${i}`}
              onMouseEnter={(e) => {
                const rect = wrapperRef.current?.getBoundingClientRect();
                if (!rect) return;
                setTooltip({
                  label: d.label,
                  value: d.value,
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }} // 마우스 오버 시작 시 툴팁 표시
              onMouseMove={(e) => {
                const rect = wrapperRef.current?.getBoundingClientRect();
                if (!rect) return;
                setTooltip((prev) =>
                  prev
                    ? {
                        ...prev,
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                      }
                    : null
                );
              }} // 마우스 이동 시 툴팁 위치 갱신
              onMouseLeave={() => setTooltip(null)} // 마우스 나가면 툴팁 제거
            >
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={animatedHeight}
                className={styles.bar}
              />
              <text
                x={x + barWidth / 2}
                y={height - 15}
                className={styles.label}
                textAnchor="middle"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </ChartWrapper>
      {/* 툴팁 DOM */}
      {tooltip && (
        <div
          className={styles.tooltip}
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
          }}
        >
          <span>{tooltip.label}</span>: {tooltip.value}
        </div>
      )}
    </div>
  );
}
