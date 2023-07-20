import React from 'react';
import './ChooseUs.css';

const ChooseUsCard = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="choose-card text-center">
                <img src={data.image} width='60' alt="" />
                <h4 className='f-os mt-4 mb-3'>{data.title}</h4>
                <p className="f-ro choose-p">{data.description}</p>
            </div>
        </div>
    )
};

export default ChooseUsCard;