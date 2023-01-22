import { Container,Row} from 'react-bootstrap';
import './Blog.css';
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
function Blog(){
    return(
        <section className='blog'>
            <section className="sec-header">
                <h2>Blog</h2>
                <p>
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.
                </p>
            </section>
            <section className='blog-content'>
                <Container>
                    <Row>
                        <div className='col-lg-4'>
                            <div className='blog-card'>
                                <img src={blog1} alt=''/>
                                <h6>UI & UX Design</h6>
                                <h4>Doing across country road trip</h4>
                                <p>
                                    She packed her seven versalia, put her initial into the belt and made herself on the way..
                                </p>
                                <span>Read More</span>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='blog-card'>
                                <img src={blog2} alt=''/>
                                <h6>Digital Marketing</h6>
                                <h4>New exhibition at our museum</h4>
                                <p>
                                    Pityful a rethoric question ran over her cheek, then she continued her way.
                                </p>
                                <span>Read More</span>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='blog-card'>
                                <img src={blog3} alt=''/>
                                <h6>Travelling</h6>
                                <h4>Whu are so many people</h4>
                                <p>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                                </p>
                                <span>Read More</span>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </section>
        
    )
}

export default Blog;