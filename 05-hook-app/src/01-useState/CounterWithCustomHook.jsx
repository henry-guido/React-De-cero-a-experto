import { useCounter } from '../hooks';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h1>Counter With Hook: {counter} </h1>
      <hr />
      <button className='btn btn-primary' onClick={() => decrement(5)}>
        -1
      </button>
      <button className='btn btn-primary' onClick={reset}>
        Reset
      </button>
      <button className='btn btn-primary' onClick={() => increment(5)}>
        +1
      </button>
    </>
  );
};
