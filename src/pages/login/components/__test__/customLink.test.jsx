import { beforeEach, describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomLink from '../customLink';
import { BrowserRouter } from 'react-router-dom';

describe("CustomLink", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CustomLink
          className="custom-link"
          mainText="Main Text"
          to="/"
          text="Link Text"
        />
      </BrowserRouter>
    );
  });

  test("should render the main text and link", () => {
    expect(screen.getByText(/Main Text/i)).toBeDefined();
    expect(screen.getByText(/Link Text/i)).toBeDefined();
  });

  test("should navigate to the correct URL when clicked", () => {
    fireEvent.click(screen.getByText(/Link Text/i));
    expect(window.location.pathname).toBe("/");
  });
});
