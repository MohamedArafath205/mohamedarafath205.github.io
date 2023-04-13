import React, { Component } from 'react'
import './aboutushero.css'


class aboutushero extends Component {
  render() {
    return (
      <div className='aboutus'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default aboutushero