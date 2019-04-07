import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

export default class DropdownButton extends Component {
  render() {
    const {color, badge, type} = this.props;
    return (
      <Button color={color} outline onClick={this.showMenu}>
        {type} <Badge color="secondary">{badge}</Badge>
      </Button>


      <button onClick={this.toggleHidden.bind(this)} >
      Click to show modal
      </button>


    )
  }
}
