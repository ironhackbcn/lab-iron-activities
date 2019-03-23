import React, { Component } from 'react';


const pageStyle = {
  backgroundColor: 'white',
  border: '1px solid black'
}

const selectedStyle = {
  backgroundColor: 'red',
  border: '1px solid black'
}

class Pages extends Component {

  
  render() {

    return (
      <div>
        <button onClick={this.props.showPage1} style={this.props.numberPage === 1 ? selectedStyle : pageStyle}>1</button>
        <button onClick={this.props.showPage2} style={this.props.numberPage === 2 ? selectedStyle : pageStyle}>2</button>
        <button onClick={this.props.showPage3} style={this.props.numberPage === 3 ? selectedStyle : pageStyle}>3</button>
      </div>
    );
  }

}

export default Pages;