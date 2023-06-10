import React, { useState } from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Home from '../pages/Home';
import jwtDecode from 'jwt-decode';

const RequireAuthentication = () => {
    const token = useSelector(state => state.auth.token)
    let isTokenExpired

    let expDate
    if (token) {
        const decoded = jwtDecode(token);
        expDate = decoded.exp * 1000;
    }

    if (Date.now() < expDate)
        isTokenExpired = false
    else
        isTokenExpired = true


    const location = useLocation();
    return (
        isTokenExpired ? <Navigate to='/login' state={{ from: location }} replace /> : <Home />
    );
}

export default RequireAuthentication;
