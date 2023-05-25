import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import Logo from './Logo';
import User from './User/';
import Middle from './Middle';

const Nav = () => {
  return (
    <Flex w="100%" h="72px" p="1rem 2rem" align="center" bgColor="primary.900">
      <Logo />
      <Middle />
      <User />
    </Flex>
  );
};

export default memo(Nav);
