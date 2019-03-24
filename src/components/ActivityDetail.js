import React, { Component } from 'react'

export class ActivityDetail extends Component {

  render() {
    const { id } = this.props.match.params
    const matchActivity = this.props.activities.filter(activity => activity.uuid === id)

    return (
      <div className="container">
        {
          matchActivity.map((activity, index) => {
            return (
              <div key={`id-${index}`} className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={activity.cover_image_url} alt={activity.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{activity.title}</p>
                    </div>
                  </div>
                  <div className="content">{activity.description}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

}

export default ActivityDetail
