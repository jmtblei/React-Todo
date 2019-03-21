// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoList.map(duties => {
        return <Todo key={duties.id} 
        todoInfo={duties}
        ToDoDone={props.ToDoDone} 
        />;
      })}
    </div>
  );
};

export default TodoList;
