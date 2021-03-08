import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
test("renders correct text", () => {
  render(<App />);
  const text = screen.getByText(/START PRINTING/i);
  expect(text).toBeInTheDocument();
});
test("Language switching", async () => {
  render(<App />);
  fireEvent.click(screen.getByText("NL"));
  await waitFor(() => {
    // getByRole throws an error if it cannot find an element
    const text = screen.getByText(/START PRINTEN/i);
    expect(text).toBeInTheDocument();
  });
});
