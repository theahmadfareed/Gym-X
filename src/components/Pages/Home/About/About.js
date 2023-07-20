import React from 'react';
import './About.css';

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <img className="about-img img-fluid" src={require("../../../../Image_Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg")} alt="" />
                    </div>
                    <div className="col-md-5 offset-md-1 ">
                        <div className='f-os  about-content'>
                            <h2 className='about'>ABOUT US</h2>
                            <h3 className='about-title brand-c'>WE ARE HERE TO DREAM!</h3>
                            <h3 className='about-title'>OUR TEAM IS HERE TO SERVE YOU</h3>
                            <p className="about-p f-ro">At our gym, we are proud to have a team of highly qualified and certified personal trainers who are dedicated to helping our members achieve their fitness goals. Our trainers are experts in their field and have the knowledge, skills and experience to help you reach your full potential.

                                Our trainers are passionate about fitness and are committed to helping you achieve your goals, whether you're looking to lose weight, build muscle, improve your overall health and wellness, or simply get in shape. They will work with you to create a customized workout plan that is tailored to your specific needs and goals, taking into account your fitness level, health and any injuries you may have.</p>
                            {/* <div className="half-shape"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;