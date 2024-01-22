import { useState } from 'react';
import { useForm } from '../hooks';

export const FormWithCustomHook = () => {
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
  const { username, password, email, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: '',
  });

  // const  {username,email, password} = formState

  return (
    <>
      <h1>Form With Custom Hook</h1>
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

      <input
        type='password'
        placeholder='Password'
        className='form-control mt-4 mb-3'
        name='password'
        value={password}
        onChange={onInputChange}
      />

      <button
        className='btn btn-primary '
        onClick={onResetForm}
      >
        Reset
      </button>
    </>
  );
}
