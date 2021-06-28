import { BankDetailsType } from './bank-details-types';

interface SetAllCards {
  type: BankDetailsType.SET_ALL_CARDS;
  payload: AllCardsType;
}

export type BankDetailsActionTypes = SetAllCards;
