import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return (
        <form>
            <input
               type="text"
               placeholder="What do I need to do?" 
               value={props.inputText}
               onChange={props.handleChange}
            />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.removeCompleted}>Clear Completed</button>
        </form>
    )
};

export default TodoForm;