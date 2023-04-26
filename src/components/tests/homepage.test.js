import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../redux/store";
import HomePage from "../../pages/homepage";

describe("HomePage", () => {
  it("renders the header", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const header = screen.getByText("Games");
    expect(header).toBeInTheDocument();
  });

  it("renders the search bar", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const searchBar = screen.getByTestId("search-input");
    expect(searchBar).toBeInTheDocument();
  });

  it("renders the filter", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const filter = screen.getByLabelText("Filter by genre:");
    expect(filter).toBeInTheDocument();
  });

  it("renders the games container", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const gamesContainer = screen.getByRole("main");
    expect(gamesContainer).toBeInTheDocument();
  });
});
