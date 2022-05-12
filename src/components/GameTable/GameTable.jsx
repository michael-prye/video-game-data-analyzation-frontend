import React from "react";

const GameTable = ({ filteredGameList }) => {
  return (
    <>
      <h1>Game List</h1>
      {filteredGameList.map((game) => {
        return (
          <p>
            {game.id} {game.name}
          </p>
        );
      })}
    </>
  );
};

export default GameTable;
