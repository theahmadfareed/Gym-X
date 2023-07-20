import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const TrainingProgramCard = ({data}) => {
    return (
        <div className="col-md-6">
            <div className="program-content">
                <div className="program-card" style={{ backgroundImage: `url(${data.image})` }}>
                </div>
                <button className='brand-btn training-btn'>{data.name} <BsArrowRight className='ms-4' /></button>
            </div>
        </div>
    );
};

export default TrainingProgramCard;