import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import COLORS from '../../constants/COLORS';
import default_image from '../../images/category/Placeholder_view_vector.svg';
import chairman from '../../images/chairman.jpeg';
import president from '../../images/president.jpeg';
import './Messages.css';

const Messages = () => {
    return (
        <div className="messages-container">
            <div className="pt-4 me-md-4">
                <div className="ps-4 text-white">
                    <FontAwesomeIcon icon={faQuoteLeft} size='3x'/>
                    <h2 className="fw-bold display-6">Some thoughts of our leaders</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 pt-3 pb-3 ps-5 ps-md-0 pe-5 pe-md-0 me-md-4">
                    <div class="card" style={{width: '100%'}}>
                        <img src={chairman} class="card-img-top" alt="..." style={{height: '300px'}}/>
                        <div class="card-body">
                            <h5 class="card-title"><strong>Rana Chowdhury</strong></h5>
                            <strong>Managing Director</strong>
                            <p class="card-text"></p>
                            <a href="#" class="btn" style={{backgroundColor: COLORS.btn_color}}>See Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pt-3 pb-3 ps-5 ps-md-0 pe-5 pe-md-0 me-md-4">
                    <div class="card" style={{width: '100%'}}>
                        <img src={president} class="card-img-top" alt="..." style={{height: '300px'}}/>
                        <div class="card-body">
                            <h5 class="card-title"><strong>Suma Chowdhury</strong></h5>
                            <strong>Chairman</strong>
                            <p class="card-text"></p>
                            <a href="#" class="btn" style={{backgroundColor: COLORS.btn_color}}>See Details</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 pt-3 pb-3 ps-5 ps-md-0 pe-5 pe-md-0">
                    <div class="card" style={{width: '100%'}}>
                        <img src={default_image} class="card-img-top" alt="..." style={{height: '300px'}}/>
                        <div class="card-body">
                            <h5 class="card-title"><strong>Subrata Sen (Shuvro)</strong></h5>
                            <strong>Executive Director</strong>
                            <p class="card-text"></p>
                            <a href="#" class="btn" style={{backgroundColor: COLORS.btn_color}}>See Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;