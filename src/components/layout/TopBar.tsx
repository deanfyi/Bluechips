import { Icon } from "@/components/ui/Icon";

export function TopBar() {
  return (
    <header className="flex items-center justify-center border-b border-border px-6 py-5">
      <div className="flex w-full max-w-[1100px] items-center justify-between">
        <nav className="flex items-center gap-3" aria-label="Breadcrumb">
          <div className="flex items-center gap-2">
            <Icon name="home" size={16} />
            <span className="text-sm text-muted">Home</span>
          </div>
          <Icon name="chevronRight" size={20} />
          <div className="flex items-center gap-2">
            <Icon name="grid" size={16} />
            <span className="text-sm text-primary">Overview</span>
          </div>
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-elevated py-1.5 pl-2 pr-3"
          >
            <Icon name="swap" size={16} />
            <span className="text-sm text-primary">Swap</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-elevated py-1.5 pl-2 pr-2.5"
          >
            <span className="h-4 w-4 shrink-0 rounded bg-gradient-to-b from-[#9ac4ff] to-[#3f8fff]" />
            <span className="text-sm text-primary">0xj3...32df</span>
            <span className="flex h-[18px] w-5 items-center justify-center rounded border border-white/10 text-xs text-muted">
              W
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
