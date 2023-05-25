import { memo } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import useTranslate from 'hooks/useTranslate';
import PromoLightSvg from 'components/PromoLightSvg';

const Search = () => {
  const { translate } = useTranslate();

  return (
    <InputGroup maxW="24rem" fill="gray.300">
      <InputLeftElement pointerEvents="none">
        <PromoLightSvg icon="Search" />
      </InputLeftElement>
      <Input
        type="tel"
        variant="filled"
        placeholder={translate('Buscar')}
        bgColor="white"
        _focus={{ bgColor: 'white' }}
      />
    </InputGroup>
  );
};

export default memo(Search);
