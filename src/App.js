// General Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

// Page Imports
import HomePage from "./pages/HomePage/HomePage";
import ComparisonPage from "./pages/ComparisonPage/ComparisonPage";
import InvestmentsPage from "./pages/InvestmentsPage/InvestmentsPage";
import TopIndiePublishers from "./pages/TopIndiePublishers/TopIndiePublishers";

// Component Imports
import NavBar from "./components/Navbar/Navbar";

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
      {gameList.length !== 0 && gameList !== null ? (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage gameList={gameList} />} />
            <Route
              path="/compare"
              element={<ComparisonPage gameList={gameList} />}
            />
            <Route
              path="/invest"
              element={<InvestmentsPage gameList={gameList} />}
            />
            <Route
            path="/indie"
            element={<TopIndiePublishers gameList={gameList}/>}
            />
          </Routes>
        </div>
      ) : (
        <p>Getting games from database...</p>
      )}
    </>
  );
}

export default App;
