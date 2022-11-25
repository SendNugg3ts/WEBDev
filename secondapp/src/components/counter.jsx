import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  rendertags() {
    if (this.state.tags.length === 0) return <p>There are no tags to show</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  muda = () => {
    if (this.state.count === 0) {
      return <p>Zero</p>;
    }
  };
  clicamento = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.clicamento} className="btn btn-secondary btn-sm">
          Coisa
        </button>
        <span className="badge badge-primary">{this.muda}</span>
      </React.Fragment>
    );
  }
}
export default Counter;
