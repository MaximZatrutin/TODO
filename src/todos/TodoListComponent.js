import React from 'react';
import Grid from '@material-ui/core/Grid';
import TodoComponent from './TodoComponent';
import back from '../img/todo-back.jpg'
import { ListItemSecondaryAction } from '@material-ui/core';

const TodoListComponent = (props) => {
    const {todos, updateTodo, deleteTodo} = props;

    return (
        <Grid item 
            xs={12}
            classes={{
                item: 'todo-list-container'
            }}
        >
            <div className="back-conteiner">
                <img src={back} style={{width:'100%'}}/>
            </div>
            {todos.map((item) => (
                <TodoComponent status={item.status}
                               title={item.title}
                               description={item.description}
                               key={item.id}
                               id={item.id}
                               updateTodo={updateTodo}
                               deleteTodo={deleteTodo}

                />
            ))}
        </Grid>
    );
};

export default TodoListComponent;