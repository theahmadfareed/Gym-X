import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookSquare, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container ">
                <div className="row">
                    <div className="col-md-3">
                        <Link class="navbar-brand" to='/'>
                            <h3 className="logo">
                                Gym<span>X</span>
                            </h3>
                        </Link>
                    </div>
                    <div className="col-md-2">
                        <p className='footer-col'>Need Help?</p>
                        <ul className='footer-row'>
                            <li><Link className='text-white' to={'/'}>Help Center</Link></li>
                            <li><Link className='text-white' to={'/'}>Email Support</Link></li>
                            <li><Link className='text-white' to={'/'}>Live Chat</Link></li>
                            <li><Link className='text-white' to={'/'}>Gift Certificate</Link></li>
                            <li><Link className='text-white' to={'/'}>Send Us Feedback</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p className='footer-col'>Digital Resources</p>
                        <ul className='footer-row'>
                            <li><Link className='text-white' to={'/'}>Articles</Link></li>
                            <li><Link className='text-white' to={'/'}>E-books</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <p className='footer-col'>Connect With Us</p>
                        <ul className='footer-row'>
                            <li className='footer-icons'>
                                <a className='text-white me-2' href='/'><FaYoutube /></a>
                                <a className='text-white me-2' href='/'><FaFacebookSquare /></a>
                                <a className='text-white me-2' href='/'><FaInstagram /></a>
                                <a className='text-white me-2' href='/'><FaTwitter /></a>
                                <a className='text-white me-2' href='/'><FaWhatsapp /></a>
                            </li>
                            <li><Link className='text-white' to={'/'}>Forum</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <p className='footer-col'>Join Our Newsletter</p>
                        <p className='footer-row'>
                            Get exclusive news, features and updates from Th Shrdder Weight Loss Academy
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;