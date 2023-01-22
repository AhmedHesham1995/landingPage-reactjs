import './Home.css';
import { Container,Row } from 'react-bootstrap';

function Home(){
    return(
        <header>
            <div className='overlay'>
                <Container>
                    <Row>
                        <div className='col-lg-12 home'>
                            <h1>We help startups launch their <br/>products</h1>
                            <p>Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus<br/> quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                            <form>
                                <input type="email" placeholder="Email"/>
                                <button type="submit">SUBSCRIBE</button>
                            </form>
                        </div>
                   
                        
                        
                        
                    </Row>    
                </Container>
            </div>
        </header>
    )
}


export default Home;