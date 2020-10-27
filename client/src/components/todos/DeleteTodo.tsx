import React, { useState } from 'react';
import { useDeleteTodoMutation } from '../../generated-types';
import { Button, TextField, Grid } from '@material-ui/core';

type todoProps = {
  _id: string;
  title: string;
  editState: any;
};

const EditTodo = ({ _id, title, editState }: todoProps) => {
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <Grid container>
      <Grid item xs={2}>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => {
            deleteTodo({
              variables: {
                input: {
                  _id: _id,
                  title: title,
                },
              },
            });
            editState(false);
          }}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default EditTodo;
