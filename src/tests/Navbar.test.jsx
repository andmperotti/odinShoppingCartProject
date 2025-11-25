import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../assets/router";
import { StyledHomePage } from "../components/HomePage";
import { StyledNavBar } from "../components/NavBar";
import { StyledShopPage } from "../components/ShopPage";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("NavBar Component", () => {
  it("renders NavBar by checking for the testid present", () => {
    const memoryRouter = createMemoryRouter(routes);

    render(<RouterProvider router={memoryRouter} />);

    expect(screen.getByTestId("NavBar")).toBeInTheDocument();
  });

  it("renders NavBar component with a counter above the cart image and link which starts with a value of zero", () => {
    const memoryRouter = createMemoryRouter(routes);

    render(<RouterProvider router={memoryRouter} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("Changes the value of the cartCounter after a user adds a product to their cart", async () => {
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
    await userEvent.keyboard("{5}");
    await userEvent.keyboard("{/5}");
    await userEvent.click(document.querySelector("button"));

    await waitFor(() => expect(screen.getByText("5")).toBeInTheDocument());

    screen.debug();
  });

  it("navbar navigation links  send user to correct component", async () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={memoryRouter} />);
    expect(screen.getByTestId("HomePage")).toBeInTheDocument();
    await userEvent.click(document.querySelector("a"));
    expect(screen.getByTestId("HomePage")).toBeInTheDocument();
    await userEvent.click(document.querySelector("nav a[href*='shop']"));
    expect(screen.getByTestId("ShopPage")).toBeInTheDocument();
    await userEvent.click(document.querySelector("nav a[href*='cart']"));
    expect(screen.getByTestId("CartPage")).toBeInTheDocument();
    screen.debug();
  });
});
