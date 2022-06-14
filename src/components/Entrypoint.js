import React from "react";
import {Link, Outlet } from 'react-router-dom';
import '/Users/aaronrobins/cd/src/index.css'


const Entrypoint = () => {
    return (
        <div className = 'container-middle' >
        <h1>Press to enter</h1>
        <Link className = 'button2' to='/home'>Enter</Link>
        </div>

    )
}

export default Entrypoint;

