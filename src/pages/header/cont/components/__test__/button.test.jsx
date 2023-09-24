import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "../button";

describe("Account button test", () => {
  test("Should show the button with the Sign In text", () => {
    render(
      <MemoryRouter>
        <Button to="/login" text="Sign In" />
      </MemoryRouter>
    );
    expect(screen.getByText("Sign In")).toBeDefined();
  });

  test("Should go to the /login route", () => {
    render(
      <MemoryRouter>
        <Button to="/login" text="Sign In" />
      </MemoryRouter>
    );
    const loginLink = screen.getByText("Sign In");
    expect(loginLink.getAttribute("href")).toBe("/login");
  });
});
