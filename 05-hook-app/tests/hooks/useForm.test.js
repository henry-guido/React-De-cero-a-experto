import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => { 

  const initialForm = {
    name: 'Henry Guido',
    year: 29
  }
  
  test('debe de regresar los valores por defecto', () => { 

    const {result} = renderHook(() => useForm(initialForm) )
    expect(result.current).toEqual({  
        name: 'Henry Guido',
        year: 29,
        formState: { name: 'Henry Guido', year: 29 },
        onInputChange: expect.any(Function),
        onResetForm: expect.any(Function)
      }
      )

   })

   test('debe de cambiar el nombre del formulario', () => { 
    
    const newValue = 'Gabriel'
    const target = {name: 'name', value: newValue}

    const {result} = renderHook( ()=> useForm(initialForm) )
    const {onInputChange } = result.current

    act(()=>{
      onInputChange({target})
    })

    expect( result.current.name ).toBe(newValue)
    expect( result.current.formState.name).toBe(newValue)

    })

    test('debe de realizar el reset del formulario', () => { 
    
      const newValue = 'Gabriel'
      const target = {name: 'name', value: newValue}
  
      const {result} = renderHook( ()=> useForm(initialForm) )
      const {onInputChange, onResetForm } = result.current
  
      act(()=>{
        onInputChange({target})
        onResetForm()
      })
  
      expect( result.current.name ).toBe(initialForm.name)
      expect( result.current.formState.name).toBe(initialForm.name)
  
      })

 })