import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
  const [inputvalue, setInputvalue] = useState('');

  const onInputChange = (e) => {
    setInputvalue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(inputvalue.trim()){
      onAddCategory(inputvalue.trim());
      setInputvalue('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        onChange={onInputChange}
        value={inputvalue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func,
};
