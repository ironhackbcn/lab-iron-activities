import React, { Component } from 'react';

const buttonSelected = {
  background: 'rgb(135, 135, 135)',
}

const buttonNotSelected = {
  background: 'rgb(222, 224, 226)',
}

export class Button extends Component {

  state = {
    text: 'Add to cart',
    styleClass: buttonNotSelected,
  }

  componentDidMount() {
    this.checkIfCardSelected();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCardsInclude = prevProps.addedCards.filter(e => e.title === this.props.currentCard.title);
    const currentCardsInclude = this.props.addedCards.filter(e => e.title === this.props.currentCard.title);

    if (!prevCardsInclude.length && currentCardsInclude.length === 1) {
      this.setState({
        styleClass: buttonSelected,
        text: 'In cart'
      })
    } else if (prevCardsInclude.length === 1 && !currentCardsInclude.length) {
      this.setState({
        styleClass: buttonNotSelected,
        text: 'Add to cart'
      })
    }
  }

  checkIfCardSelected() {
    const currentCardsInclude = this.props.addedCards.filter(e => e.title === this.props.currentCard.title);

    if (currentCardsInclude.length) {
      this.setState({
        styleClass: buttonSelected,
        text: 'In cart'
      })
    } else {
      this.setState({
        styleClass: buttonNotSelected,
        text: 'Add to cart'
      })
    }
  }

  render() {

    const { text, styleClass } = this.state;

    return <button style={styleClass} className='event-add-button' onClick={(event) => {
      this.props.onClickData();
    }}>{text}</button>

  }
}
