import React, { Suspense} from 'react';
import HeaderChristmas from './HeaderChristmas/HeaderChristmas.jsx'
import FooterChristmas from './FooterChristmas/FooterChristmas.jsx'
import HeaderDefault from './HeaderDefault/HeaderDefault.jsx'
import FooterDefault from './FooterDefault/FooterDefault.jsx'


const Layout = ({ children }) => {
    return(<>
        <HeaderChristmas style={{ zIndex: 1 }} />
        {/* <HeaderDefault/> */}

        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>

        <FooterDefault/>
        {/* <FooterChristmas/> */}
    </>)
  };
  export default Layout;