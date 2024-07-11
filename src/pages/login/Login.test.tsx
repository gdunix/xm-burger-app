import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/helpers/renderWithProviders";
import "@testing-library/jest-dom";

import Login from "./Login";

jest.mock(
  "@/components/card",
  () =>
    ({ title, children }: { title: string; children: any }) =>
      (
        <div data-testid="card">
          <h1>{title}</h1>
          {children}
        </div>
      )
);
jest.mock("./form", () => () => <div data-testid="form" />);

describe("Login component", () => {
  test('renders Card with title "Login" and Form', () => {
    renderWithProviders(<Login />);

    const card = screen.getByTestId("card");
    const form = screen.getByTestId("form");
    const title = screen.getByText("Login");

    expect(card).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
