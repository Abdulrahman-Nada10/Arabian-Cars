import React from 'react'
import {useState} from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom'
import {sliderItems} from '../../data'
import './Slider.css'
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        setSlideIndex((prev) => {
            if (direction === "left") {
                return prev > 0 ? prev - 1 : 2;
            } else {
                return prev < 2 ? prev + 1 : 0;
            }
        });
    };
  return (
    <div className='slider-container'>
        <div className='arrow' direction='left' onClick={() => handleClick('left')}>
            <IoIosArrowDropleftCircle className='icon'/>
        </div>
        <div className='slider-wrapper' style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            {sliderItems.map((item) => (
                <div key={item.id} className='slide' style={{backgroundColor: `#${item.bg}`}}>
                    <div className='img-container'>
                        <img src={item.img} alt='' className='img' />
                    </div>
                    <div className='info-container'>
                        <h1 className='title'>{item.title}</h1>
                        <p className='desc'>{item.desc}</p>
                        <Link to='./products'><button className='button'>shop now</button></Link>
                    </div>
                </div>
            ))}
        </div>
        <div className='arrow' direction='right' onClick={() => handleClick('right')}>
            <IoIosArrowDroprightCircle className='icon'/>
        </div>
    </div>
  )
}

export default Slider