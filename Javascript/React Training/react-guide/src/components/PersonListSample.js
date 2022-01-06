import React, { Component } from 'react'
import Person from './Person'

export default class PersonListSample extends Component {

    constructor(props) {
        super(props)
    
        this.details = this.details.bind(this);

        this.state = {
             PersonList : [
                {
                    "id" : 1,
                    "name" : "Suviksha",
                    "lastName" : "Chilkewar"
                 }, 
                {
                    "id" : 2,
                    "name" : "Gajanan",
                    "lastName" : "Chilkewar"
                 },
                 {
                    "id" : 3,
                    "name" : "Anusha",
                    "lastName" : "Chilkewar"
                 },
                 {
                    "id" : 4,
                    "name" : "Sahebrao",
                    "lastName" : "Chilkewar"
                 },
                 {
                    "id" : 5,
                    "name" : "Shobha",
                    "lastName" : "Chilkewar"
                 }
             ]
        }
    }


    details(person) {
        console.log(person);
        alert(JSON.stringify(person));
    }
    

    render() {
        return (
            <div>
                {
                    this.state.PersonList.map((person) => {
                        return <Person person = { person }
                                clickHandler = { this.details }/>
                    })
                }
            </div>
        )
    }
}
