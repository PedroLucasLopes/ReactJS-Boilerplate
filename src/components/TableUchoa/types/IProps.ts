import IColumn from './IColumn';
import IPaginationOptions from './IPaginationOptions';

export default interface IProp extends IPaginationOptions {
  rows: { [key: string]: any }[];
  cols: IColumn[];
  cellProps?: { [key: string]: any };
  stickyPos?: number;
  subRowComponent?: React.FC<any>;
}
