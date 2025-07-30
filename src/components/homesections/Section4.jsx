import React from 'react'
import "./../cssfiles/section4.css"

export default function 
() {
  return (
    <div className='section4'>
        <div className="innersection">
            <h3><span className='mainheading'>Recent Projects Completed</span></h3>
            <p><span className='subheading'>Our Portfolio: Showcasing Excellence Across Industries</span></p>
            <p className='smalldetail'>Explore how we’ve helped businesses like yours achieve their goals:</p>
            <p className='maindescription'>Partnering with us means gaeining access to innovative solutions tailored to your unique needs. From e-commerce and data center projects to cutting-edge UX/UI design and custom kitchen experiences, we deliver high-quality, client-focused results that elevate your brand and drive success. Explore our portfolio to see how our expertise can help bring your vision to life.</p>
            <div className="showcase">
                <div className="showcase1 showcaseall">
                    <div className="left">
                        <h3>Wave Shop Online: Redefining Sustainable Fashion</h3>
                        <p>Worked with Wave Shop Online to redesign their website, creating a seamless e-commerce experience that highlights their commitment to sustainable fashion and eco-friendly practices.</p>
                        <div className="span">
                            <span>Fashion</span><span>Ecommerce</span><span>Web Design</span><span>Maintenance</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src='./Newfolder/section4-project1.png' />
                    </div>
                </div>
                <div className="showcase2 showcaseall">
                    <div className="left">
                        <h3>TheNameStamp™: Crafting Brand Identity with Impactful E-commerce Design</h3>
                        <p>Partnered with TheNameStamp™ to design and develop a Shopify website that showcases their unique products and reflects their brand identity.</p>
                        <div className="span">
                            <span>E-commerce</span><span>Shopify</span><span>Web Design</span><span>Branding</span>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="showcase3">
                    <div className="left">
                        <h3>Uxifi AI: Revolutionizing UX/UI with AI-Driven Solutions</h3>
                        <p>Partnered with Uxifi AI to deliver cutting-edge UX/UI designs powered by AI, enhancing user experiences and driving significant growth in revenue and customer satisfaction.</p>
                        <span>AI Solutions</span><span></span><span></span><span></span>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="showcase4">
                    <div className="left">
                        <h3></h3>
                        <p></p>
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
