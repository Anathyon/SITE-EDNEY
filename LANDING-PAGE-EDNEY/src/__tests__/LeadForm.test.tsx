import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LeadForm } from "../components/LeadForm";

describe("LeadForm Component", () => {
  it("shows validation error when fields are empty", async () => {
    render(<LeadForm />);
    
    const submitButton = screen.getByText(/Falar sobre meu projeto/i);
    fireEvent.click(submitButton);

    expect(await screen.findByText(/O nome é obrigatório/i)).toBeInTheDocument();
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

  it("successfully simulates form submission", async () => {
    render(<LeadForm />);
    
    // Fill all required fields
    fireEvent.change(screen.getByPlaceholderText(/Seu nome/i), { target: { value: "Teste Usuario" } });
    fireEvent.change(screen.getByPlaceholderText(/WhatsApp/i), { target: { value: "88999999999" } });
    fireEvent.change(screen.getByPlaceholderText(/E-mail/i), { target: { value: "teste@example.com" } });
    
    const submitButton = screen.getByText(/Falar sobre meu projeto/i);
    fireEvent.click(submitButton);

    // Should show loading then success
    expect(screen.getByText(/Enviando.../i)).toBeInTheDocument();
    
    // Wait for the success message (simulation takes 1.5s)
    await waitFor(() => {
      expect(screen.getByText(/Mensagem enviada!/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
