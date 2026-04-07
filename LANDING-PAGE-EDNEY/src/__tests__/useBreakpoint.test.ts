import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useBreakpoint } from "../hooks/useBreakpoint";

describe("useBreakpoint Hook", () => {
  const setWidth = (width: number) => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
    window.dispatchEvent(new Event("resize"));
  };

  beforeEach(() => {
    setWidth(1440); // Reset to desktop
  });

  it("should return 'xl' for width >= 1280", () => {
    setWidth(1440);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("xl");
  });

  it("should return 'lg' for width between 1024 and 1279", () => {
    setWidth(1100);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("lg");
  });

  it("should return 'md' for width between 768 and 1023", () => {
    setWidth(800);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("md");
  });

  it("should return 'sm' for width between 640 and 767", () => {
    setWidth(700);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("sm");
  });

  it("should return 'none' for width < 640", () => {
    setWidth(400);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("none");
  });

  it("should update when window is resized", () => {
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("xl");

    act(() => {
      setWidth(400);
    });
    expect(result.current).toBe("none");

    act(() => {
      setWidth(800);
    });
    expect(result.current).toBe("md");
  });
});
