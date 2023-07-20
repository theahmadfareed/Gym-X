import React from 'react';
import Footer from '../../../SharedComp/Footer/Footer';
import Nav from '../../../SharedComp/Nav/Nav';
import image11 from '../../../../Image_Icon/hipcravo-5UbIqV58CW8-unsplash.jpg';
import image22 from '../../../../Image_Icon/daniel-apodaca-WdoQio6HPVA-unsplash.jpg';
import image33 from '../../../../Image_Icon/penguinuhh-8VI6WwEEEHw-unsplash.jpg';
import './Pricing.css';
import { GoCheck } from 'react-icons/go';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook_Context/useAuth';

const Pricing = () => {
    const [ membership, setMembership] = useAuth();

    const handleMembership = (data) =>{setMembership(data)}
    console.log(membership);
    return (
        <div>
            <Nav></Nav>
            <div className="breadcrumbs-bg">
                <h1>PRICING PLANS</h1>
            </div>
            <div className="container text-center">
                <h2 className='f-os training-header  p-0'><span className='brand-c'>CHOOSE THE OFFER </span>THAT SUITS YOU</h2>
                <small className='f-ro '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus id <br /> quia eum fugiat velit sit.</small>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="pricing-content" style={{backgroundImage: `url(${image11})`}}>
                            <h5 className='f-os brand-c'>BILLED MONTHLY</h5>
                            <h3 className='f-os text-white'>ADVANCE PLAN</h3>
                            <h2 className='f-os brand-c price'>$140</h2>
                            <ul className='f-ro text-white plan-types'>
                                <li className='mb-2'><GoCheck className='me-2' />Mobile Optimized</li>
                                <li className='mb-2'><GoCheck className='me-2' />Best Hosting</li>
                                <li className='mb-2'><GoCheck className='me-2' />Free Custom</li>
                                <li className='mb-2'><GoCheck className='me-2' />Outstanding</li>
                                <li className='mb-2'><GoCheck className='me-2' />Happy Customers</li>
                            </ul>
                            <Link  to={'/pricing/form'}><button onClick={() =>handleMembership({membershipName: 'ADVANCE PLAN', price: '140'})} className="brand-btn mt-4">PURCHASE</button></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing-content" style={{backgroundImage: `url(${image22})`}}>
                            <h5 className='f-os brand-c'>BILLED MONTHLY</h5>
                            <h3 className='f-os text-white'>BASIC PLAN</h3>
                            <h2 className='f-os brand-c price'>$120</h2>
                            <ul className='f-ro text-white plan-types'>
                                <li className='mb-2'><GoCheck className='me-2' />Mobile Optimized</li>
                                <li className='mb-2'><GoCheck className='me-2' />Best Hosting</li>
                                <li className='mb-2'><GoCheck className='me-2' />Free Custom</li>
                                <li className='mb-2'><GoCheck className='me-2' />Outstanding</li>
                                <li className='mb-2'><GoCheck className='me-2' />Happy Customers</li>
                            </ul>
                            <Link  to={'/pricing/form'}><button onClick={() =>handleMembership({membershipName: 'BASIC PLAN', price: '120'})} className="brand-btn mt-4">PURCHASE</button></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="pricing-content" style={{backgroundImage: `url(${image33})`}}>
                            <h5 className='f-os brand-c'>BILLED MONTHLY</h5>
                            <h3 className='f-os text-white'>BEGINERS</h3>
                            <h2 className='f-os brand-c price'>$90</h2>
                            <ul className='f-ro text-white plan-types'>
                                <li className='mb-2'><GoCheck className='me-2' />Mobile Optimized</li>
                                <li className='mb-2'><GoCheck className='me-2' />Best Hosting</li>
                                <li className='mb-2'><GoCheck className='me-2' />Free Custom</li>
                                <li className='mb-2'><GoCheck className='me-2' />Outstanding</li>
                                <li className='mb-2'><GoCheck className='me-2' />Happy Customers</li>
                            </ul>
                            <Link  to={'/pricing/form'}><button onClick={() =>handleMembership({membershipName: 'BEGINRS', price: '90'})} className="brand-btn mt-4">PURCHASE</button></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;