import Image from "next/image";
import { icons } from "@/lib/assets";

type IconName = keyof typeof icons;

export function Icon({
  name,
  size = 16,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={icons[name]}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden
    />
  );
}
