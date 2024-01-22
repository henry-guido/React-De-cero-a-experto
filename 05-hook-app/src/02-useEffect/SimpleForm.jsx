import { useEffect, useState } from 'react';

export const SimpleForm = () => {
  const [version, setVersion] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVersion(version + 1);
  };

  return (
    <>
      <Form key={version} />
      <input
        className='btn btn-primary'
        type='submit'
        value='Submit'
        onClick={handleSubmit}
      />
    </>
  );
};

function Form() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
  };

 
  useEffect(() => {
    console.log('Componente montado')
    return () => {
      console.log('componente desmontado')
    }
  }, []);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type='text'
        placeholder='Username'
        className='form-control mt-3'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        placeholder='test@gmail.com'
        className='form-control mt-4 mb-3'
        name='email'
        value={email}
        onChange={onInputChange}
      />
    </>
  );
}
