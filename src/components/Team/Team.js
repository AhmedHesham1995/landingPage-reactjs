import { Container,Row } from 'react-bootstrap';
import './Team.css';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';
import team4 from '../../assets/team4.jpg';
function Team(){
    return(
        <section className='team'>
            <Container>
                <Row>
                    <div className='col-lg-12'>
                        <section className='sec-header'>
                            <h2>Team</h2>
                            <p>
                                It is a long established fact that create category leading brand experiences a reader will be distracted by<br/> the readable content of a page when looking at its layout.
                            </p>
                        </section>
                    </div>
                </Row>
            </Container>
            <section className='sec-team'>
                <Container>
                    <Row>
                        <div className='col-lg-3'>
                            <div className='team-card'>
                                <img src={team1} alt=''/>
                                <h5>Frank Johnson</h5>
                                <h6>CEO</h6>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='team-card'>
                                <img src={team2} alt=''/>
                                <h5>Elaine Stclair</h5>
                                <h6>DESIGNER</h6>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='team-card'>
                                <img src={team3} alt=''/>
                                <h5>Wanda Arthur</h5>
                                <h6>DEVELOPER</h6>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='team-card'>
                                <img src={team4} alt=''/>
                                <h5>Joshua Stemple</h5>
                                <h6>MANAGER</h6>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            
        </section>
    )
}

export default Team;