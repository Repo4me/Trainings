import React, { Component } from 'react'
import axios from 'axios';

export default class HttpPost extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            username : 'Gajanan',
            email : 'gajanan@gmail.com'
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='formgroup'>
                        <label>Name : </label>
                        <input type='text' id='name'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </div>
                    <div className='formgroup'>
                        <label>Name : </label>
                        <input type='text' id='name'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </div>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
