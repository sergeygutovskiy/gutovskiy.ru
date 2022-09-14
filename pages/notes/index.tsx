import type { GetStaticPropsResult, NextPage } from 'next';

import { NotesPage } from '@components/pages/notes';
import { notes as apiNotes, notesCategories as apiNotesCategories  } from '@lib/data/notes';

type Props = {
  notes: INote[],
  categories: INoteCategory[],
};

const Notes: NextPage<Props> = props => {
  return <NotesPage {...props} />;
};

export default Notes;

export function getStaticProps(): GetStaticPropsResult<Props> {
  const notes = [ ...apiNotes ];
  const categories = [ ...apiNotesCategories ];

  return {
    props: { 
      notes, 
      categories 
    },
  };
};
