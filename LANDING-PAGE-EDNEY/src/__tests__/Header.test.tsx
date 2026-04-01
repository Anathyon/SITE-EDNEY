import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Header } from "../components/Header";
import { useUIStore } from "../store/useUIStore";

// Mock the store
vi.mock("../store/useUIStore", () => ({
  useUIStore: vi.fn(),
}));

describe("Header Component", () => {
  it("renders the logo with brand name", () => {
    (useUIStore as any).mockReturnValue({
      isMenuOpen: false,
      toggleMenu: vi.fn(),
      closeMenu: vi.fn(),
    });

    render(<Header />);
    expect(screen.getByText("Edney Eslley")).toBeDefined();
  });

  it("toggles the menu when the button is clicked", () => {
    const toggleMenu = vi.fn();
    (useUIStore as any).mockReturnValue({
      isMenuOpen: false,
      toggleMenu: toggleMenu,
      closeMenu: vi.fn(),
    });

    render(<Header />);
    const menuButton = screen.getByLabelText("Menu");
    fireEvent.click(menuButton);
    expect(toggleMenu).toHaveBeenCalled();
  });
});
