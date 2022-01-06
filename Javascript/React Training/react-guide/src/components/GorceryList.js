import React, { Component } from 'react'
import GroceryItem from './GroceryItem';

export default class GorceryList extends Component {
   
   
    constructor(props) {
       super(props)
   
       this.state = {
            
        items : [
            {itemName : 'Milk', itemId : 1},
            {itemName : 'Cofee', itemId : 2},
            {itemName : 'Good Day', itemId : 3},
        ]
       };

   }

   
   display = (id) => { // usign the arrow we bind the this with the function.IF this were a normal fucntion, we sould have bind it in ctor.

        this.state.items.forEach(item => {
            if(item.itemId === id) {
                alert(item.itemName);
            }
        });
        
    }

   
   
    render() {
        return (
            <div>
                {
                    this.state.items.map(item => {
                        return <GroceryItem itemId = { item.itemId } 
                        itemHandler = {this.display} />
                    })
                }
            </div>
        )
    }
}
