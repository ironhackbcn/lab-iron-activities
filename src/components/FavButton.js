import React, { Component } from 'react';

export class FavButton extends Component {

  state = {
    imageUrl: 'https://image.flaticon.com/icons/svg/126/126482.svg',
    styleBool: true,
  }

  componentDidMount() {
    this.checkIfCardSelected();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCardsInclude = prevProps.favedCards.filter(e => e.title === this.props.currentCard.title);
    const currentCardsInclude = this.props.favedCards.filter(e => e.title === this.props.currentCard.title);

    if (!prevCardsInclude.length && currentCardsInclude.length === 1) {
      this.setState({
        styleBool: !this.state.styleBool,
        imageUrl: 'https://image.flaticon.com/icons/svg/118/118669.svg',
      })
    } else if (prevCardsInclude.length === 1 && !currentCardsInclude.length) {
      this.setState({
        styleBool: !this.state.styleBool,
        imageUrl: 'https://image.flaticon.com/icons/svg/126/126482.svg',
      })
    }
  }

  checkIfCardSelected() {
    const currentCardsInclude = this.props.favedCards.filter(e => e.title === this.props.currentCard.title);

    if (currentCardsInclude.length) {
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
      this.props.onClickData();
    }}><img src={imageUrl} alt='star'></img></button>

  }
}
