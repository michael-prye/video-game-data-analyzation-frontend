import React from "react";
import Chart from "react-google-charts";
import { getTopConsoleData } from "../../utils/gameDataFunctions";

const TopSellingConsolesChart = ({ gameList }) => {
  const data = getTopConsoleData(gameList);
  const options = {
    chart: {
      title: "Top Selling Consoles Since 2013",
      subtitle:
        "Global sales data grouped by console for all games released after 2013",
    },
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

export default TopSellingConsolesChart;
