import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <h2 onClick={() => props.handleAddedTodo(props.todoInfo.id)}>
        {props.todoInfo}</h2>
    )
};

export default Todo;