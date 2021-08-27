import { WishlistType } from "./wishlist-types";

interface AddToWishlist {
  type: WishlistType.ADD_TO_WISHLIST;
  payload: {};
}

interface RemoveWishlist {
  type: WishlistType.REMOVE_WISHLIST;
  payload: {};
}
interface CleanWishlist {
  type: WishlistType.CLEAN_WISHLIST;
}
export type WishlistActionType = AddToWishlist | RemoveWishlist | CleanWishlist;