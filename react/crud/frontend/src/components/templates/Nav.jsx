import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* a href ="#/" */}
            <Link to="/">
                <i className="fa fa-home"></i>Inicio
            </Link>
            <Link to="/users">
                <i  className="fa fa-users">Usuarios</i>
            </Link>
        </nav>
    </aside>