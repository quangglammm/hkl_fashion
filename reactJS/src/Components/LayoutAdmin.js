import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    return (<>
        <Suspense fallback={<p>Loading...</p>}>
            {children}
        </Suspense>
    </>);
};

export default AdminRoute;