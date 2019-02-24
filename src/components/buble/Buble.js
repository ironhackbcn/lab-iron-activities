import React, { Component } from 'react';

export default class Buble extends Component {
  render() {
    return (
      <div className="buble">
        <p>{this.props.numberOfItems}</p>
      </div>
    )
  }
}
