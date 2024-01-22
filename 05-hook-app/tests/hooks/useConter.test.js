const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('Pruebas en el useConter', () => {

  test('debe de retornar los valores por defecto', () => {

    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(1)
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))

  })

  test('debe de generar el counter con el valor de 100', () => {

    const { result } = renderHook(() => useCounter(10))
    const { counter } = result.current

    expect(counter).toBe(10)
  })

  test('debe incrementar el contador', () => {

    const { result } = renderHook(() => useCounter())
    const { counter, increment } = result.current

    act(() => {
      increment();
      increment(2);
    }
    )

    expect(result.current.counter).toBe(4)

  })

  test('debe decrementar el contador', () => {

    const { result } = renderHook(() => useCounter(10))
    const { counter, decrement } = result.current

    act(() => {
      decrement();
      decrement(2);
    }
    )

    expect(result.current.counter).toBe(7)

  })

  test('debe de realizar el reset del contador', () => {

    const { result } = renderHook(() => useCounter(10))
    const { counter, decrement, reset } = result.current

    act(() => {
      decrement(2);
      reset();
    }
    )

    expect(result.current.counter).toBe(10)

  })

})