import React from 'react'
import './Sign-in-and-sign-up-style.scss';
import SignIn from '../../component/sign-in/sign-in-component'
import Signup from '../../component/sign-up/sign-up-component'

const SignInAndSignUpPage =()=>(
  <div className='sign-in-and-sign-out'>
    <SignIn/>
     <Signup/>
     
  </div>
)

export default SignInAndSignUpPage;

