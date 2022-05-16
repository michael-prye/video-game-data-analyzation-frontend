import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import GameTableCard from "../GameTableCard/GameTableCard";
import "./GameTable.css";

const GameTable = ({ filteredGameList }) => {
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
      {filteredGameList.map((game) => (
        <GameTableCard game={game} />
      ))}
    </>
  );
};

export default GameTable;
