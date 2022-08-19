import React from 'react'
import Navbar from './Navbar.tsx';
import "./Style.scss";

const Dashboard = (): JSX.Element => {
    return (
        <div>
            <Navbar />
            <h3>DashBoard</h3>
        </div>
    )
}

export default Dashboard