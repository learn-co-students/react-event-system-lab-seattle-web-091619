import React, { Component } from 'react'

export class Keypad extends Component {

    onKeyUp = () => {
        console.log("Entering password...")
    }


    render() {
        return (
            <div>
                
                <label>
                    Password:
                    <input type="password" name="name" onKeyUp={this.onKeyUp} />
                </label>
                
                   <button type="submit" value="Submit" >Submit</button>
                
                    
                
            </div>
        )
    }
}

export default Keypad




