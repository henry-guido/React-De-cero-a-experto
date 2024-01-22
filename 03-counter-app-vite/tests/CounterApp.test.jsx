import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Prueba en <CounterApp />', () => { 
    const value = 100
    test('Debe hacer match con snapshot', () => { 
        const {container}  = render(<CounterApp value={value} />)
        expect(container).toMatchSnapshot()
     })

     test('Debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={value}/>)
        expect(screen.getByText(value)).toBeTruthy()
      })

      test('Debe incrementar con el botón +1', () => { 
        render(<CounterApp value={value} />)
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('101')).toBeTruthy()

       })
       
      test('Debe incrementar con el botón -1', () => { 
        render(<CounterApp value={value} />)
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('99')).toBeTruthy()

       })

      test('Debe de funcionar el boton de reset', () => { 
        render(<CounterApp value={value} />)
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('+1'))

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect( screen.getByText(100)).toBeTruthy()

       })
 })