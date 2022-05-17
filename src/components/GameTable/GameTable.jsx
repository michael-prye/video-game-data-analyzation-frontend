import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import GameTableCard from "../GameTableCard/GameTableCard";
import "./GameTable.css";

const GameTable = ({ filteredGameList, searchTerm }) => {
  const [maxGames, setMaxGames] = useState(50);

  const viewMoreGames = function () {
    setMaxGames(maxGames + 50);
  };

  return (
    <>
      <h1 className="gametable__header">Games</h1>
      <div className="gametable__body">
        <Row style={{ "font-weight": "bold" }}>
          <Col sm={1}>ID</Col>
          <Col>Name</Col>
          <Col sm={1}>Platform</Col>
          <Col sm={1}>Year</Col>
          <Col sm={3}>Publisher</Col>
          <Col sm={2}></Col>
        </Row>
        {filteredGameList.slice(0, maxGames).map((game) => (
          <GameTableCard game={game} />
        ))}
        {filteredGameList.length >= maxGames ? (
          <Row>
            <Col className="d-flex justify-content-center">
              <button className="gametable__button" onClick={viewMoreGames}>
                View More Games
              </button>
            </Col>
          </Row>
        ) : null}
        {filteredGameList.length === 0 ? (
          <Row>
            <Col className="d-flex justify-content-center">
              <em>{`No games called "${searchTerm}" found in database.`}</em>
            </Col>
          </Row>
        ) : null}
      </div>
    </>
  );
};

export default GameTable;
