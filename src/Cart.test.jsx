import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Cart from "./components/Cart";
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";

let mockCart = [
  {
    id: 2348743,
    img: "https://somelink.yes",
    make: "Fender",
    model: "Strat",
    price: 500,
  },
  {
    id: 2348744,
    img: "https://somelink.yes",
    make: "Gibson",
    model: "Les Paul",
    price: 1000,
  },
];

let setmockCart = (args) => {
  mockCart = args;
};


describe("Cart component", () => {
  it("should increase the items input value when increased", async () => {
    const user = userEvent.setup();

    render(<Cart cart={mockCart} setCart={setmockCart} />);
    const increaseButtons = screen.getAllByRole("button", { name: "+" });
    const FenderIncreaseButton = increaseButtons[0];
    await act(() => user.click(FenderIncreaseButton));
    const input1 = screen.getByDisplayValue(2);
    expect(input1).toBeInTheDocument();
  });
  it("checks if the increase button changes total price", async () => {
    const user = userEvent.setup();

    render(<Cart cart={mockCart} setCart={setmockCart} />);
    const increaseButtons = screen.getAllByRole("button", { name: "+" });

    const FenderIncreaseButton = increaseButtons[0];

    await act(() => user.click(FenderIncreaseButton));
    await waitFor(()=>{
      
      expect(
        screen.getByRole("heading", { name: "TOTAL: 2000" })
      ).toBeInTheDocument();
    })
  });
});
