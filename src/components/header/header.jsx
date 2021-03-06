import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils.js'

import './header.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logoContainer' to='/'>
            <Logo className='Logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signIn'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)

export default Header;