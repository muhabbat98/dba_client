import { LanguageType } from './language-types';
import { LanguageActionType } from './language-action-types';
import {Language} from "../../utils/language-enum"

interface LanguageReducerState {
  language: Language;
}

const initialState: LanguageReducerState = {
  language: Language.uz,
};

export const languageReducer = (
  state: LanguageReducerState = initialState,
  action: LanguageActionType
) => {
  if (action.type === LanguageType.SET_LANGUAGE) {
    return {
      ...state,
      language: action.payload,
    };
  }
  return state;
};
