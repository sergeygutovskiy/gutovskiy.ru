import { FC, useState } from 'react';

import { AppLayout } from '@layouts/app';
import { PageTitle } from '@components/common/page-title';

import TitleImage from '@public/images/notes-cat.png';
import { CategoriesList } from './categories-list';
import { List } from './list';

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
      />
    </AppLayout>
  );
};

export default NotesPage;
