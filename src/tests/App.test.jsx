import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { App } from "../components/App";

describe("App component", () => {
  it("App renders NavBar which by default renders the home page that contains 'Random Store'", () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText("Random Store")).toBeInTheDocument();
  });
});
