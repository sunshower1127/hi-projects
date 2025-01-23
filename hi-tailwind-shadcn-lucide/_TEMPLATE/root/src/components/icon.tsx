import { icons } from "lucide-react";
import { HTMLAttributes } from "react";

export default function Icon({
  name,
  strokeWidth = 1,
  ...props
}: {
  name: keyof typeof icons;
  size?: number;
  fill?: string;
  strokeWidth?: number;
} & HTMLAttributes<HTMLOrSVGElement>) {
  const LucideIcon = icons[name];

  return <LucideIcon strokeWidth={strokeWidth} {...props} />;
}
