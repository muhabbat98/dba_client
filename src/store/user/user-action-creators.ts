import { UserActionType } from './user-action-types';
import { UserType } from './user-types';
import { UserReducerState } from './user-reducer';
import { cleanCart } from '../cart/cart-action-creator';
import { cleanWishlist } from '../wishlist/wishlist-action-creator';



export const setUser = (user: UserReducerState): UserActionType => ({
  type: UserType.SET_USER,
  payload: user,
});

export const cleanUser = () => (dispatch:any)=>{
  dispatch(cleanCart())
  dispatch(cleanWishlist())

  dispatch({type: UserType.CLEAN_USER})
}



