import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function MainNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
                <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/profile">Profile</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;