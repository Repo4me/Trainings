import React, { Component } from 'react'
import FancyButton from './FancyButton'

export default class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.loginref = React.createRef();
    }
    
    componentDidMount() {
        console.log(this.loginref.current);
        this.loginref.current.addEventListener('click', this.click);
    }

    click = () => {
        alert('Login Clicked');
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <FancyButton ref = {this.loginref}>Login</FancyButton>
            </div>
        )
    }
}
