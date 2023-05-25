import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, Text } from '@chakra-ui/react';
import PromoLightSvg from 'components/PromoLightSvg';

const Leave = () => {
  const navigate = useNavigate();

  const onExit = useCallback(() => {
    localStorage.removeItem('@Promo:user');
    localStorage.removeItem('@Promo:token');
    navigate('/login');
  }, [navigate]);

  return (
    <HStack
      w="100%"
      align="center"
      justify="center"
      fill="red.500"
      color="red.500"
      onClick={onExit}
    >
      <PromoLightSvg icon="SignOut" />
      <Text>Sair</Text>
    </HStack>
  );
};

export default Leave;
