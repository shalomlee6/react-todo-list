import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <React.Fragment className="list-frag">
        <span >{this.props.todoItem.value}</span>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onRemoveItem(this.props.todoItem.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default TodoItem;
