import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search blog posts"
      name="s"
    />
  </div>
);

export default SearchBar;
