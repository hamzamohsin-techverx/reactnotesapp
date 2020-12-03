import React, { useState } from 'react';
import SearchResult from './SearchResult'; 

const Search = () => {
    const [image , setImage] =useState('');

    const inputEvent = (event) => {
        const data = event.target.value;
        setImage(data);
    }
    return(
        <>
        <div className="custom_search">
        <input 
        type="text"
         placeholder="Search Anything"
          name="image" 
          onChange={inputEvent}
         value={image}
         autoComplete="off"
         />
        </div>
        {image === "" ? null: <SearchResult name={image} /> }
        
        </>
    );
}

export default Search;