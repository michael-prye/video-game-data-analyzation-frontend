import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import GameTableCard from "../GameTableCard/GameTableCard";
import "./GameTable.css";

const GameTable = ({ filteredGameList }) => {
  const [maxGames, setMaxGames] = useState(50);

  const viewMoreGames = function () {
    setMaxGames(maxGames + 50);
  };

  return (
    <>
      <h1>Games</h1>
      <Row style={{ "font-weight": "bold" }}>
        <Col sm={1}>ID</Col>
        <Col>Name</Col>
        <Col sm={1}>Platform</Col>
        <Col sm={1}>Year</Col>
        <Col sm={2}>Publisher</Col>
        <Col sm={2}></Col>
      </Row>
      {filteredGameList.slice(0, maxGames).map((game) => (
        <GameTableCard game={game} />
      ))}
      <button onClick={viewMoreGames}>View More Games</button>
    </>
  );
};

export default GameTable;
