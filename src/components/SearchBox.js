import React from 'react';

const SearchBox = (props) => {
  // Display a search input field for users to type and search movies
  return (
    <div className='col col-sm-4 m'>
      <input
        className='form-control'
        value={props.value}
        // Update search value based on user input
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Type to search...'
      ></input>
    </div>
  );
};

export default SearchBox;
