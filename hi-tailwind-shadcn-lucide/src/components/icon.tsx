import { icons, LucideProps } from "lucide-react";

export default function Icon({
  name,
  ...props
}: {
  name: keyof typeof icons;
} & LucideProps) {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
}
