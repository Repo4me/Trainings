import React, { Component } from 'react'

//child can access preperties from parent and is called props => properties
// props are read-only in child component
export default class Welcome extends Component {
    render() {

        //this.props.name = 'abcd'; this is not allowed to change props value as they are readonly
        console.log(this.props);
        let {anyname, city} = this.props;
        return (
            <div>
                {/* this exists only in class component and not in function component */}
                <h1>Welcome {anyname} : {city}</h1>
            </div>
        )
    }
}
