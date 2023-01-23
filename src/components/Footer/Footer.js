import './Footer.css';
import { Container,Row,Form } from 'react-bootstrap';
function Footer(){
    return(
    <>
        <footer>
            <Container>
                <Row>
                    <div className='col-md-3'>
                        <h4>Dorsen</h4>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h4>Information</h4>
                        <ul>
                            <li>Terms & Condition</li>
                            <li>About us</li>
                            <li>Jobs</li>
                            <li>Bookmarks</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h4>Support</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>Contact</li>
                            <li>Disscusion</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h4>Subscribe</h4>
                        <ul>
                            <p>
                                In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.
                            </p>
                            {/* <form>
                                <input type="email" placeholder="Email"/>
                            </form> */}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className='footer-input' type="email" placeholder="Email" />
                            </Form.Group>
                        </ul>
                    </div>
                </Row>
            </Container>
        </footer>
        <div className='foot'>
            <Container>
                <Row>
                    <div className='col-lg-12'>
                    <span>
                        2019 - 2020 © Dorsin - Themesbrand payment
                    </span>
                    </div>
                </Row>
            </Container>
        </div>
    </>
    
    )
}

export default Footer;







