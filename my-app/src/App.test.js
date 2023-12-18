import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

test("Should have Worldwide delivery!", () => {
  render();

  const message = screen.queryByText(/Worldwide delivery!/i);
  expect(message).toBeDefined();
});

