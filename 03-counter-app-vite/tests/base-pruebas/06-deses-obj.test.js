import { usContext } from "../../src/base-pruebas/06-deses-obj"


describe('Pruebas en 06-deses-obj', () => {

  test('usContext debe retornar un objeto', () => {

    const obj = {
      clave: '001',
      edad: 29
    }
    // const clave = 1
    // const edad = 29

    const contexto = usContext(obj)

    expect(contexto).toEqual({
      nombreClave: obj.clave,
      anios: obj.edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    })
  })
})