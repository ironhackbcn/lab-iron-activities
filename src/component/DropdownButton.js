import React, { Component } from 'react';
import { Badge, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownButton extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
  
  render() {
    const {color, badge, type} = this.props;
    return (
      <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
        <DropdownToggle color={color} className='ml-2'>
          {type} <Badge color="secondary">{badge.length}</Badge>
        </DropdownToggle>
  
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: 100,
                  },
                };
              },
            },
          }}
        >
          {badge.map( (e,index) => {
            return <DropdownItem key={index} id={index}>{e.title}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default DropdownButton;
