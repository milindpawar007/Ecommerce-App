import React from 'react'

import './sign-in-style.scss'
import FormInput from '../../component/form-input/form-input-component'
import CustomButton from'../../component/custom-button-component/custom-button-component'
import {signInWithGoogle} from '../../firebase/firebase.utils'
class Signin extends React.Component{

    constructor( props){

        super();

        this.state ={
            email:'',
            password:''
        }

    

    }
    handelSubmit =(event)=>{
          
           event.preventDefault();
           this.setState({email:'' ,password:''})
    }

    handelChange= event=>{
             const {value,name} = event.target;
            this.setState({[name]:value})
    }
    
    render(){
        return(
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span> Sign in with your email and password</span>
              <form onSubmit={this.handelSubmit} >
                      <FormInput
                      name="email"
                      type="email"
                      value={this.state.email}
                      label="email"
                      handelChange={this.handelChange}
                      required/>
                     
                      <FormInput
                       name="password"
                       type="password"
                       value={this.state.password}
                       label="password"
                       handelChange={this.handelChange}
                      required
                      />
                      <div className='buttons'>
                            <CustomButton  type="submit"> Sign In</CustomButton>
                            <CustomButton  onClick ={signInWithGoogle} isGoogleSignIN > 
                            {' '}Sign In with Google {' '}</CustomButton>
                       </div>
              </form>

            </div>
        )
    }

}

export default Signin;