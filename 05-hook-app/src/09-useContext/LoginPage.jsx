import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { data, setData } = useContext(UserContext);
  console.log(data);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 3)}</pre>
      <br />
      <button
        className='btn btn-primary'
        onClick={() =>
          setData({
            nombre: 'Henry Gabriel',
            edad: 29,
            email: 'henry.guido@gmail.com',
          })
        }
      >
        Establecer
      </button>
    </>
  );
};
