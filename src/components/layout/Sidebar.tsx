"use client";

import { useState } from "react";
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
  const [collapsed, setCollapsed] = useState(false);
  const [peek, setPeek] = useState(false);

  function toggleCollapsed() {
    setCollapsed((prev) => !prev);
    setPeek(false);
  }

  function handlePeekEnd() {
    if (collapsed) {
      setPeek(false);
    }
  }

  return (
    <>
      {collapsed && !peek && (
        <div
          className="fixed inset-y-0 left-0 z-40 w-3"
          onMouseEnter={() => setPeek(true)}
          aria-hidden
        />
      )}

      <div
        className={`relative shrink-0 transition-[width] duration-200 ease-out ${
          collapsed ? "w-0" : "w-[250px]"
        }`}
      >
        <aside
          className={`flex h-full w-[250px] flex-col gap-4 border-r border-border bg-surface py-2.5 pl-2.5 pr-4 transition-transform duration-200 ease-out ${
            collapsed && peek
              ? "fixed inset-y-0 left-0 z-50 shadow-2xl"
              : collapsed
                ? "pointer-events-none absolute -translate-x-full"
                : ""
          }`}
          onMouseLeave={handlePeekEnd}
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <p className="px-1.5 py-1.5 font-display text-lg text-primary">
                Bluechips
              </p>
              <button
                type="button"
                className="rounded-md p-1.5 text-muted transition-colors hover:text-primary"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                aria-expanded={!collapsed}
                onClick={toggleCollapsed}
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
      </div>
    </>
  );
}
