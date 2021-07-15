import React, { createContext, useContext, useReducer } from 'react';

export enum CardFormType {
  MARKET_ACCOUNT,
  CREDIT_CARD,
  BANK_ACCOUNT,
}

enum ActionType {
  OPEN_ADD_MODAL,
  CLOSE_ADD_MODAL,
  SET_CARD_FORM_TYPE,
}

interface OpenAddModal {
  type: ActionType.OPEN_ADD_MODAL;
}

interface CloseAddModal {
  type: ActionType.CLOSE_ADD_MODAL;
}

interface SetCardFormType {
  type: ActionType.SET_CARD_FORM_TYPE;
  payload: CardFormType;
}

type Action = OpenAddModal | CloseAddModal | SetCardFormType;

interface PaymentState {
  modal: boolean;
  cards: any[];
  cardFormType: CardFormType;
}

type PaymentDispatch = (action: Action) => void;

interface PaymentContextType {
  state: PaymentState;
  dispatch: PaymentDispatch;
}

const defaultState: PaymentState = {
  modal: false,
  cards: [],
  cardFormType: CardFormType.CREDIT_CARD,
};

const paymentDefaultValue: PaymentContextType = {
  state: defaultState,
  dispatch: () => {},
};

const PaymentContext = createContext<PaymentContextType>(paymentDefaultValue);

export const PaymentProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(paymentReducer, defaultState);

  const value = { state, dispatch };

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};

function paymentReducer(state: PaymentState, action: Action): PaymentState {
  switch (action.type) {
    case ActionType.OPEN_ADD_MODAL:
      return {
        ...state,
        modal: true,
      };
    case ActionType.CLOSE_ADD_MODAL:
      return {
        ...state,
        modal: false,
      };
    case ActionType.SET_CARD_FORM_TYPE:
      return {
        ...state,
        cardFormType: action.payload,
      };

    default:
      return state;
  }
}

export const usePayment = () => {
  const { state, dispatch } = useContext(PaymentContext);

  const openAddModal = () => {
    dispatch({
      type: ActionType.OPEN_ADD_MODAL,
    });
  };

  const closeAddModal = () => {
    dispatch({
      type: ActionType.CLOSE_ADD_MODAL,
    });
  };

  const setMarketAccountForm = () => {
    dispatch({
      type: ActionType.SET_CARD_FORM_TYPE,
      payload: CardFormType.MARKET_ACCOUNT,
    });
  };

  const setCreditCardForm = () => {
    dispatch({
      type: ActionType.SET_CARD_FORM_TYPE,
      payload: CardFormType.CREDIT_CARD,
    });
  };

  const setBankAccountForm = () => {
    dispatch({
      type: ActionType.SET_CARD_FORM_TYPE,
      payload: CardFormType.BANK_ACCOUNT,
    });
  };

  return {
    state,
    openAddModal,
    closeAddModal,
    setMarketAccountForm,
    setCreditCardForm,
    setBankAccountForm,
  };
};
