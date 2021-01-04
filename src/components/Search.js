import React from "react";

const Search = (props) => {
  return (
    <div className="container">
      <h1>😍 Emoji Search ❤️</h1>
      <input
        placeholder="What emoji are you looking for ?"
        value={props.search}
        onChange={(ev) => {
          const value = ev.target.value;
          props.setSearch(value);
        }}
      />
    </div>
  );
};

export default Search;
