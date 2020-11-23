import React from 'react';

const Search = (props) => {
  const onInputChange = (ev) => {
    props.handleFiltered(ev.target.value);
  };

  return (
    <form>
      <label>Search:</label>
      <input
        type="text"
        id="name"
        placeholder="Search"
        value={props.search}
        onChange={onInputChange}
      />
    </form>
  );
};

export default Search;
