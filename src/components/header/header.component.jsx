import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from './../../firebase/firebase.utils';

import { connect } from 'react-redux';  //connect is a higher order component that lets us modify our component to have access to 2 things related to redux
// A higher-order component takes up the component and return a new super modified component similar to withRouter function used in menu-component (for routing)

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/' >
           <Logo className='logo' />
        </Link>
        <div className='options' >
            <Link className='option' to='/shop' >
                SHOP
            </Link>
            <Link className='option' to='/shop' >
                CONTACT
            </Link>
            {
                currentUser ? 
                (<div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>)
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser : state.user.currentUser  //here the name of object will be the one being passed as a prop to header component and here "state" is the root state
});

export default connect(mapStateToProps)(Header);  //Here there are 2 functions in which 2nd is the off shelf fn while 1st will connects us with a function that calls the state in the root reducer