import { FC, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { AppLayout } from '@layouts/app';
import { PageTitle } from '@components/common/page-title';
import { Modal } from '@components/common/modal';

import TitleImage from '@public/images/notes-cat.png';

import { CategoriesList } from './categories-list';
import { List } from './list';

import styles from './NotesPage.module.scss';

type Props = {
  notes: INote[],
  categories: INoteCategory[],
};

const NotesPage: FC<Props> = props => {
  const { notes, categories } = props;

  const [ selectedCategoriesIds, setSelectedCategoriesIds ] = useState<number[]>([]);
  const addSelectedCategory = (id: number) => setSelectedCategoriesIds(prev => [ ...prev, id ]);
  const removeSelectedCategory = (id: number) => setSelectedCategoriesIds(prev => [ ...prev.filter(categoryId => categoryId !== id) ]);
  const removeAllSelectedCategories = () => setSelectedCategoriesIds([]);

  const [ noteToRead, setNoteToRead ] = useState<any>(null);
  const removeNoteToRead = () => setNoteToRead(null);

  const modalRef = useRef(null);
  
  return (
    <AppLayout>
      <PageTitle text='Заметки' img={TitleImage.src} />

      <CategoriesList 
        categories={categories}
        selectedCategoriesIds={selectedCategoriesIds}
        selectCategory={addSelectedCategory}
        removeCategory={removeSelectedCategory}
        removeAllCategories={removeAllSelectedCategories}
      />

      <List 
        categories={categories}
        selectedCategoriesIds={selectedCategoriesIds}
        notes={notes}
        setNoteToRead={setNoteToRead}
      />

      <CSSTransition
        in={!!noteToRead}
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
        <Modal
          ref={modalRef}
          onClose={removeNoteToRead}
        >
          Hello
        </Modal>
      </CSSTransition>
    </AppLayout>
  );
};

export default NotesPage;
