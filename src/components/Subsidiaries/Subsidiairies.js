import React from 'react';
import bfl from '../../images/sis_concern/bfl.jpeg';
import sbs from '../../images/sis_concern/sbs.jpeg';
import tc from '../../images/sis_concern/tc.jpeg';
import tl from '../../images/sis_concern/tl.jpeg';
import CardSlider from './CardSlider';
import './Subsidiaries.css';



const Subsidiairies = () => {
    const cardItems = [
        {          
          image: sbs,
        },
        {
          image: bfl,
        },
        {
          image: tc,
        },
        {
          image: tl,
        }
      ];
    return (
        <div>
            {/* Other components */}
            <CardSlider items={cardItems} />
            {/* Other components */}
        </div>
    );
};

export default Subsidiairies;