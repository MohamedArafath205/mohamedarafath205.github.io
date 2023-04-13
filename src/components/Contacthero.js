import React, { Component } from 'react'
import './Contacthero.css'


class Contacthero extends Component {
  render() {
    return (
      <div className='contactpage'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Contacthero