import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import theme from "@/styles/theme";

const queryClient = new QueryClient();

export const renderWithRouter = (children: React.ReactNode) =>
  render(<Router>{children}</Router>);

export const renderWithReactQuery = (children: React.ReactNode) =>
  render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

export const renderWithTheme = (children: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithProviders = (children: React.ReactNode) => render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  </ThemeProvider>
);
