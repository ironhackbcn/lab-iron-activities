import React, { Component } from 'react';

export class FavButton extends Component {

  state = {
    imageUrl: 'https://image.flaticon.com/icons/svg/126/126482.svg',
    styleBool: true,
  }

  handleClick = (event) => {
    if (this.state.styleBool) {
      this.setState({
        styleBool: !this.state.styleBool,
        imageUrl: 'https://image.flaticon.com/icons/svg/118/118669.svg',
      })
    } else {
      this.setState({
        styleBool: !this.state.styleBool,
        imageUrl: 'https://image.flaticon.com/icons/svg/126/126482.svg',
      })
    }
  }

  render() {
    const { imageUrl } = this.state;

    return <button className='event-fav' onClick={(event) => {
      this.handleClick(event);
      this.props.onClickData();
    }}><img src={imageUrl} alt='star'></img></button>

  }
}
