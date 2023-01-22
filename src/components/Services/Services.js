
import './Services.css';
import { Container,Row } from 'react-bootstrap';
import Data from '../../Data';
import Card from './Card';
import services from  '../../assets/services.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Services(){
    const item = Data.serve.map((dataItem)=>{
        return(
            <div className='col-lg-4'>
                <Card title={dataItem.title} text={dataItem.text} icon={dataItem.icon} id={dataItem.id} />
            </div>
        )
    })
    return(
        <>
            <section className="sec-header">
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <h2>OUR SERVICES</h2>
                            <p>
                                We craft digital, graphic and dimensional thinking, to create category leading brand experiences that<br/> have meaning and add a value for our clients.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        {item}
                    </Row>
                </Container>
            </section>
            <div className='sec-services'>
                <Container>
                    <Row>
                        <div className='col-lg-6'>
                            <h3>
                                A digital web design studio creating modern & engaging online experiences
                            </h3>
                            <p>
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                            </p>
                            <ul>
                                <li>We put a lot of effort in design.</li>
                                <li>The most important ingredient of successful website.</li>
                                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                                <li>Submit Your Orgnization.</li>
                            </ul>
                            <button>Learn more<FontAwesomeIcon icon={ faArrowRight } /></button>
                        </div>
                        <div className='col-lg-6'>
                            <img src={services} alt=''/>
                        </div>
                    </Row>
                </Container>  
            </div>
            <div className='end-services'>
                <div className='overlay'>
                    <Container>
                        <Row>
                            <div className='col-lg-12'>
                                <h3>Build your dream website today</h3>
                                <p>
                                    But nothing the copy said could convince her and so it didn’t take long until a few<br/> insidious Copy Writers ambushed her.
                                </p>
                                <button>View Plan & Pricing</button>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Services;