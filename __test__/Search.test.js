import { render, screen } from "@testing-library/react";
import Body from "../src/components/Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../utlis/mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Bode component with search BTn", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button" , {name : "Search"});

  expect(searchBtn).toBeInTheDocument();
});
