import React, { Suspense} from 'react';
import HeaderChristmas from './HeaderDefault/HeaderChristmas.jsx'
import FooterChristmas from './FooterChristmas/FooterChristmas.jsx'

const LayoutChristmas = ({ children }) => {
    return(<>
        <HeaderChristmas />

        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>

        <FooterChristmas/>
    </>)
};
export default LayoutChristmas;