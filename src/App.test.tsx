import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

jest.mock("./layout", () => ({ children }: {children: any}) => (
  <div data-testid="layout">{children}</div>
));
jest.mock("./routes", () => () => <div data-testid="routes" />);

describe("App component", () => {
  test("renders Layout and Routes components", () => {
    render(<App />);

    expect(screen.getByTestId("layout")).toBeInTheDocument();
    expect(screen.getByTestId("routes")).toBeInTheDocument();
  });
});
