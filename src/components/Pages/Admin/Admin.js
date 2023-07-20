import React, { useEffect } from 'react';
import Footer from '../../SharedComp/Footer/Footer';
import Nav from '../../SharedComp/Nav/Nav';
import AccordionInfo from './AccordionInfo';
import image101 from '../../../Image_Icon/sven-mieke-Lx_GDv7VA9M-unsplash.jpg';
import useAuth from '../Hook_Context/useAuth';


const Admin = () => {
    const [memberInfo, setMemberInfo] = useAuth();
    useEffect(() =>{
        fetch('http://localhost:30000/memberInfo')
        .then(res => res.json())
        .then(data => setMemberInfo(data));
    }, [])
    return (
        <div>
            <Nav></Nav>
            <div className="breadcrumbs-bg">
                <h1 className='brand-c'>Admin's Panel</h1>
            </div>
            <div className="container">
                <div className="row admin-bg" style={{backgroundImage: `url(${image101})`}}>
                    <div className="col-md-5">
                    </div>
                    <div className="col-md-7">
                    <h2 className='f-os text-center training-header p-0 mb-4 text-white'>Client's <span className='brand-c'>Membership</span></h2>
                        
                    {/* {
                        memberInfo.map(info => <AccordionInfo info={info} ></AccordionInfo>)
                    } */}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Admin;