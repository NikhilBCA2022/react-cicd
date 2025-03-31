import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App"; // Ensure the correct import path

test("renders Vite and React logos", () => {
  render(<App />);
  expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
  expect(screen.getByAltText("React logo")).toBeInTheDocument();
});

test("increments count when button is clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /count is 0/i });
  fireEvent.click(button);
  expect(button).toHaveTextContent("count is 1");
});
