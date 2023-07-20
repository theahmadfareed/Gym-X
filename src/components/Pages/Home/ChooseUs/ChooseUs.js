import React from 'react';
import ChooseUsCard from './ChooseUsCard';
import './ChooseUs.css';
import { chooseUsData } from '../../../infoData.config';


const ChooseUs = () => {
    return (
        <section>
            <div className="container choose-us">
            <h2 className='f-os text-center training-header'>WHY <span className='brand-c'>CHOOSE US</span></h2>
                <div className="row">
                    {
                        chooseUsData.map(data => <ChooseUsCard data={data}></ChooseUsCard>)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;