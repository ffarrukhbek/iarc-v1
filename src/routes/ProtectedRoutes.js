import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const useAuth = () => {
    const user = localStorage.getItem("user")
    if (user) {
        return true
    }
    return false
}
const ProtectedRoutes = () => {
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="login" />
};

export default ProtectedRoutes;