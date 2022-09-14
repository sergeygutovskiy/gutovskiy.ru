import { FC } from 'react';

import styles from './List.module.scss';

type Props = {
  categories: INoteCategory[],
  selectedCategoriesIds: number[],
  notes: INote[],
};

const List: FC<Props> = props => {
  const { notes, categories, selectedCategoriesIds } = props;

  const themedNotes = notes.map(note => ({
    ...note,
    categories: note.categories.map(category => ({ 
      id: category,
      theme: categories.find(c => c.id === category)?.theme
    }))
  }));

  const notesWithSelectedField = themedNotes.map(note => ({
    ...note,
    isSelected: selectedCategoriesIds.length === 0
      ? true
      : note.categories.some(category => selectedCategoriesIds.includes(category.id)),
  }));

  return (
    <div className={styles.list}>
      {
        notesWithSelectedField.map(note => (
          <button
            key={note.id}
            className={styles.list__item}
            data-active={note.isSelected}
            disabled={!note.isSelected}
          >
            {note.label}

            <div className={styles.list__bullets} aria-hidden='true'>
              {
                note.categories.map(category => (
                  <span 
                    key={category.id}
                    className={styles.list__bullet}
                    data-theme={category.theme}
                  />
                ))
              }
            </div>
          </button>
        ))
      }
    </div>
  );
};

export default List;
