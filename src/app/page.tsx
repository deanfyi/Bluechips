import { AssetDistribution } from "@/components/dashboard/AssetDistribution";
import { HoldingsSection } from "@/components/dashboard/HoldingsSection";
import { PortfolioChart } from "@/components/dashboard/PortfolioChart";
import { PortfolioPerformance } from "@/components/dashboard/PortfolioPerformance";
import { TokenReport } from "@/components/dashboard/TokenReport";
import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
import { MarketingBanner } from "@/components/layout/MarketingBanner";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingBanner />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex min-w-0 flex-1 flex-col">
          <TopBar />
          <div className="flex flex-1 justify-center overflow-y-auto p-5">
            <div className="flex w-full max-w-[1100px] flex-col gap-[30px]">
              <WelcomeHeader />

              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <PortfolioPerformance />
                  <TokenReport />
                </div>

                <div className="flex gap-5">
                  <AssetDistribution />
                  <PortfolioChart />
                </div>
              </div>

              <HoldingsSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
