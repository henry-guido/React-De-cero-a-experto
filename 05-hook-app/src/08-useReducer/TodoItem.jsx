const TodoItem = ({ todo, handleDelteToDo,onToggleToDo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`} onClick={() => onToggleToDo(todo.id)}>{todo.description}</span>
      <button className='btn btn-danger' onClick={() => handleDelteToDo(todo.id)}>Borrar</button>
    </li>
  );
};

export default TodoItem;
