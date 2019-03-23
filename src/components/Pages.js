import React, { Component } from 'react';


const pageStyle = {
  color: '#3d3d3d',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  backgroundColor: 'white',
  margin: '20px',
  borderBottom: 'none'
}

const selectedStyle = {
  color: 'black',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '20px',
  backgroundColor: 'white',
  borderBottom: '2px solid black',
  margin: '20px'
}

class Pages extends Component {

  
  render() {

    return (
      <div className="pages">
        <button onClick={this.props.showPage1} style={this.props.numberPage === 1 ? selectedStyle : pageStyle}>1</button>
        <button onClick={this.props.showPage2} style={this.props.numberPage === 2 ? selectedStyle : pageStyle}>2</button>
        <button onClick={this.props.showPage3} style={this.props.numberPage === 3 ? selectedStyle : pageStyle}>3</button>
      </div>
    );
  }

}

export default Pages;