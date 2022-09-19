import { fullNotes } from '@lib/data/notes';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const noteId = req.query.id;
  if ( !noteId || Array.isArray(noteId) ) return res.status(404);
  
  const parsedNoteId = Number.parseInt(noteId);
  if ( Number.isNaN(parsedNoteId) ) return res.status(404);

  const fullNote = fullNotes.find(fullNote => fullNote.id === parsedNoteId) ?? null;
  return res.json(fullNote);
}
