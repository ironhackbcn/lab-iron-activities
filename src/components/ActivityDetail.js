import React, { Component } from 'react'
import { Consumer } from '../App';

export class ActivityDetail extends Component {
  render() {
    const { id } = this.props.match.params

    // const matchActivity = ArrayOfAllActivities.filter(activity => {
    //   return activity.id === id
    // })

    return (
      <Consumer>
        {
          (value) => {
            console.log(this.props)
            console.log(value)
            return (
              <div className="container">
                {
                  <h1>Detail</h1>
                }
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default ActivityDetail
