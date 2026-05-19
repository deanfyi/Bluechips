import { Icon } from "@/components/ui/Icon";

export function TokenReport() {
  return (
    <div
      className="flex w-[400px] shrink-0 flex-col overflow-hidden rounded-3xl border border-border"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(63, 143, 255, 0) 0%, rgba(63, 143, 255, 0.06) 100%), linear-gradient(90deg, #1e1f21 0%, #1e1f21 100%)",
      }}
    >
      <div className="border-b border-border px-5 pb-3.5 pt-4">
        <div className="flex items-center gap-2">
          <Icon name="scriptAi" size={16} />
          <span className="text-sm text-muted">Token Report</span>
        </div>
      </div>
      <p className="flex flex-wrap gap-x-[5px] gap-y-0.5 p-5 text-base leading-[21px]">
        <span className="text-muted">Your holdings of</span>
        <span className="text-primary">Ethereum</span>
        <span className="text-muted">increased by</span>
        <span className="text-primary">8.48%</span>
        <span className="text-muted">to</span>
        <span className="text-primary">$7,283.32,</span>
        <span className="text-muted">while your</span>
        <span className="text-primary">Bitcoin</span>
        <span className="text-muted">only increase by</span>
        <span className="text-primary">2.29%</span>
      </p>
    </div>
  );
}
