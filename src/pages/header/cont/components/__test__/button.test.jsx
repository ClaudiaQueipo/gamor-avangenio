import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import '../../cont.css'

describe("Button", () => {
  it("renders the button with correct text and className", () => {
    const { getByText } = render(
      <Button text="Test Button" className="test-class" />
    );
    const buttonElement = getByText("Test Button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).toContain("test-class");
  });

  it("navigates to the correct route when clicked", () => {
    const to = "/test-route";
    const { getByText } = render(<Button text="Test Button" to={to} />);
    const buttonElement = getByText("Test Button");

    // Mock the useHistory hook from react-router-dom
    const useHistory = jest.spyOn(require("react-router-dom"), "useHistory");
    const mockHistory = { push: jest.fn() };
    useHistory.mockImplementation(() => mockHistory);

    fireEvent.click(buttonElement);
    expect(mockHistory.push).toHaveBeenCalledWith(to);
  });
});
