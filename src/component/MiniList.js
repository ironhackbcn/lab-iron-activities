import React, { Component } from 'react'
import MiniActivity from './MiniActivity';

export default class MiniList extends Component {
  state = {
    

  render() {
    return
      {
        if ({this.state.isHidden}) {
          this.props.list.map((activity, index) => {
            return <MiniActivity key={index} id={index} activity={activity} toggle={this.toggleHidden}/>
          })
        }
    }
  }
}