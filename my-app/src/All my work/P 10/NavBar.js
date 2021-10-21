import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


const NavBar = ({icon, title}) => {
    
        return (
            <nav className="navbar bg-danger">
                <h1 className="h1">
                    <i className={icon} /> {title} 
                </h1>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/">
                            Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">
                            About
                        </Link>
                    </li>                
                </ul>
            </nav>

        )
    
}

export default NavBar;

NavBar.defaultProps ={
    title: "Github Finder",
    icon: "fab fa-github"
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
