import { memo, useCallback } from 'react';
import { Flex, HStack, Image } from '@chakra-ui/react';

import useTranslate from 'hooks/useTranslate';

import languages from './languages';

const SelectLanguage = () => {
  const { locale, updateLocale } = useTranslate();

  const flagOnClick = useCallback(
    (locale: TLocale) => {
      updateLocale(locale);
    },
    [updateLocale]
  );

  return (
    <HStack w="100%" align="center" justify="center">
      {languages.map((language) => (
        <Flex key={language.locale} pos="relative" w="32px" h="24px">
          <Image
            src={language.image}
            onClick={() => flagOnClick(language.locale)}
            cursor="pointer"
            pos="absolute"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="10%"
            filter={
              locale === language.locale ? 'grayscale(0)' : 'grayscale(1)'
            }
            _hover={{
              transform: 'scale(1.2)',
            }}
          />
        </Flex>
      ))}
    </HStack>
  );
};

export default memo(SelectLanguage);
