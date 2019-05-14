import React, { Component } from "react";
import './todoItemStyle.css';
class TodoItem extends Component {


  render() {
    return (
    <div className="list-group-item" id="todo">
      <span className="text" >{this.props.todoItem.value}</span>
      <button
        className="btn btn-danger m-2"
        onClick={() => this.props.onRemoveItem(this.props.todoItem.id)}
      >
        Delete
      </button>
    </div>
    );
  }
}

export default TodoItem;
