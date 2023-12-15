import React, { Suspense} from 'react';
import HeaderDefault from './HeaderDefault/HeaderDefault.jsx'
import FooterDefault from './FooterDefault/FooterDefault.jsx'

const Layout = ({ children }) => {
    return(<>
        <HeaderDefault/>

        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>

        <FooterDefault/>
    </>)
};
export default Layout;