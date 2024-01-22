import { useState } from 'react';

export const TodoAdd = ({ handleNewToDo }) => {
  const [description, setDescription] = useState('');

  const onNewToDo = ({ target: { value } }) => {
    setDescription(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    handleNewToDo(description);
    setDescription('')
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='¿Qué hay que hacer?'
        className='form-control'
        onChange={onNewToDo}
        value={description}
      />
      <div className='d-grid gap-1'>
        <button type='submit' className='btn btn-outline-primary my-1 mx-0'>
          Agregar
        </button>
      </div>
    </form>
  );
};
