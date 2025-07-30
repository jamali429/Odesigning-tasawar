import React, { useEffect, useRef, useState } from 'react';
import "./cssfiles/components.css";
import Section1 from './homesections/Section1';
import Section2 from './homesections/Section2';
import Section3 from './homesections/Section3';
import Section4 from './homesections/Section4';
import { IoIosArrowDown, IoIosArrowUp} from "react-icons/io";


export default function Home(){
  const[activeindex, setindex] = useState(0);
  const homesections = useRef(null);
  
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);

  const sections = [section1, section2, section3];
  useEffect(() => {
  homesections.current?.focus();
}, []);


  useEffect(()=>{
    const container = homesections.current;
  
    const handlescroll =()=>{
      const middle = window.innerHeight / 2;
      sections.forEach((ref, index) =>{
        const rect = ref.current.getBoundingClientRect();
        if(rect.top <= middle && rect.bottom > middle){
          setindex(index);
        }
      })
      }

      container.addEventListener("scroll", handlescroll)

      return() =>{
        container.removeEventListener("scroll", handlescroll);
            }
    }, []
  );

  function scrolldown(){
    const nextIndex = activeindex + 1;
    if(activeindex < sections.length - 1){
      const sectionHeight = window.innerHeight;
      homesections.current.scrollBy({
        top:sectionHeight,
        behavior: "smooth"
      })
      setindex(nextIndex);
    }

  }
  function scrollup(){
    const nextIndex = activeindex - 1;
    if(activeindex>=0){
      const sectionHeight = window.innerHeight;
      homesections.current.scrollBy({
        top: -sectionHeight,
        behavior :"smooth"
      })
      setindex(nextIndex);

    }

  }

  return (

    <div className='homepage' ref={homesections}>         
    {/* <div className='homepage'>          */}
        
        <div  ref={sections[0]} ><Section1 /></div>
        <div  ref={sections[1]} ><Section2 /></div>
        <div  ref={sections[2]} ><Section3 /></div>
        {/* <div><Section4 /></div> */}
        <div className="updownarrows">
          {activeindex > 0  && <button  onClick={scrollup}><IoIosArrowUp className="fixedup"/></button>}
          { activeindex < sections.length -1 && <button  onClick={scrolldown}><IoIosArrowDown className='fixeddown'/></button>}
        </div>
      </div>
        
  )
}
