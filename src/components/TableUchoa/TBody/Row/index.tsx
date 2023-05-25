import { memo, useCallback, useRef, useState } from 'react';
import { Td, Tr } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

import Cell from '../../Cell';
import IColumn from '../../types/IColumn';

interface IRowIProps {
  row: { [key: string]: any };
  cols: IColumn[];
  rowIndex: number;
  cellProps: { [key: string]: any };
  stickyPos: number;
  subRowComponent?: React.FC<any>;
}

const Row: React.FC<IRowIProps> = ({
  row,
  cols,
  rowIndex,
  cellProps,
  stickyPos,
  subRowComponent: SubRowComponent,
}) => {
  const [data, setData] = useState(row);
  const [showSubRow, setShowSubRow] = useState(false);

  const cellsRef = useRef<any[]>([]);

  const updateRow = useCallback((newRow: { [key: string]: any }) => {
    setData(newRow);
  }, []);

  const updateCell = useCallback((accessor: string, newValue: any) => {
    setData((current) => ({ ...current, [accessor]: newValue }));
  }, []);

  const toggleSubRow = useCallback(() => {
    setShowSubRow((current) => !current);
  }, []);

  return (
    <>
      <Tr bgColor="#fff">
        {cols.map((col, colIndex) => (
          <Cell
            key={uuid()}
            cellsRef={cellsRef}
            rowIndex={rowIndex}
            colIndex={colIndex}
            stickyPos={stickyPos}
            customStyle={
              col.styles?.td?.({
                row: data,
                col,
                rowIndex,
                colIndex,
                updateRow,
                updateCell,
                showSubRow,
                toggleSubRow,
                ...cellProps,
              }) || {}
            }
          >
            {typeof col.accessor === 'string'
              ? data[col.accessor]
              : col.accessor({
                  row: data,
                  col,
                  rowIndex,
                  colIndex,
                  updateRow,
                  updateCell,
                  showSubRow,
                  toggleSubRow,
                  ...cellProps,
                })}
          </Cell>
        ))}
      </Tr>
      {SubRowComponent && showSubRow && (
        <Tr>
          <Td colSpan={cols.length} padding="0 !important">
            <SubRowComponent
              row={data}
              cols={cols}
              rowIndex={rowIndex}
              updateRow={updateRow}
              updateCell={updateCell}
              showSubRow={showSubRow}
              toggleSubRow={toggleSubRow}
            />
          </Td>
        </Tr>
      )}
    </>
  );
};

export default memo(Row);
