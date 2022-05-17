import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Navbar.css";

const NavBar = (props) => {
  const [searchBarText, setSearchBarText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${searchBarText}`);
  };

  return (
    <>
      <div className="navbar__body">
        <Container>
          <Row>
            <Col md={1}>
              <Link className="navbar__link" to={""}>
                <h5>Home</h5>
              </Link>
            </Col>
            <Col md={3}>
              <Link className="navbar__link" to={"invest/"}>
                <h5>Investment Tips</h5>
              </Link>
            </Col>
            <Col>
              <form onSubmit={handleSubmit}>
                <input
                  style={{ width: "100%" }}
                  placeholder="Search"
                  onChange={(e) => setSearchBarText(e.target.value)}
                />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
