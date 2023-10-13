import React from 'react';

function SearchNote({ value, onChange }) {
  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder='Cari catatan..'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchNote;
