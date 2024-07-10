import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import Layout from ".";

jest.mock("./header", () => () => <div data-testid="header">Header</div>);

const renderWithRouter = (children: React.ReactNode) =>
  render(<Router>{children}</Router>);

describe("Header component", () => {
  test("renders global styles, header, and children", () => {
    renderWithRouter(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Check for the Header component
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();

    // Check for the children content
    const childrenElement = screen.getByText(/Test Content/i);
    expect(childrenElement).toBeInTheDocument();
  });
});
