import { memo, useCallback, useMemo } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

import Translate from 'components/Translate';

interface IPage {
  url: string;
  label: string;
  show: boolean;
  icon: JSX.Element;
}

interface IProps {
  page: IPage;
}

const Page: React.FC<IProps> = ({ page }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isCurrent = useMemo(() => {
    return pathname.split('/').includes(page.url.replace('/', ''));
  }, [page.url, pathname]);

  const onClick = useCallback(() => {
    navigate(page.url);
  }, [navigate, page.url]);

  if (!page.show) return null;
  return (
    <HStack
      cursor="pointer"
      w="100%"
      p="1rem"
      align="center"
      textAlign="center"
      userSelect="none"
      fill={isCurrent ? 'white' : 'primary.900'}
      color={isCurrent ? 'white' : 'primary.900'}
      bgColor={isCurrent ? 'primary.900' : 'transparent'}
      _hover={{
        bgColor: isCurrent ? 'primary.900' : 'secondary.300',
      }}
      onClick={onClick}
    >
      {page.icon}
      <Text>
        <Translate str={page.label} />
      </Text>
    </HStack>
  );
};

export default memo(Page);
