import { WishlistItemState } from "./wishlist-reducer";
import { WishlistType } from "./wishlist-types";
import { Dispatch } from "redux";

export const addToWishlist = (wishlistItem: WishlistItemState) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: WishlistType.ADD_TO_WISHLIST,
    payload: wishlistItem
  });
};

export const removeWishlist = (wishlistItem: WishlistItemState) => (
   dispatch: Dispatch
 ) => {
   dispatch({
     type: WishlistType.REMOVE_WISHLIST,
     payload: wishlistItem
   });
};