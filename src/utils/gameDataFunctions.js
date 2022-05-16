export function getGameSalesData(gameTitle, gameList) {
  let salesDataArrays = gameList.map((game) => {
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
      title: `${gameTitle}`,
    },
  };

  const data = [
    ["Platform", "N.A.", "Europe", "Japan", "Global"],
    ...salesDataArrays,
  ];

  return [data, options];
}

export function getTopConsoleData(gameList) {
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

  const data = [["Platform", "Sales"], ...platformArrays];

  const options = [];

  return [data, options];
}

export function getTopIndiePublishersData(gameList) {
  const publishers = gameList.map((game) => game.publisher);
  const distinctPublishers = [...new Set(publishers)];

  const publisherArray = distinctPublishers.map((publisher) => {
    const filterGames = gameList.filter((game) => game.publisher === publisher);
    return [publisher, filterGames];
  });

  const indiePublisherArray = publisherArray.filter((publisher) =>
    publisher[1].every((game) => game.name === publisher[1][0].name)
  );

  const indiePublisherSales = indiePublisherArray.map((publisher) => {
    const globalSalesArray = publisher[1].map((game) => {
      return game.globalSales;
    });

    const totalGlobalSales = globalSalesArray.reduce((prevVale, currValue) => {
      return prevVale + currValue;
    }, 0);

    return [publisher[0], publisher[1][0].name, totalGlobalSales];
  });

  const topTenIndiePublishers = indiePublisherSales
    .sort((a, b) => {
      return b[2] - a[2];
    })
    .slice(0, 10);
  console.log(topTenIndiePublishers);

  const formatedTopTen = topTenIndiePublishers.map((publisher) => {
    return [`${publisher[0]} (${publisher[1]})`, publisher[2]];
  });

  const data = [["Publisher", "Sales"], ...formatedTopTen];

  const options = {
    bars: "horizontal",
  };

  return [data, options];
}

export function getTopPublishersByConsoleData(gameList) {
  // Array of distinct console names
  const consoles = [...new Set(gameList.map((g) => g.platform))];

  // Array of games from gameList grouped by console
  const gamesByConsole = consoles.map((console) => {
    const consoleGames = gameList.filter((g) => g.platform === console);
    return [console, consoleGames];
  });

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
      return [`${publisher[0]} (${publisher[1][0]})`, publisher[1][1]];
    }
  );

  console.log(formatedTopPublishers);
  const data = [["Console", "Sales"], ...formatedTopPublishers];
  const options = {
    bars: "horizontal",
  };

  return [data, options];
}
