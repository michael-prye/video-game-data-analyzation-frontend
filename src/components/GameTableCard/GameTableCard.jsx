import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const GameTableCard = ({ game }) => {
  return (
    <>
      <Row>
        <Col sm={1}>{game.id}</Col>
        <Col>{game.name}</Col>
        <Col sm={1}>{game.platform}</Col>
        <Col sm={1}>{game.year}</Col>
        <Col sm={2}>{game.publisher}</Col>
        <Col sm={2}>
          <Link to={`/compare?name=${game.name}`}>Compare Sales</Link>
        </Col>
      </Row>
    </>
  );
};

export default GameTableCard;
