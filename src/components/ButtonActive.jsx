import React from 'react';

function ButtonActive({ id, onActive }) {
  return (
    <button className='note-item__archive-button' onClick={() => onActive(id)}>
      Aktifkan
    </button>
  );
}

export default ButtonActive;
