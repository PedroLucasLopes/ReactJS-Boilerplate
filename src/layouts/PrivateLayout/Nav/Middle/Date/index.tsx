import { useMemo } from 'react';
import moment from 'moment';
import { HStack, Text } from '@chakra-ui/react';

import Translate from 'components/Translate';
import PromoLightSvg from 'components/PromoLightSvg';

const Date = () => {
  const date = useMemo(() => {
    const sections = moment().format('dddd DD MMMM').split(' ');

    return (
      <Text>
        <Translate str={sections[0]} />, {sections[1]}{' '}
        <Text as="span" fontWeight="bold">
          • <Translate str={sections[2]} />
        </Text>
      </Text>
    );
  }, []);

  return (
    <HStack fill="white" color="white">
      <PromoLightSvg icon="Calendar" />
      {date}
    </HStack>
  );
};

export default Date;
