import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DepthCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const box = ref.current.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(8px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className={cn("depth-card", className)}>{children}</div>;
}
