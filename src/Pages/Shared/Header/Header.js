import React from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg" className="m-2">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand>Language College</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to="/">Courses</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <p className="align-items-center justify-content-center me-2">
              {user?.displayName}
            </p>
            <div className="ms-1 me-2">
              {user?.photoURL ? (
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </div>
            <Link to="/signIn" className="me-2">
              <Button variant="outline-success">Sign In</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
