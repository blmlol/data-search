import React from 'react';
import { useForm } from 'react-hook-form';
import Results from './Results'

function Search() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
    //On Submit, we look in database for any items matching

  
  
  return (

    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" placeholder="Search" name="Search" ref={register} />

      <input type="submit" />
    </form>

    <Results/>

    </>
  );


}

export default Search;