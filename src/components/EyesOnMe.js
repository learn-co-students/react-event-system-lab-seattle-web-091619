import React, { Component } from 'react'

export class EyesOnMe extends Component {


    onFocus = () => {
        console.log('Good!')
    }

    onBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button id="my-button" onFocus={this.onFocus} onBlur={this.onBlur}>I'm a button</button>
            </div>
        )
    }
}

export default EyesOnMe
