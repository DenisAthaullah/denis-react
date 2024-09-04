import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
       <header className="header">
        <a href="/" className="judul">Otomotif weekly</a>

        <nav className="navbar">
            <a href="/" className="home">Home</a>
            <a href="/" className="about">About</a>
            <a href="/" className="contact">Contact</a>
        </nav>
       </header>
    )   
}

export default Navbar