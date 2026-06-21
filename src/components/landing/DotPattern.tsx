import { cn } from "@/lib/cn";

export default function DotPattern({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-grid-dots pointer-events-none absolute -right-10 -top-10 z-0 h-48 w-48 opacity-30",
        className,
      )}
    />
  );
}
