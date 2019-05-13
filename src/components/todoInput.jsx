import React, { Component } from "react";
import TodoItem from "./todoItem";
import "./todoInput.css";

class TodoInput extends Component {
  state = {
    inputValue: ""
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary m-2"
          onClick={() => this.props.onAddItem(this.state.inputValue)}
        >
          Submit
        </button>
        <i class="far fa-plus-square"></i>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  addItem = inputValue => {
    if (inputValue.length > 0) {
      console.log("input Value is ", this.state.inputValue);
      return <TodoItem />;
    }
  };
}

export default TodoInput;
