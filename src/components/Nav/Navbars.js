import { Navbar,Container,Nav } from "react-bootstrap";
import './Navbars.css';
import { NavLink } from "react-router-dom";
function Navbars(){
    const handleNavClick=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/" className="logo"  onClick={handleNavClick}>Dorsin</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="first" onClick={handleNavClick}>Home</NavLink>
                    <NavLink to="/services" onClick={handleNavClick}>Services</NavLink>
                    <NavLink to="/pricing" onClick={handleNavClick}>Pricing</NavLink>
                    <NavLink to="/team" onClick={handleNavClick}>Team</NavLink>
                    <NavLink to="/blog" onClick={handleNavClick}>Blog</NavLink>
                    <NavLink to="/contact" onClick={handleNavClick}>Contact</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars;