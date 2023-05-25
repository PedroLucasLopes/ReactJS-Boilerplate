import { useContext } from 'react';

import TranslateContext from 'providers/TranslateProvider/TranslateContext';

const useTranslate = () => {
  const ctx = useContext(TranslateContext);

  return ctx;
};

export default useTranslate;
