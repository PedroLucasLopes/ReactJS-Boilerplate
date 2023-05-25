import { memo, useMemo } from 'react';

import useTranslate from 'hooks/useTranslate';

interface IProps {
  str: string;
}

const Translate: React.FC<IProps> = ({ str }) => {
  const { translate } = useTranslate();

  const translatedStr = useMemo(() => {
    return translate(str);
  }, [translate, str]);

  return <>{translatedStr}</>;
};

export default memo(Translate);
