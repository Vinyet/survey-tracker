import React from 'react';
import HeaderStyle from '../styles/HeaderStyle';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <HeaderStyle>
        <header>
            <h1>📊 Survey Tracker</h1>
            <h2>Encuestas Académicas de EAE Barcelona</h2>
            <nav className="tab-links">
                <Link to="/">Inicio</Link>
                <Link to="/programas">Programas</Link>
            </nav>
        </header>
        </HeaderStyle>
    )
}

export default Header;