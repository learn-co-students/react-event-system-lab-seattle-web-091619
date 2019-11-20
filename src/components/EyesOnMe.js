import React, { Component } from 'react'

export class EyesOnMe extends Component {

    blur = () => {
        console.log("Hey! Eyes on me!")
    }
    focus = () => {
        console.log("Good!")
    }
    render() {
        return (
            <div>
                <button onBlur={this.blur} onFocus={this.focus}>Button</button>
            </div>
        )
    }
}

export default EyesOnMe
