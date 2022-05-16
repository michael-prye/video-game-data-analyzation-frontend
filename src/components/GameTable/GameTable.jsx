import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import GameTableCard from "../GameTableCard/GameTableCard";
import "./GameTable.css";

const GameTable = ({ filteredGameList }) => {
  return (
    <>
      <Container>
        <h1 className="custon-header">Game List</h1>
        <table className="custom-table">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Platform</th>
            <th>Year</th>
            <th>Publisher</th>
          </tr>
          {filteredGameList.map((game) => (
            <GameTableCard game={game} />
          ))}
        </table>
      </Container>
    </>
  );
};

export default GameTable;
