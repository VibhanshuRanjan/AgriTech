import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <>
      <NavBar bg="dark" variant="dark">
        <Container>
          <NavBar.Brand href="/">Kisaan</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </>
  );
}

export default Navbar;