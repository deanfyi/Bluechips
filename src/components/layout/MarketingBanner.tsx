"use client";

import { useEffect, useState } from "react";
import { icons } from "@/lib/assets";

const STORAGE_KEY = "marketing-banner-dismissed";

export function MarketingBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setVisible(false);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="relative flex items-center justify-center border-b border-border bg-banner px-6 py-4 pr-14">
      <p className="text-center text-sm text-muted">
        This is just a demo by Attari. This application is current in
        development. Check{" "}
        <a
          href="https://twitter.com"
          className="text-primary underline decoration-solid underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        for updates
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded hover:bg-white/5"
        aria-label="Dismiss banner"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icons.cross}
          alt=""
          width={16}
          height={16}
          className="pointer-events-none"
          aria-hidden
        />
      </button>
    </div>
  );
}
