import { LanguageType } from './language-types';
import { Language } from '../../utils/language-enum';

interface SetLanguage {
  type: LanguageType.SET_LANGUAGE;
  payload: Language;
}

export type LanguageActionType = SetLanguage;
