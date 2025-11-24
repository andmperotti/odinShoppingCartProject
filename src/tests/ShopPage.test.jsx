import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../assets/router";
import { StyledHomePage } from "../components/HomePage";
import { StyledNavBar } from "../components/NavBar";
import { StyledShopPage } from "../components/ShopPage";
import { vi } from "vitest";

describe("NavBar Component", () => {
  it("renders ShopPage by checking for the testid present", () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    render(<RouterProvider router={memoryRouter} />);

    expect(screen.getByTestId("ShopPage")).toBeInTheDocument();
  });

  it("App renders ShopPage when users navigate to url ending in '/shop' by checking for its testid", async () => {
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
      expect(screen.getByTestId("ProductCard")).toBeInTheDocument()
    );
    screen.debug();
  });
});
