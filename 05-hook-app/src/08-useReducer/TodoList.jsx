import TodoItem from './todoItem';

export const TodoList = ({ todos, handleDelteToDo, onToggleToDo }) => {
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelteToDo={handleDelteToDo}
          onToggleToDo={onToggleToDo}
        />
      ))}
    </ul>
  );
};
