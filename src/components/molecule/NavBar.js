import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand"> Stopre-App </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/" className="nav-item nav-link"> Home </NavLink>
                    <NavLink exact activeClassName="active" to="/client" className="nav-item nav-link"> Cliente </NavLink>
                    <NavLink exact activeClassName="active" to="/cd" className="nav-item nav-link"> CD</NavLink>
                </div>
            </div>
        </nav>
    )
}
