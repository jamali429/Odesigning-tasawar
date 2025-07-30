import React from 'react'
import "./cssfiles/components.css";
import { BsCameraReelsFill } from "react-icons/bs";
import { GiTwirlyFlower } from "react-icons/gi";

export default function Services() {
  return (
    <div className='services'>
      <div className='serviceinner'>
        <div className='flower'>
          <i className='flowericon'><GiTwirlyFlower className='phool'/></i>
        </div>
        <div className="title">
          <h2>Powerful Digital Solutions Tailored for Your Growth</h2>
        </div>
        <p>From Stunning Websites to Revenue-Boosting Marketing – We Deliver Results</p>
        <div className='meetarea'>
          <i className='camera'><BsCameraReelsFill /> </i>
          <h3>Book a 15-min intro call</h3>
          <p>Learn more about how Odesigning works and how it can help your Brand</p>
        </div>
        <button>Claim Free Consultation</button>
      </div>
    </div>
  )
}
