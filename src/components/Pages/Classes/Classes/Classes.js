import React from 'react';
import Nav from '../../../SharedComp/Nav/Nav';
import Footer from '../../../SharedComp/Footer/Footer';
import ClassesCard from '../ClassesCard/ClassesCard';
import './Classes.css';
import { classsData } from '../../../infoData.config';

const Classes = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="breadcrumbs-bg">
                <h1>OUR CLASSES</h1>
            </div>
            <div className="container">
                <div className="row gx-3">
                    {
                        classsData.map(data => <ClassesCard data={data}></ClassesCard>)
                    }
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;