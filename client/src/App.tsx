import React, { useState } from 'react';
import { useFindTodosQuery } from './generated-types';
import CreateNote from './components/notes/CreateNote';
import OneNote from './components/notes/OneNote';
import { Checkbox, Box, Container, List, ListItem } from '@material-ui/core';

const App: React.FC = () => {
  const allTodos = useFindTodosQuery();
  allTodos.startPolling(2000);
  console.log(allTodos.data?.findTodos);

  const [viewDraftNotes, setViewDraftNotes] = useState(false);

  const noteItems = viewDraftNotes
    ? allTodos.data?.findTodos?.items
    : allTodos.data?.findTodos?.items;

  return (
    <Container>
      <CreateNote />
      <Box>
        <div style={{ marginLeft: 400, paddingTop: 50 }}>
          <Checkbox
            checked={viewDraftNotes}
            onChange={() => setViewDraftNotes(!viewDraftNotes)}
          />{' '}
          <b>VIEW DRAFT NOTES</b>
        </div>
        <ul>
          {
            // TODO fix typings
            noteItems &&
              noteItems.map((note: any) => (
                <OneNote
                  key={note._id}
                  _id={note._id}
                  title={note.title}
                  description={note.description}
                  comments={note.comments}
                />
              ))
          }
        </ul>
      </Box>
    </Container>
  );
};

export default App;
