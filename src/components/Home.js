import React, { Component } from 'react';
import {Link, Outlet } from 'react-router-dom';
import '/Users/aaronrobins/cd/src/index.css'

class Home extends Component  {
    
    render() {
        return (
            <div className = "container">
                <div className='topnav'>
                <Link  to='/'>Entry point</Link>
                <Link  to='/home/Subpage1'>Sub Page 1</Link>
                <Link  to='/home/Subpage2'>Sub Page 2</Link>
                </div>
                <Outlet />
            </div>
            
        );
    }
}

export default Home;