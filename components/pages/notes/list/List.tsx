import { FC } from 'react';
import { Item } from './item';

import styles from './List.module.scss';

type Props = {
  categories: INoteCategory[],
  selectedCategoriesIds: number[],
  notes: INote[],
  setNoteIdToRead: (noteId: number) => void,
};

const List: FC<Props> = props => {
  const { notes, categories, selectedCategoriesIds, setNoteIdToRead } = props;

  const themedNotes: IThemedNote[] = notes.map(note => ({
    ...note,
    categories: note.categories.map(category => ({ 
      id: category,
      theme: categories.find(c => c.id === category)?.theme
    }))
  }));

  const notesWithSelectedField: ISelctableNote[] = themedNotes.map(note => ({
    ...note,
    isSelected: selectedCategoriesIds.length === 0
      ? true
      :  selectedCategoriesIds.every(category => note.categories.find(item => item.id === category)),
  }));

  return (
    <div className={styles.list}>
      {
        notesWithSelectedField.map(note => (
          <Item 
            key={note.id} 
            note={note} 
            onClick={() => setNoteIdToRead(note.id)} 
          />
        ))
      }
    </div>
  );
};

export default List;
