type Cell = (params: any) => any

export default interface IColumn {
  Header: Cell | string
  accessor: Cell | string
  styles?: {
    th?: (params: any) => { [key: string]: any }
    td?: (params: any) => { [key: string]: any }
  }
}
