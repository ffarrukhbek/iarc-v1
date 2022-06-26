import React from 'react';
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            main layout
            <Outlet />
        </>
    );
};

export default MainLayout;