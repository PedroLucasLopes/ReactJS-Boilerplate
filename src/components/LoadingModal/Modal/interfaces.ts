// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {}

export interface IImperativeHandle {
  open: (msg: string, promise: Promise<void>) => void;
}
