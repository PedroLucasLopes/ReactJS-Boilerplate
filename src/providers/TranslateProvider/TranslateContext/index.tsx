import { createContext } from 'react';

interface ITranslateContextInitialState {
  locale: TLocale;
  setLocale: TSetState<TLocale>;
  translate: (word: string) => string;
  updateLocale: (newLocale: TLocale) => void;
}

const TranslateContext = createContext({} as ITranslateContextInitialState);

export default TranslateContext;
