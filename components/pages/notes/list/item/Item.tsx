import { FC } from 'react';

import styles from './Item.module.scss';

type Props = {
  note: ISelctableNote,
  onClick: (note: ISelctableNote) => void, 
};

const Item: FC<Props> = props => {
  const { note, onClick } = props;

  return (
    <button
      key={note.id}
      className={styles.item}
      data-active={note.isSelected}
      disabled={!note.isSelected}
      onClick={() => onClick(note)}
    >
      {note.label}

      <div className={styles.item__bullets} aria-hidden='true'>
        {
          note.categories.map(category => (
            <span 
              key={category.id}
              className={styles.item__bullet}
              data-theme={category.theme}
            />
          ))
        }
      </div>
    </button>
  );
};

export default Item;
