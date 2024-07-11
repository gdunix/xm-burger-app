import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/helpers/renderWithProviders";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Tooltip from "./Tooltip";

describe("Tooltip component", () => {
  test("renders tooltip when hovering over", async () => {
    renderWithTheme(<Tooltip text="This is a tooltip">Hover me</Tooltip>);

    const hoverElement = screen.getByText("Hover me");
    expect(hoverElement).toBeInTheDocument();

    const tooltipTextElement = screen.queryByText("This is a tooltip");
    expect(tooltipTextElement).not.toBeInTheDocument();

    await userEvent.hover(hoverElement);

    const visibleTooltipTextElement = await screen.findByText(
      "This is a tooltip"
    );
    expect(visibleTooltipTextElement).toBeInTheDocument();
  });

  test("renders tooltip when clicking", async () => {
    renderWithTheme(<Tooltip text="This is a tooltip">Click me</Tooltip>);

    const clickElement = screen.getByText("Click me");
    expect(clickElement).toBeInTheDocument();

    const tooltipTextElement = screen.queryByText("This is a tooltip");
    expect(tooltipTextElement).not.toBeInTheDocument();

    await userEvent.click(clickElement);

    const visibleTooltipTextElement = await screen.findByText(
      "This is a tooltip"
    );
    expect(visibleTooltipTextElement).toBeInTheDocument();
  });
});
