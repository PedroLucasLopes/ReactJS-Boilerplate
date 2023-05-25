import { useMemo } from 'react';
import {
  Avatar,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

import Translate from 'components/Translate';
import PromoLightSvg from 'components/PromoLightSvg';

import Leave from './Leave';
import SelectLanguage from './SelectLanguage';

const User = () => {
  const user: IUser = useMemo(() => {
    return JSON.parse(localStorage.getItem('@Promo:user')!);
  }, []);

  return (
    <Menu>
      <MenuButton w="18rem" h="100%">
        <HStack align="center" fill="white" color="white">
          <Avatar />
          <Flex flexDir="column" align="flex-start" justify="center">
            <Text fontSize="xs">
              <Translate str="Bem vindo" />
            </Text>
            <Text fontSize="sm">{user.name.split(' ')[0]}</Text>
          </Flex>
          <PromoLightSvg icon="ChevronDown" />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Leave />
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <SelectLanguage />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default User;
