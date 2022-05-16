import React from "react";
import Chart from "react-google-charts";
import { getTopPublishersByConsoleData } from "../../utils/gameDataFunctions";

const TopPublishersByConsoleChart = ({ gameList }) => {
  const data = getTopPublishersByConsoleData(gameList);
  const options = {
    bars: "horizontal",
  };
  return (
    <>
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

export default TopPublishersByConsoleChart;
