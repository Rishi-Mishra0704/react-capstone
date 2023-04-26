import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../redux/store";
import DetailsPage from "../../pages/DetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
}));

test("clicking back button takes user to home page", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    </Provider>
  );

  const backButton = screen.getByRole("button", { name: "" });
  fireEvent.click(backButton);

  expect(window.location.pathname).toBe("/");
});
