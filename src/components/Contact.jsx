import React from 'react'
import "./cssfiles/components.css";
import { FaHeadphones } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { PiCellSignalHighBold } from "react-icons/pi";


export default function Contact() {
  return (
    <div className='contact'>
      <div className='frontformarea'>
        <p className='getintouch'>Get In Touch</p>
        <p className='descripline'>Your Vision + Our Expertise = Unbeatable <br /> Online Growth</p>
        <div className='contactinfo'>
          <div className='threebox  talk'>
            <i><FaHeadphones className='contacticon'/></i>
            <p>Let's Talk: </p>
            <div className='contactdata'>
              <i><MdOutlineLocalPhone className='iconcall'/></i>
              <p>Phone: +1 646 624 3752</p>
            </div>
            <div className='contactdata'>
              <i><FaWhatsapp className='iconcall'/></i>
              <p>WA: +1 646 624 3752</p>
            </div>
          </div>

          <div className='threebox  email'>
            <i><BsPerson  className='contacticon'/></i>
            <p>Email:</p>
            <div className='contactdata'>
              <i><BsPerson  className='iconcall'/></i>
              <p>Support : hi@odesigning.com</p>
            </div>
            <div className='contactdata'>
              <i><PiCellSignalHighBold  className='iconcall'/></i>
              <p>Sales: sales@odesigning.com</p>
            </div>
          </div>

          <div className='threebox address'>
            <i><IoHomeOutline className='contacticon'/></i>
            <p>Address:</p>
            <div className='contactdata addressdata'>
              <i><IoHomeOutline className='iconcall'/></i>
              <p>1412 Broadway 21st Floor, New York, NY 10018, United States</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
