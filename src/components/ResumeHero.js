import React, { Component } from 'react'
import './ResumeHero.css'


class ResumeHero extends Component {
  render() {
    return (
      <div className='resumehero'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default ResumeHero