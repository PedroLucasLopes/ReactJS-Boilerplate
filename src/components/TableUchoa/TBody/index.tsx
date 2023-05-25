import { memo } from 'react';
import { Tbody as ChakraTbody } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

import Row from './Row';
import IColumn from '../types/IColumn';

interface ITBodyIProps {
  rows: { [key: string]: any }[];
  cols: IColumn[];
  cellProps: { [key: string]: any };
  stickyPos: number;
  subRowComponent?: React.FC<any>;
}

const TBody: React.FC<ITBodyIProps> = ({
  rows,
  cols,
  cellProps,
  stickyPos,
  subRowComponent,
}) => {
  return (
    <ChakraTbody>
      {rows.map((row: any, rowIndex) => (
        <Row
          key={uuid()}
          row={row}
          cols={cols}
          rowIndex={rowIndex}
          cellProps={cellProps}
          stickyPos={stickyPos}
          subRowComponent={subRowComponent}
        />
      ))}
    </ChakraTbody>
  );
};

export default memo(TBody);
