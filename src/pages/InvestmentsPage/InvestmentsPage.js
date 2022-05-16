import React from "react";
import TopSellingConsolesChart from "../../components/charts/TopSellingConsolesChart";
import TopIndiePublishersChart from "../../components/charts/TopIndiePublishersChart";
import TopPublishersByConsoleChart from "../../components/charts/TopPublishersByConsoleChart";

const InvestmentsPage = ({ gameList }) => {
  return (
    <>
      <TopSellingConsolesChart gameList={gameList} />
      <TopIndiePublishersChart gameList={gameList} />
      <TopPublishersByConsoleChart gameList={gameList} />
    </>
  );
};

export default InvestmentsPage;
