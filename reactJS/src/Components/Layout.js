import React, { Suspense} from 'react';
import Header from './HeaderFolder/Header.jsx'
import Footer from './FooterFolder/Footer.jsx'

const Layout = ({ children }) => {
    return(<>
        <Header style={{ zIndex: 1 }} />
	    
        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>
        
        <Footer/>
    </>)
  };
  export default Layout;