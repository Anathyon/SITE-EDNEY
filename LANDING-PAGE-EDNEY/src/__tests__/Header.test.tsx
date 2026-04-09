import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Header } from "../components/Header";
import { useUIStore } from "../store/useUIStore";
import { useBreakpoint } from "../hooks/useBreakpoint";

// Mock the dependencies
vi.mock("../store/useUIStore", () => ({
  useUIStore: vi.fn(),
}));

vi.mock("../hooks/useBreakpoint", () => ({
  useBreakpoint: vi.fn(),
}));

describe("Header Component", () => {
  const mockToggleMenu = vi.fn();
  const mockCloseMenu = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useBreakpoint as any).mockReturnValue("lg"); // Default to desktop
  });

  it("renders the logo and brand name correctly", () => {
    (useUIStore as any).mockReturnValue({
      isMenuOpen: false,
      toggleMenu: mockToggleMenu,
      closeMenu: mockCloseMenu,
    });

    render(<Header />);
    expect(screen.getByText("Edney Eslley")).toBeDefined();
    expect(screen.getByText("Marketing e Política")).toBeDefined();
  });

  it("renders desktop navigation links", () => {
    (useUIStore as any).mockReturnValue({
      isMenuOpen: false,
      toggleMenu: mockToggleMenu,
      closeMenu: mockCloseMenu,
    });

    render(<Header />);
    expect(screen.getByText("Sobre")).toBeDefined();
    expect(screen.getByText("Atuação")).toBeDefined();
    expect(screen.getByText("Cases")).toBeDefined();
  });

  it("toggles the mobile menu when clicking the menu button", () => {
    (useBreakpoint as any).mockReturnValue("none"); // Mobile
    (useUIStore as any).mockReturnValue({
      isMenuOpen: false,
      toggleMenu: mockToggleMenu,
      closeMenu: mockCloseMenu,
    });

    render(<Header />);
    const menuButton = screen.getByLabelText("Menu");
    fireEvent.click(menuButton);
    expect(mockToggleMenu).toHaveBeenCalled();
  });

  it("renders the mobile sidebar when isMenuOpen is true", () => {
    (useBreakpoint as any).mockReturnValue("none");
    (useUIStore as any).mockReturnValue({
      isMenuOpen: true,
      toggleMenu: mockToggleMenu,
      closeMenu: mockCloseMenu,
    });

    render(<Header />);
    // Check for items inside the sidebar
    expect(screen.getByText("Menu")).toBeDefined();
    const closeButton = screen.getByLabelText("Fechar menu");
    expect(closeButton).toBeDefined();
    
    // Check navigation in sidebar
    const sidebarLinks = screen.getAllByText("Sobre");
    expect(sidebarLinks.length).toBeGreaterThan(0);
  });

  it("closes the menu when clicking a link in the mobile sidebar", () => {
    (useBreakpoint as any).mockReturnValue("none");
    (useUIStore as any).mockReturnValue({
      isMenuOpen: true,
      toggleMenu: mockToggleMenu,
      closeMenu: mockCloseMenu,
    });

    render(<Header />);
    
    // On mobile screens, find all "Sobre" links. 
    // Usually there's one in DesktopNav (hidden) and one in MobileSidebar.
    const sobreLinks = screen.getAllByRole("link", { name: /Sobre/i });
    
    // Click the one that belongs to the sidebar content
    // We can assume it's the one rendered within the AnimatePresence when isOpen is true
    fireEvent.click(sobreLinks[sobreLinks.length - 1]);
    expect(mockCloseMenu).toHaveBeenCalled();
  });

  it("hides the subtitle on very small screens", () => {
    (useBreakpoint as any).mockReturnValue("none");
    (useUIStore as any).mockReturnValue({
      isMenuOpen: false,
      toggleMenu: mockToggleMenu,
      closeMenu: mockCloseMenu,
    });

    render(<Header />);
    const subtitle = screen.getByText("Marketing e Política");
    expect(subtitle.className).toContain("hidden");
  });
});
