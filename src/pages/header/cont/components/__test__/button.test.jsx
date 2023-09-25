import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "../button";
import { beforeEach } from "vitest";

describe("Account button test", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Button to="/login" text="Sign In" />
      </MemoryRouter>
    );
  });

  test("Should show the button with the Sign In text", () => {
    expect(screen.getByText("Sign In")).toBeDefined();
  });

  test("Should go to the /login route", () => {
    const loginLink = screen.getByText("Sign In");
    expect(loginLink.getAttribute("href")).toBe("/login");
  });
});
