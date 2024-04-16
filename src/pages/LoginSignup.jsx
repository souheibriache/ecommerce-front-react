import React from 'react'
import './styles/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='login_signup' >
        <div className="login_signup_container">
            <h1>Sign Up</h1>
            
            <form className="login_signup_form">
                <div className="login_signup_fields">
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='example@email.com' />
                    <input type="password" placeholder='password' />
                </div>
                <button type='submit' >Continue</button>
                <p className='login_signup_login' >already have an account <span>login here</span></p>
                <div className="login_signup_agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agree to the <span>terms of use</span> & <span>privacy policy</span></p>
                </div>
            </form>
            
        </div>
    </div>
  )
}
