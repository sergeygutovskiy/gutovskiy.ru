import { FC, useEffect, useState } from 'react';

import { AppLayout } from '@layouts/app';
import { PageTitle } from '@components/common/page-title';
import TitleImage from '@public/images/notes-cat.png';
import useUrlHash from '@hooks/use-url-hash';

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

  const [ noteIdToRead, setNoteIdToRead ] = useState<number | null>(null);
  const updateCurrentNoteToReadId = (noteId: number) => {
    setNoteIdToRead(noteId);
    location.hash = `${noteId}`;
  };
  const removeNoteToRead = () => {
    setNoteIdToRead(null);
    history.replaceState(null, '', ' ');
  };

  const hash = useUrlHash();
  const noteIdFromUrl = ( hash && !Number.isNaN(Number.parseInt(hash)) ) ? Number.parseInt(hash) : null;

  useEffect(() => {
    if ( noteIdFromUrl === null ) return;
    setNoteIdToRead(noteIdFromUrl);
  }, [ noteIdFromUrl ]);

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
        setNoteIdToRead={updateCurrentNoteToReadId}
      />

      <Modal
        noteId={noteIdToRead}
        onClose={() => removeNoteToRead()}
      />
    </AppLayout>
  );
};

export default NotesPage;
