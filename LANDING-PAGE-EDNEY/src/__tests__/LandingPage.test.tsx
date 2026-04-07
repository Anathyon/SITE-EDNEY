import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LandingPage from "../pages/LandingPage";

// Mocking dependencies to avoid full heavy render issues if any
vi.mock("../components/Header", () => ({ Header: () => <div data-testid="header" /> }));
vi.mock("../components/Footer", () => ({ Footer: () => <div data-testid="footer" /> }));
vi.mock("../components/LeadForm", () => ({ LeadForm: () => <div data-testid="leadform" /> }));
vi.mock("../components/TestimonialsCarousel", () => ({ TestimonialsCarousel: () => <div data-testid="testimonials" /> }));
vi.mock("../components/FAQAccordion", () => ({ FAQAccordion: () => <div data-testid="faq-accordion" /> }));

describe("LandingPage Component", () => {
  it("renders the hero section with the correct headline", () => {
    render(<LandingPage />);
    expect(screen.getByText(/Vença a/i)).toBeInTheDocument();
    expect(screen.getByText(/narrativa\./i)).toBeInTheDocument();
  });

  it("contains critical sections by id", () => {
    const { container } = render(<LandingPage />);
    
    // Check if sections exist (by ID or text)
    expect(container.querySelector("#topo")).toBeInTheDocument();
    expect(container.querySelector("#sobre")).toBeInTheDocument();
    expect(container.querySelector("#servicos")).toBeInTheDocument();
    expect(container.querySelector("#cases")).toBeInTheDocument();
    expect(container.querySelector("#depoimentos")).toBeInTheDocument();
    expect(container.querySelector("#faq")).toBeInTheDocument();
    expect(container.querySelector("#contato")).toBeInTheDocument();
  });

  it("renders mocked sub-components", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("leadform")).toBeInTheDocument();
  });
});
