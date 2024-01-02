import { render, screen } from "@testing-library/react";
import ResturantCard from "../src/components/ResturantCard";
import MOCK_DATA from "../utlis/mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render the Restaurant Card ith props", () => {
  render(<ResturantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
