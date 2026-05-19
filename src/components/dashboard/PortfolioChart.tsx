"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Icon } from "@/components/ui/Icon";
import {
  chartPeriods,
  portfolioChartData,
  portfolioChartMonthTicks,
  portfolioChartYLabels,
} from "@/lib/data";

const Y_MIN = 18;
const Y_MAX = 25;

const monthLabels = Object.fromEntries(
  portfolioChartMonthTicks.map(({ index, label }) => [index, label]),
);

function PortfolioLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
      <AreaChart
        data={portfolioChartData}
        accessibilityLayer={false}
        margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="portfolioFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5594F7" stopOpacity={0.32} />
            <stop offset="70%" stopColor="#5594F7" stopOpacity={0.05} />
            <stop offset="100%" stopColor="#5594F7" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="index"
          axisLine={false}
          tickLine={false}
          ticks={portfolioChartMonthTicks.map(({ index }) => index)}
          tickFormatter={(index) => monthLabels[index] ?? ""}
          tick={{ fill: "#8e949c", fontSize: 11 }}
          dy={6}
          interval={0}
          padding={{ left: 12, right: 16 }}
        />

        <YAxis
          domain={[Y_MIN, Y_MAX]}
          width={40}
          axisLine={false}
          tickLine={false}
          ticks={[...portfolioChartYLabels]}
          tickFormatter={(value) => `$${value}k`}
          tick={{ fill: "#8e949c", fontSize: 11 }}
        />

        <Area
          type="monotone"
          dataKey="value"
          baseValue={Y_MIN}
          stroke="#5594F7"
          strokeWidth={2}
          fill="url(#portfolioFill)"
          dot={false}
          activeDot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function PortfolioChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex min-h-[374px] flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-surface">
      <div className="flex shrink-0 items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <Icon name="trending" size={16} />
          <span className="text-sm text-muted">Portfolio overtime</span>
        </div>
        <div className="flex items-center gap-1.5">
          {chartPeriods.map((period) => (
            <button
              key={period}
              type="button"
              className={`rounded-lg px-2 py-1.5 text-xs ${
                period === "6M"
                  ? "bg-elevated text-primary"
                  : "text-muted"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="relative min-h-[260px] flex-1 overflow-hidden p-5 [&_.recharts-surface]:outline-none">
        {mounted ? <PortfolioLineChart /> : null}
      </div>
    </div>
  );
}
