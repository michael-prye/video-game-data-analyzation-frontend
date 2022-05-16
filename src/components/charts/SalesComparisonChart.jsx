import React from "react";
import Chart from "react-google-charts";
import { getGameSalesData } from "../../utils/gameDataFunctions";

const SalesComparisonChart = ({ gameName, gameList }) => {
  const data = getGameSalesData(gameList);
  const options = {
    chart: {
      title: `${gameName}`,
      subtitle: "Sales data by platform",
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

export default SalesComparisonChart;
