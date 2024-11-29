import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="min-h-screen max-w-screen overflow-x-hidden">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout
