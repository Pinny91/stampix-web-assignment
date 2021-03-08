import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
test("Language text in EN", () => {
  render(<App />);
  const text = screen.getByText(/START PRINTING/i);
  expect(text).toBeInTheDocument();
});
test("Language switching to NL", async () => {
  render(<App />);
  fireEvent.click(screen.getByText("NL"));
  await waitFor(() => {
    // getByRole throws an error if it cannot find an element
    const text = screen.getByText(/START PRINTEN/i);
    expect(text).toBeInTheDocument();
  });
});

test("Language switching to FR", async () => {
  render(<App />);
  fireEvent.click(screen.getByText("FR"));
  await waitFor(() => {
    // getByRole throws an error if it cannot find an element
    const text = screen.getByText(/COMMENCER L'IMPRESSION/i);
    expect(text).toBeInTheDocument();
  });
});
