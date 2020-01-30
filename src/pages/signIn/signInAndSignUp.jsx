import React from 'react';

import SignUp from '../../components/signUp/signUp.jsx'
import SignIn from '../../components/signIn/signIn.jsx'

import './signInAndSignUp.scss';

const SignInAndSignUpPage = () => (
    <div className='signInAndSignUp'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;