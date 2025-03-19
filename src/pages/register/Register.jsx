import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='register-container'>
        <div className='register-wrapper'>
            <form action="">
                <div className="input-box">
                    <input type="text" placeholder='Username'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input-box">
                    <input type="tel" placeholder='Phone Number'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Cpuntry'/>
                </div>
                <div className="register-agreement">
                    <label>
                        <input type="checkbox"/> I agree to the <b>Terms</b> and{" "} <b>Privacy Policy</b>
                    </label>
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default Register