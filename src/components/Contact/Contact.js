import './Contact.css';
import { Container,Row,Form, Button } from 'react-bootstrap';
function Contact(){
    return(
        <>
            <section className='sec-header'>
                <Container>
                        <Row>
                            <div className='col-lg-12'>
                                <h2>Contact</h2>
                                <p>
                                    We thrive when coming up with innovative ideas but also understand that a smart concept should be<br/> supported with measurable results.
                                </p>    
                            </div>
                        </Row>
                    </Container>
            </section>
            <section className='contact-form'>
                <Container>
                        <Row>
                            <div className='col-lg-4'>
                                <div className='contact-box'>
                                    <h6>Office Address 1:</h6>
                                    <div>4461 Cedar Street Moro, AR 72368</div>
                                </div>
                                <div className='contact-box'>
                                    <h6>Office Address 2:</h6>
                                    <div>2467 Swick Hill Street</div>
                                    <div>New Orleans, LA 70171</div>
                                </div>
                                <div className='contact-box'>
                                    <h6>Working Hours:</h6>
                                    <div>9:00AM To 6:00PM</div>
                                </div>
                                 
                            </div>
                            <div className='col-lg-8'>
                                {/* <form>
                                    <div className='above'>
                                        <input id='name' type="text" placeholder="Your name*"/>
                                        <input id='email' type="email" placeholder="Your email*"/>
                                    </div>
                                    <div className='under'>
                                        <input id='sub' type="text" placeholder="Your subject.."/>
                                        <textarea id='mess' placeholder='Your message...'></textarea>
                                    </div>
                                    
                                </form>
                                <button type='submit'>Send message</button> */}
                                <Form className='contact-form'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="input" placeholder="your name*" />
                                        <Form.Control type="email" placeholder="your email*" />
                                        <Form.Control type="input" placeholder="your subject.." />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" id='form-text' placeholder='Your message...' rows={3} />
                                    </Form.Group>
                                    <Button className='contact-btn'>Send message</Button>
                                </Form>
                            </div>
                        </Row>
                    </Container>
            </section>
        </>
    )
}

export default Contact;