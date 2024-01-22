import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { increment, counter } = useCounter();

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {hasError && <div>{hasError.stack}</div>}
      {isLoading 
      ? <LoadingQuote /> 
      : <Quote quote={quote} author={author} />}
      <button
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
