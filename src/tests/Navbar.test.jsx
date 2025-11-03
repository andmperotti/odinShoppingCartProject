import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "../components/NavBar";
import * as React from "react";

describe("Navbar", () => {
  it("renders Navbar component, by looking for content value of 'hi'", () => {
    render(<Navbar />);
    screen.debug();
    expect(screen.getByText("Nav")).toBeInTheDocument();
  });
});
