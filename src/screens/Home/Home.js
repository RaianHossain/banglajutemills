import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Footer from '../../components/Footer/Footer';
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel';
import Navbar from '../../components/Navbar/Navbar';
import Subsidiairies from '../../components/Subsidiaries/Subsidiairies';
import COLORS from '../../constants/COLORS';
import categories from '../../dummyData/data';
import aboutProduct from '../../images/about-product.jpg';
import quality from '../../images/icons/excellence.png';
import versatile from '../../images/icons/expansion.png';
import sustainable from '../../images/icons/green-earth.png';
import '../../styles/landing.css';

const Home = () => {
    return (
        <div>
            <Navbar/>

            <section id="home">
                <HeaderCarousel></HeaderCarousel>
            </section>

            {/* about section starts */}
            <section id="about" class="about section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-12">
                            <div class="about-img">
                                <img src={aboutProduct} alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                            <div class="about-text">
                                    <h2>Quality Jute, and Jute Products  <br/> Is What We Offer</h2>
                                    <p>We take immense pride in being a leading manufacturer of high-quality jute products. With a commitment to excellence and sustainability, we strive to deliver products that not only meet but exceed your expectations. Our dedication to quality begins at the very source of our materials. We carefully select premium jute fibers that are not only strong and durable but also harvested responsibly, ensuring minimal environmental impact. This allows us to create products that are not only beautiful but also eco-friendly.</p>
                                    <a href="#" class="btn" style={{backgroundColor: COLORS.btn_color}}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section Ends */}

            {/* services section Starts */}
            <section class="services section-padding" id="services">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Why Choose Us</h2>
                                <p>Here are three attributes<br/>we prioritize most.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-white text-center bg-dark pb-2">
                                <div class="card-body">
                                    <img src={quality} alt="" class="img-fluid mb-2" width={70} height={70} />
                                    <h3 class="card-title">Best Quality</h3>
                                    <p class="lead">Our commitment to quality is unwavering. We strive for excellence in every aspect of our jute products, ensuring the highest standards of craftsmanship, durability. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-white text-center bg-dark pb-2">
                                <div class="card-body">
                                    <img src={versatile} alt="" class="img-fluid mb-2" width={70} height={70} />
                                    <h3 class="card-title">Versatile</h3>
                                    <p class="lead">We take pride in our versatility as a jute product manufacturer. Jute fibers provide us with a versatile medium to work with. We embrace this flexibility with wide range of products.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-white text-center bg-dark pb-2">
                                <div class="card-body">
                                    <img src={sustainable} alt="" class="img-fluid mb-2" width={70} height={70} />
                                    <h3 class="card-title">Sustainable</h3>
                                    <p class="lead">Step into a world where sustainability meets style. We specialize in crafting jute products that not only make a statement but also leave a lasting impression.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services section Ends */}

            {/* Categories strats */}
            <section id="category" class="category section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Categories We Provide</h2>
                                <p>The categories of the products we make</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">   
                        {categories.map(category => <CategoryCard key={category.id} cat={category} />)}                        
                    </div>
                </div>
            </section>
            {/* categories ends */}

            {/* Subsidiaries starts */}
            {/* <section class="team section-padding" id="team">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Our Subsidiaries</h2>
                                <p>We have four more subsidiary companies </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src={sbs} alt="" class="img-fluid" style={{height: '200px', width: 'auto'}}/>                                
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src={tc} alt="" class="img-fluid" style={{height: '200px', width: 'auto'}}/>                                
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src={tl} alt="" class="img-fluid" style={{height: '200px', width: 'auto'}}/>                                
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src={bfl} alt="" class="img-fluid" style={{height: '200px', width: 'auto'}}/>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Subsidiaries ends */}   

            <section class="team section-padding" id="team">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Our Subsidiaries</h2>
                                <p>We have four more subsidiary companies </p>
                            </div>
                        </div>
                    </div>
                    <Subsidiairies></Subsidiairies>         
                </div>
            </section>

            
            

            {/* Contact starts */}
            <section id="contact" class="contact section-padding">
                <div class="container mt-5 mb-5">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Contact Us</h2>
                                <p>You can contact us anytime.<br/>Just send a messsage. We will contact you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row m-0">
                        <div class="col-md-12 p-0 pt-4 pb-4">
                            <form action="#" class="bg-light p-4 m-auto">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <input class="form-control" placeholder="Full Name" required="" type="text"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <input class="form-control" placeholder="Email" required="" type="email"/>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <textarea class="form-control" placeholder="Message" required="" rows="3"></textarea>
                                        </div>
                                    </div><button class="btn btn-lg btn-block mt-3" style={{backgroundColor: COLORS.btn_color}} type="button">Send Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Home;