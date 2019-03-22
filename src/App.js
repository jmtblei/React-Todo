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
      inputText: event.target.value
    })
  };

  handleAddTodo = event => {
    event.preventDefault();
    // const newTask = this.state.inputText //declare text input as a new task
    // this.setState({
    //   tasks: [...this.state.tasks, newTask] //create new array with original tasks using spread operator and add new input text to that array
    const newTask = 
      { 
        task: this.state.inputText, 
        id: Date.now(), 
        completed: false
      }
    ;
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  };

  todoDone = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: task.completed = !task.completed};
          } else {
            return task;
        } 
      })
    })
  };
  //   let tasks = this.state.tasks.slice();
  //   tasks = tasks.map(task => {
  //     if (task.id === id) {
  //       task.completed = !task.completed;
  //       return task;
  //     } else {
  //       return task;
  //     }
  //   });
  //   this.setState({
  //     tasks
  //   })
  // };

  removeCompleted = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
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
          inputText={this.state.inputText}
          removeCompleted={this.removeCompleted}
        />
      </div>
    )
  };
}

export default App;
