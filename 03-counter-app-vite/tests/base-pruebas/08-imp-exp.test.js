import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from '../../src/data/heroes'


describe('Prueba en 08-imp-exp', () => {

  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1
    const heroe = getHeroeById(id)

    expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroeById debe retornar undefined si no existe el heroe', () => {
    const id = 100
    const heroe = getHeroeById(id)

    expect(heroe).toBeFalsy
  })

  test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC'
    const getHeroe = getHeroesByOwner(owner)

    expect(getHeroe).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])
    expect(getHeroe.length).toBe(3)
    expect(getHeroe).toEqual( heroes.filter(heroe => heroe.owner === owner ))
  })

  test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel'
    const getHeroe = getHeroesByOwner(owner)

    expect(getHeroe).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ])

    expect(getHeroe.length).toBe(2)
    expect(getHeroe).toEqual( heroes.filter(heroe => heroe.owner === owner ))

  })

})