import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Modal as CommonModal } from '@components/common/modal';

import styles from './Modal.module.scss';

type Props = {
  note: INote | null,
  onClose: () => void,
};

const Modal: FC<Props> = props => {
  const { note, onClose } = props;

  const modalRef = useRef(null);

  return (
    <CSSTransition
      in={!!note}
      timeout={200}
      nodeRef={modalRef}
      classNames={{
        enter: styles.modal__enter,
        enterActive: styles.modal__enter_active,
        exit: styles.modal__exit,
        exitActive: styles.modal__exit_active,
      }}
      unmountOnExit
    >
      <CommonModal
        ref={modalRef}
        onClose={onClose}
      >
        Hello
      </CommonModal>
    </CSSTransition>
  );
};

export default Modal;

