import { Icon } from "@/components/ui/Icon";
import { holdingsTabs } from "@/lib/data";

export function HoldingsSection() {
  return (
    <section className="flex flex-col gap-6 border-b border-border py-5">
      <h2 className="font-display text-2xl leading-[30px] text-primary">
        Your Holdings
      </h2>
      <div className="flex gap-1">
        {holdingsTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`flex items-center gap-2 rounded-lg py-[5px] pl-1.5 pr-2.5 ${
              tab.id === "tokens" ? "bg-elevated" : ""
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span
              className={`text-sm ${
                tab.id === "tokens" ? "text-primary" : "text-muted"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
