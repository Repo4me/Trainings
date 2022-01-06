import React, { Component } from 'react'

export default class Formdemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Gajanan',
             description:'',
             city : 'Mumbai',
             terms : false,
             cake:true,
             icecream:false,
             donuts:false
        }
    }

    onCityChange = (event) => {
        this.setState({
            city : event.target.city
        });
    }
    

    handleNameCHange = (event) => {
        this.setState({
            name : event.target.value
        });
    }

    handleTextChange = (event) => {
        this.setState({
            description : event.target.value
        });
    }

    handleTermChange = (event) => {
        this.setState({
            terms : event.target.checked
        });
    }

    handleChange =(event)=>{
        const targetName = event.target.name // name =''
        const type = event.target.type
        let value;// = event.target.checked
        
        switch(type)
        {
            case 'checkbox':
                value = event.target.checked
                break;
            default :
                value = event.target.value
        }
        // name on the html element and the state property
        this.setState({
           [targetName]: value
        })

        console.log(targetName, value, type)
    }
    
    // render() {
    //     return (
    //         <div>
    //             <form><br></br>
    //                 <div className = 'formgroup'>
    //                     <label> Name : </label>
    //                     <input type='text' id = 'name'
    //                     value = {this.state.name}
    //                     onInput = {this.handleNameCHange}/>
    //                 </div>
    //                 <div className = 'formgroup'>
    //                     <textarea id = 'name'
    //                     onInput = {this.handleTextChange}/>
    //                 </div>
    //                 <div className = 'formgroup'>
    //                     <label>Select City : </label>
    //                     <select value = {this.state.city}  onInput = {this.onCityChange}>
    //                         <option>Mumbai</option>
    //                         <option>Pune</option>
    //                         <option>Aurangabad</option>
    //                         <option>Nanded</option>
    //                     </select>
    //                 </div>
    //                 <div className = 'formgroup'>
    //                     <label>Accept </label>
    //                     &nbsp; <input type='checkbox' checked = {this.state.terms}
    //                                 onChange = {this.handleTermChange}/>
    //                 </div>

    //                 <div className='formgroup'>
    //                     Favorite Dessert&nbsp;&nbsp;
    //                     <label>Cake </label>
    //                     &nbsp;<input type='checkbox' 
    //                     name='cake'
    //                     checked={this.state.cake}
    //                     onChange={this.handleChange}/>
    //               &nbsp;&nbsp;
    //                     <label>IceCream &nbsp;</label>
    //                     &nbsp;<input type='checkbox' 
    //                     name ='icecream'
    //                     checked={this.state.icecream}
    //                     onChange={this.handleChange}/>
    //                &nbsp;&nbsp;
    //                     <label>Donuts&nbsp; </label>
    //                     &nbsp;<input type='checkbox' 
    //                     name ='donuts'
    //                     checked={this.state.donuts}
    //                     onChange={this.handleChange}/>
    //                 </div>
    //             </form>
    //         </div>
    //     )
    // }

    
    handleSubmit = (event) => {
        console.log(this.state);
        console.log(event.value);
    }

    render() {
        return (
            <div>
                <h1>Enter Details</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div className='formgroup'>
                        <label>Name : </label>
                        <input type='text' id='name' name='name'
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </div>
                    <div className='formgroup'>
                        <label>Description : </label>
                        <textarea id='name' 
                        name ='description'
                            value={this.state.description}
                            onChange={this.handleChange} />
                    </div>
                    <div className='formgroup'>
                        <label>Select City : </label>
                        <select value={this.state.city} onChange={this.handleChange} name='city'>
                            <option>Mumbai</option>
                            <option>Hyderabad</option>
                            <option>Chandigarh</option>
                            <option>Agra</option>
                        </select>
                    </div>
                    <div className='formgroup'>
                        <label>Accept </label>
                        &nbsp;<input type='checkbox' checked={this.state.terms}
                        onChange={this.handleChange} name='terms'/>
                    </div>
                    <div className='formgroup'>
                        Favorite Dessert&nbsp;&nbsp;
                        <label>Cake </label>
                        &nbsp;<input type='checkbox' 
                        name='cake'
                        checked={this.state.cake}
                        onChange={this.handleChange}/>
                  &nbsp;&nbsp;
                        <label>IceCream &nbsp;</label>
                        &nbsp;<input type='checkbox' 
                        name ='icecream'
                        checked={this.state.icecream}
                        onChange={this.handleChange}/>
                   &nbsp;&nbsp;
                        <label>Donuts&nbsp; </label>
                        &nbsp;<input type='checkbox' 
                        name ='donuts'
                        checked={this.state.donuts}
                        onChange={this.handleChange}/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
