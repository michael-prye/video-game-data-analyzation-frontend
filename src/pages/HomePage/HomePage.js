import React, { useEffect, useState } from "react";
import GameTable from "../../components/GameTable/GameTable";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const HomePage = ({ gameList }) => {
  const [searchParams] = useSearchParams();
  const [filteredGameList, setFilteredGameList] = useState([]);

  const searchTerm = searchParams.get("search");

  useEffect(() => {
    filterGames();
  }, [gameList, searchTerm]);

  function filterGames() {
    let filteredGames;
    if (searchTerm !== null && searchTerm !== "") {
      filteredGames = gameList.filter((game) => {
        return game.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    } else {
      filteredGames = gameList;
    }
    setFilteredGameList(filteredGames);
  }

  return (
    <>
      {gameList.length === 0 ? (
        <p>Loading games...</p>
      ) : (
        <GameTable filteredGameList={filteredGameList} />
      )}
    </>
  );
};

export default HomePage;
