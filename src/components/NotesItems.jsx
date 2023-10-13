import React from 'react';
import { showFormattedDate } from '../utils/index';
import ButtonDelete from './ButtonDelete';
import ButtonArchive from './ButtonArchive';
import ButtonActive from './ButtonActive';

function NotesItems({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  onActive,
  archived,
}) {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        {archived ? (
          <ButtonActive id={id} onActive={onActive} />
        ) : (
          <ButtonArchive id={id} onArchive={onArchive} />
        )}
        <ButtonDelete id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NotesItems;
