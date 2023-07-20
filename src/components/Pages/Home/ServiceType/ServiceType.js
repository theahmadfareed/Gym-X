import React from 'react';
import './ServiceType.css';
import ServiceCard from './ServiceCard';
import { serviceTypeData } from '../../../infoData.config';

const ServiceType = () => {
    return (
        <section>
            <div className="container">
                <div className="row gx-2 service-type">
                    {
                        serviceTypeData.map(data => <ServiceCard data={data}></ServiceCard>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default ServiceType;