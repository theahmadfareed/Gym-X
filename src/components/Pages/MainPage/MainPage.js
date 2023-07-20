import React from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from '../Page404/Page404';
import Classes from '../Classes/Classes/Classes';
import ClassDetails from '../Classes/ClassDetails/ClassDetails';
import Pricing from '../Pricing/Pricing/Pricing';
import PricingForm from '../Pricing/PricingForm/PricingForm';
import Admin from '../Admin/Admin';
import { DataProvider } from '../Hook_Context/DataContext';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import Login from '../Login/Login/Login';

const MainPage = () => {
    return (
        <DataProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/classes' element={<Classes />}></Route>
                    <Route path='/classes/details' element={<ClassDetails />}></Route>
                    <Route path='/pricing' element={<Pricing />}></Route>
                    <Route path='/pricing/form' element={<PricingForm />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='*' element={<Page404 />}></Route>
                    
                    {/* ======== restricted =========== */}
                        <Route path='/admin' element={<Admin />}></Route>
                    <Route element={<PrivateRoute />}>
                    </Route>

                </Routes>
            </Router>
        </DataProvider>
    );
};

export default MainPage;