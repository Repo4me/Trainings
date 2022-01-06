import React, { Component } from 'react'

export default class GroceryItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }


    render() {
        console.log(this.props.itemId);
        const {itemId, itemHandler} = this.props;

        return (
            <div>
                <h1 onClick = {() => itemHandler(itemId)}>Item : {itemId}</h1>
            </div>
        )
    }
}
