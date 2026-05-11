import Link from "next/link";
import { cn } from "@/lib/utils";
type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
};
export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: Props) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-mint text-ink hover:bg-mint-pale"
          : "border border-mint/25 text-mint-pale hover:bg-mint/10",
        className,
      )}
      {...props}
    />
  );
}
