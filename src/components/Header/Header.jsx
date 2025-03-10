import { Container, Nav, Navbar } from "react-bootstrap"
import './Header.css'

function Header() {
  return (
    <Navbar className="custom-navbar" data-bs-theme="dark" expand="lg" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">MN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header