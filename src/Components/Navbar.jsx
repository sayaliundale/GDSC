import React from 'react'
import Logo from '../Images/Logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="logo">
                <img src={Logo} className="img"/>
                <p className='club_name'>Google Developer Student Club</p>
                <p className='club_subname'>GDSC PCCOER</p>   
            </div>
            <div className="navitems">
                <ul className='navitems_list'>
                    <li>About GDSC</li>
                    <li>Team</li>
                    <li>Chapters</li>
                    <li>Upcoming Events</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar