import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import mapPic from '../../images/map-location.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer-section">
        <div class="container">
            
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4 mb-3 me-4">
                        <div class="footer-widget">
                            <img src={mapPic} alt="" width="100%"/>
                            {/* <div class="footer-logo">
                                <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo" /></a>
                            </div>
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div> */}
                        </div>
                    </div>
                    
                    {/* <div class="col-xl-1 col-lg-1 col-md-1 mb-3">

                    </div> */}

                    <div class="col-xl-4 col-lg-4 col-md-4 mb-3">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                {/* <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li> */}
                                {/* <li><a href="#">Contact</a></li> */}
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="https://www.flaticon.com/free-icons/green-earth" title="green earth icons" target="_blank" rel="noreferrer">Green earth icons created by Circlon Tech - Flaticon</a></li>
                                <li><a href="https://www.flaticon.com/free-icons/excellence" title="Excellence icons" target="_blank" rel="noreferrer">Excellence icons created by Design Circle - Flaticon</a></li>
                                {/* <li><a href="#">Contact us</a></li> */}
                                <li><a href="https://www.flaticon.com/free-icons/expansion" title="expansion icons" target="_blank" rel="noreferrer">Expansion icons created by Freepik - Flaticon</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-3 col-md-3 mb-3">
                        <div class="footer-widget social-links">
                            <div class="footer-widget-heading">
                                <h3>Social Connectons</h3>
                            </div>
                            <ul>
                                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x"/></a></li>
                                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} size="2x"/></a></li>
                                {/* <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved <a href="#">XploriaIT</a></p>
                        </div>
                    </div>
                    {/* <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;