import React, { useState } from 'react';
import { useCreateTodoMutation } from '../../generated-types';
import { Button, TextField, Card, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const CreateTodo: React.FC = () => {
  const [createTodo] = useCreateTodoMutation();
  const [newTodoTitle, setNewTodoTitle] = useState('');

  return (
    <div>
      <form noValidate autoComplete='off' className='inputForm'>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h1' component='h2' gutterBottom>
              To-do Or Not To-do
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Title'
              variant='outlined'
              fullWidth={true}
              onChange={e => setNewTodoTitle(e.target.value)}
              value={newTodoTitle}
            />
          </Grid>
          <Grid
            style={{ marginTop: '15px', justifyContent: 'center' }}
            item
            xs={12}
            justify='center'
            alignItems='center'
          >
            <Button
              variant='outlined'
              color='primary'
              onClick={() => {
                createTodo({
                  variables: {
                    input: {
                      title: newTodoTitle,
                    },
                  },
                });
              }}
            >
              Add Todo
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateTodo;
