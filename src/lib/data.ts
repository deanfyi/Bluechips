export const portfolioStats = [
  { label: "Balance", whole: "$23,398", fraction: ".38" },
  { label: "30d Growth", whole: "+12", fraction: ".29%" },
  { label: "60d Growth", whole: "+18", fraction: ".29%" },
  { label: "YTD Growth", whole: "+231", fraction: ".98%" },
] as const;

export const assets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    percent: "38.48%",
    value: "$8,483.38",
    color: "#f7931a",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    percent: "22.91%",
    value: "$7,081.12",
    color: "#4637eb",
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    percent: "17.29%",
    value: "$2,849.57",
    color: "#f71a9f",
  },
  {
    name: "XRP",
    symbol: "XRP",
    percent: "5.42%",
    value: "$0.73",
    color: "#b8b8b8",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    percent: "4.20%",
    value: "$0.45",
    color: "#3855fc",
  },
  {
    name: "Solana",
    symbol: "SOL",
    percent: "3.38%",
    value: "$35.98",
    color: "#a21af7",
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    percent: "8.57%",
    value: "$0.90",
    color: "#d61af7",
  },
  {
    name: "Hyperliquid",
    symbol: "HLIQ",
    percent: "5.42%",
    value: "$0.73",
    color: "#1af767",
  },
] as const;

export const chartPeriods = ["1M", "3M", "6M", "YTD", "Custom"] as const;

/** Portfolio value in thousands (6M view, Apr–Sept) */
export const portfolioChartValues = [
  19.05, 19.1, 19.15, 19.2, 19.28, 19.35, 19.42, 19.5, 19.58, 19.65, 19.72,
  19.82, 19.92, 20.02, 20.12, 20.22, 20.32, 20.42, 20.52, 20.62, 20.72, 20.82,
  20.92, 21.02, 21.1, 21.18, 21.28, 21.38, 21.48, 21.58, 21.68, 21.82, 22.15,
  22.55, 22.92, 23.12, 23.2, 23.24, 23.26, 23.22, 23.18, 23.05, 22.88, 22.25,
] as const;

export const portfolioChartData = portfolioChartValues.map((value, index) => ({
  index,
  value,
}));

export const portfolioChartMonthTicks = [
  { index: 0, label: "Apr" },
  { index: 7, label: "May" },
  { index: 14, label: "Jun" },
  { index: 21, label: "Jul" },
  { index: 28, label: "Aug" },
  { index: 41, label: "Sep" },
] as const;

export const portfolioChartYLabels = [18, 19, 20, 21, 22, 23, 24, 25] as const;

export const holdingsTabs = [
  { id: "tokens", label: "Tokens", icon: "coinStack" as const },
  { id: "positions", label: "Positions", icon: "projects" as const },
  { id: "perps", label: "Perps", icon: "candles" as const },
] as const;
