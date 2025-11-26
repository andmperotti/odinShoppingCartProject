import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "../router";
import { StyledHomePage } from "../components/HomePage";
import { StyledNavBar } from "../components/NavBar";
import { StyledShopPage } from "../components/ShopPage";

describe("App component", () => {
  it("renders App", () => {
    const memoryRouter = createMemoryRouter(routes);

    render(<RouterProvider router={memoryRouter} />);

    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
