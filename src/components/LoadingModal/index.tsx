import { useCallback, useRef, cloneElement, useMemo } from 'react';
import { AxiosResponse } from 'axios';

import Modal from './Modal';

type TPromise = () => Promise<AxiosResponse<any, any> | void>;

interface IProps {
  promise: TPromise;
  message?: string;
  children: React.ReactElement<any>;
}

const LoadingModal: React.FC<IProps> = ({
  promise,
  message = 'Por favor aguarde...',
  children,
}) => {
  const loadingRef = useRef<any>(null);

  const openLoading = useCallback((message: string, promise: TPromise) => {
    loadingRef.current.open(message, promise());
  }, []);

  const onClick = useCallback(() => {
    openLoading(message, promise);
  }, [openLoading, message, promise]);

  const TriggerElement = useMemo(() => {
    return cloneElement(children, { onClick });
  }, [children, onClick]);

  return (
    <>
      {TriggerElement}
      <Modal ref={loadingRef} />
    </>
  );
};

export default LoadingModal;
