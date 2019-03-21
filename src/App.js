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

  TodoDone = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(done => {
        if (done.id === id) {
          return {
            ...done,
            completed: done.completed === false ? true : false };
          } else {
            return done;
        } 
      })
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todoList={this.state.tasks}
          ToDoDone={this.TodoDone}
          />
        <TodoForm
          handleChange={this.handleChange}
          handleAddTodo={this.handleAddTodo}
          inputText={this.state.inputText}
        />
      </div>
    )
  };
}

export default App;
