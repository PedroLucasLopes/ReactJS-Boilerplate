import { memo, useMemo } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

import useTranslate from 'hooks/useTranslate';

interface IProps {
  children?: TChildren;
  colorScheme?: string;
  [key: string]: any;
}

const Button: React.FC<IProps> = ({
  children,
  colorScheme = 'blue',
  ...rest
}) => {
  const { translate } = useTranslate();

  const translatedText = useMemo(() => {
    return typeof children === 'string' ? translate(children) : children;
  }, [children, translate]);

  return (
    <ChakraButton colorScheme={colorScheme} {...rest}>
      {translatedText}
    </ChakraButton>
  );
};

export default memo(Button);
