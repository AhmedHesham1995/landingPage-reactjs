import { Container,Row } from 'react-bootstrap';
import './Pricing.css';
import Data from '../../Data';
function Pricing(){
    const dataPrice = Data.pricing.map((element)=>{
        return(
            <div className='col-lg-4'>
                <div className='price-box'>
                    <h5>{element.kind}</h5>
                    <h1>{element.price}</h1>
                    <h7>{element.billing}</h7>
                    <hr/>
                    <div>Bandwidth: <span>{element.bandwidth}</span></div>
                    <div>Onlinespace: <span>{element.onlinspace}</span></div>
                    <div>Support: <span>{element.support}</span></div>
                    <div>Domain: <span>{element.domain}</span></div>
                    <div>Hidden fees: <span>{element.hiddenfees}</span></div>
                    <button>Join Now</button>
                </div>
            </div>
        )
    })
    return(
        <>
            <section className='sec-header'>
                <Container>
                    <Row>
                        <div className='col-lg-12'>
                            <h2>OUR PRICING</h2>
                            <p>
                                Call to action pricing table is really crucial to your for your business website. Make your bids stand-out<br/> with amazing options.
                            </p>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className='pricing-part'>
                <Container>
                    <Row>
                        {dataPrice}
                    </Row>
                </Container>
            </section>      
        </>
    )
}

export default Pricing;