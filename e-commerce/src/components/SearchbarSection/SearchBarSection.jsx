import React, { useState } from "react";
import "./search.css";
import { BiSearchAlt as SearchLogo } from "react-icons/bi";

const SearchBarSection = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cucumber",
      category: "Vegtables",
      price: "N175.4",
      tags: "",
    },
    {
      id: 2,
      title: "Berry",
      category: "Vegtables",
      price: "N155.4",
      tags: "",
    },
    {
      id: 3,
      title: "Meat",
      category: "Frozen",
      price: "N125.4",
      tags: "",
    },
    {
      id: 4,
      title: "Titus",
      category: "Frozen",
      price: "N55.4",
      tags: "",
    },
    {
      id: 5,
      title: "Meat",
      category: "Frozen",
      price: "N55.4",
      tags: "",
    },
    {
      id: 6,
      title: "Watermelon",
      category: "Fruit",
      price: "N55.4",
      tags: "",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    if (
      product.tags.toLowerCase().includes(search) ||
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    ) {
      if (search.length > 0) {
        return product;
      }
    }
  });

  return (
    <div className="searchBarSection">
      <div class="searchBar">
        <button className="search-button">
          <SearchLogo />
        </button>
        <input
          type="text"
          placeholder="Search for products, stores and categories"
          className="search-input"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div className="display">
        {filteredProducts.map((product) => (
          <div className="product">
            <h6>{product.category}</h6>
            <h3>{product.title}</h3>
            <h5>{product.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBarSection;
