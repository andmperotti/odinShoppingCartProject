import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { App } from "../components/App";

describe("App component", () => {
  it("App renders NavBar which contains 'Nav'", () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText("Nav")).toBeInTheDocument();
  });
});
