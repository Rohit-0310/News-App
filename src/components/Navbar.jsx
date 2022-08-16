import React from 'react'
import { Link } from "react-router-dom";

import "./NavStyle.scss";



const Navbar = () => {
    return (
        <div className='topNav'>
            <div>
                <Link to="/">Home Page</Link>
            </div>
            <div>
                <Link to="/Dashboard">Dashboard</Link>
            </div>
            <div>
                <Link to="/about">Sports News</Link>
            </div>
            <div><Link to="/about">About</Link></div>
        </div>
    )
}

export default Navbar