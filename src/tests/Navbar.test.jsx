import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "../components/Navbar";
import * as React from "react";

describe("Navbar", () => {
  it("renders Navbar component ", () => {
    render(<Navbar />);
  });
});
