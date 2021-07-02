import { BankDetailsActionTypes } from './bank-details-action-types';
import { BankDetailsType } from './bank-details-types';
import { Dispatch } from 'redux';
import { RootState } from '../store';
import { useActionCreators, axios } from '../../hooks';
import { setAlertMessage } from '../alert/alert-action-creators';

export const setAllCards = (
  allCards: AllCardsType
): BankDetailsActionTypes => ({
  type: BankDetailsType.SET_ALL_CARDS,
  payload: allCards,
});

export const fetchAllcards =
  (reFetch?: boolean) => async (dispatch: any, getState: any) => {
    const {
      bankDetails: { cards },
    } = getState();

    console.log('114565456411');

    if (reFetch) {
      try {
        const response = await axios.get('/user/cards');
        const data = await response.data;
        console.log(data);
        dispatch(setAllCards(data));
      } catch (error) {
        if (error.debugMessage) {
          dispatch(
            setAlertMessage({
              type: 'error',
              message: error.debugMessage,
            })
          );
        } else {
          dispatch(
            setAlertMessage({
              type: 'error',
              message: error.message,
            })
          );
        }
      }
    } else {
      if (cards.length === 0) {
        try {
          const response = await axios.get('/user/cards');
          const data = await response.data;
          console.log(data);
          dispatch(setAllCards(data));
        } catch (error) {
          if (error.debugMessage) {
            dispatch(
              setAlertMessage({
                type: 'error',
                message: error.debugMessage,
              })
            );
          } else {
            dispatch(
              setAlertMessage({
                type: 'error',
                message: error.message,
              })
            );
          }
        }
      }
    }
  };
