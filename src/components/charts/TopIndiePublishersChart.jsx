import React from "react";
import Chart from "react-google-charts";
import { getTopIndiePublishersData } from "../../utils/gameDataFunctions";

const TopIndiePublishersChart = ({ gameList }) => {
  const data = getTopIndiePublishersData(gameList);
  const options = {
    chart: {
      title: "Top Selling Indie Publishers",
      subtitle:
        "Global sales data for game publishers that have only released one title",
    },
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

export default TopIndiePublishersChart;
