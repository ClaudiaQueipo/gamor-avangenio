import { beforeEach, describe, expect, test } from "vitest";
import Button from "../button";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";

const examplefn = () => {
  return "example";
};

describe("Test button login & register component", () => {
  beforeEach(() =>
    render(
      <div>
        <Button onClick={examplefn} text="login"></Button>
      </div>
    )
  );

  test("should show the login text", () => {
    expect(screen.getByText("login")).toBeDefined();
  });
  
  test("should return 'example'", () => {
    const { getByText } = render(<Button onClick={examplefn} text="login" />);
    expect(examplefn()).toBe("example");
  });
});
