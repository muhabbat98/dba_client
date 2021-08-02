import { CartActionTypes } from './cart-action-types';
import { CartType } from './cart-types';

export interface CartCheckedTotalSum {
  id: any;
  isChecked: boolean;
}

export interface CartItemState {
  cartItems: any[];
}

export interface CartReducerState extends CartItemState {
  totalPrice: number;
  totalCount: number;
  tSum: number;
  checkedAll: any[];
  checkedAllCount: number;
}

const initialState: CartReducerState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
  tSum: 0,
  checkedAll: [],
  checkedAllCount: 0,
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

    case CartType.GET_TOTAL_SUM:
      return getTotalSum(state, action.payload);
    default:
      return state;
  }
};

// getTotalSum()
const getTotalSum = (state: CartReducerState, t: any) => {
  let copyOfCartItems = [...state.cartItems];
  let changedCartItems = [];
  changedCartItems = copyOfCartItems.map((c) => {
    if (c.id === t.id) {
      const copyCart = { ...c };

      if (t.isChecked) {
        copyCart.isChecked = true;
        state.tSum += copyCart.totalSum;
        state.checkedAll.push(copyCart);
        state.checkedAllCount += c.count;
      } else {
        copyCart.isChecked = false;
        state.tSum -= copyCart.totalSum;
        state.checkedAllCount -= c.count;

        let removedArray = state.checkedAll.filter((item) => item.id != c.id);
        state.checkedAll = [...removedArray];
      }

      return copyCart;
    } else {
      return c;
    }
  });

  return { ...state, cartItems: changedCartItems };
};

// removeCart()
const removeCart = (state: CartReducerState, cart: any) => {
  let removedArray = state.cartItems.filter((item) => item.id !== cart.id);
  for (let i = 0; i < state.cartItems.length; i++) {
    if (state.cartItems[i].id === cart.id) {
      state.totalPrice =
        state.totalPrice -
        state.cartItems[i].count * Number(cart.priceResponse.value);
      state.totalCount = state.totalCount - state.cartItems[i].count;

      if (state.cartItems[i].isChecked) {
        state.tSum = state.tSum - cart.priceResponse.value * cart.count;
        state.checkedAllCount -= cart.count;
        let copyCheckedAll = [...state.checkedAll];
        let removedCheckedAll = copyCheckedAll.filter(
          (item) => item.id !== cart.id
        );
        state.checkedAll = [...removedCheckedAll];
      }
    }
  }
  return { ...state, cartItems: removedArray };
};

// addToCart ()
const addToCart = (state: CartReducerState, cart: any) => {
  let isExist = state.cartItems.find((c) => c.id === cart.id);
  let copyOfCartItems = [...state.cartItems];
  let changedCartItems = [];
  if (isExist) {
    alert('addToCart');
    changedCartItems = copyOfCartItems.map((c) => {
      if (c.id === cart.id) {
        const copyCart = { ...c };
        copyCart.count = copyCart.count + 1;

        state.totalPrice =
          state.totalPrice + copyCart.count * Number(c.priceResponse.value);
        state.totalCount = state.totalCount + 1;
        return copyCart;
      }
      return c;
    });
  } else {
    state.totalPrice = state.totalPrice + Number(cart.priceResponse.value);
    state.totalCount = state.totalCount + 1;

    changedCartItems = [
      ...copyOfCartItems,
      { count: 1, totalSum: Number(cart.priceResponse.value), ...cart },
    ];
  }
  return { ...state, cartItems: changedCartItems };
};

// increment()
const incrementCart = (state: CartReducerState, cart: any) => {
  let isExist = state.cartItems.find((c) => c.id === cart.id);
  let copyOfCartItems = [...state.cartItems];
  let changedCartItems = [];
  if (isExist) {
    changedCartItems = copyOfCartItems.map((c) => {
      if (c.id === cart.id) {
        const copyCart = { ...c };
        copyCart.count = copyCart.count + 1;

        copyCart.totalSum += Number(c.priceResponse.value);
        if (cart.isChecked) {
          state.tSum += Number(c.priceResponse.value);
          state.checkedAllCount += cart.count;

          let checkedArray = [];
          checkedArray = state.checkedAll.map((item) => {
            if (item.id === c.id) {
              const copyCheckedObj = { ...item };
              copyCheckedObj.count += 1;
              return copyCheckedObj;
            } else {
              return item;
            }
          });

          state.checkedAll = [...checkedArray];
        }

        state.totalPrice = state.totalPrice + Number(c.priceResponse.value);
        state.totalCount = state.totalCount + 1;

        return copyCart;
      }
      return c;
    });
  } else {
    alert('incrementCart()');
    state.totalPrice = state.totalPrice + Number(cart.priceResponse.value);
    state.totalCount = +state.totalCount + 1;
    changedCartItems = [
      ...copyOfCartItems,
      { count: 1, totalSum: Number(cart.priceResponse.value), ...cart },
    ];
  }
  return { ...state, cartItems: changedCartItems };
};

// decrementCart()
const decrementCart = (state: CartReducerState, cart: any) => {
  let isExist = state.cartItems.find((c) => c.id === cart.id);
  let copyOfCartItems = [...state.cartItems];
  let changedCartItems = [];

  if (isExist) {
    changedCartItems = copyOfCartItems.map((c) => {
      if (c.id === cart.id) {
        const copyCart = { ...c };
        copyCart.count = copyCart.count - 1;

        copyCart.totalSum -= Number(c.priceResponse.value);
        if (cart.isChecked) {
          state.tSum -= Number(c.priceResponse.value);
          state.checkedAllCount -= cart.count;

          let checkedArray = [];
          checkedArray = state.checkedAll.map((item) => {
            if (item.id === c.id) {
              const copyCheckedObj = { ...item };
              copyCheckedObj.count -= 1;
              return copyCheckedObj;
            } else {
              return item;
            }
          });

          state.checkedAll = [...checkedArray];
        }

        state.totalPrice = state.totalPrice - Number(c.priceResponse.value);
        state.totalCount = state.totalCount - 1;
        return copyCart;
      }
      return c;
    });
  } else {
    alert('decrementCart()');
    state.totalCount = state.totalCount - 1;
    changedCartItems = [...copyOfCartItems, { count: 1, totalSum: 0, ...cart }];
  }
  return { ...state, cartItems: changedCartItems };
};
