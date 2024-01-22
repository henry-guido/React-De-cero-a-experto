import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07-deses-arr', () => { 
  test('debe retornar un string y un numero', () => { 
    const {0:letters, 1:numbers} = retornaArreglo()
    
    expect(letters).toBe('ABC')
    expect(numbers).toBe(123)

    expect(typeof letters).toBe('string')
    expect(typeof numbers).toBe('number')

    expect(letters).toEqual(expect.any(String))
   })
 })