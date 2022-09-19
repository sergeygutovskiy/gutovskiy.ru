import { useEffect, useState } from 'react';

const useApiFullNote = (noteId: number | null) => {
  const [ fullNote, setFullNote ] = useState<IFullNote | null>(null);

  useEffect(() => { setFullNote(null); }, [ noteId ]);

  useEffect(() => {
    const abortController = new AbortController();
    
    const getNote = async () => {
      if ( noteId === null ) return;

      try {
        const response = await fetch(`/api/notes/${noteId}/full`, { signal: abortController.signal });
        const fullNote = await response.json();
        setFullNote(fullNote);
      } catch (e) {
        if ( abortController.signal.aborted ) return;
        console.error(e);
      }
    };

    getNote();

    return () => { abortController.abort(); };
  }, [ noteId ]);

  return fullNote;
};

export default useApiFullNote;
