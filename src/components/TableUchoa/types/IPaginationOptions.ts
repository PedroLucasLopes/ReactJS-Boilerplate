export default interface IPaginationOptions {
  page: number
  limit: number
  total: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}
