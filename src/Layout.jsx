import React from 'react'
import { Outlet } from "react-router-dom";

import PopularEventsCategory from './modules/popularEventsCategory/PopularEventsCategory'

import './App.css'

function Layout() {
    return (
        <div className='main-container-wrapper'>
            <header className='main-container-header'>
                <h3>Smarkets Test</h3>
            </header>
            <div className='main-container-left-nav'>
                <PopularEventsCategory />
            </div>
            <div className='main-container-body'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout