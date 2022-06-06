import React, { useState } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Announcement from "./addAnnouncement";
import Result from "./addExamResults";
import StudentDetail from "./viewStudentDetail";

export default function Navbar1() {
  return (
    <React.Fragment>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>
              SCHOOL
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to={"/announcement"}>
                  Announcement
                </Nav.Link>
                <Nav.Link as={Link} to={"/result"}>
                  Result
                </Nav.Link>
                <Nav.Link as={Link} to={"/studentDetail"}>
                  Student-Details
                </Nav.Link>
                <NavDropdown title="TeacherName" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/login"}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route exact path="/announcement" element={<Announcement />}></Route>
        <Route exact path="/result" element={<Result />}></Route>
        <Route exact path="/studentDetail" element={<StudentDetail />}></Route>
      </Routes>
    </React.Fragment>
  );
}
