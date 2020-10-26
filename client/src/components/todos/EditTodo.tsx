import React, { useState } from 'react';
import { useUpdateTodoMutation } from '../../generated-types';
import { Button, TextField, Grid } from '@material-ui/core';

type todoProps = {
  _id: string;
  title: string;
  editState: any;
};

const EditTodo = ({ _id, title, editState }: todoProps) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [TodoTitle, setTodoTitle] = useState(title);

  return (
    <Grid container>
      <form noValidate autoComplete='off' className='inputForm'>
        <h3>Edit Todo</h3>
        <Grid item container>
          <Grid item xs={10}>
            <TextField
              label='Title'
              variant='outlined'
              onChange={e => setTodoTitle(e.target.value)}
              value={TodoTitle}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant='outlined'
              color='primary'
              onClick={() => {
                updateTodo({
                  variables: {
                    input: {
                      _id: _id,
                      title: TodoTitle,
                    },
                  },
                });
                editState(false);
              }}
            >
              Update Todo
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default EditTodo;
