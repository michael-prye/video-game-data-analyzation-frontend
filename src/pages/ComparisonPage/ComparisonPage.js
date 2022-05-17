import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import SalesComparisonChart from "../../components/charts/SalesComparisonChart";
import ComparisonCard from "../../components/ComparisonCard/ComparisonCard";
import "./ComparisonPage.css"

const ComparisonPage = ({ gameList }) => {
  const [searchParams] = useSearchParams();
  const gameName = searchParams.get("name");
  const [filteredGameList, setFilteredGameList] = useState([]);

  useEffect(() => {
    filterGames();
  }, []);

  function filterGames() {
    let filteredGames;
    filteredGames = gameList.filter((game) => {
      return game.name === gameName;
    });
    setFilteredGameList(filteredGames);
  }

  return (
    <div className="comparisonpage__body">
      <Container>
        <h1>{gameName}</h1>
        {filteredGameList.length != 0 && (
          <div>
            <SalesComparisonChart
              gameName={gameName}
              gameList={filteredGameList}
            />
            <ComparisonCard gameList={filteredGameList} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default ComparisonPage;
