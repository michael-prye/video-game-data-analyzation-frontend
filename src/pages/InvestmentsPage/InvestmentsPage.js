import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TopSellingConsolesChart from "../../components/charts/TopSellingConsolesChart";
import TopIndiePublishersChart from "../../components/charts/TopIndiePublishersChart";
import TopPublishersByConsoleChart from "../../components/charts/TopPublishersByConsoleChart";
import "./InvestmentsPage.css";

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
      <div className="investmentspage__body">
        <Container>
          <h1 className="white-text top-spacing">Investment Tips</h1>
          <p className="white-text">
            Need help deciding what publisher to invest in? Check out some of
            these charts!
          </p>
          <button
            className={
              choice === "top consoles" ? "tab--active" : "tab--inactive"
            }
            onClick={() => setChoice("top consoles")}
          >
            Best Selling Consoles Since 2013
          </button>
          <button
            className={choice === "top indie" ? "tab--active" : "tab--inactive"}
            onClick={() => setChoice("top indie")}
          >
            Top 10 Indie Publishers
          </button>
          <button
            className={
              choice === "top publishers" ? "tab--active" : "tab--inactive"
            }
            onClick={() => setChoice("top publishers")}
          >
            Top Publishers By Console
          </button>
          {chartChoice}
        </Container>
      </div>
    </>
  );
};

export default InvestmentsPage;
