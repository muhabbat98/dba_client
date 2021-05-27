import React, { useContext, createContext, FC, useReducer } from 'react';

interface ReferencePageState {
  reference: string | null;
  referenceItem: string | null;
}

type ReferencePageDispatch = (action: Action) => void;

enum ActionType {
  SET_REFERENCE,
  SET_REFERENCE_ITEM,
}

type SetReference = {
  type: ActionType.SET_REFERENCE;
  payload: any;
};

type SetReferenceItem = {
  type: ActionType.SET_REFERENCE_ITEM;
  payload: any;
};

type Action = SetReference | SetReferenceItem;

interface ReferencePageContextType {
  state: ReferencePageState;
  dispatch: ReferencePageDispatch;
}

const referencePageContextDefaultValue: ReferencePageContextType = {
  state: {
    reference: null,
    referenceItem: null,
  },
  dispatch: () => {},
};

const ReferencePageContext = createContext<ReferencePageContextType>(
  referencePageContextDefaultValue
);

function referencePageReducer(state: ReferencePageState, action: Action) {
  switch (action.type) {
    case ActionType.SET_REFERENCE:
      return {
        ...state,
        reference: action.payload,
      };
    case ActionType.SET_REFERENCE_ITEM:
      return {
        ...state,
        referenceItem: action.payload,
      };
    default:
      return state;
  }
}

export const ReferencePageProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(referencePageReducer, {
    reference: null,
    referenceItem: null,
  });

  const value = { state, dispatch };

  return (
    <ReferencePageContext.Provider value={value}>
      {children}
    </ReferencePageContext.Provider>
  );
};

export const useReferencePageContext = () => {
  const { state, dispatch } = useContext(ReferencePageContext);

  return {
    state,
    dispatch,
  };
};
