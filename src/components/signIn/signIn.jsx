import React from 'react'

import FormInput from '../formInput/formInput.jsx';
import CustomButton from '../customButton/customButton.jsx'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'

import './signIn.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password:''
        }
    }

        handleSubmit = async e => {
            e.preventDefault()

            const { email, password } = this.state

            try {
                await auth.signInWithEmailAndPassword(email,password)
                this.setState({ email:'', password:''})
            } catch (error) {
                console.error(error)
            }
        }

        handleChange = e => {
            const { value, name } = e.target;
            this.setState({ [name]: value})
        }
    

    render() {
        return (
            <div className='signIn'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true} >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;