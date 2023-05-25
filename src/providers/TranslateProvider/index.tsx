import { useCallback, useEffect, useMemo, useState } from 'react';

import languages from './languages';
import TranslateContext from './TranslateContext';

interface IProps {
  children: TChildren;
}

const TranslateProvider: React.FC<IProps> = ({ children }) => {
  const [locale, setLocale] = useState<TLocale>('pt');

  const languagePackage = useMemo(() => {
    return languages[locale];
  }, [locale]);

  const translate = useCallback(
    (word: string) => {
      return languagePackage[word] || word;
    },
    [languagePackage]
  );

  const updateLocale = useCallback((newLocale: TLocale) => {
    setLocale(newLocale);
    localStorage.setItem('@Promo:locale', newLocale);
  }, []);

  const checkLocalStorage = useCallback(() => {
    const localStorageLocale = localStorage.getItem('@Promo:locale') || 'pt';

    if (
      localStorageLocale === 'pt' ||
      localStorageLocale === 'es' ||
      localStorageLocale === 'en'
    ) {
      setLocale(localStorageLocale);
    }
  }, []);
  useEffect(checkLocalStorage, [checkLocalStorage]);

  return (
    <TranslateContext.Provider
      value={{ locale, setLocale, translate, updateLocale }}
    >
      {children}
    </TranslateContext.Provider>
  );
};

export default TranslateProvider;
