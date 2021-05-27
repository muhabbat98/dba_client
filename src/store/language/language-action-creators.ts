import { LanguageActionType } from './language-action-types';
import { LanguageType } from './language-types';
import { Language } from '../../utils/language-enum';

export const setLangugae = (lang: Language): LanguageActionType => ({
  type: LanguageType.SET_LANGUAGE,
  payload: lang,
});
