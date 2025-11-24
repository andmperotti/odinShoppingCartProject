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

  // it("CartPage communicates to users that they have no products in their cart", () => {
  //   render(<CartPage cartItems={[{ id: 1, quantity: 1 }]} />);
  // });
});

//mock cartItems, and check if a CartCard will be rendered when items in cart, and check if 'Nothing in cart' is rendered when the cartItems is empty/bad fetch.
