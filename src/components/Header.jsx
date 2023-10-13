import React from 'react';
import SearchNote from './SearchNote';

function Header({ keywords, onKeywordChange }) {
  return (
    <div className='note-app__header'>
      <h1>NotesApp</h1>
      <SearchNote value={keywords} onChange={onKeywordChange} />
    </div>
  );
}

export default Header;
