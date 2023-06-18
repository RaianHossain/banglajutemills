import React from 'react';
import COLORS from '../../constants/COLORS';
import jute1 from '../../images/jute-1.jpg';
import jute2 from '../../images/jute-2.jpg';
import jute3 from '../../images/jute-3.jpg';
import '../../styles/landing.css';

const HeaderCarousel = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={jute1} class="d-block w-100" alt="..." />
              <div class="carousel-caption">
                <h5>Quality That Stands Tall</h5>
                <p>Quality is the cornerstone of our jute manufacturing company. We believe in delivering products that exemplify excellence and durability.</p>
                <p><a href="#" class="btn mt-3" style={{backgroundColor: COLORS.btn_color}}>Learn More</a></p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={jute2} class="d-block w-100" alt="..." />
              <div class="carousel-caption">
                <h5>Always Dedicated</h5>
                <p>Dedication is the fuel that drives us to surpass limits and achieve greatness. It enables us to deliver exceptional results.</p>
                <p><a href="#" class="btn mt-3" style={{backgroundColor: COLORS.btn_color}}>Learn More</a></p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={jute3} class="d-block w-100" alt="..." />
              <div class="carousel-caption">
                <h5>Sustainability in Every Strand</h5>
                <p>Our motto reflects our unwavering dedication to sustainability. We strive to minimize our environmental footprint and contribute to a greener future.</p>
                <p><a href="#" class="btn mt-3" style={{backgroundColor: COLORS.btn_color}}>Learn More</a></p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    );
};

export default HeaderCarousel;