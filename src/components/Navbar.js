import React from 'react';
import './Home.css';
import logo from '../images/image 1.png';

function Navbar() {
  return (
    <div>
        <div className='home-header'>
            <img src={logo} alt='logo'/>
            <nav>
                <ul>
                    <li>LOAN PROGRAMS</li>
                    <li>REALTOR PORTAL</li>
                    <li>ABOUT US</li>
                    <li>REVIEWS</li>
                    <li>EDUCATION</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar