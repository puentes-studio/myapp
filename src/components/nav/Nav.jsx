import { useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className="navBar">
                <h1>
                    <NavLink className="nav-title" to="/">Vlad Beltran</NavLink>
                </h1>
                <div className='menu-wrapper'>
                <div className="menu-toggle" id="mobile-menu" onClick={() => {
                    setShowMenu(!showMenu); // Toggle the state between true and false
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {showMenu ? (
                    <ul className="mobile-nav">
                        <li><NavLink to="/house">About Me</NavLink></li>
                        <li><NavLink to="/rock">Projects</NavLink></li>
                        <li><NavLink to="/jazz">Contact</NavLink></li>
                    </ul>
                ) : null}
                <ul className="nav-list">
                    <li><NavLink to="/house">About Me</NavLink></li>
                    <li><NavLink to="/rock">Projects</NavLink></li>
                    <li><NavLink to="/jazz">Contact</NavLink></li>
                </ul>
                </div>
            </nav>
            
        </>
    );
}

export default Nav;

