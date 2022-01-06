import React, { Component } from 'react';
import './styles.css';

export default class User extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    

    render() {
        let element;
        console.log(this.props.children[0]);
        if(this.state.isLoggedIn) {
                // element = <h1>Welcome Back Gajanan</h1>
                element = this.props.children[1];
                // <div>
                //     <h1>Welcome Gajanan</h1>   
                // </div>
        }
        else{
        //  return <h1>Welcome Guest</h1>
            // element = <h1>Welcome Guest</h1>
            element = this.props.children[0]; // To access child elements of <User> from parent i.e. App.js
        }
        return (
            <div>
                { element }
            </div>
        )
    }
}
