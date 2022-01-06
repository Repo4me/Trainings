import React, { Component } from 'react'

export default class Clock extends Component {
    
    
    constructor(props) {
        super(props)

        this.state = {
            date : new Date()     
        }
    }

    componentDidMount = () => {
        console.log('Clocl Mounted');
        // this.timerId = setInterval(() => {
        //     this.updateTime()
        // }, 1000);
    }

    componentWillUnmount = () => {
        // clearInterval(this.timerId);
    }

    componentDidUpdate() {
        console.log('update');
        setInterval(() => {
            clearInterval(this.timerId);
        }, 5000);
    }

    // updateTime () { if we dont use arrow function, then function will not be available in class scope, to bring it in the calss scope and to be able to use this, we need to use arrow fucntion
    updateTime = () => { 
        // alert('clicked');
        //this.state.date = new Date(); this stmt will not updte UI,as react doesn't allow it.
        // TO update the UI thru state do following,
        this.setState({
            date : new Date() // ; not allowed in json object.
        })
        console.log(this.state.date);
    }


    render() {
        const { date } = this.state; // Destructuring, this is equivalent to { date } = this.state.date
        return (
            <div>
                <h1>{ date.toLocaleTimeString() }</h1>
                <button onClick = { this.updateTime }>Update Time</button>
            </div>
        )
    }
}
