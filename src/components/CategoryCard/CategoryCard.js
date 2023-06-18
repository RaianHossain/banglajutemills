import React from 'react';
import COLORS from '../../constants/COLORS';
import placeHolder from '../../images/category/Placeholder_view_vector.svg';
import '../../styles/landing.css';

const CategoryCard = (props) => {
    const {name, image, description} = props.cat;
    return (
        <div class="col-12 col-md-12 col-lg-3">
            <div class="card text-light text-center bg-white pb-2">
                <div class="card-body text-dark">
                <div class="img-area mb-4">
                    <img src={image != null ? image : placeHolder} class="img-fluid" alt="" style={{ width: 300, height: 200 }}/>
                </div>
                    <h3 class="card-title">{name}</h3>
                    <p class="lead">{description}</p>
                    <button class="btn text-dark" style={{backgroundColor: COLORS.btn_color}}>See Products</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;