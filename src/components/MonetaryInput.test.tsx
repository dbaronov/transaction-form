import { fireEvent, render, screen } from '@testing-library/react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

import MonetaryInput from './MonetaryInput';

describe("Basic appearance", () => {
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

})

describe("Input behaviour", () => {
    it("Should call handleChange with the right value", () => {
        const mockhandleCheck = jest.fn()
        render(<MonetaryInput handleChange={mockhandleCheck} />)
        const inputElement = screen.getByDisplayValue("0.00")
        fireEvent.change(inputElement, { target: { value: "6.5005" } })
        expect(mockhandleCheck).toBeCalledTimes(1)
        expect(mockhandleCheck).toBeCalledWith(6.5)
    })

    it("Should work with the arbitrary precision", () => {
        
    })
})
