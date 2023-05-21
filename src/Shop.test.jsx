import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Shop } from "./components/Shop";
import Fork from "./Fork";





describe("Fork component", () => {
  it("renders correct heading", () => {
    render(<Fork />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});


describe('something truthy and falsy', () => {
    it('true to be true', () => {
      expect(true).toBe(true);
    });
  
    it('false to be false', () => {
      expect(false).toBe(false);
    });
  });