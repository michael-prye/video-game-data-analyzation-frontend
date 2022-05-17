import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import SalesComparisonChart from "../../components/charts/SalesComparisonChart";
import ComparisonCard from "../../components/ComparisonCard/ComparisonCard";
import "./ComparisonPage.css";

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
    <div>
      <Container>
        {filteredGameList.length != 0 && (
          <div className="comparisonpage__header">
            <h1>{gameName}</h1>
            <p>{`Genre: ${filteredGameList[0].genre} - Publisher: ${filteredGameList[0].publisher} - Release Date: ${filteredGameList[0].year}`}</p>
            <div className="comparisonpage__body">
              <SalesComparisonChart
                gameName={gameName}
                gameList={filteredGameList}
              />
              <ComparisonCard gameList={filteredGameList} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ComparisonPage;
