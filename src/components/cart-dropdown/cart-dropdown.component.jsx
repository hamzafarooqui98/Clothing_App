import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { toggleCartHidden } from './../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => (  //Since we didn't pass any 2nd argument to connect mapDispatchToProps is done automatically, but we just hav eto destructure to get the dispatch fn
    <div className='cart-dropdown' >
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map( cartItem => 
                    ( <CartItem  key={cartItem.id} item={cartItem} /> )
                    )
                ) : (<span className='empty-message' >Your Cart is empty!</span>)
            }
        </div>
        <CustomButton onClick={() => {
                   history.push('/checkout');
                   dispatch(toggleCartHidden());
                }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({  
    cartItems: selectCartItems  //see cart.selectors for reference
});
//This could also be written as (without createStructuredSelector)
// const mapStateToProps = (state) => ({  
//     cartItems: selectCartItems(state)  //see cart.selectors for reference
// });

export default withRouter( connect(mapStateToProps)(CartDropdown));
