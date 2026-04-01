import { useState, useEffect } from "react";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "none";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("none");

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setBreakpoint("xl");
      else if (width >= 1024) setBreakpoint("lg");
      else if (width >= 768) setBreakpoint("md");
      else if (width >= 640) setBreakpoint("sm");
      else setBreakpoint("none");
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return breakpoint;
}
