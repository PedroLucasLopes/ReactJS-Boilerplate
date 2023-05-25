import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Td, Th } from '@chakra-ui/react';

interface IcellProps {
  type: 'td' | 'th';
  children: TChildren;
  colIndex: number;
  rowIndex?: number;
  cellsRef: React.MutableRefObject<any[]>;
  customStyle: { [key: string]: any };
}

const StickyCell: React.FC<IcellProps> = ({
  type,
  children,
  colIndex,
  rowIndex,
  cellsRef,
  customStyle,
}) => {
  const [left, setLeft] = useState(0);

  const bgColor = useMemo(() => {
    if (typeof rowIndex === 'number') return rowIndex & 1 ? '#f9f9f9' : '#fff';
    return '#f2f3f5';
  }, [rowIndex]);

  const getLeft = useCallback(() => {
    let newLeft = 0;

    for (let i = 0; i <= colIndex - 1; i += 1) {
      newLeft += cellsRef.current[i]?.offsetWidth - 0.5 || 0;
    }

    setLeft(newLeft);
  }, [cellsRef, colIndex]);
  useEffect(getLeft, [getLeft]);

  if (type === 'td') {
    return (
      <Td
        ref={(el) => (cellsRef.current[colIndex] = el)}
        pos="sticky"
        zIndex="10"
        left={left}
        bgColor={bgColor}
        {...customStyle}
      >
        {children}
      </Td>
    );
  }

  return (
    <Th
      ref={(el) => (cellsRef.current[colIndex] = el)}
      pos="sticky"
      zIndex="10"
      left={left}
      bgColor={bgColor}
      {...customStyle}
    >
      {children}
    </Th>
  );
};

export default memo(StickyCell);
