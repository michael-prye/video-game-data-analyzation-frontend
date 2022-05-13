import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Chart } from "react-google-charts";

const ComparisonPage = ({ gameList }) => {
  const [searchParams] = useSearchParams();
  const gameName = searchParams.get("name");
  const [filteredGameList, setFilteredGameList] = useState([]);

  const options = {
    chart: {
      title: `${gameName}`,
    },
  };

  useEffect(() => {
    filterGames();
    generateSalesData();
  }, []);

  function filterGames() {
    let filteredGames;
    filteredGames = gameList.filter((game) => {
      return game.name === gameName;
    });
    setFilteredGameList(filteredGames);
  }

  function generateSalesData() {
    const data = [["Platform", "N.A.", "Europe", "Japan", "Global"]];
    for (const game in filteredGameList) {
      data.push([
        game.platform,
        game.northAmericaSales,
        game.europeSales,
        game.japanSales,
        game.globalSales,
      ]);
    }
    return data;
  }

  return (
    <>
      <h1>{gameName}</h1>

      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={generateSalesData()}
        options={options}
      />
    </>
  );
};

export default ComparisonPage;
