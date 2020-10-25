import React, { useState } from 'react';
import { useUpdateTodoMutation } from '../../generated-types';
import { Button, TextField, Card } from '@material-ui/core';
import './Note.css';

type todoProps = {
  _id: string;
  title: string;
  editState: any;
};

const EditTodo = ({ _id, title, editState }: todoProps) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [TodoTitle, setTodoTitle] = useState(title);

  return (
    <div>
      <Card className='inputCard'>
        <form noValidate autoComplete='off' className='inputForm'>
          <h3>Edit Todo</h3>
          <TextField
            label='Title'
            variant='outlined'
            onChange={e => setTodoTitle(e.target.value)}
            value={TodoTitle}
          />

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
        </form>
      </Card>
    </div>
  );
};

export default EditTodo;
