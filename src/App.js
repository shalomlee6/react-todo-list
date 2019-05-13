import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";
import "./components/todoInput.css";

class App extends Component {
  state = {
    todos: [
      { id: 0, value: "Go to Potions Class" },
      { id: 1, value: "Buy New Robes" },
      { id: 2, value: "Visit Hagrid" },
      { id: 2, value: "Read Book" },
      { id: 2, value: "Run" }
    ]
  };

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput
            todoText=""
            todoItems={this.state.todos}
            onAddItem={this.onAddItem}
            onRemoveItem={this.onRemoveItem}
          />
          <ul className="todo-list">
            {this.state.todos.map(item => {
              return (
                <li key={item.id}>
                  <TodoItem
                    key={item.id}
                    todoItem={item}
                    onRemoveItem={this.onRemoveItem}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  onAddItem = inputText => {
    // console.log("inputText ", inputText);
    if (inputText !== "") {
      const todos = [...this.state.todos];
      const newId = todos.length;
      todos.push({ id: newId, value: inputText });
      this.setState({ todos });
    }
  };

  onRemoveItem = item => {
    console.log("remove Item ", item);
    const todos = this.state.todos.filter(t => t.id !== item);
    this.setState({ todos });
  };
}

export default App;
