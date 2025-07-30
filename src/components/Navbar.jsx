import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

import './cssfiles/components.css';

export default function Navbar() {
  return (
    <nav>
        <i><NavLink to="/"  className={({ isActive }) => (isActive ? "active-link" : "navitem")}><FaHome /></NavLink> </i>
        <i><NavLink to="/services"  className={({ isActive }) => (isActive ? "active-link" : "navitem")}><MdDesignServices /> </NavLink> </i>
        <i><NavLink to="/project"  className={({ isActive }) => (isActive ? "active-link" : "navitem")}><MdOutlineWork /> </NavLink> </i>
        <i><NavLink to="/contact"  className={({ isActive }) => (isActive ? "active-link" : "navitem")}> <PiPhoneCallFill /></NavLink> </i>
    </nav>

    // <nav>
    //     <i><Link to="/" className={({ isActive }) => (isActive ? "active-link" : "")}><FaHome className="navitem " /></Link> </i>
    //     <i><Link to="/services" className={({ isActive }) => (isActive ? "active-link" : "")}><MdDesignServices className="navitem"/> </Link> </i>
    //     <i><Link to="/project" className={({ isActive }) => (isActive ? "active-link" : "")}><MdOutlineWork className="navitem"/> </Link> </i>
    //     <i><Link to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}> <PiPhoneCallFill className="navitem"/></Link> </i>
    // </nav>
  )
}

