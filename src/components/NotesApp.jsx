import React from 'react';
import Header from './Header';
import { getInitialData } from '../utils/index';
import NotesInput from './NotesInput';
import NotesList from './NotesList';
import Footer from './Footer';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keywords: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onKeywordChange = this.onKeywordChange.bind(this);
  }

  onKeywordChange = (keywords) => {
    this.setState({ keywords });
  };

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });
    this.setState({ notes });
  }

  onActiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keywords.toLowerCase())
    );

    return (
      <>
        <Header
          keywords={this.state.keywords}
          onKeywordChange={this.onKeywordChange}
        />
        <div className='note-app__body'>
          <NotesInput addNote={this.onAddNotesHandler} />
          <NotesList
            notes={filteredNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            onActive={this.onActiveHandler}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default NotesApp;
