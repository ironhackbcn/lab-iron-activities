import React, { Component } from 'react'
import Card from './Card'


export default class List extends Component {
  render() {
    return (
      <div>
        {this.props.activities.map((activity,index)=> <Card key={activity.uuid} activities={this.props.activities} uuid={activity.uuid}/>)}
      </div>
    )
  }
}
