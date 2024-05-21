
import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        
        setIsLoggedIn(false);
        console.log('User logged out');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);


    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://jsak.goibibo.com/pwa_v3/pwa_growth/images/og-goibibo.aba291ed.png" alt="Logo" />
            </div>
            {isLoggedIn ? (
                <button className="login-register-btn" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faUser} /> LOGOUT
                </button>
            ) : (
                <Link to='./SignIn' >
                    <button className="login-register-btn" >
                        <FontAwesomeIcon icon={faUser} /> LOGIN/REGISTER
                    </button>
                </Link>
            )}
        </nav>
    );
}

export default Navbar;
