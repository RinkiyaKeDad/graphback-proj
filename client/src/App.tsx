import React, { useState } from 'react';
import { useFindTodosQuery } from './generated-types';
import CreateTodo from './components/todos/CreateTodo';
import OneTodo from './components/todos/OneTodo';
import { Checkbox, Box, Container, List, ListItem } from '@material-ui/core';

const App: React.FC = () => {
  const allTodos = useFindTodosQuery();
  allTodos.startPolling(2000);
  console.log(allTodos.data?.findTodos);

  const [viewDraftTodos, setViewDraftTodos] = useState(false);

  const todoItems = viewDraftTodos
    ? allTodos.data?.findTodos?.items
    : allTodos.data?.findTodos?.items;

  return (
    <Container>
      <CreateTodo />
      <Box>
        <div style={{ marginLeft: 400, paddingTop: 50 }}>
          <Checkbox
            checked={viewDraftTodos}
            onChange={() => setViewDraftTodos(!viewDraftTodos)}
          />{' '}
          <b>VIEW DRAFT Todos</b>
        </div>
        <ul>
          {
            // TODO fix typings
            todoItems &&
              todoItems.map((todo: any) => (
                <OneTodo key={todo._id} _id={todo._id} title={todo.title} />
              ))
          }
        </ul>
      </Box>
    </Container>
  );
};

export default App;
