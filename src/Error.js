import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Error = () => {
    return (
        <>
        <div className="d-flex align-items-center justify-content-center error-wrap">
        <p>Sorry This Page Doesnt Exist</p>
        <p>Please Go Back</p>
        <NavLink to="/">GO Back</NavLink>
        </div>
        </>
    );
}

export default Error;