import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { LeadForm } from "../components/LeadForm";

describe("LeadForm Component", () => {
  const fetchMock = vi.fn();
  const openMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock global fetch
    fetchMock.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    } as Response);
    vi.stubGlobal("fetch", fetchMock);

    // Mock window.open
    vi.stubGlobal("open", openMock);
  });

  it("shows validation error when fields are empty", async () => {
    render(<LeadForm />);
    
    // Trigger submission
    const submitButton = screen.getByText(/Falar sobre meu projeto/i);
    fireEvent.click(submitButton);

    // Look for the validation message
    const errorMsg = await screen.findByText("O nome é obrigatório.");
    expect(errorMsg).toBeInTheDocument();
  });

  it("shows specific error for invalid whatsapp", async () => {
    render(<LeadForm />);
    
    // Fill name but invalid whatsapp
    fireEvent.change(screen.getByPlaceholderText(/Seu nome/i), { target: { value: "Teste Usuario" } });
    fireEvent.change(screen.getByPlaceholderText(/WhatsApp/i), { target: { value: "123" } });
    
    const submitButton = screen.getByText(/Falar sobre meu projeto/i);
    fireEvent.click(submitButton);

    expect(await screen.findByText(/WhatsApp inválido/i)).toBeInTheDocument();
  });

  it("successfully submits form to email and opens whatsapp", async () => {
    render(<LeadForm />);
    
    // Fill all required fields
    fireEvent.change(screen.getByPlaceholderText(/Seu nome/i), { target: { value: "Teste Usuario" } });
    fireEvent.change(screen.getByPlaceholderText(/WhatsApp/i), { target: { value: "8899912341234" } });
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), { target: { value: "teste@example.com" } });
    
    const submitButton = screen.getByText(/Falar sobre meu projeto/i);
    fireEvent.click(submitButton);

    // Should show loading
    expect(screen.getByText(/Enviando.../i)).toBeInTheDocument();
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/Mensagem enviada!/i)).toBeInTheDocument();
    });

    // Check if fetch was called with FormSubmit URL
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining("formsubmit.co/ajax/edneypro@gmail.com"),
      expect.any(Object)
    );

    // Check if window.open was called for WhatsApp
    expect(openMock).toHaveBeenCalledWith(
      expect.stringContaining("wa.me/558592175196"),
      "_blank"
    );
  });
});
