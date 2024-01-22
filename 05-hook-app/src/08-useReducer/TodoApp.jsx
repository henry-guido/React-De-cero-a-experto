import { TodoList, TodoAdd } from './';
import { useTodo } from '../hooks/';

export const TodoApp = () => {
  const { todos, todosCount, pendingTodosCount, handleNewToDo, handleDelteToDo, onToggleToDo } = useTodo();

  return (
    <>
      <h1>
        Todo App: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDelteToDo={handleDelteToDo}
            onToggleToDo={onToggleToDo}
          />
        </div>
        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd handleNewToDo={handleNewToDo} />
        </div>
      </div>
    </>
  );
};
