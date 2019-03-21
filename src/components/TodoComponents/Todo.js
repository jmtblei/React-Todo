import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props)
    return (
        <h2 className="ToDoDone" onClick={() => props.ToDoDone(props.todoInfo.id)}>
        {props.todoInfo.task}</h2>
    )
};

export default Todo;