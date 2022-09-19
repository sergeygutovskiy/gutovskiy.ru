import { FC, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Modal as CommonModal } from '@components/common/modal';

import styles from './Modal.module.scss';
import Image from 'next/image';

type Props = {
  note: INote | null,
  onClose: () => void,
};

const Modal: FC<Props> = props => {
  const { note, onClose } = props;

  const modalRef = useRef(null);
  const [ fullNote, setFullNote ] = useState<IFullNote | null>(null);

  useEffect(() => {
    if ( !note ) return;

    const getNote = async () => {
      const response = await fetch(`/api/notes/${note.id}/full`);
      const fullNote = await response.json();
      setFullNote(fullNote);
    };

    getNote();
  }, [ note ]);

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
        {
          fullNote
            ? (
              <div className={styles.content}>
                {/* Title */}
                <span className={styles.content__title}>{fullNote.title}</span>

                {/* Date */}
                <span className={styles.content__date}>{fullNote.date}</span>

                {/* Image */}
                {
                  fullNote.image &&
                  <div className={styles.content__image}>
                    <Image
                      src={fullNote.image}
                      layout='fill'
                      objectFit='contain'
                      alt={fullNote.title}
                    />
                  </div>
                }

                {/* Description */}
                {
                  fullNote.description &&
                  <>
                    <span className={styles.content__subtitle}>
                      Описание
                    </span>
                    <p className={styles.content__description}>
                      {fullNote.description}
                    </p>
                  </>
                }

                {/* Links */}
                {
                  fullNote.links && fullNote.links.length > 0 &&
                  <>
                    <span className={styles.content__subtitle}>
                      Ссылки
                    </span>
                    <ul className={styles.content__links}>
                      {
                        fullNote.links.map((link, index) => (
                          <li key={index} className={styles.content__link}>
                            <a href={link}>{link}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </>
                }
              </div>
            )
            : (
              <span>Загрузка...</span>
            )
        }
      </CommonModal>
    </CSSTransition>
  );
};

export default Modal;

