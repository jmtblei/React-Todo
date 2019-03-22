import React from 'react';
import './Todo.css';

const Todo = props => {
    console.log(props)
    return (
        <h4 onClick={() => props.todoDone(props.todoInfo.id)} className={`todoDone ${props.todoInfo.completed}`}>
        {props.todoInfo.task}</h4>
    )
};

export default Todo;