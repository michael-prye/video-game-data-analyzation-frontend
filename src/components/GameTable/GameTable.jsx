import React from "react";
import { Link } from "react-router-dom";
import "./GameTable.css"

const GameTable = ({ filteredGameList }) => {
  return (
    <>
      <h1 className="custon-header">Game List</h1>
      <table className="custom-table">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Platform</th>
          <th>Year</th>
          <th>Publisher</th>
        </tr>
        {filteredGameList.map((game) => {
        return (
          <tr className="custon-row">
          <td className="custon-row">{game.id}</td>
          <td className="custon-row">{game.name}</td>
          <td className="custon-row">{game.platform}</td>
          <td className="custon-row">{game.year}</td>
          <td className="custon-row">{game.publisher}</td>
          <Link className="compare-sales" to={`/compare?name=${game.name}`}>Compare Sales</Link>
          </tr>
          );})}
          
          
            
             
      </table>
          
   
    </>
  );
};

export default GameTable;
