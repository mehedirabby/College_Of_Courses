import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSidenav from "../Pages/Shared/LeftSideNav/LeftSidenav";

const Main = () => {
  return (
    <div>
      <Container>
        <Header></Header>
        <Row>
          <Col lg="2">
            <LeftSidenav></LeftSidenav>
          </Col>
          <Col lg="10">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
