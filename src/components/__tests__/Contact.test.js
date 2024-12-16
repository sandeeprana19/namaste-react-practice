import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us as component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument;
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument;
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument;
  });

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    const inputName = screen.getAllByRole("textbox");
    console.log(inputName.length);
    expect(inputName.length).toBe(2);
  });
});
