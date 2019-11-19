// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  logPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={ this.logPassword }></input>
      </div>
    )
  }
}

export default Keypad;