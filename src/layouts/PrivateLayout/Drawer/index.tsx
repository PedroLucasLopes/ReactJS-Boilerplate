import { memo, useMemo } from 'react';
import { Divider, Flex } from '@chakra-ui/react';

import PromoLightSvg from 'components/PromoLightSvg';

import Page from './Page';

const Drawer = () => {
  const dataPages = useMemo(() => {
    return [
      {
        url: '/dashboard',
        label: 'Dashboard',
        show: true,
        icon: <PromoLightSvg icon="Home" />,
      },
      {
        url: '/users',
        label: 'Usuários',
        show: true,
        icon: <PromoLightSvg icon="User" />,
      },
      {
        url: '/parameters',
        label: 'Parâmetros',
        show: true,
        icon: <PromoLightSvg icon="Params" />,
      },
      {
        url: '/goals',
        label: 'Metas',
        show: true,
        icon: <PromoLightSvg icon="Goals" />,
      },
      {
        url: '/campaigns',
        label: 'Campanhas',
        show: true,
        icon: <PromoLightSvg icon="Campaign" />,
      },
    ];
  }, []);

  const templatePages = useMemo(() => {
    return [
      {
        url: '/templates',
        label: 'Templates',
        show: true,
        icon: <PromoLightSvg icon="Template" />,
      },
      {
        url: '/posters',
        label: 'Cartazes',
        show: true,
        icon: <PromoLightSvg icon="Picture" />,
      },
    ];
  }, []);

  return (
    <Flex w="15rem" h="100%" bgColor="white" flexDir="column">
      {dataPages.map((page) => (
        <Page key={page.url} page={page} />
      ))}
      <Divider />
      {templatePages.map((page) => (
        <Page key={page.url} page={page} />
      ))}
    </Flex>
  );
};

export default memo(Drawer);
