import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css";


export default function MyNavbar(){
    return(
        <>
            <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#home"><img src="images/logo.png" alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Investors</Nav.Link>
                            <Nav.Link href="#link">International Oil Companies</Nav.Link>
                            <Nav.Link href="#link"> How it works</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">User Icon</Nav.Link>
                            <Nav.Link href="#link">Get Started</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
        </>
    )
}