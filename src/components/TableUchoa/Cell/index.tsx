import { memo, useMemo } from 'react';
import { Td, Th } from '@chakra-ui/react';

import StickyCell from './StickyCell';

interface IcellProps {
  type?: 'td' | 'th';
  children: TChildren;
  colIndex: number;
  rowIndex?: number;
  cellsRef: React.MutableRefObject<any[]>;
  stickyPos: number;
  customStyle: { [key: string]: any };
}

const Cell: React.FC<IcellProps> = ({
  type = 'td',
  children,
  colIndex,
  rowIndex,
  cellsRef,
  stickyPos,
  customStyle,
}) => {
  const sticky = useMemo(() => {
    return colIndex < stickyPos;
  }, [colIndex, stickyPos]);

  if (!sticky) {
    if (type === 'td') {
      return <Td {...customStyle}>{children}</Td>;
    }

    if (type === 'th') {
      return <Th {...customStyle}>{children}</Th>;
    }
  }
  return (
    <StickyCell
      type={type}
      colIndex={colIndex}
      cellsRef={cellsRef}
      rowIndex={rowIndex}
      customStyle={customStyle}
    >
      {children}
    </StickyCell>
  );
};

export default memo(Cell);
