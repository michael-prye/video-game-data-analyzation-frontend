import React, { useEffect, useState } from "react";
import GameTable from "../../components/GameTable/GameTable";
import { useSearchParams } from "react-router-dom";

const HomePage = ({ gameList }) => {
  const [searchParams] = useSearchParams();
  const [filteredGameList, setFilteredGameList] = useState(gameList);
  const searchTerm =
    searchParams.get("search"); /* localhost:3000/?search="black ops"/ */

  useEffect(() => {
    filterGames();
  }, [gameList, searchTerm]);

  function filterGames() {
    // debugger;
    let filteredGames = gameList.filter((game) => {
      if (searchTerm) {
        return game.name === searchTerm;
      }
    });
    setFilteredGameList(filteredGames);
  }

  return (
    <>
      <GameTable filteredGameList={filteredGameList} />
    </>
  );
};

export default HomePage;
