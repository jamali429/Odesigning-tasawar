import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'


export default function Section1() {

  return (
    <div className='mainsection flex'>
      <div className='innersection1'>
        <div className='starandlogo'>
          <div className='starsreview' style={{color:"#90F421"}}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <p>4.5/9 on</p>
          </div>
          <div className='companylogos'><img src=".\Newfolder\1Asset-6-1024x81.webp" /></div>
        </div>
        <div className='title'><h2>Launch With newday</h2></div>
        <div className='description'><p>Transform your digital presence from ordinary to extraordinary, without the high costs or long wait times associated with traditional creative teams.</p></div>
        <button>Claim Free Consultation</button>
      </div>
      <div className="marquee">
        <div className='marque-content'>
          <div className='marque-track'>
            <p><b>Design</b> : Branding | Logo Design | Ui/Ux Design | Print and Digital	</p>
            <p><b>Development</b> : Wix | Shopify | WordPress | Hubspot</p>
            <p><b>Marketing</b> : PPC Ads | SEO | SMM | Marketing Automation	</p>

            <p><b>Development</b> : Wix | Shopify | WordPress | Hubspot</p>
            <p><b>Design</b> : Branding | Logo Design | Ui/Ux Design | Print and Digital	</p>
            <p><b>Marketing</b> : PPC Ads | SEO | SMM | Marketing Automation	</p>
         </div>
        </div>
      </div>
    </div>
  )
}
