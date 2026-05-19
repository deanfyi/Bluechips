import { Icon } from "@/components/ui/Icon";

const mainNav = [
  { label: "Home", icon: "home" as const, active: true },
  { label: "Explore", icon: "telescope" as const },
  { label: "Markets", icon: "chart" as const },
  { label: "Ask Bluey", icon: "sparkles" as const },
];

const protocolNav = [
  { label: "Insights", icon: "chart4" as const },
  { label: "Revenue", icon: "coins" as const },
  { label: "Governance", icon: "government" as const },
];

const socialNav = [
  { label: "Bluesky", icon: "bluesky" as const },
  { label: "X (Twitter)", icon: "x" as const },
  { label: "Discord", icon: "discord" as const },
];

function NavItem({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: Parameters<typeof Icon>[0]["name"];
  active?: boolean;
}) {
  return (
    <div
      className={`group flex items-center gap-2.5 rounded-lg px-1.5 py-[5px] ${
        active ? "bg-elevated" : ""
      }`}
    >
      <Icon name={icon} size={16} />
      <span
        className={`text-sm ${
          active ? "text-primary" : "text-muted group-hover:text-primary"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="px-1.5 py-[5px] text-xs text-muted">{children}</p>
  );
}

function Divider() {
  return (
    <div className="px-3 pt-3">
      <div className="h-px bg-border" />
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="flex w-[250px] shrink-0 flex-col gap-4 border-r border-border bg-surface py-2.5 pl-2.5 pr-4">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <p className="px-1.5 py-1.5 font-display text-lg text-primary">
            Bluechips
          </p>
          <button
            type="button"
            className="rounded-md p-1.5"
            aria-label="Collapse sidebar"
          >
            <Icon name="sidebarCollapse" size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5 rounded-lg border border-border-strong bg-elevated px-1.5 py-[5px]">
            <Icon name="search" size={16} />
            <span className="text-sm text-muted">Search</span>
          </div>
          <Divider />
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {mainNav.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <Divider />
      </nav>

      <nav className="flex flex-col gap-1">
        <SectionLabel>Protocol</SectionLabel>
        {protocolNav.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <Divider />
      </nav>

      <nav className="flex flex-col gap-1">
        <SectionLabel>Social</SectionLabel>
        {socialNav.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </aside>
  );
}
