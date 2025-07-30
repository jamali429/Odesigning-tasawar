import React from 'react'
import { SiAltiumdesigner } from "react-icons/si";
import { IoMagnetOutline } from "react-icons/io5";
import { GrVmMaintenance } from "react-icons/gr";
import { PiCodeBold } from "react-icons/pi";


export default function 
() {
  return (
    <div className='section3 flex'>
        <div className="innsection3">
            <h2>Success-Centric Solutions for Every Goal</h2>
            <p>We focus on delivering solutions that meet your unique needs, so you can:</p>
            <div className="sol">
                <div className="solution">
                    <i><SiAltiumdesigner className='icon'/></i>
                    <h3>Design</h3>
                    <ul>
                        <li>Branding</li>
                        <li>Logo Design</li>
                        <li>UI/UX Design</li>
                        <li>Print and Digital</li>
                    </ul>
                    <button className='readmore'>Read More</button>
                </div>
                <div className="solution">
                    <i><PiCodeBold className='icon'/></i>
                    <h3>Development</h3>
                    <ul>
                        <li>WordPress Development</li>
                        <li>Shopify Development</li>
                        <li>Wix Development</li>
                        <li>HubSpot Development</li>
                    </ul>
                    <button className='readmore'>Read More</button>
                </div>
                <div className="solution">
                    <i><IoMagnetOutline  className='icon'/></i>
                    <h3>Marketing</h3>
                    <ul>
                        <li>PPC Advertising</li>
                        <li>SEO Solution</li>
                        <li>Social Media Marketing</li>
                        <li>Marketing Automation</li>
                    </ul>
                    <button className='readmore'>Read More</button>
                </div>
                <div className="solution">
                    <i><GrVmMaintenance className='icon'/></i>
                    <h3>Maintenance</h3>
                    <ul>
                        <li>Wix Maintenance</li>
                        <li>Shopify Maintenance</li>
                        <li>Wordpress Maintenance</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button className='readmore'>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}
