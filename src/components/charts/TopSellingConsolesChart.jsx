import React from "react";
import Chart from "react-google-charts";
import { getTopConsoleData } from "../../utils/gameTrendsUtils";

const TopSellingConsolesChart = ({ gameList }) => {
  const data = getTopConsoleData(gameList);
  const options = {
    title: "Global Sales For Games Released Since 2013",
    vAxis: { title: "Console" },
    hAxis: { title: "Sales (per million)" },
    chartArea: { height: 600 },
    colors: ["#9e539e"],
  };

  return (
    <>
      <Chart
        chartType="BarChart"
        width="100%"
        height="700px"
        data={data}
        options={options}
      />
    </>
  );
};

export default TopSellingConsolesChart;
