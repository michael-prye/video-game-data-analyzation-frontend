import React, { useState } from "react";
import TopSellingConsolesChart from "../../components/charts/TopSellingConsolesChart";
import TopIndiePublishersChart from "../../components/charts/TopIndiePublishersChart";
import TopPublishersByConsoleChart from "../../components/charts/TopPublishersByConsoleChart";

const InvestmentsPage = ({ gameList }) => {
  const [choice, setChoice] = useState("top consoles");

  let chartChoice;
  switch (choice) {
    case "top consoles":
      chartChoice = <TopSellingConsolesChart gameList={gameList} />;
      break;
    case "top indie":
      chartChoice = <TopIndiePublishersChart gameList={gameList} />;
      break;
    case "top publishers":
      chartChoice = <TopPublishersByConsoleChart gameList={gameList} />;
      break;
    default:
      console.log("Not a valid choice");
      break;
  }

  return (
    <>
      <h1>Investment Tips</h1>
      <p>Choose one of the following charts to view data</p>
      <button onClick={() => setChoice("top consoles")}>
        Best Selling Consoles Since 2013
      </button>
      <button onClick={() => setChoice("top indie")}>
        Top 10 Indie Publishers
      </button>
      <button onClick={() => setChoice("top publishers")}>
        Top Publishers By Console
      </button>
      {chartChoice}
    </>
  );
};

export default InvestmentsPage;
