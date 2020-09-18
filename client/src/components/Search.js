import React from 'react';
import { useForm } from 'react-hook-form';
import Results from './Results';
import API from '../utils/index';

function Search() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
      API.getData(data.search)

  }
  ;
    //On Submit, we look in database for any items matching


  
  
  return (

    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" placeholder="Search First Name Here" name="search" ref={register} />

      <input type="submit" />
    </form>

    <Results>    </Results>

    </>
  );


}

export default Search;