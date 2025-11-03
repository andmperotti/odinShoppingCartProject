import { ProductCard } from "../components/ProductCard";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";

describe("ProductCard", () => {
  it("Product Card renders", () => {
    render(<ProductCard />);
    screen.debug();
    expect(screen.getByText("Product")).toBeInTheDocument();
  });
});
