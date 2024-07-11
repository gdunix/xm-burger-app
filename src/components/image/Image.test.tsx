import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/helpers/renderWithProviders";
import "@testing-library/jest-dom";
import useLazyLoad from "./useLazyLoad";
import Image from "./Image";

jest.mock("./useLazyLoad");
jest.mock("../loader", () => () => (
    <div data-testid="loader" />
  ));

describe("Image component", () => {
  test("renders Loader while loading", () => {
    (useLazyLoad as any).mockReturnValue({
      loading: true,
      imgSrc: "test.jpg",
    });

    renderWithTheme(<Image src="test.jpg" alt="Test Image" />);

    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });

  test("renders Img component after loading", () => {
    (useLazyLoad as any).mockReturnValue({
      loading: false,
      imgSrc: "test.jpg",
    });
    renderWithTheme(<Image src="test.jpg" alt="Test Image" />);

    const imgElement = screen.getByAltText("Test Image");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "test.jpg");
  });
});
