import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';

import { Modal as CommonModal } from '@components/common/modal';
import useApiFullNote from '@hooks/use-api-full-note';

import styles from './Modal.module.scss';
import isHTML from '@lib/helpers/isHTML';
import reduceClasses from '@lib/helpers/reduceClasses';

type Props = {
  noteId: number | null,
  onClose: () => void,
};

const Modal: FC<Props> = props => {
  const { noteId, onClose } = props;

  const modalRef = useRef(null);
  const fullNote = useApiFullNote(noteId);

  return (
    <CSSTransition
      in={noteId !== null}
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
                      objectFit='scale-down'
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
                    {
                      isHTML(fullNote.description)
                        ? (
                          <div 
                            className={reduceClasses(styles.content__description, styles.content__description_content_html)} 
                            dangerouslySetInnerHTML={{ __html: fullNote.description }} 
                          />
                        )
                        : (
                          <p className={styles.content__description}>
                            {fullNote.description}
                          </p>
                        )
                    }
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

