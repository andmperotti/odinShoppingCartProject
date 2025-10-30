import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { ShopPage } from "../components/ShopPage.jsx";

describe("ShopPage component", () => {
  it("ShopPage renders, with content of 'Shop'", () => {
    render(<ShopPage />);
    screen.debug();
    expect(screen.getByText("Shop")).toBeInTheDocument();
  });
});
