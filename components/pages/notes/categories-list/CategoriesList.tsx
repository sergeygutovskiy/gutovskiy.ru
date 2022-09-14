import { FC } from 'react';
import styles from './CategoriesList.module.scss';

type Props = {
  categories: INoteCategory[],
  selectedCategoriesIds: number[],
  selectCategory: (id: number) => void,
  removeCategory: (id: number) => void,
  removeAllCategories: () => void,
};

const CategoriesList: FC<Props> = props => {
  const { categories, selectedCategoriesIds, selectCategory, removeCategory, removeAllCategories } = props;

  const isAllCategoriesApplied = selectedCategoriesIds.length === 0 || selectedCategoriesIds.length === categories.length;

  return (
    <div className={styles.list}>
      <button 
        className={styles.list__item}
        data-active={isAllCategoriesApplied}
        disabled={isAllCategoriesApplied}
        data-theme='all'
        onClick={() => removeAllCategories()}
      >
        Все
      </button>
      
      {
        categories.map(category => (
          <button 
            key={category.id}
            className={styles.list__item}
            data-theme={category.theme}
            data-active={selectedCategoriesIds.includes(category.id)}
            onClick={() => selectedCategoriesIds.includes(category.id)
              ? removeCategory(category.id)
              : selectCategory(category.id)
            }
          >
            {category.label}
          </button>
        ))
      }
    </div>
  );
};

export default CategoriesList;
