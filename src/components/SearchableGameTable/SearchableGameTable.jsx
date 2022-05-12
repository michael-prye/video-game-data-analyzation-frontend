import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchableGameTable = (props) => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    getGameList();
  }, []);

  async function getGameList() {
    try {
      const response = await axios.get(
        "https://localhost:7260/api/games/"
        // null,
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //   },
        // }
      );
      console.log(response);
      setGameList(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <h1>Game List</h1>
      {gameList.map((game) => {
        return <p>{game.name}</p>;
      })}
    </>
  );
};

export default SearchableGameTable;
