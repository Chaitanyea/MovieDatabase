import React from 'react';
import {Link} from 'react-router-dom'
import user from '../assets/user.png'
import './header.scss'

const header = () => {
    return (
        <div className='header'>
            <Link to= "/">
                <div className='logo'>Movie App</div>
            </Link>
            <div className='user-image'>
                <img src= {user} alt='user'></img>
            </div>
        </div>
    )
};

export default header;