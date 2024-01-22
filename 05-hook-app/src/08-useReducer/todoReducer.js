export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'Add Todo':
      return [action.payload, ...initialState]

    case 'Delete Todo':
      return initialState.filter(x => x.id !== action.payload)

    case 'Toggle Todo':
      return initialState.map(todo => {

        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo
      })
    default:
      return initialState
  }
}