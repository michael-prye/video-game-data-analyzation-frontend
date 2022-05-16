import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <Link to={""}>HOME</Link>
      <Link to={"invest/"}>Investment Tips</Link>
      <Link to={"indie/"}>TOP INDIE</Link>
      <Link to={"publishers/"}>Top Publishers By Console</Link>
    </>
  );
};

export default NavBar;
//
// const publisherList
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
