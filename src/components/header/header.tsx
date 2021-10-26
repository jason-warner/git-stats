import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <h1>Git Stats</h1>
        </header>
    )
}

export default Header;