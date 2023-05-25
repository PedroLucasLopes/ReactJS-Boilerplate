import { Flex } from '@chakra-ui/react';
import Breadcrumbs from 'components/Breadcrumbs';

interface IProps {
  children?: TChildren;
  breadcrumbs?: IBreadCrumb[];
}

const PageHeader: React.FC<IProps> = ({ children, breadcrumbs }) => {
  if (!children && !breadcrumbs) return null;
  return (
    <Flex
      w="100%"
      h="4rem"
      pb="2rem"
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderBottomColor="secondary.500"
    >
      {breadcrumbs && <Breadcrumbs routes={breadcrumbs} />}
      {children && (
        <Flex w="100%" h="100%" align="center" justify="flex-end">
          {children}
        </Flex>
      )}
    </Flex>
  );
};

export default PageHeader;
