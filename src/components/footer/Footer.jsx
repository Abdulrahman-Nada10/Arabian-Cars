import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Payment from '../../assets/payment.png'
import {footerLinks} from '../../data'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <h1 className='footer-logo'>Arabian Cars <span>.</span></h1>
            <p className='footer-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                 obcaecati error totam deleniti inventore, temporibus 
            </p>
            <div className='social-container'>
                <div className='social-icon' style={{backgroundColor:'#3b5999'}}>
                    <FaFacebook className='icon'/>
                </div>
                <div className='social-icon' style={{backgroundColor:'#e44059'}}>
                    <FaInstagram className='icon'/>
                </div>
                <div className='social-icon' style={{backgroundColor:'#55acee'}}>
                    <FaTwitter className='icon'/>
                </div>
                <div className='social-icon' style={{backgroundColor:'#e60023'}}>
                    <FaPinterest className='icon'/>
                </div>
            </div>
        </div>
        <div className='footer-center'>
            <h3>Useful</h3>
            <ul className='footer-list'>
                {footerLinks.map((link) => (
                    <li key={link.id} className='footer-list-item'>{link.title}</li>
                ))}
            </ul>
        </div>
        <dir className='footer-right'>
            <h3 cLassName='footer-title'>Contact</h3>
            <div className='contact-item'>
                <IoLocationOutline style={{marginRight: '10px'}}/>123 street, city
            </div>
            <div className='contact-item'>
                <FaPhoneAlt style={{marginRight: '10px'}}/> +123456789
            </div>
            <div className='contact-item'>
                <IoIosMail style={{marginRight: '10px'}}/> email@email.com
            </div>
            <img src={Payment} className='payment' alt="" />
        </dir>
    </div>
  )
}

export default Footer