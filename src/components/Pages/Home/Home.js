import React from 'react';
import Footer from '../../SharedComp/Footer/Footer';
import Nav from '../../SharedComp/Nav/Nav';
import About from './About/About';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import ServiceType from './ServiceType/ServiceType';
import TrainingPrograms from './TrainingPrograms/TrainingPrograms';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <ServiceType></ServiceType>
            <About></About>
            <TrainingPrograms></TrainingPrograms>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;