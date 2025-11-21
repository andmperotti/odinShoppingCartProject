import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../assets/router";
import { StyledHomePage } from "../components/HomePage";
import { StyledNavBar } from "../components/NavBar";
import { StyledShopPage } from "../components/ShopPage";

describe("NavBar Component", () => {
  it("renders ShopPage by checking for the testid present", () => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    render(<RouterProvider router={memoryRouter} />);

    expect(screen.getByTestId("ShopPage")).toBeInTheDocument();
  });
});
