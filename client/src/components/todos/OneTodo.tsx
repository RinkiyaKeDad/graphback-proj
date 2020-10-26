import React, { useState } from 'react';
import EditTodo from './EditTodo';
import { Todo } from '../../generated-types';
import { Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const OneTodo = ({ _id, title }: Todo) => {
  const [todoEdit, setTodoEdit] = useState(false);

  return (
    <Grid container xs={12} style={{ margin: '5px' }}>
      <Grid item container xs={12}>
        <Grid item xs={10}>
          <Typography variant='h6' gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => setTodoEdit(!todoEdit)}
            variant='outlined'
            color='primary'
          >
            Edit
          </Button>
        </Grid>
        {todoEdit ? (
          <EditTodo _id={_id} title={title} editState={setTodoEdit}></EditTodo>
        ) : (
          <div></div>
        )}
      </Grid>
    </Grid>
  );
};

export default OneTodo;
