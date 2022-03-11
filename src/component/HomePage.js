import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HomePage = () => {
    const { email, password } = useSelector(state => state.auth);

    return <div className="home-page">
        <h1>Home Page</h1>
        <p>Email: <strong>{email}</strong></p>
        <p>Password: <strong>{password}</strong></p>
        <button className="btn-back">
            <NavLink to="/">Back to Login</NavLink>
        </button> 
    </div>
}

export default HomePage;