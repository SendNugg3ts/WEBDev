import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    ImageUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <React.Fragment>
        <img src={this.state.ImageUrl} alt="" />
        <span className="badge bade-primary">{this.formatCount()}</span>
        <button>coisa</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    if (count === 0) {
      return <h1>Zero</h1>;
    } else {
      return count;
    }
  }
}
export default Counter;
