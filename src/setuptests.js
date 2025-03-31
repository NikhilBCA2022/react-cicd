import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';


// Test suite for App component
describe("App Component", () => {
  test("renders Vite and React logos", () => {
    render(<App />);
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });
});

  test("renders heading with text 'Vite + React'", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  test("button updates count when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");
  });

  test("renders instructional text", () => {
    render(<App />);
    expect(screen.getByText(/Edit src\/App.jsx and save to test HMR/i)).toBeInTheDocument();
  });
  export default App;
