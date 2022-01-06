import React, { Component } from 'react'

export default class RefDemo extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        console.log(" **** " +this.inputRef.current);
        this.inputRef.current.focus();
    }
    
   
    render() {
        return (
            <div>
                <div className = 'formgroup'>
                    <label>Name : </label>
                    <input type = 'text' ref = { this.inputRef } />
                </div>
            </div>
        )
    }
}
