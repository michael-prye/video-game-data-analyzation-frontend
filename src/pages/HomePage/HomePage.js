import React, { useEffect, useState } from "react";
import GameTable from "../../components/GameTable/GameTable";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const HomePage = (props) => {
  const [searchParams] = useSearchParams();
  const [filteredGameList, setFilteredGameList] = useState([]);
  const [gameList, setGameList] = useState([]);

  const searchTerm = searchParams.get("search");

  useEffect(() => {
    getGameList();
  }, []);

  useEffect(() => {
    filterGames();
  }, [gameList]);

  async function getGameList() {
    try {
      const response = await axios.get("https://localhost:7260/api/games/");
      console.log(response);
      setGameList(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  function filterGames() {
    let filteredGames;
    if (searchTerm !== null) {
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
