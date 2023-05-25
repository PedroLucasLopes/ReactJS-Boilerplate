import IPaginationOptions from '../types/IPaginationOptions'

import { Container, Total, CurrentPage, NeighborPage, Ellipsis } from './styles'

const Pagination: React.FC<IPaginationOptions> = ({
  page,
  limit,
  total,
  setPage,
  totalPages
}) => {
  if (limit >= total) return null
  return (
    <Container>
      <Total>Visualizando {total} resultados</Total>
      {page > 2 && <NeighborPage onClick={() => setPage(1)}>{1}</NeighborPage>}
      {page > 3 && <Ellipsis>...</Ellipsis>}
      {page > 1 && (
        <NeighborPage onClick={() => setPage(page - 1)}>
          {page - 1}
        </NeighborPage>
      )}
      <CurrentPage>{page}</CurrentPage>
      {totalPages && page < totalPages && (
        <NeighborPage onClick={() => setPage(page + 1)}>
          {page + 1}
        </NeighborPage>
      )}
      {totalPages && page < totalPages - 2 && <Ellipsis>...</Ellipsis>}
      {totalPages && page < totalPages - 1 && (
        <NeighborPage onClick={() => setPage(totalPages)}>
          {totalPages}
        </NeighborPage>
      )}
    </Container>
  )
}

export default Pagination
