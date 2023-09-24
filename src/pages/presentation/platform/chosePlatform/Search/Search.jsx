import "./search.css";
import Table from "./table/Table";
import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";

function Search({ onSelectPlay }) {
  const data = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Smith",
    },
    {
      id: 3,
      name: "Keoxer",
    },
    {
      id: 4,
      name: "Nickmerc",
    },
    {
      id: 5,
      name: "Jhoan",
    },
    {
      id: 6,
      name: "Jannier",
    },
    {
      id: 7,
      name: "Varsovia",
    },
  ];

  const handleSelectPlay = (item) => {
    onSelectPlay(item);
  };

  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleInputValueChange = (event) => {
    if (inputValue.length === 1){
        setFilteredData(data)
    }
    setInputValue(event.target.value);

  };

  const handleSearch = () => {
    
    if (inputValue.trim() === "" || inputValue.length == 0) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="search-container">
      <div className="search-title-container">
        <input
          type="text"
          placeholder="Search game"
          className="input-search"
          value={inputValue}
          onChange={handleInputValueChange}
        />
        <FaListUl></FaListUl>
      </div>
      {filteredData.length > 0 ? (
        <Table onSelectPlay={handleSelectPlay} data={filteredData}/>
      ) : (
        <Table onSelectPlay={handleSelectPlay} data={data}/>
      )}
      <div className="search-btn-container">
        <button className="search-btn" onClick={handleSearch}>
          Search Now
        </button>
      </div>
    </div>
  );
}

export default Search;
