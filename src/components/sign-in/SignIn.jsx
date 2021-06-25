import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase';

import "./SignIn.scss";

class SignIn extends Component{
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.setState({
            email: '',
            password:''
        })
            
    }

    handleChange = (e) => {
        //Destructure the name of inout and the value
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        required
                        handleChange={this.handleChange}
                        label="email"
                        value={this.state.email}
                    autoComplete="username"/>
                    

                    <FormInput
                        type="password"
                        name="password"
                        required
                        handleChange={this.handleChange}
                        label="password"
                        value={this.state.password}
                        autoComplete="current-password" />
                    

                    <div className="buttons">
                        <CustomButton type="submit" >
                            Sign in
                        </CustomButton>
                        <CustomButton onClick ={signInWithGoogle} isGoogleSignIn>
                            Sign in Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default SignIn;