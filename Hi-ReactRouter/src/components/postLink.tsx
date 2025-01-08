import clsx from "clsx";
import { Link, LinkProps } from "react-router";

export default function PostLink({ children, className, ...props }: LinkProps) {
  const cls = clsx("h-10 border", className, {
    "hover:bg-zinc-400": children,
    "animate-pulse bg-gray-200": !children,
  });

  if (!children) return <div className={cls} />;

  return (
    <Link className={cls} {...props}>
      {children}
    </Link>
  );
}
