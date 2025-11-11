import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { CartPage } from "../components/CartPage.jsx";

describe("CartPage component", () => {
  it("CartPage renders, by testing for 'Shopping Cart' to be in document ", () => {
    render(<CartPage />);
    screen.debug();
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });
});
