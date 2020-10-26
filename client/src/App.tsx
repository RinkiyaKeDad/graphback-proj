import React from 'react';
import { useFindTodosQuery } from './generated-types';
import CreateTodo from './components/todos/CreateTodo';
import OneTodo from './components/todos/OneTodo';
import { Grid } from '@material-ui/core';

const App: React.FC = () => {
  const allTodos = useFindTodosQuery();
  allTodos.startPolling(2000);
  console.log(allTodos.data?.findTodos);

  const todoItems = allTodos.data?.findTodos?.items;

  return (
    <Grid container justify='center' spacing={2}>
      <Grid item xs={1} sm={2} />
      <Grid item xs={10} sm={8}>
        <Grid
          style={{ marginBottom: '10px' }}
          justify='center'
          container
          item
          xs={12}
        >
          <CreateTodo />
        </Grid>
        <Grid justify='center' container item xs={12}>
          {todoItems &&
            todoItems.map((todo: any) => (
              <OneTodo key={todo._id} _id={todo._id} title={todo.title} />
            ))}
        </Grid>
      </Grid>
      <Grid item xs={1} sm={2} />{' '}
    </Grid>
  );
};

export default App;
