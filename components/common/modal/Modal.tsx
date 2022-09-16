import { forwardRef, MouseEventHandler, ReactNode } from 'react';

import styles from './Modal.module.scss';

type Props = {
  onClose: () => void,
  children: ReactNode,
};

const Modal = forwardRef<any, Props>((props, ref) => {
  const { onClose, children} = props;

  const onWrapperClick: MouseEventHandler<HTMLDivElement> = e => {
    if ( e.currentTarget !== e.target ) return;
    onClose();
  };

  return (
    <div className={styles.wrapper} onClick={onWrapperClick} ref={ref}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <button className={styles.modal__close} onClick={onClose}/>
        </div>

        {children}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
