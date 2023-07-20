import React, { useRef } from 'react';
// import clip from '../../../../Image_Icon/raindrops.mp4';
import './Banner.css';

const Banner = () => {
    // const videoRef = useRef();

    // const handlePlay = () =>{
    //     videoRef.current.play();

    // }
    // const handlePause = () =>{
    //     videoRef.current.pause();

    // }
    return (
        <section className='banner-bg'>
            {/* <video ref={videoRef} src={clip} type='video/mp4' className='banner-video'> */}
            <div className="container ">
                <div className="row">

                    <div className="col-md-6 text-content">
                        <h1 className='banner-title f-os'>THE BEST FITNESS STUDIO IN TOWN</h1>
                        <p className='mb-5 f-ro'>Welcome to our gym! We are dedicated to helping our members achieve their fitness goals in a supportive and welcoming environment. Our state-of-the-art facility is equipped with the latest equipment and staffed by certified personal trainers who are committed to helping you reach your full potential. Whether you're a seasoned athlete or just starting out on your fitness journey, we have something for everyone. Come in and see for yourself why we're the best gym in town!</p>
                        <button className='brand-btn f-ro'>JOIN US</button>

                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="cross-shape">
                            {/* <h1 style={{cursor: 'pointer'}}   onClick={handlePlay}>PLAY</h1><h1 style={{cursor: 'pointer'}}   onClick={handlePause}>pause</h1> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* </video> */}
        </section>
    );
};

export default Banner;