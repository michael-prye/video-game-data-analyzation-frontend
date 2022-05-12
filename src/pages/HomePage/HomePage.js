import React, { useEffect, useState } from "react";
import GameTable from "../../components/GameTable/GameTable";
import { useSearchParams } from "react-router-dom";
import axios from "axios";


const HomePage = (props ) => {
  const [searchParams] = useSearchParams();
  const [filteredGameList, setFilteredGameList] = useState(null);
  const [gameList, setGameList] = useState([]);

  const searchTerm =
    searchParams.get("search"); /* localhost:3000/?search="black ops"/ */

  useEffect(() => {
    filterGames();
  }, []);

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

  function filterGames() {
    //debugger;
    let filteredGames = gameList.filter((game) => {
      if (searchTerm) {
        return game.name === searchTerm;
      }
    });
    if(filterGames.length === 0){
      setFilteredGameList(null)
    }else{
      setFilteredGameList(filteredGames);

    }
    
  }

  return (
    <>
    {filteredGameList !== null  ?(
      <GameTable filteredGameList={filteredGameList}/>
      

    ):(
      <GameTable filteredGameList={gameList}/>
    )
      
    
    }
       
    </>
  );
};

export default HomePage;
