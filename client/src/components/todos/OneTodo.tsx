import React, { useState } from 'react';
import EditTodo from './EditTodo';
import { Todo } from '../../generated-types';
import { Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useDeleteTodoMutation } from '../../generated-types';

const OneTodo = ({ _id, title }: Todo) => {
  const [todoEdit, setTodoEdit] = useState(false);
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <Grid container xs={12} style={{ margin: '5px' }}>
      <Grid item container xs={12}>
        <Grid item xs={6} sm={10}>
          <Typography variant='h6' gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button
            onClick={() => setTodoEdit(!todoEdit)}
            variant='outlined'
            color='primary'
            style={{ marginRight: '5px' }}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              deleteTodo({
                variables: {
                  input: {
                    _id: _id,
                    title: title,
                  },
                },
              });
            }}
            variant='outlined'
            color='primary'
          >
            Delete
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
