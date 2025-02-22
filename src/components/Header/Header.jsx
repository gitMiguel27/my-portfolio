import { Container, Nav, Navbar } from "react-bootstrap"

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" sticky="top" style={{ height: '50px' }}>
      <Container>
        <Navbar.Brand href="#hero">Miguel Nazario</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero">Hero</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header