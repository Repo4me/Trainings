import React, { Component } from 'react'
import axios from 'axios';

export default class HttpGet extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
             
            data : []
        }
    }
    
    componentDidMount = () => {

    }

    getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => {
            console.log(resp);
            this.setState({
                data : resp.data
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h1>List</h1>
                <button onClick = { this.getData}>Get Data</button>
                
                {
                    this.state.data.map((item) => {
                    return <p key = {item.id}>{ item.title }</p>
                    })
                }
            </div>
        )
    }
}
