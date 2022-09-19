import { FC, useRef, useState } from 'react';

import { AppLayout } from '@layouts/app';
import { PageTitle } from '@components/common/page-title';

import TitleImage from '@public/images/notes-cat.png';

import { CategoriesList, List, Modal } from '.';

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

      <Modal
        note={noteToRead}
        onClose={() => removeNoteToRead()}
      />
    </AppLayout>
  );
};

export default NotesPage;
