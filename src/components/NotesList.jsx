import React from 'react';
import NotesItems from './NotesItems';

function NotesList({ notes, onDelete, onArchive, onActive }) {
  const activeNotes = notes.filter((note) => note.archived === false);
  const archivedNotes = notes.filter((note) => note.archived === true);

  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className='notes-list'>
        {activeNotes.length === 0 ? (
          <p>Tidak ada catatan</p>
        ) : (
          activeNotes.map((activeNote) => (
            <NotesItems
              key={activeNote.id}
              id={activeNote.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...activeNote}
            />
          ))
        )}
      </div>
      <h2>Catatan Arsip</h2>
      <div className='notes-list'>
        {archivedNotes.length === 0 ? (
          <p>Tidak ada catatan</p>
        ) : (
          archivedNotes.map((archivedNote) => (
            <NotesItems
              key={archivedNote.id}
              id={archivedNote.id}
              onDelete={onDelete}
              onActive={onActive}
              {...archivedNote}
            />
          ))
        )}
      </div>
    </>
  );
}

export default NotesList;
