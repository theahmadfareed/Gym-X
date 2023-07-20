import React from 'react';
import Footer from '../../../SharedComp/Footer/Footer';
import Nav from '../../../SharedComp/Nav/Nav';
import FormDetails from './FormDetails/FormDetails';

const PricingForm = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="breadcrumbs-bg">
                <h1>YOUR GYM MEMBERSHIP</h1>
            </div>
            <div>
                <FormDetails></FormDetails>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PricingForm;