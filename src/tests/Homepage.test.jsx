import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { HomePage } from "../components/HomePage";

describe("HomePage component", () => {
  it("HomePage renders", () => {
    render(<HomePage />);
    screen.debug();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
