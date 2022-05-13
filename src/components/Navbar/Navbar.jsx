import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const [searchBarText, setSearchBarText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchBarText}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          onChange={(e) => setSearchBarText(e.target.value)}
        />
      </form>
    </>
  );
};

export default NavBar;
