import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba en 11-async-await', () => {
  test('getImagen debe devolver un url de un gif aleatoreo', async () => {
    const url = await getImagen()
    expect(typeof url).toBe('string')
  })

  test('getImagen debe retornar un error si no existe un apikey correcto', async () => {
    const url = await getImagen()
    expect(typeof url).toBe('string')
  })
})