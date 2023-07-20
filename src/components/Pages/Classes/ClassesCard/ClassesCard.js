import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../Classes/Classes.css';

const ClassesCard = ({data}) => {
    return (
        <div className='col-md-4'>
            <div className="class_card position-relative">
                <img className='img-fluid class-img' src={data.image} alt="" />
                <Link to={'/classes/details'}>
                    <button className="brand-btn class_btn">{data.name} <BsArrowRight className='ms-4' /></button>
                </Link>
            </div>
        </div>
    );
};

export default ClassesCard;