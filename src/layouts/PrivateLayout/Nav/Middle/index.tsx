import { HStack } from '@chakra-ui/react';

import Date from './Date';
// import Search from './Search';

const Middle = () => {
  return (
    <HStack w="100%" h="100%" align="center">
      {/* <Search /> */}
      <Date />
    </HStack>
  );
};

export default Middle;
