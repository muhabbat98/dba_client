import React, { createContext, useContext, useReducer } from 'react';

enum ActionType {
  ADD_FIELD,
  ADD_PRODUCT,
  ADD_REFERENCE,
  TOGGLE_VIEW,
  START_LOADING,
  TOGGLE_MAIN,
}

export enum ViewType {
  TEMPLATE_VIEW = 'TEMPLATE_VIEW',
  TEMPLATE_BUILDER = 'TEMPLATE_BUILDER',
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

interface ToggleView {
  type: ActionType.TOGGLE_VIEW;
  payload: ViewType;
}

interface ToggleView {
  type: ActionType.TOGGLE_VIEW;
  payload: ViewType;
}

interface ToggleMain {
  type: ActionType.TOGGLE_MAIN;
  payload: any;
}

type Action = AddField | AddProduct | AddReference | ToggleView | ToggleMain;

interface State {
  fields: any[];
  products: any[];
  reference: any[];
  viewType: ViewType;
  loading: boolean;
  isMain: boolean;
}

type Dispatch = (action: Action) => void;

interface TemplateCreateContextType {
  state: State;
  dispatch: Dispatch;
}

const defaultState: State = {
  fields: [],
  products: [],
  reference: [],
  viewType: ViewType.TEMPLATE_BUILDER,
  loading: false,
  isMain: false,
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
    case ActionType.TOGGLE_MAIN:
      return {
        ...state,
        isMain: !state.isMain,
      };
    case ActionType.ADD_FIELD:
      return addField(state, action);
    case ActionType.ADD_REFERENCE:
      return addReference(state, action);
    case ActionType.ADD_PRODUCT:
      return addProduct(state, action);
    case ActionType.TOGGLE_VIEW:
      return { ...state, viewType: action.payload };
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

  const setBuilder = () => {
    dispatch({
      type: ActionType.TOGGLE_VIEW,
      payload: ViewType.TEMPLATE_BUILDER,
    });
  };

  const setView = () => {
    dispatch({
      type: ActionType.TOGGLE_VIEW,
      payload: ViewType.TEMPLATE_VIEW,
    });
  };

  const toggleMain = () => {
    dispatch({
      type: ActionType.TOGGLE_MAIN,
      payload: [],
    });
  };

  return {
    state,
    addProduct,
    addField,
    addReference,
    setBuilder,
    setView,
    toggleMain,
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

  let products = [...copyState.products];
  const find = products.findIndex((f: any) => f.id === action.payload.id);

  if (find < 0) {
    products.push(action.payload);
  } else {
    products = products.filter((f) => f.id !== action.payload.id);
  }
  copyState.products = products;
  return copyState;
}
