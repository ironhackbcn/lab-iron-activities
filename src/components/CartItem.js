import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.title}
      </div>
    )
  }
}
