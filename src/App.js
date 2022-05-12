import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    getGameList();
  }, []);

  async function getGameList() {
    try {
      const response = await axios.get("https://localhost:7260/api/games/");
      console.log(response);
      setGameList(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage gameList={gameList} />} />
      </Routes>
    </>
  );
}

export default App;
