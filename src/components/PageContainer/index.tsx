import { Flex } from '@chakra-ui/react';
import PageHeader from 'components/PageHeader';

interface IProps {
  children?: TChildren;
  navChildren?: JSX.Element;
  breadcrumbs?: IBreadCrumb[];
}

const PageContainer: React.FC<IProps> = ({
  children,
  navChildren,
  breadcrumbs,
}) => {
  return (
    <Flex w="100%" flexDir="column">
      <PageHeader breadcrumbs={breadcrumbs}>{navChildren}</PageHeader>
      {children}
    </Flex>
  );
};

export default PageContainer;
