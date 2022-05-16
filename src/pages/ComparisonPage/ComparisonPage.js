import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Chart } from "react-google-charts";
import { getGameSalesData } from "../../utils/gameDataFunctions";

const ComparisonPage = ({ gameList }) => {
  const [searchParams] = useSearchParams();
  const gameName = searchParams.get("name");
  const [filteredGameList, setFilteredGameList] = useState([]);

  useEffect(() => {
    filterGames();
  }, []);

  function filterGames() {
    let filteredGames;
    filteredGames = gameList.filter((game) => {
      return game.name === gameName;
    });
    setFilteredGameList(filteredGames);
  }

  const [data, options] = getGameSalesData(gameName, filteredGameList);

  return (
    <>
      <h1>{gameName}</h1>

      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
};

export default ComparisonPage;
