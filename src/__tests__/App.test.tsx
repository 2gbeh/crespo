import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Login from "@/screens/login"


test("Renders the login page", () => {
    render(<Login />)
    expect(true).toBeTruthy()
})