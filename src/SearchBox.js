import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa3 tc">
            <input
                type="search"
                placeholder="Search robot names"
                className="pa3 ba b--green bg-lightest-blue br-pill tc"
                id="searchBox"
                onChange={ searchChange }
            />
        </div>
        
    );
}

export default SearchBox;