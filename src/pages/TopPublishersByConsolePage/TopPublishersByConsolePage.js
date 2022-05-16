import React from "react";
import Chart from "react-google-charts";

function TopPublishersByConsolePage({ gameList }) {
  // Array of distinct console names
  const consoles = [...new Set(gameList.map((g) => g.platform))];

  // Array of games from gameList grouped by console
  const gamesByConsole = consoles.map((console) => {
    const consoleGames = gameList.filter((g) => g.platform === console);
    return [console, consoleGames];
  });
  console.log(gamesByConsole);

  // Create a list of consoles, where each console has a list of publishers for that console and global sales for each publisher
  const gameSalesByConsoleAndPublisher = gamesByConsole.map((consoleArray) => {
    const consoleName = consoleArray[0];
    const consoleGames = consoleArray[1];

    //   Get list of distinct publishers for each console
    const publishers = [...new Set(consoleGames.map((game) => game.publisher))];

    //  For each publisher, create an array with the publisher name and their total global sales for the current platform
    const publishersWithTotalSales = publishers.map((publisher) => {
      // List of the global sales for game by a publisher
      const publisherGameSales = consoleGames
        .filter((game) => {
          return game.publisher === publisher;
        })
        .map((game) => game.globalSales);

      // Sum global sales for each game
      const globalSales = publisherGameSales.reduce((prev, curr) => {
        return prev + curr;
      }, 0);

      //  Publisher name with total global sales
      return [publisher, globalSales];
    });

    // Console name with list of publishers and their total global sales
    return [consoleName, publishersWithTotalSales];
  });
  console.log(gameSalesByConsoleAndPublisher);

  const topSellingPublishersByConsole = gameSalesByConsoleAndPublisher.map(
    (consoleArray) => {
      const consoleName = consoleArray[0];
      const publishersList = consoleArray[1];

      const topSellingPublisher = publishersList
        .sort((a, b) => b[1] - a[1])
        .shift();

      return [consoleName, topSellingPublisher];
    }
  );
  //console.log(topSellingPublishersByConsole);
  const formatedTopPublishers = topSellingPublishersByConsole.map((publisher)=>{
    return [`${publisher[0]} (${publisher[1][0]})`, publisher[1][1]]
  })

  console.log(formatedTopPublishers);
  const data =[["Console", "Sales"], ...formatedTopPublishers];
  const options = {
    bars: "horizontal",
  };

  return (
    <>
      <p>Placeholder</p>
      <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
      />
    </>
  );
}

export default TopPublishersByConsolePage;
