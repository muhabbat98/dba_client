import React, { createContext, useContext, useReducer } from 'react';

enum ActionType {
  OPEN_ADD_MODAL,
  CLOSE_ADD_MODAL,
}

interface OpenAddModal {
  type: ActionType.OPEN_ADD_MODAL;
  payload: any;
}

interface CloseAddModal {
  type: ActionType.CLOSE_ADD_MODAL;
}

interface State {
  open: boolean;
  id: string | null;
  callback: any;
}

type Action = OpenAddModal | CloseAddModal;

type Dispatch = (action: Action) => void;

interface CategoryContextType {
  state: State;
  dispatch: Dispatch;
}

const defaultState: State = {
  open: false,
  id: null,
  callback: null,
};

const defaultValue: CategoryContextType = {
  state: defaultState,
  dispatch: () => {},
};

const CategoryContext = createContext<CategoryContextType>(defaultValue);

export const CategoryProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const value = { state, dispatch };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.OPEN_ADD_MODAL:
      return {
        open: true,
        id: action.payload.id,
        callback: action.payload.callback,
      };
    case ActionType.CLOSE_ADD_MODAL:
      return { open: false, id: null, callback: null };
    default:
      return state;
  }
};

export const useCategory = () => {
  const { state, dispatch } = useContext(CategoryContext);

  const openModal = (payload: any) => {
    dispatch({ type: ActionType.OPEN_ADD_MODAL, payload: payload });
  };

  const closeModal = () => {
    dispatch({ type: ActionType.CLOSE_ADD_MODAL });
  };

  return {
    state,
    openModal,
    closeModal,
  };
};
