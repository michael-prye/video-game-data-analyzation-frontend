import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./ComparisonCard.css";

const ComparisonCard = ({ gameList }) => {
  console.log(gameList);
  return (
    <section className="compcard__body">
      <Container>
        <Row>
          <h2 className="custon-title">Platforms</h2>
        </Row>
        <Row bsPrefix="custom-row">
          {gameList.map((game) => {
            return (
              <Col bsPrefix="custom-col">
                <h2>{game.platform}</h2>
                <tr>
                  {" "}
                  <td>{`Rank: ${game.rank}`}</td>
                </tr>
                <tr>
                  {" "}
                  <td>{`North America Sales: ${game.northAmericaSales}`}</td>
                </tr>
                <tr>
                  {" "}
                  <td>{`Japan Sales: ${game.japanSales}`}</td>
                </tr>
                <tr>
                  {" "}
                  <td>{`Europe Sales: ${game.europeSales}`}</td>
                </tr>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ComparisonCard;
