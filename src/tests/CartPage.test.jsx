import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { CartPage } from "../components/CartPage.jsx";

describe("CartPage component", () => {
  it("CartPage renders, by testing for 'Shopping Cart' to be in document ", () => {
    render(<CartPage cartItems={[{ id: 1, quantity: 1 }]} />);
    screen.debug();
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });
});

//mock cartItems, and check if a CartCard will be rendered when items in cart, and check if 'Nothing in cart' is rendered when the cartItems is empty/bad fetch.
