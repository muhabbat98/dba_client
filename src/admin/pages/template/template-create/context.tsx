import React, { createContext, useContext, useReducer } from 'react';

enum ActionType {
  ADD_FIELD,
  ADD_PRODUCT,
  ADD_REFERENCE,
}

interface AddField {
  type: ActionType.ADD_FIELD;
  payload: any;
}
interface AddProduct {
  type: ActionType.ADD_PRODUCT;
  payload: any;
}
interface AddReference {
  type: ActionType.ADD_REFERENCE;
  payload: any;
}

interface State {
  fields: any[];
  products: any[];
  reference: any[];
}

type Action = AddField | AddProduct | AddReference;

type Dispatch = (action: Action) => void;

interface TemplateCreateContextType {
  state: State;
  dispatch: Dispatch;
}

const defaultState: State = {
  fields: [],
  products: [],
  reference: [],
};

const defaultValue: TemplateCreateContextType = {
  state: defaultState,
  dispatch: () => {},
};

const TemplateCreateContext =
  createContext<TemplateCreateContextType>(defaultValue);

export const TemplateCreateContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const value = { state, dispatch };

  return (
    <TemplateCreateContext.Provider value={value}>
      {children}
    </TemplateCreateContext.Provider>
  );
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD_FIELD:
      return addField(state, action);
    case ActionType.ADD_REFERENCE:
      return addReference(state, action);
    case ActionType.ADD_PRODUCT:
      return addProduct(state, action);
    default:
      return state;
  }
};

export const useTemplateCreate = () => {
  const { state, dispatch } = useContext(TemplateCreateContext);

  const addField = (field: any) => {
    dispatch({ type: ActionType.ADD_FIELD, payload: field });
  };

  const addProduct = (product: any) => {
    dispatch({ type: ActionType.ADD_PRODUCT, payload: product });
  };

  const addReference = (reference: any) => {
    dispatch({ type: ActionType.ADD_REFERENCE, payload: reference });
  };

  return {
    state,
    addProduct,
    addField,
    addReference,
  };
};

function addField(state: State, action: Action) {
  const copyState = JSON.parse(JSON.stringify(state));
  let fields = [...copyState.fields];
  const find = fields.findIndex((f: any) => f.id === action.payload.id);
  console.log(find);
  if (find < 0) {
    fields.push(action.payload);
  } else {
    fields = fields.filter((f) => f.id !== action.payload.id);
  }
  copyState.fields = fields;
  return copyState;
}

function addReference(state: State, action: Action) {
  return state;
}

function addProduct(state: State, action: Action) {
  const copyState = JSON.parse(JSON.stringify(state));

  let products = [...copyState.fields];
  const find = products.findIndex((f: any) => f.id === action.payload.id);
  console.log(find);
  if (find < 0) {
    products.push(action.payload);
  } else {
    products = products.filter((f) => f.id !== action.payload.id);
  }
  copyState.products = products;
  return copyState;
}
