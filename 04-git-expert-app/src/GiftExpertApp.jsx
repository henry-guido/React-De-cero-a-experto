import { useState } from 'react';
import {AddCategory, GifGrid} from './components'

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['one punch']);

  const onAddCategory = (val) => {
    setCategories([val, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category) => (
        <div key={category} className='card-grid'>
          <GifGrid  category={category} />
        </div>
      ))}
    </>
  );
};
