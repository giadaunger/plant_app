import React from 'react'
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layoute() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layoute