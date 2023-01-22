import { Navbar,Container,Nav } from "react-bootstrap";
import './Navbars.css';
import { NavLink } from "react-router-dom";
function Navbars(){
    return(
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/" className="logo">Dorsin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="first">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/team">Team</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars;