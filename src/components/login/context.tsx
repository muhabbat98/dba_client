import React, { createContext, useReducer, useContext } from 'react';

export enum UserType {
  BUYER,
  SELLER,
}
export type User = 'buyer' | 'seller';

export enum FormType {
  LoginForm,
  RegistrationForm,
  RegistratiomConfirmForm,
  ForgotPassword,
}

interface LoginState {
  userType: UserType;
  formType: FormType;
  user: User;
}

type LoginDispatch = (action: Action) => void;

enum ActionType {
  SET_USER_TYPE,
  SET_FORM_TYPE,
}

type SetUserType = {
  type: ActionType.SET_USER_TYPE;
  payload: { userType: UserType; user: User };
};

type SetFormType = {
  type: ActionType.SET_FORM_TYPE;
  payload: FormType;
};

type Action = SetFormType | SetUserType;

interface LoginContextType {
  state: LoginState;
  dispatch: LoginDispatch;
}

const loginContextDefaultValue: LoginContextType = {
  state: {
    userType: UserType.BUYER,
    formType: FormType.LoginForm,
    user: 'buyer',
  },
  dispatch: () => {},
};

const LoginContext = createContext<LoginContextType>(loginContextDefaultValue);

function loginReducer(state: LoginState, action: Action): LoginState {
  switch (action.type) {
    case ActionType.SET_USER_TYPE:
      return {
        ...state,
        userType: action.payload.userType,
        user: action.payload.user,
      };
    case ActionType.SET_FORM_TYPE:
      return {
        ...state,
        formType: action.payload,
      };
    default:
      return state;
  }
}

export const LoginProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, {
    userType: UserType.BUYER,
    formType: FormType.LoginForm,
    user: 'buyer',
  });

  const value = { state, dispatch };
  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => {
  const { state, dispatch } = useContext(LoginContext);

  const setBuyer = () => {
    dispatch({
      type: ActionType.SET_USER_TYPE,
      payload: { userType: UserType.BUYER, user: 'buyer' },
    });
  };

  const setSeller = () => {
    dispatch({
      type: ActionType.SET_USER_TYPE,
      payload: { userType: UserType.SELLER, user: 'seller' },
    });
  };

  const setLoginForm = () => {
    dispatch({ type: ActionType.SET_FORM_TYPE, payload: FormType.LoginForm });
  };

  const setRegistrationConfirmForm = () => {
    dispatch({
      type: ActionType.SET_FORM_TYPE,
      payload: FormType.RegistratiomConfirmForm,
    });
  };

  const setRegistrationForm = () => {
    dispatch({
      type: ActionType.SET_FORM_TYPE,
      payload: FormType.RegistrationForm,
    });
  };

  const setForgotPssswordForm = () => {
    dispatch({
      type: ActionType.SET_FORM_TYPE,
      payload: FormType.ForgotPassword,
    });
  };

  return {
    state,
    setBuyer,
    setSeller,
    setLoginForm,
    setRegistrationConfirmForm,
    setRegistrationForm,
    setForgotPssswordForm,
  };
};
