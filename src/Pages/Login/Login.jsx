import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h1>Sign Up</h1>
        <form action="">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='password'/>
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>New to Netflix?<span>Sign Up Now</span></p>
          <p>Already have account?<span>Sign In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
