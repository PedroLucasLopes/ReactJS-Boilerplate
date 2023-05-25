import { memo, useRef } from 'react';
import { Thead, Tr } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

import Translate from 'components/Translate';

import Cell from '../Cell';
import IColumn from '../types/IColumn';

interface ITHeadIProps {
  cols: IColumn[];
  stickyPos: number;
  cellProps: { [key: string]: any };
}

const Head: React.FC<ITHeadIProps> = ({ cols, stickyPos, cellProps }) => {
  const cellsRef = useRef<any[]>([]);

  return (
    <Thead>
      <Tr>
        {cols.map((col, colIndex) => (
          <Cell
            key={uuid()}
            type="th"
            colIndex={colIndex}
            cellsRef={cellsRef}
            stickyPos={stickyPos}
            customStyle={
              col.styles?.th?.({ column: col, colIndex, ...cellProps }) || {}
            }
          >
            {typeof col.Header === 'string' ? (
              <Translate str={col.Header} />
            ) : (
              col.Header({ column: col, colIndex, ...cellProps })
            )}
          </Cell>
        ))}
      </Tr>
    </Thead>
  );
};

export default memo(Head);
