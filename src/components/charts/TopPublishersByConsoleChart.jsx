import React from "react";
import Chart from "react-google-charts";
import { getTopPublishersByConsoleData } from "../../utils/gameDataFunctions";

const TopPublishersByConsoleChart = ({ gameList }) => {
  const data = getTopPublishersByConsoleData(gameList);
  const options = {
    title: "Top Publisher For Each Console By Global Sales",
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

export default TopPublishersByConsoleChart;
