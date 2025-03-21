import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { decreaseQuantity, removeFromCart , increaseQuantity } from '../../redux/cartSlice'
import Footer from '../../components/footer/Footer'
const Card = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    );
  return (
    <div>
        <Navbar/>
        <div className="cart-container"> 
                <div className="cart-title-container">
                    <BiSolidShoppingBag  className='cart-icon'/>
                    <h2 className='cart-title'>shopping Cart</h2>
                </div>
            {cartItems.length === 0 ? (
                <p>Your Cart is empty</p>
                ) : (
                <>
                    <div className="cart-content">
                        <div className="cart-items-section">
                            <div className='cart-header'>
                                <div className='header-item'>Product</div>
                                <div className='header-item'>Price</div>
                                <div className='header-item'>Quantity</div>
                                <div className='header-item'>Total</div>
                            </div>
                            {cartItems.map((item , index) => (
                                <div key={index} className="cart-item">
                                    <div className="cart-product">
                                        <img src={item.img} alt='' className='cart-product-image' />
                                        <p>{item.title}</p>
                                    </div>
                                    <div className='cart-price'>${item.price}</div>
                                    <div className='cart-quantity'>
                                        <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                                    </div>
                                    <div className='cart-total'>
                                        ${parseFloat(item.price * item.quantity).toFixed(2)}
                                    </div>
                                    <button className='remove-btn' onClick={() => dispatch(removeFromCart(item))}>
                                        <IoClose />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className='cart-summary'>
                        <h3 className='summary-title'></h3>
                        <div className='summary-details'>
                            <div className='summary-item'>
                                <span>price:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className='summary-item'>
                                <span>Delivery:</span>
                                <span>Free</span>
                            </div>
                            <div className='summary-item.total'>
                                <span>Total:</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className='checkout-btn'>Proceed to Checkout</button>
                    </div>
                    </div>
                </>
            )}
        </div>
        <Footer/>
    </div>
  )
}

export default Card