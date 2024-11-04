import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
        
            <Outlet></Outlet>
            <div>
              <Footer></Footer>  
            </div>
        </div>
    );
};

export default MainLayout;