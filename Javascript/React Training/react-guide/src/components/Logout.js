import React, { Component } from 'react'
import FancyButton from './FancyButton'

export default class Logout extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.logoutRef = React.createRef();
    }

    componentDidMount() {
        this.logoutRef.current.addEventListener('click', this.click);
    }
    
    click = () => {
        alert('Logout clicked');
    }

    render() {
        return (
            <div>
                <h1>Logout</h1>
                <FancyButton ref = {this.logoutRef}>Logout</FancyButton>
            </div>
        )
    }
}
