import React from "react";
import Chart from "react-google-charts";
import { getGameSalesData } from "../../utils/gameTrendsUtils";

const SalesComparisonChart = ({ gameName, gameList }) => {
  const data = getGameSalesData(gameList);
  const options = {
    chart: {
      title: "Sales data by platform",
    },
    colors: ["#7A52AB", "#AB5252", "#B55786", "#9E539E"],
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
