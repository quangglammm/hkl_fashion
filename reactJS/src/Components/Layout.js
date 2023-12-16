import React, { Suspense} from 'react';
import HeaderChristmas from './HeaderDefault/HeaderChristmas.jsx'
import HeaderDefault from './HeaderDefault/HeaderDefault.jsx'
import FooterDefault from './FooterDefault/FooterDefault.jsx'
import FooterChristmas from './FooterDefault/FooterChristmas.jsx'
import { useDispatch, useSelector } from "react-redux";

const Layout = ({ children }) => {
const layout = useSelector((state) => state.layoutState.layout);

    return(<>
  {
    !layout?<><HeaderDefault/>

    <Suspense fallback={<p>Loading...</p>}>
        {children}
    </Suspense>

    <FooterDefault/></>:<><HeaderChristmas/>

<Suspense fallback={<p>Loading...</p>}>
    {children}
</Suspense>

<FooterChristmas/></>
  }
        
    </>)
};
export default Layout;