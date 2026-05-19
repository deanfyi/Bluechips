import { Icon } from "@/components/ui/Icon";
import { portfolioStats } from "@/lib/data";

function CardHeader({ title, icon }: { title: string; icon: "trending" }) {
  return (
    <div className="border-b border-border px-5 pb-3.5 pt-4">
      <div className="flex items-center gap-2">
        <Icon name={icon} size={16} />
        <span className="text-sm text-muted">{title}</span>
      </div>
    </div>
  );
}

function StatValue({ whole, fraction }: { whole: string; fraction: string }) {
  return (
    <p className="font-display text-2xl leading-[30px] text-primary">
      <span>{whole}</span>
      <span className="text-muted">{fraction}</span>
    </p>
  );
}

export function PortfolioPerformance() {
  return (
    <div className="flex min-h-[170px] flex-1 flex-col overflow-hidden rounded-3xl border border-border bg-surface">
      <CardHeader title="Portfolio Performance" icon="trending" />
      <div className="flex flex-1">
        {portfolioStats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-1 items-center p-5 ${
              index < portfolioStats.length - 1
                ? "border-r border-border"
                : ""
            }`}
          >
            <div className="flex flex-col gap-3">
              <span className="text-sm text-muted">{stat.label}</span>
              <StatValue whole={stat.whole} fraction={stat.fraction} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
