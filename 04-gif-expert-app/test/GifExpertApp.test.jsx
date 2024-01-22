import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
  
  test('Debe renderizar una nueva categoria cuando se busca un nuevo gif', () => { 
    
    render(<GifExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input,{target:{value:'Nicaragua'}})
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(screen.getByText('Nicaragua'))
   })
})