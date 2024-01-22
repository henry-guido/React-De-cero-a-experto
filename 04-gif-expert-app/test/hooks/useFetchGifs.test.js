import { waitFor, renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => {

  test('Debe regresar el estado inicial', () => {

    const { result } = renderHook(() => useFetchGifs('One Puncj'))

    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('Debe de retornar un arreglo de imagenes y isLoading en false', async() => {

    const { result } = renderHook(() => useFetchGifs('One Puncj'))

    const res = await waitFor(
      ()=> expect( result.current.images.length).toBeGreaterThan(0)
    )
    const { images, isLoading } = result.current
    
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()

  })
})