import { Icon } from "@/components/ui/Icon";
import { assets } from "@/lib/data";

function AssetTile({
  name,
  symbol,
  percent,
  value,
  color,
}: (typeof assets)[number]) {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-lg border border-border-strong bg-elevated px-2.5 py-3 transition-opacity hover:opacity-60">
      <div
        className="flex items-center border-l pl-2.5"
        style={{ borderColor: color }}
      >
        <p className="text-sm">
          <span className="text-primary">{name}</span>{" "}
          <span className="text-muted">{symbol}</span>
        </p>
      </div>
      <p className="flex items-center gap-1.5 px-2.5 text-xs">
        <span className="text-muted">{percent}</span>
        <span className="text-muted">·</span>
        <span className="text-primary">{value}</span>
      </p>
    </div>
  );
}

export function AssetDistribution() {
  const rows = [
    assets.slice(0, 2),
    assets.slice(2, 4),
    assets.slice(4, 6),
    assets.slice(6, 8),
  ];

  return (
    <div className="flex w-[400px] shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-surface">
      <div className="border-b border-border px-5 pb-3.5 pt-4">
        <div className="flex items-center gap-2">
          <Icon name="searchMenu" size={16} />
          <span className="text-sm text-muted">Asset Distribution</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 p-5">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-3">
            {row.map((asset) => (
              <AssetTile key={asset.symbol} {...asset} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
