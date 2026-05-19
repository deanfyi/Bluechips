export function WelcomeHeader() {
  return (
    <div className="flex flex-col gap-1.5">
      <h1 className="font-display text-2xl leading-[30px] text-primary">
        Welcome back, Dean
      </h1>
      <p className="text-sm text-muted">
        Your portfolio is up 23.29% today. wBTC is your top performing asset
      </p>
    </div>
  );
}
