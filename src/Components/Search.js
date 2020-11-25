import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("pizza");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(search);
  };

  return (
    <form className="ui form" onSubmit={onFormSubmit}>
      <div className="field">
        <label>Search for recipe</label>
        <input type="text" value={search} onChange={onSearchChange} />
      </div>
    </form>
  );
};

export default Search;
