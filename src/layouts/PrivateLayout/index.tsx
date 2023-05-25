import { Flex } from '@chakra-ui/react';

import Nav from './Nav';
import Page from './Page';
import Drawer from './Drawer';

interface IProps {
  children: TChildren;
}

const PrivateLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      overflow="hidden"
      bgColor="secondary.300"
    >
      <Nav />
      <Flex w="100%" h="100%" overflow="hidden">
        <Drawer />
        <Page>{children}</Page>
      </Flex>
    </Flex>
  );
};

export default PrivateLayout;
