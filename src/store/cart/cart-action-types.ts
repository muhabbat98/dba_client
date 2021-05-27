import { CartType } from "./cart-types";

interface SetAddToCart {
  type: CartType.ADD_TO_CART;
  payload: {};
}

interface SetRemoveItem {
  type: CartType.REMOVE_ITEM;
  payload: {};
}

interface SetIncrement {
  type: CartType.INCREMENT;
  payload: {};
}

interface SetDecrement {
  type: CartType.DECREMENT;
  payload: {};
}

export type CartActionTypes =
  | SetAddToCart
  | SetRemoveItem
  | SetIncrement
  | SetDecrement;
