import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders group selector", () => {
  render(<App />);
  const defaultOption = screen.getByText(/Select a group to display/i);
  expect(defaultOption).toBeInTheDocument();
});
