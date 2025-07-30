import React from 'react';
import './cssfiles/components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";


export default function Header() {
  return (
    <div className='header'>
        <div className='topBar'>
            <p>⚡ White Labeling & Custom Development</p>
        </div>
        <div className='logoBar'>
            <div className='left'>
                <img src="Newfolder/Asset-37W-BG-PNG-1-1024x297.png" alt="logo" />
            </div>
            <div className='right'>
                <i><FaSearch /></i>
                <i><IoPersonCircleOutline /></i>
                <i><FaShareAlt /></i>
            </div>
        </div>
    </div>
  )
}
