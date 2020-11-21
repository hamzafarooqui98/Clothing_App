import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(   //Reference => https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector
    [selectCart], (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [ selectCartItems ], (cartItems) => 
        cartItems.reduce(
            ( accumalatedQuantity, cartItem ) => 
                    accumalatedQuantity + cartItem.quantity , 0
        )
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartTotal = createSelector(
    [ selectCartItems ], (cartItems) => 
        cartItems.reduce(
            ( accumalatedQuantity, cartItem ) => 
                    accumalatedQuantity + cartItem.quantity * cartItem.price , 0
        )
);