import React from 'react';
import Header from './HeaderFolder/Header.jsx'
import Footer from './FooterFolder/Footer.jsx'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(<>
        <Header style={{ zIndex: 1 }} />
	    
        <Outlet />
        
        <Footer/>
    </>)
  };
  export default Layout;