import React, { useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import Results from './Results';
import API from '../utils/index';
import { useState } from 'react';

function Search() {

    useLayoutEffect(() => {
        API.getAll()
        .then(function(response){
            console.log(response);
        })
    })
    const { register, handleSubmit, errors } = useForm();
    const [input, setInput] = useState();


    const onSubmit = data => {
            API.getData(data.search).then(function(response) {
            console.log(response);
            //Here will return results from whole search onto page
        })

    }

    const handleInput = (event) => {
        const text = event.target.value;
        setInput(input => text)
        API.getData(input).then((response) => {
            //This will update the dynamic search box
        })

    };
    console.log(input);
   




    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input onChange={handleInput} type="search" placeholder="Search First Name Here" name="search" ref={register} />

                <input type="submit" />
            </form>

            <Results>    </Results>

        </>
    );


}

export default Search;