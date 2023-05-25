import { memo, useCallback } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import logoWhite from 'assets/logo-white.png';

const Logo = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  return (
    <Flex w="15.75rem" h="100%" align="center">
      <Image
        src={logoWhite}
        cursor="pointer"
        objectFit="contain"
        onClick={onClick}
      />
    </Flex>
  );
};

export default memo(Logo);
