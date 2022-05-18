import {
  getDistinctFieldValues,
  sumFieldValues,
  groupByField,
  haveIdenticalFieldValues,
} from "./dataAnalysisUtils";

/**
 *
 * @param {[{}]} gameList Array of game objects
 * @returns Sales data from each game in gameList formatted for Google Charts
 */
export function getGameSalesData(gameList) {
  let salesData = gameList.map((g) => {
    return [
      g.platform,
      g.northAmericaSales,
      g.europeSales,
      g.japanSales,
      g.globalSales,
    ];
  });

  return [
    ["Platform", "North America", "Europe", "Japan", "Global"],
    ...salesData,
  ];
}

/**
 * Groups a list of games by console and finds the sum of global sales of the games for each console.
 * @param {[{}]} gameList Array of game objects
 * @returns 2D array containing console name and total global sales for each console formatted for Google Charts
 */
export function getTopConsoleData(gameList) {
  const recentGames = gameList.filter((g) => g.year >= 2013);
  const gamesByConsole = groupByField("platform", recentGames);
  const consoleGlobalSales = gamesByConsole.map((games) => [
    games[0].platform,
    sumFieldValues("globalSales", games),
  ]);
  return [["Platform", "Sales"], ...consoleGlobalSales];
}

/**
 * Groups a list of games by publisher, filters out publishers who have released more than one game,
 * finds the sum of global sales of the games for each publisher, and finds the 10 with
 * the highest global sales.
 * @param {[{}]} gameList Array of game objects
 * @returns 2D array containing game and total global sales for each indie publisher formatted for Google Charts
 */
export function getTopIndiePublishersData(gameList) {
  const gamesByPublisher = groupByField("publisher", gameList);
  const indiePublisherGames = gamesByPublisher.filter((games) => {
    return haveIdenticalFieldValues("name", games);
  });
  const indiePublishers = indiePublisherGames.map((games) => {
    return [
      games[0].publisher,
      sumFieldValues("globalSales", games),
      games[0].name,
    ];
  });
  const topIndiePublishers = indiePublishers
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return [
    ["Publisher", "Sales", { role: "annotation" }],
    ...topIndiePublishers,
  ];
}

export function getTopPublishersByConsoleData(gameList) {
  // Array of distinct consoles
  const distinctConsoles = getDistinctFieldValues("platform", gameList);

  // Array of games from gameList grouped by console
  const gamesByConsole = distinctConsoles.map((console) => {
    const consoleGames = gameList.filter((g) => g.platform === console);
    return [console, consoleGames];
  });

  // Create a list of consoles, where each console has a list of publishers for that console and global sales for each publisher
  const gameSalesByConsoleAndPublisher = gamesByConsole.map((consoleArray) => {
    const consoleName = consoleArray[0];
    const consoleGames = consoleArray[1];

    //   Get list of distinct publishers for each console
    const distinctPublishers = getDistinctFieldValues(
      "publisher",
      consoleGames
    );

    //  For each publisher, create an array with the publisher name and their total global sales for the current platform
    const publishersWithTotalSales = distinctPublishers.map((publisher) => {
      // List of the global sales for game by a publisher
      const publisherGames = consoleGames.filter((game) => {
        return game.publisher === publisher;
      });

      const globalSales = sumFieldValues("globalSales", publisherGames);

      //  Publisher name with total global sales
      return [publisher, globalSales];
    });

    // Console name with list of publishers and their total global sales
    return [consoleName, publishersWithTotalSales];
  });

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
  const formatedTopPublishers = topSellingPublishersByConsole.map(
    (publisher) => {
      return [publisher[0], publisher[1][1], publisher[1][0]];
    }
  );

  return [
    ["Console", "Sales", { role: "annotation" }],
    ...formatedTopPublishers,
  ];
}
