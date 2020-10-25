import React, { useState } from 'react';
import EditTodo from './EditTodo';
import { Todo } from '../../generated-types';
import { Button, Card } from '@material-ui/core';

const OneTodo = ({ _id, title }: Todo) => {
  const [todoEdit, setTodoEdit] = useState(false);

  return (
    <div>
      <Card className='inputCard'>
        <li className='OneNote'>
          <strong>{title}</strong>:&nbsp;
          <Button
            onClick={() => setTodoEdit(!todoEdit)}
            variant='outlined'
            color='primary'
          >
            Edit
          </Button>
          {todoEdit ? (
            <EditTodo
              _id={_id}
              title={title}
              editState={setTodoEdit}
            ></EditTodo>
          ) : (
            <div></div>
          )}
        </li>
      </Card>
    </div>
  );
};

export default OneTodo;
