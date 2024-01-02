import { render , screen } from "@testing-library/react"
import Contact from "../src/components/Contact"
import "@testing-library/jest-dom"

test("Should load Contact us Component" , () =>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Should load button Contact  Component" , () =>{
    render(<Contact/>);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

test("Should load name input in Contact  Component" , () =>{
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
})

test("Should load 2 input Boxes in Contact  Component" , () =>{
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})