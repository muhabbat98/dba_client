import { createContext, useContext, useReducer } from 'react';

enum ActionType {
  OPEN_ADD_MODAL,
}

interface OpenAddModal {
  type: ActionType.OPEN_ADD_MODAL;
}

interface State {}

type Action = OpenAddModal;

type Dispatch = (action: Action) => void;

interface CategoryContextType {
  state: State;
  dispatch: Dispatch;
}

const defaultState: State = {};

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
    default:
      return state;
  }
};

export const useCategory = () => {
  const { state, dispatch } = useContext(CategoryContext);

  return {
    state,
  };
};
