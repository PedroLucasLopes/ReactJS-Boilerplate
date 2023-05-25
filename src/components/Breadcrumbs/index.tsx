import { memo } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import Translate from 'components/Translate';
import PromoLightSvg from 'components/PromoLightSvg';

interface IProps {
  color?: string;
  routes: IBreadCrumb[];
}

const Breadcrumbs: React.FC<IProps> = ({ color, routes }) => {
  return (
    <Breadcrumb
      fill={color || 'pricemetgray.900'}
      color={color || 'pricemetgray.900'}
      whiteSpace="nowrap"
      separator={<PromoLightSvg icon="ChevronRight" />}
    >
      {routes.map((route, index) =>
        index === routes.length - 1 ? (
          <BreadcrumbItem
            key={uuid()}
            color={color || 'primary.500'}
            fontWeight="bold"
          >
            <BreadcrumbLink isCurrentPage>
              <Translate str={route.label} />
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={uuid()}>
            <BreadcrumbLink as={Link} to={route.url}>
              <Translate str={route.label} />
            </BreadcrumbLink>
          </BreadcrumbItem>
        )
      )}
    </Breadcrumb>
  );
};

export default memo(Breadcrumbs);
