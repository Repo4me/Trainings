import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }

        this.increment = this.increment.bind(this); // javascript way of binding this with function
    }
    
    increment() {

        // this.setState((previousState) => {
        //     return { count : previousState.count + 1 };
        // });

        // Below is more performance effective as it updates the dom only once no matter how many times we called the function. Above will be called as many times as the function is invoked.
        this.setState({
            count : this.state.count + 1
        });
    }

    incrManyTimes = ()=>{
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <h1>Clicked { this.state.count } times</h1>
                { 
                    /* Below is another example to pass this to increment() i.e. using arrow function while calling increment() on click. 
                    Check how it's done in Clock.js */
                }
                {/* another way without explicitly binding this with function as done in ctor.
                <button onClick = { () => this.increment()}> Counter </button>
                 */}
                 {
                 /* To use below syntax, we need to bind this to the function as done in ctor
                 
                 */
                 }
                 {/* <button onClick = { this.increment }> Counter </button> */}
                 <button onClick = {this.incrManyTimes}>Counter</button>
            </div>
        )
    }
}
