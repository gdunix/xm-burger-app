import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/helpers/renderWithProviders";
import "@testing-library/jest-dom";

import useIngredients from "./useIngredients";
import Home from "./Home";

jest.mock("./useIngredients");
jest.mock("@/components/loader", () => () => <div data-testid="loader" />);
jest.mock("./list", () => () => <div data-testid="list" />);
jest.mock("./burger", () => () => <div data-testid="burger" />);
jest.mock("./cost", () => () => <div data-testid="cost" />);

describe("Home component", () => {
  test("renders Loader when loading", () => {
    (useIngredients as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
    });

    renderWithProviders(<Home />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  test("renders List and Burger when data is loaded", async () => {
    (useIngredients as jest.Mock).mockReturnValue({
      data: [{ id: 1, name: "test-1", src: "test-1.png" }],
      isLoading: false,
    });

    renderWithProviders(<Home />);

    const list = screen.getByTestId("list");
    const burger = screen.getByTestId("burger");

    expect(list).toBeInTheDocument();
    expect(burger).toBeInTheDocument();
  });

  test("renders Cost component", () => {
    (useIngredients as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
    });

    renderWithProviders(<Home />);

    const cost = screen.getByTestId("cost");
    expect(cost).toBeInTheDocument();
  });
});
