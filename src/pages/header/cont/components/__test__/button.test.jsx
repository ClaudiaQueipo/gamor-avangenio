import { render, screen } from "@testing-library/react";
import Button from "../button";
import { beforeEach, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Account button test", () => {
  beforeEach(() => {
    render(
      <div>
        <Button to="/login" text="Sign In" />
      </div>
    );
  });

  test("Should show the button with the Sign In text", () => {
    expect(screen.getByText("Sign In")).toBeDefined();
  });

  test("Should go to the /login route", async () => {
    const user = userEvent.setup();
    const login = vi.spyOn(user, "click");
    const loginLink = screen.getByText("Sign In");

    await user.click(loginLink);
    expect(login).toHaveBeenCalledTimes(1);
  });
});
