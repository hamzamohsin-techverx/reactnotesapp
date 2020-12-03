import React from 'react';

const SearchResult = (props) => {
    const img = `https://source.unsplash.com/collection/190727/${props.name}`;
    return(
        <div className="image-holder">
            <img src={img} alt="Custom Search"/>
        </div>
    );
}

export default SearchResult;