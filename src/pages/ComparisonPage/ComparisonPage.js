import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Chart } from "react-google-charts";

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

  let salesDataArrays = filteredGameList.map((game) => {
    return [
      game.platform,
      game.northAmericaSales,
      game.europeSales,
      game.japanSales,
      game.globalSales,
    ];
  });

  const options = {
    chart: {
      title: `${gameName}`,
    },
  };

  const data = [
    ["Platform", "N.A.", "Europe", "Japan", "Global"],
    ...salesDataArrays,
  ];

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
