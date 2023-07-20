import React from 'react';

const ServiceCard = ({data}) => {
    return (
        <div className="col-md-4">
            <div className="service-content">
                <div className="service_card" style={{ backgroundImage: `url(${data.imagebg})` }}></div>
                <div className="service-detail">
                    <img src={data.image} className='service_img ' alt="" />
                    <h3 className='f-os '>{data.title}</h3>
                    <p className='service-p f-ro'>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;