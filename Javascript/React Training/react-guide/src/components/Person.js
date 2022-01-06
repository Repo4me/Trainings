import React, { Component } from 'react'

export default class Person extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    
    render() {
        const { person, clickHandler } = this.props;

        return (
            <div>
                <li onClick ={ () => clickHandler(person) }>{person.id} : {person.name} : {person.lastName}</li>
                {/* <h1 onClick ={ () => clickHandler(person) }>PersonId : { person.id }</h1> */}
            </div>
        )
    }
}
