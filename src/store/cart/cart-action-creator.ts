import { CartType } from './cart-types';
import { CartItemState, CartCheckedTotalSum } from './cart-reducer';

export const addToCart = (cartItem: CartItemState) => ({
  type: CartType.ADD_TO_CART,
  payload: cartItem,
});

export const incrementCart = (cartItem: CartItemState) => ({
  type: CartType.INCREMENT,
  payload: cartItem,
});

export const decrementCart = (cartItem: CartItemState) => ({
  type: CartType.DECREMENT,
  payload: cartItem,
});

export const removeCart = (cartItem: CartItemState) => ({
  type: CartType.REMOVE_ITEM,
  payload: cartItem,
});

export const getTotalSum = (checkedTotalSum: CartCheckedTotalSum) => ({
  type: CartType.GET_TOTAL_SUM,
  payload: checkedTotalSum,
});
