import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const ComparisonCard = ({gameList}) => {
    console.log(gameList)
    return ( 
        <section>
            
            <Container>
                <Row>
                    <h2>{gameList[0].name}</h2>
                </Row>
                <Row>
                    <td>Genre: </td><td>{gameList[0].genre}</td>
                    <td>Publisher: </td><td>{gameList[0].publisher}</td>
                    <td>Release Data: </td><td>{gameList[0].year}</td>
                </Row>
                <Row>
                    {gameList.map((game)=>{
                        return(<div>
                            <h2>{game.platform}</h2>
                            <td>Rank: </td><td>{game.rank}</td>
                            <td>North America Sales: </td><td>{game.northAmericaSales}</td>
                            <td>Japan Sales: </td><td>{game.japanSales}</td>
                            <td>Europe Sales: </td><td>{game.europeSales}</td>
                            </div>
                        )
                        

                        
                        
                    })}
                </Row>

                
            </Container>

           
            
        </section>
      );
}
 
export default ComparisonCard;