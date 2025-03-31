import { render, screen } from "@testing-library/react";
import App from "../App";
import { test, describe, expect } from "vitest";

describe("App Component", () => {
  test("renders Vite logo", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    expect(viteLogo).toBeInTheDocument();
  });

  test("renders React logo", () => {
    render(<App />);
    const reactLogo = screen.getByAltText("React logo");
    expect(reactLogo).toBeInTheDocument();
  });

  test("renders the main heading", () => {
    render(<App />);
    const heading = screen.getByText(/Vite \+ React/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders the button with initial count", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  test("renders the documentation link text", () => {
    render(<App />);
    const docsText = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(docsText).toBeInTheDocument();
  });
});