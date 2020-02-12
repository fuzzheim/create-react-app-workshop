import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Incrementor } from "./Incrementor"

describe("Incrementor", () => {
    it("is defined", () => {
        expect(Incrementor).toBeDefined()
    })
    it("shows Increment", () => {
        const { getByText } = render(<Incrementor />)
        const incrementElement = getByText(/Increment/i)
        expect(incrementElement).toBeInTheDocument()
    })
    it("shows the initial count", () => {
        const { getByText } = render(<Incrementor />)
        const initialCount = getByText(/0/i)
        expect(initialCount).toBeInTheDocument()
    })
    it("shows Hello World when clicked", () => {
        const { queryByText, getByText } = render(<Incrementor />)
        const incrementElement = getByText(/Increment/i)
        
        fireEvent.click(incrementElement)
        fireEvent.click(incrementElement)
        fireEvent.click(incrementElement)

        expect(queryByText("3")).toBeInTheDocument()
    })
})