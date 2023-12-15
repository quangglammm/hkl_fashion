import React, { Suspense} from 'react';
import HeaderChristmas from './HeaderChristmas/HeaderChristmas.jsx'
import FooterChristmas from './FooterChristmas/FooterChristmas.jsx'

const Layout = ({ children }) => {
    return(<>
        <HeaderChristmas style={{ zIndex: 1 }} />

        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>

        <FooterChristmas/>
    </>)
  };
  export default Layout;