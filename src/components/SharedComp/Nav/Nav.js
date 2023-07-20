import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav-content container">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid ">
                    <Link class="navbar-brand" to='/'>
                        <h3 className="logo">
                            Gym <span>X</span>
                        </h3>
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/'>
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/sevices'>
                                    Services
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/classes'>
                                    Our Classes
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/aboutUs'>
                                    About Us
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/blog'>
                                    Blog
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/pricing'>
                                    Pricing
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/contact'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
