import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./ComparisonCard.css"

const ComparisonCard = ({gameList}) => {
    console.log(gameList)
    return ( 
        <section>
            
            <Container>
                <Row>
                    <h2 className="custon-title">{gameList[0].name}</h2>
                </Row>
                <Row bsPrefix="custom-row">
                    <tr className="custom-sub-row"><td>{`Genre: ${gameList[0].genre}`}</td></tr>
                    <tr className="custom-sub-row"><td>{`Publisher: ${gameList[0].publisher}`}</td></tr>
                    <tr className="custom-sub-row"><td>{`Release Data: ${gameList[0].year}`}</td></tr>
                </Row>
                <Row bsPrefix="custom-row">
                    {gameList.map((game)=>{
                        return( <Col bsPrefix="custom-col">
                            
                            <h2>{game.platform}</h2>
                            <tr> <td>{`Rank: ${game.rank}`}</td></tr>
                            <tr> <td>{`North America Sales: ${game.northAmericaSales}`}</td></tr>
                            <tr> <td>{`Japan Sales: ${game.japanSales}`}</td></tr>
                            <tr> <td>{`Europe Sales: ${game.europeSales}`}</td></tr>
                            
                            </Col>
                            
                        )
                        

                        
                        
                    })}
                </Row>

                
            </Container>

           
            
        </section>
      );
}
 
export default ComparisonCard;