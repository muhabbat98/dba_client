import { stat } from "fs";
import { CartActionTypes } from "./cart-action-types";
import { CartType } from "./cart-types";

export interface CartItemState {
  cartItems: any[];
}

export interface CartReducerState extends CartItemState {
  totalPrice: number;
  totalCount: number;
  isChecked: boolean;
}

const initialState: CartReducerState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
  isChecked: false
};

export const cartReducer = (
  state: CartReducerState = initialState,
  action: CartActionTypes
) => {
  switch (action.type) {
    case CartType.ADD_TO_CART:
      return addToCart(state, action.payload);

    case CartType.INCREMENT:
      return incrementCart(state, action.payload);

    case CartType.DECREMENT:
      return decrementCart(state, action.payload);

    case CartType.REMOVE_ITEM:
      return removeCart(state, action.payload);

    default:
      return state;
  }
};


// removeCart()
const removeCart = (state: CartReducerState, cart: any) => {
  console.log(cart);
  let removedArray = state.cartItems.filter(item => item.id !== cart.id);
  for (let i = 0; i < state.cartItems.length; i++) {
    if (state.cartItems[i].id === cart.id) {
      state.totalPrice =
        state.totalPrice -
        state.cartItems[i].count * Number(cart.priceResponse.value);
      state.totalCount = state.totalCount - state.cartItems[i].count;
    }
  }
  return { ...state, cartItems: removedArray };
};


// addToCart ()
const addToCart = (state: CartReducerState, cart: any) => {
  let isExist = state.cartItems.find(c => c.id === cart.id);
  let copyOfCartItems = [...state.cartItems];
  let changedCartItems = [];
  console.log("isExist ===== ", isExist);
  if (isExist) {
    alert("addToCart");
    changedCartItems = copyOfCartItems.map(c => {
      if (c.id === cart.id) {
        const copyCart = { ...c };
        copyCart.count = copyCart.count + 1;
        // copyCart.isInCart =
        state.totalPrice =
          state.totalPrice + copyCart.count * Number(c.priceResponse.value);
        state.totalCount = state.totalCount + 1;
        return copyCart;
      }
      return c;
    });
  } else {
    console.log('state === ', state);
    console.log('cart === ', cart);
    console.log('state.totalPrice === ', typeof(state.totalPrice));
    console.log('cart.priceResponse.value1111 === ', cart.priceResponse.value)
    console.log('cart.priceResponse.value == ', Number(cart.priceResponse.value.replace(' ','')));
    console.log('cart.priceResponse.value2 == ', typeof (Number(cart.priceResponse.value.replace(' ',''))));
    state.totalPrice = state.totalPrice + Number(cart.priceResponse.value);
    state.totalCount = state.totalCount + 1;
    console.log('state2 === ', state);

    changedCartItems = [
      ...copyOfCartItems,
      { count: 1, isInCart: true, ...cart }
    ];
  }
  return { ...state, cartItems: changedCartItems };
};


// increment()
const incrementCart = (state: CartReducerState, cart: any) => {
  let isExist = state.cartItems.find(c => c.id === cart.id);
  let copyOfCartItems = [...state.cartItems];
  let changedCartItems = [];
  if (isExist) {
    changedCartItems = copyOfCartItems.map(c => {
      if (c.id === cart.id) {
        const copyCart = { ...c };
        copyCart.count = copyCart.count + 1;
        state.totalPrice = state.totalPrice + Number(c.priceResponse.value);
        state.totalCount = state.totalCount + 1;
        return copyCart;
      }
      return c;
    });
  } else {
    state.totalPrice = state.totalPrice + Number(cart.priceResponse.value);
    state.totalCount = +state.totalCount + 1;
    changedCartItems = [...copyOfCartItems, { count: 1, ...cart }];
  }
  return { ...state, cartItems: changedCartItems };
};


// decrementCart()
const decrementCart = (state: CartReducerState, cart: any) => {
  let isExist = state.cartItems.find(c => c.id === cart.id);
  let copyOfCartItems = [...state.cartItems];
  let changedCartItems = [];

  if (isExist) {
    changedCartItems = copyOfCartItems.map(c => {
      if (c.id === cart.id) {
        const copyCart = { ...c };
        copyCart.count = copyCart.count - 1;
        state.totalPrice = state.totalPrice - Number(c.priceResponse.value);
        state.totalCount = state.totalCount - 1;
        return copyCart;
      }
      return c;
    });
  } else {
    state.totalCount = state.totalCount - 1;
    changedCartItems = [...copyOfCartItems, { count: 1, ...cart }];
  }
  return { ...state, cartItems: changedCartItems };
};
