import React from "react";
import { Link } from "react-router-dom";

const GameTable = ({ filteredGameList }) => {
  return (
    <>
      <h1>Game List</h1>
      {filteredGameList.map((game) => {
        return (
          <p>
            {game.id} {game.name} ({game.platform}){" "}
            <Link to={`/compare?name=${game.name}`}>Compare Sales</Link>
          </p>
        );
      })}
    </>
  );
};

export default GameTable;
