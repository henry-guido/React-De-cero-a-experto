import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
};

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleNewToDo = (todo) => {
    const newToDo = {
      id: crypto.randomUUID(),
      description: todo,
      done: false,
    };

    const action = {
      type: 'Add Todo',
      payload: newToDo,
    };

    dispatch(action);
  };

  const handleDelteToDo = (id) => {
    dispatch({
      type: 'Delete Todo',
      payload: id
    })
  };

  const onToggleToDo = (id) => {
    dispatch({
      type: 'Toggle Todo',
      payload: id
    })
  }

  const todosCount = todos.length

  const pendingTodosCount = todos.filter(todo => !todo.done).length

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return {
    todos,
    handleNewToDo,
    handleDelteToDo,
    onToggleToDo,
    todosCount,
    pendingTodosCount
  }

}