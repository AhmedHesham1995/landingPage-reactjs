import './Home.css';
import { Container,Row,Col,Form, Button } from 'react-bootstrap';

function Home(){
    return(
        <header>
            <div className='overlay'>
                <Container>
                    <Row>
                        <div className='col-lg-12 home'>
                            <h1>We help startups launch their <br/>products</h1>
                            <p>Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus<br/> quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                            {/* <form className='form'>
                                <input type="email" placeholder="Email"/>
                                <button type="submit">SUBSCRIBE</button>
                            </form> */}
                            <Form className='home-form'>
                            <Row>
                                <Col>
                                <Form.Control className='home-input' placeholder="First name" />
                                </Col>
                                <Col>
                                <Button type='submit' className='home-btn'>Subscribe</Button>
                                </Col>
                            </Row>
                            </Form>
                        </div>
                    </Row>
                </Container>
                
            </div>
        </header>
    )
}


export default Home;