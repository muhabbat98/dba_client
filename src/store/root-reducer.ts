import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { languageReducer } from './language/language-reducer';
import { snackbarReducer } from './snackbar/snackbar-reducer';
import { userReducer } from './user/user-reducer';
import { loadingErrorReducer } from './loading-error-handler/loading-error-handler-reducer';
import { menuReducer } from './menu/menu-reducer';
import { confirmReducer } from './confirm/confirm-reducer';
import { cartReducer } from './cart/cart-reducer';
import { wishlistReducer } from './wishlist/wishlist-reducer';
import { alertReducer } from './alert/alert-reducer';
import { bankDetailsReducer } from './bank-details/bank-details-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language', 'user', 'cart', 'wishlist'],
};

export const rootReducer = combineReducers({
  language: languageReducer,
  snackbar: snackbarReducer,
  user: userReducer,
  loadingError: loadingErrorReducer,
  menu: menuReducer,
  confirm: confirmReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  alert: alertReducer,
  bankDetails: bankDetailsReducer,
});

export default persistReducer<any, any>(persistConfig, rootReducer);
