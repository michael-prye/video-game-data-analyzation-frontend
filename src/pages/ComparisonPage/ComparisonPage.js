import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ComparisonPage = ({gameList}) => {
  const [searchParams] = useSearchParams();
  const gameName = searchParams.get("name");
  const [filteredGameList, setFilteredGameList] = useState([]);

  useEffect(() =>{
    filterGames();
  },[]);

  function filterGames(){
    let filteredGames;
    filteredGames = gameList.filter((game) => {
      return game.name === gameName;
    }

    )
    setFilteredGameList(filteredGames);
  }

  return (
    <>
      <h1>{gameName}</h1>

      {filteredGameList.map((game) => (
        <h2>{game.platform}</h2>
      )

      )}
    </>
  );
};

export default ComparisonPage;
