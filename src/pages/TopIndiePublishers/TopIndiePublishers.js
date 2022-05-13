import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import Chart from "react-google-charts";

const TopIndiePublishers = ({gameList}) => {
    const publishers = gameList.map((game) => game.publisher);
    const distinctPublishers = [...new Set(publishers)];
    
    const publisherArray = distinctPublishers.map((publisher)=>{
        const filterGames = gameList.filter((game) => game.publisher === publisher);
        return [publisher, filterGames]
    })
    
    const indiePublisherArray = publisherArray.filter((publisher)=>
    publisher[1].every((game) => game.name === publisher[1][0].name))
    
    const indiePublisherSales = indiePublisherArray.map((publisher)=>{
        const globalSalesArray = publisher[1].map((game) =>{
            return game.globalSales;})
       
        const totalGlobalSales = globalSalesArray.reduce((prevVale, currValue)=>{
            return prevVale + currValue;
            },0)
        
        return[publisher[0],publisher[1][0].name, totalGlobalSales]
        })
    
    const topTenIndiePublishers = indiePublisherSales.sort((a, b)=>{
        return b[2]-a[2];
    }).slice(0,10);
    console.log(topTenIndiePublishers);

    const formatedTopTen = topTenIndiePublishers.map((publisher)=>{
        return[`${publisher[0]} (${publisher[1]})`, publisher[2]];
    })

    const data =[["Publisher", "Sales"],...formatedTopTen];
    const options = {
        hAxis : {slantedText: true, direction: -1, slantedTextAngle: 90}

    }

    return ( 
    <><h2>Top Indie Publishers</h2>
    <Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />
    </> );
}
 
export default TopIndiePublishers;