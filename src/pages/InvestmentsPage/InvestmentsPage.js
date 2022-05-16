import React from "react";
import Chart from "react-google-charts";
import { getTopConsoleData } from "../../utils/gameDataFunctions";

const InvestmentsPage = ({ gameList }) => {
  const [data, options] = getTopConsoleData(gameList);

  return (
    <>
      <h1>Top Selling Consoles Since 2013</h1>
      <Chart chartType="Bar" width="100%" height="400px" data={data} />
    </>
  );
};

export default InvestmentsPage;
