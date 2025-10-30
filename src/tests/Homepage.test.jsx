import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import * as React from "react";
import { Homepage } from "../components/Homepage";

describe("Homepage component", () => {
  it("Homepage renders", () => {
    render(<Homepage />);
  });
});
