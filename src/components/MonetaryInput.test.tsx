import { fireEvent, render, screen } from "@testing-library/react"
import MonetaryInput from "./MonetaryInput"
import { keyboard } from "@testing-library/user-event/dist/keyboard"

beforeEach(() => {
    render(<MonetaryInput />)
})


it("Should properly render monetary input with no value", () => {
    expect(screen.getByDisplayValue("0.00")).toBeInTheDocument()
})

it("Should properly round the value with default precision", () => {
    const inputElement = screen.getByDisplayValue("0.00")
    fireEvent.change(inputElement, { target: { value: "6.246242" } })
    expect(screen.getByDisplayValue("6.25")).toBeInTheDocument()
})

it("Should not show letters", () => {
    const inputElement = screen.getByDisplayValue("0.00")
    fireEvent.change(inputElement, { target: { value: "a" } })
    expect(screen.getByDisplayValue("0.00")).toBeInTheDocument()
})
