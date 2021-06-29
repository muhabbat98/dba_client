import { BankDetailsActionTypes } from './bank-details-action-types';
import { BankDetailsType } from './bank-details-types';

interface BankDetailsState {
  cards: AllCardsType;
}

const initialState: BankDetailsState = {
  cards: [],
};

export const bankDetailsReducer = (
  state: BankDetailsState = initialState,
  action: BankDetailsActionTypes
) => {
  switch (action.type) {
    case BankDetailsType.SET_ALL_CARDS:
      return {
        ...state,
        cards: action.payload,
      };

    default:
      return state;
  }
};
