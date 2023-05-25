import { memo } from 'react';
import { Flex } from '@chakra-ui/react';

import TBody from './TBody';
import THead from './THead';
import IProps from './types/IProps';
import Pagination from './Pagination';
import { TableStyled } from './styles';

const Table: React.FC<IProps> = ({
  rows,
  cols,
  page,
  limit,
  total,
  setPage,
  totalPages,
  cellProps = {},
  stickyPos = 0,
  subRowComponent,
}) => {
  return (
    <Flex flexDir="column" w="100%" overflowX="auto">
      <TableStyled>
        <THead cols={cols} stickyPos={stickyPos} cellProps={cellProps} />
        <TBody
          cols={cols}
          rows={rows}
          cellProps={cellProps}
          stickyPos={stickyPos}
          subRowComponent={subRowComponent}
        />
      </TableStyled>
      <Pagination
        page={page}
        limit={limit}
        total={total}
        setPage={setPage}
        totalPages={totalPages}
      />
    </Flex>
  );
};

export default memo(Table);
