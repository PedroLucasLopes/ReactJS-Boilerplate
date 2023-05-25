import { createPortal } from 'react-dom';
import { CircularProgress } from '@chakra-ui/react';
import {
  useState,
  forwardRef,
  useCallback,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from 'react';

import { portal } from './constants';
import { BG, Container, Message } from './styles';
import { IProps, IImperativeHandle } from './interfaces';
import Translate from 'components/Translate';

const Modal: ForwardRefRenderFunction<IImperativeHandle, IProps> = (_, ref) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const close = useCallback(() => {
    setLoading(false);
  }, []);

  const open = useCallback(
    (message = 'Carregando...', promise: Promise<void>) => {
      setLoading(true);
      setMessage(message);

      Promise.resolve(promise).finally(close);
    },
    [close]
  );

  useImperativeHandle(ref, () => ({ open }));

  if (!loading) return null;
  return createPortal(
    <BG>
      <Container>
        <CircularProgress isIndeterminate color="green.300" />
        <Message>
          <Translate str={message} />
        </Message>
      </Container>
    </BG>,
    portal
  );
};

export default forwardRef(Modal);
