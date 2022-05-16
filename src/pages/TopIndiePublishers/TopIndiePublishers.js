import React from "react";
import Chart from "react-google-charts";
import { getTopIndiePublishersData } from "../../utils/gameDataFunctions";

const TopIndiePublishers = ({ gameList }) => {
  const [data, options] = getTopIndiePublishersData(gameList);

  return (
    <>
      <h2>Top Indie Publishers</h2>
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

export default TopIndiePublishers;
