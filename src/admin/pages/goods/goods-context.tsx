import React, { createContext, useContext, useReducer, FC } from 'react';

export enum ActionType {
   ITEM_CHECKED = "ITEM_CHECKED"
}

export interface SetItemChecked {
   type: ActionType.ITEM_CHECKED,
   payload: string
}

type ActionTypes = SetItemChecked;

interface CheckedItemState {
   state: string[]
}

////////////////////////
type CheckItemDispatch = (action: ActionTypes) => void;

interface CheckItemContextType {
   state: CheckedItemState,
   action: CheckItemDispatch
}

const initialState: CheckedItemState = {
   state: []
}

const defaultValueOfContext: CheckItemContextType = {
   state: initialState,
   action: () => { }
};


export const CheckItemContext = createContext<CheckItemContextType>(defaultValueOfContext);

export const CheckedItemProvider: FC = ({ children }) => {
   const [state, action] = useReducer(reducer, initialState);

   const value = { state, action };
   return (
      <CheckItemContext.Provider
         value={value}>{children}</CheckItemContext.Provider>
   )
}

const reducer = (state: CheckedItemState, action: ActionTypes) => {
   console.log('stateReducer = ', state);

   switch (action.type) {
      case ActionType.ITEM_CHECKED:
         return {
            ...state,
            state: [...state.state, action.payload]
         };

      default:
         return state;
   }
}


export const useItemChecked = () => {
   const { state, action } = useContext(CheckItemContext);

   const addId = (id: string) => {
      action({
         type: ActionType.ITEM_CHECKED,
         payload: id
      });
   }

   return {
      state,
      addId
   }
}
