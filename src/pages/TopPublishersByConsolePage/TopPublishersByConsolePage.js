import React from "react";
import Chart from "react-google-charts";
import { getTopPublishersByConsoleData } from "../../utils/gameDataFunctions";

function TopPublishersByConsolePage({ gameList }) {
  const [data, options] = getTopPublishersByConsoleData(gameList);

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
