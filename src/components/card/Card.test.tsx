import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithTheme } from "@/helpers/renderWithProviders";
import Card from "./Card";

describe("Card component", () => {
  test("renders title and children correctly", () => {
    renderWithTheme(
      <Card title="Test Card">
        <div data-testid="test-child">Child content</div>
      </Card>
    );

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });
});
