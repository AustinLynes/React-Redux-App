import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = props =>{
    return (
    <div>
        <NavLink to='/cards'>
            <div className='btn'>Cards Archive</div>
        </NavLink>
    </div>
    )
}

export default Nav;