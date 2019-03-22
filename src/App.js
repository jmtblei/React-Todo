import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [], //tasks is an empty array
      inputText: ''
    }
  };  

  handleChange = event => { //changes placeholder to input text
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleAddTodo = event => {
    event.preventDefault();
    const newTask = //declare text input as new task with id and completed properties
      { 
        task: this.state.inputText, 
        id: Date.now(), 
        completed: false
      }
    ;
    this.setState({ //create new array with original tasks using spread operator and return input text as new task. returns inputtext back to empty 
      tasks: [...this.state.tasks, newTask],
      inputText:''
    })
  };

  todoDone = id => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.map(task => {
      if (task.id === id) { //checks id and toggles boolean from false to true
        task.completed = !task.completed; 
        return task;
      } else {
        return task;
      }
    });
    this.setState({
      tasks
    })
  };

  removeCompleted = event => { //return new array with completed tasks filtered out
    event.preventDefault();
    let tasks = this.state.tasks.filter(task => !task.completed)
      this.setState({
        tasks
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todoList={this.state.tasks}
          todoDone={this.todoDone}
          />
        <TodoForm
          handleChange={this.handleChange}
          handleAddTodo={this.handleAddTodo}
          value={this.state.inputText}
          removeCompleted={this.removeCompleted}
        />
      </div>
    )
  };
}

export default App;
