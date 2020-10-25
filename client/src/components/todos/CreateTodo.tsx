import React, { useState } from 'react';
import { useCreateTodoMutation } from '../../generated-types';
import { Button, TextField, Card } from '@material-ui/core';

const CreateTodo: React.FC = () => {
  const [createTodo] = useCreateTodoMutation();
  const [newTodoTitle, setNewTodoTitle] = useState('');

  return (
    <div>
      <Card className='inputCard'>
        <form noValidate autoComplete='off' className='inputForm'>
          <h3>Create Todo</h3>
          <TextField
            label='Title'
            variant='outlined'
            onChange={e => setNewTodoTitle(e.target.value)}
            value={newTodoTitle}
          />
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
            Create Todo
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateTodo;
