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
      tasks: [],
      inputText: ""
    }
  };

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    })
  };

  handleAddTodo = event => {
    event.preventDefault();

    this.setState({
      inputText: ""
    })
  };

  handleAddedTodo = event => {
    this.setState({
      inputText: event.target.value
    })
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todoList={this.state.tasks}
          handleAddedTodo={this.handleAddedTodo}
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
