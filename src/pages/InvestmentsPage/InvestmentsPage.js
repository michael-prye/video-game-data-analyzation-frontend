import React from "react";
import Chart from "react-google-charts";

const InvestmentsPage = ({ gameList }) => {
  //  for each platform, find the some of the global sales for each game on the specified platform

  const recentGames = gameList.filter((game) => game.year >= 2013);
  const recentPlatforms = recentGames.map((game) => game.platform);
  const distinctRecentPlatforms = [...new Set(recentPlatforms)];

  const platformArrays = distinctRecentPlatforms.map((platform) => {
    const platformGames = recentGames.filter(
      (game) => game.platform === platform
    );
    const platformGamesGlobalSales = platformGames.map(
      (game) => game.globalSales
    );
    const platformGamesGlobalSalesSum = platformGamesGlobalSales.reduce(
      (prevGameSales, currGameSales) => {
        return prevGameSales + currGameSales;
      },
      0
    );

    return [platform, platformGamesGlobalSalesSum];
  });

  const chartdata = [["Platform", "Sales"], ...platformArrays];
  console.log(chartdata);

  return (
    <>
      <h1>Top Selling Consoles Since 2013</h1>
      <Chart chartType="Bar" width="100%" height="400px" data={chartdata} />
    </>
  );
};

export default InvestmentsPage;
