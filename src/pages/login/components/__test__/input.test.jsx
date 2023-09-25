import { beforeEach, describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../input";

describe("Input component", () => {
  beforeEach(() => {
    render(
      <Input
        divClassName="test-class"
        name="test-input"
        type="text"
        placeholder="Test placeholder"
        spanClassName="user"
      />
    );
  });

  test("should render the input and icon", () => {
    expect(screen.getByPlaceholderText(/Test placeholder/i)).toBeDefined();
  });

  test("should change input value when typed", () => {
    const input = screen.getByPlaceholderText(/Test placeholder/i);
    fireEvent.change(input, { target: { value: "Test value" } });
    expect(input.value).toBe("Test value");
  });
});
