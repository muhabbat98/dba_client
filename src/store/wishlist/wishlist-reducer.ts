import { WishlistActionType } from './wishlist-action-types';
import { WishlistType } from './wishlist-types';

export interface WishlistItemState {
  wishlistItems: any[];
}

const initialState: WishlistItemState = {
  wishlistItems: [],
};

export const wishlistReducer = (
  state: WishlistItemState = initialState,
  action: WishlistActionType
) => {
  switch (action.type) {
    case WishlistType.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    case WishlistType.REMOVE_WISHLIST:
      return removeFromWishlist(state, action.payload);

    default:
      return state;
  }
};

const removeFromWishlist = (state: WishlistItemState, wishlist: any) => {
  const removedWishlist = state.wishlistItems.filter(
    (item) => item.id !== wishlist.id
  );
  return { ...state, wishlistItems: removedWishlist };
};
