import { useState } from "react"

export const useCounter = (initialValue = 1) => {

  const [counter, setCounter] = useState(initialValue)

  const decrement = (val = 1) => {
    if (counter == 0) return
    setCounter(x => x - val)
  }
  const increment = (val = 1) => setCounter(x => x + val)
  const reset = () => setCounter(initialValue)

  return {
    counter,
    increment,
    decrement,
    reset
  }
}