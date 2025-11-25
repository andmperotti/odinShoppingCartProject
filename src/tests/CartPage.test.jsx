import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { CartPage } from "../components/CartPage.jsx";
import { createMemoryRouter } from "react-router-dom";
import { routes } from "../assets/router.js";
import { RouterProvider } from "react-router-dom";
import { vi } from "vitest";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  it("CartPage renders a cartCard when a user has added a product to their cart", async () => {
    // eslint-disable-next-line no-undef
    global.fetch = vi.fn();

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          id: 1,
          title: "Drevvska title badge shirt",
          price: 50,
          description:
            "poe friends had a custom shirt made showing off the wide variety of supporter packs I've boughten from GGG to support the development of POE",
          image: "#",
          rating: { rate: 5, count: 1 },
        },
      ],
    });
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    render(<RouterProvider router={memoryRouter} />);

    await waitFor(() =>
      expect(screen.getByText(/Drevvska/i)).toBeInTheDocument()
    );
    screen.debug();
    const productCard = document.querySelector(".order-quantity-input");
    await userEvent.click(productCard);
    await userEvent.keyboard("{3}");
    await userEvent.keyboard("{/3}");
    await userEvent.click(document.querySelector("button"));
    const cartPageLink = document.querySelector("nav a[href*='cart']");
    await userEvent.click(cartPageLink);
    screen.debug();
    expect(screen.getByText(/Total Cart Price: 150/i)).toBeInTheDocument();
  });

  it("CartPage delete item from cart", async () => {
    // eslint-disable-next-line no-undef
    global.fetch = vi.fn();

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          id: 1,
          title: "Drevvska title badge shirt",
          price: 50,
          description:
            "poe friends had a custom shirt made showing off the wide variety of supporter packs I've boughten from GGG to support the development of POE",
          image: "#",
          rating: { rate: 5, count: 1 },
        },
      ],
    });
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    render(<RouterProvider router={memoryRouter} />);

    await waitFor(() =>
      expect(screen.getByText(/Drevvska/i)).toBeInTheDocument()
    );
    screen.debug();
    const productCard = document.querySelector(".order-quantity-input");
    await userEvent.click(productCard);
    await userEvent.keyboard("{3}");
    await userEvent.keyboard("{/3}");
    await userEvent.click(document.querySelector("button"));
    const cartPageLink = document.querySelector("nav a[href*='cart']");
    await userEvent.click(cartPageLink);
    //click delete item
    const cartProductCardDeleteButton = document.querySelector(
      "div[data-testid='CartCard'] button"
    );
    await userEvent.click(cartProductCardDeleteButton);
    screen.debug();
    expect(screen.getByText(/Nothing in cart/i)).toBeInTheDocument();
  });

  it("CartPage total quantity updates correctly after updating a single product quantity input elements value", async () => {
    // eslint-disable-next-line no-undef
    global.fetch = vi.fn();

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          id: 1,
          title: "Drevvska title badge shirt",
          price: 50,
          description:
            "poe friends had a custom shirt made showing off the wide variety of supporter packs I've boughten from GGG to support the development of POE",
          image: "#",
          rating: { rate: 5, count: 1 },
        },
      ],
    });
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    render(<RouterProvider router={memoryRouter} />);

    await waitFor(() =>
      expect(screen.getByText(/Drevvska/i)).toBeInTheDocument()
    );
    const productCard = document.querySelector(".order-quantity-input");
    await userEvent.click(productCard);
    await userEvent.keyboard("{3}");
    await userEvent.keyboard("{/3}");
    await userEvent.click(document.querySelector("button"));
    const cartPageLink = document.querySelector("nav a[href*='cart']");
    await userEvent.click(cartPageLink);
    //update quantity
    await userEvent.click(document.querySelector(".update-quantity"));
    await userEvent.keyboard("{Backspace}");
    await userEvent.keyboard("{/Backspace}");

    await userEvent.keyboard("{2}");
    await userEvent.keyboard("{/2}");

    screen.debug();
    //check for the value shown to be === 2
    expect(
      screen.getByTestId("totalQuantity").textContent.split(" ")
    ).toContain("2");
  });
});
