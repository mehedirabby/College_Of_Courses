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
import DarkModeToggle from "react-dark-mode-toggle";
import { DarkThemeContext } from "./DarkThemeContext";
import "./header.css";

const Header = () => {
  const { turnOn, setTurnOn, mainColor } = useContext(DarkThemeContext);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error("error from logout", error);
      });
  };
  return (
    <Navbar bg="dark" expand="lg" className="me-2">
      <Container fluid>
        <Image
          className="me-2"
          style={{ height: "60px" }}
          src={
            "https://cdn3.vectorstock.com/i/1000x1000/54/27/lc-logo-design-initial-letter-logo-design-vector-37075427.jpg"
          }
        ></Image>
        <Navbar.Brand className="text-white">Language College</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-white" href="/">
              Courses
            </Nav.Link>
            <Nav.Link className="text-white" href="/blogs">
              Blogs
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item className="text-white" href="#action3">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item className="text-white" href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-white" href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <DarkModeToggle onChange={setTurnOn} checked={turnOn} size={80} />
          </Nav>
          <Form className="d-flex">
            <Nav.Link className="align-items-center justify-content-center me-2">
              {user?.uid ? (
                <>
                  <Link className="me-2">
                    <Button onClick={handleLogOut} variant="outline-danger">
                      Log Out
                    </Button>
                  </Link>

                  <span className="text-white">{user?.displayName}</span>
                </>
              ) : (
                <>
                  <Link to="/login" className="me-2">
                    <Button variant="outline-info">Log In</Button>
                  </Link>
                  <Link to="/signIn" className="me-2">
                    <Button variant="outline-success">Sign In</Button>
                  </Link>
                </>
              )}
            </Nav.Link>
            <div className="ms-1 me-2">
              {user?.photoURL ? (
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  title={user?.displayName}
                  src={user?.photoURL}
                  onMouseOver={user?.displayName}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
