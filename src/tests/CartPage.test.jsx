import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { CartPage } from "../components/CartPage.jsx";
import { createMemoryRouter } from "react-router-dom";
import { routes } from "../assets/router.js";
import { RouterProvider } from "react-router-dom";

describe("CartPage component", () => {
  it("CartPage renders, by testing for 'Shopping Cart' to be in document ", () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/cart"],
    });
    render(<RouterProvider router={memoryRouter} />);
    screen.debug();
    expect(screen.getByTestId("CartPage")).toBeInTheDocument();
  });

  it("CartPage communicates to users that they have no products in their cart", () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/cart"],
    });
    render(<RouterProvider router={memoryRouter} />);
    screen.debug();
    expect(screen.getByText(/nothing in cart/i)).toBeInTheDocument();
  });
});

//mock products, simulate user adding product to cart, test whether product is in cart
