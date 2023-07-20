import React from 'react';
import Nav from '../../../SharedComp/Nav/Nav';
import image11 from '../../../../Image_Icon/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg';
import "./ClassDetails.css";
import Footer from '../../../SharedComp/Footer/Footer';
import { Link } from 'react-router-dom';

const ClassDetails = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="breadcrumbs-bg">
                <h1>ADVANCE GYM</h1>
            </div>
            <div className="container">
                <div className="row class-detail">
                    <div className="col-md-7 ">
                        <img src={image11} alt="" className="w-100" />
                        <p className="f-ro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ut sed aliquam consequuntur praesentium officiis nesciunt ipsum quos culpa, incidunt nostrum odio perferendis. Expedita in sit doloremque maiores, totam, accusamus ratione a harum distinctio culpa nostrum? Quaerat necessitatibus optio, id, vel beatae hic ratione alias tempora provident illo quas ipsam nisi voluptas quo sequi dignissimos nobis laboriosam inventore eum fugiat? Ut in delectus exercitationem, labore voluptatem autem maiores corrupti vel culpa iste ipsum. Quod quaerat blanditiis soluta, exercitationem nobis!</p>
                        <div className="check-boxes">
                            <form>
                                <div>
                                    <input class="form-check-input" type="checkbox" name="" />
                                    <label className='ms-3 f-ro' htmlFor=""><h6>Having Slimmer Shapely Thighs</h6></label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" name="" />
                                    <label className='ms-3 f-ro' htmlFor=""><h6>Having Slimmer Shapely Thighs</h6></label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" name="" />
                                    <label className='ms-3 f-ro' htmlFor=""><h6>Having Slimmer Shapely Thighs</h6></label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" name="" />
                                    <label className='ms-3 f-ro' htmlFor=""><h6>Having Slimmer Shapely Thighs</h6></label>
                                </div>
                                <div>
                                    <input class="form-check-input" type="checkbox" name="" />
                                    <label className='ms-3 f-ro' htmlFor=""><h6>Having Slimmer Shapely Thighs</h6></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 position-relative">
                        <h2 className='f-os training-header mb-5 p-0'><span className='brand-c'>CLASS </span>SCHEDULE</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="class-time">
                                    <h5 className='f-os'>MONDAY</h5>
                                    <small className='f-ro brand-c'>8:00 AM - 9:00 AM</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="class-time">
                                    <h5 className='f-os'>TUESDAY</h5>
                                    <small className='f-ro brand-c'>8:00 AM - 9:00 AM</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="class-time">
                                    <h5 className='f-os'>WEDNESDAY</h5>
                                    <small className='f-ro brand-c'>8:00 AM - 9:00 AM</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="class-time">
                                    <h5 className='f-os'>THURSDAY</h5>
                                    <small className='f-ro brand-c'>8:00 AM - 9:00 AM</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="class-time">
                                    <h5 className='f-os'>FRIDAY</h5>
                                    <small className='f-ro brand-c'>8:00 AM - 9:00 AM</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="class-time">
                                    <h5 className='f-os'>SATURDAY</h5>
                                    <small className='f-ro brand-c'>8:00 AM - 9:00 AM</small>
                                </div>
                            </div>
                        </div>

                        <Link to={'/pricing'} ><button className="brand-btn class-btn">JOIN US</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ClassDetails;