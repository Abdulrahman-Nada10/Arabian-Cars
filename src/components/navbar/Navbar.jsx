import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import'./Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItems = cartItems.length;
  return (
    <nav className='navbar-container'>
        <div className='navbar-wrapper'>
            <div className='navbar-left'>
                <span className='navbar-language'>EN</span>
                <div className='navbar-searchContainer'>
                    <input type="text" placeholder='Search' className='navbar-input'/>
                    <IoMdSearch className='icon'/>
                </div>
            </div>
            <Link to="/">
                <div className='navbar-center'>
                    <h1 className='navbar-logo'>Arabian Cars <span>.</span></h1>
                </div>
            </Link>
            <div className='navbar-right'>
                <Link to='/register'><div className='navbar-menuItem'>Register</div></Link>
                <Link to='/login'><div className='navbar-menuItem'>Login</div></Link>
                <Link to='/cart'>
                    <div className='navbar-menuItem'>
                        <CiShoppingCart  className='icon'/>
                        {totalItems > 0 && <span className='cart-badge'>{totalItems}</span>}
                    </div>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar