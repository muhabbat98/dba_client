import { WishlistType } from "./wishlist-types";

interface AddToWishlist {
  type: WishlistType.ADD_TO_WISHLIST;
  payload: {};
}

interface RemoveWishlist {
  type: WishlistType.REMOVE_WISHLIST;
  payload: {};
}

export type WishlistActionType = AddToWishlist | RemoveWishlist;