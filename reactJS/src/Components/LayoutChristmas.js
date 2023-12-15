import React, { Suspense} from 'react';
import HeaderChristmas from './HeaderDefault/HeaderChristmas.jsx'
import FooterChristmas from './FooterDefault/FooterChristmas.jsx'
import Snowflakes from '../cssEffect/Snowflakes.js';
const LayoutChristmas = ({ children }) => {
    return(<>
        <Snowflakes/>
        <HeaderChristmas />

        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>

        <FooterChristmas/>
    </>)
};
export default LayoutChristmas;