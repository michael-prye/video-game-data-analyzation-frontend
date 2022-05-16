import React from "react";
import Chart from "react-google-charts";
import { getTopIndiePublishersData } from "../../utils/gameDataFunctions";

const TopIndiePublishersChart = ({ gameList }) => {
  const data = getTopIndiePublishersData(gameList);
  const options = {
    title: "Top Selling Indie Publishers",
    subtitle:
      "Global sales data for game publishers that have only released one title",
    vAxis: { title: "Publisher" },
    hAxis: { title: "Sales (per million)" },
    chartArea: { height: 600 },
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

export default TopIndiePublishersChart;
