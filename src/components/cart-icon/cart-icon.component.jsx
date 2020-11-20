import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from './../../redux/cart/cart.actions';

import { selectCartItemCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' >{ itemCount }</span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => { dispatch( toggleCartHidden() )}
});

const mapStateToProps = state => ({  //here everytime the state changes the whole mapStateToProps get re-render even if the quantity value it is getting is same. So we would use re-selector to cache the old value and re-render only if the quantity value is new
    itemCount: selectCartItemCount(state)
});

export default connect( mapStateToProps, mapDispatchToProps )(CartIcon);