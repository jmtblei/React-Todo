import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form onSubmit={props.handleAddTodo}>
            <input
               type="text"
               placeholder="What do I need to do?" 
               value={props.inputText}
               onChange={props.handleChange}
            />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
};

export default TodoForm;