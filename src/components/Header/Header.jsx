import React, { useState } from "react";
import image from "../../assets/nba-logo.png";
import "../Header/Header.css";
import CardContainer from "../Cards/CardContainer/CardContainer";

function Header({ data }) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter(({name}) =>
    name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div>
      <div className="header">
        <img src={image} alt="" />
        <h1>NBA Legends</h1>
        <input
          type="text"
          placeholder="Search Player..."
          onChange={handleChange}
        />
      </div>
      <CardContainer data={filteredData} />
    </div>
  );
}

export default Header;
