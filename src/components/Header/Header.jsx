import { Container, Nav, Navbar } from "react-bootstrap"
import {Link as Scroll} from 'react-scroll'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" sticky="top" style={{ height: '50px' }}>
      <Container>
        <Navbar.Brand as={Nav.Link}>
          <Scroll to="hero" smooth={true} offset={-100} duration={350}>Miguel Nazario</Scroll>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Scroll to="hero" smooth={true} offset={-100} duration={350}>Hero</Scroll>
            </Nav.Link>
            <Nav.Link>
              <Scroll to="about" smooth={true} offset={-100} duration={350}>About</Scroll>
            </Nav.Link>
            <Nav.Link>
              <Scroll to="projects" smooth={true} offset={-100} duration={350}>Projects</Scroll>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header