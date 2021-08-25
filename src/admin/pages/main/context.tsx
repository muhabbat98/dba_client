import { createContext, FC, useContext, useReducer } from 'react';

enum ActionType {
  SET_TITLE,
}

type SetTitleType = {
  type: ActionType.SET_TITLE;
  payload: { pageTitle: string };
};

type Action = SetTitleType;

interface State {
  pageTitle: string;
}

type Dispatch = (action: Action) => void;

interface ContextType {
  state: State;
  dispatch: Dispatch;
}

const initialState: State = {
  pageTitle: '',
};

const defaultValue: ContextType = {
  state: initialState,
  dispatch: () => {},
};

const MainContext = createContext<ContextType>(defaultValue);

export const MainContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const context = {
    state,
    dispatch,
  };
  return (
    <MainContext.Provider value={context}>{children}</MainContext.Provider>
  );
};

const mainReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_TITLE:
      return {
        ...state,
        pageTitle: action.payload.pageTitle,
      };
    default:
      return state;
  }
};

export const useMainContext = () => {
  const { state, dispatch } = useContext(MainContext);

  function setPageTitle(title: string) {
    dispatch({
      type: ActionType.SET_TITLE,
      payload: { pageTitle: title },
    });
  }

  return {
    state,
    setPageTitle,
  };
};
