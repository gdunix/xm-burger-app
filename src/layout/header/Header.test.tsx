import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import Header from "./Header";

const renderWithRouter = (children: React.ReactNode) =>
  render(<Router>{children}</Router>);

describe("Header component", () => {
  test("renders the header with title", () => {
    renderWithRouter(<Header />);

    const titleElement = screen.getByText(/Burger App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the title with correct link", () => {
    renderWithRouter(<Header />);

    const linkElement = screen.getByRole("link", { name: /Burger App/i });
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
