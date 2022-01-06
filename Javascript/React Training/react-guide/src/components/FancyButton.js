import React, { Component } from 'react'

// Inline styling
const button = {
    padding : '10px',
    backgroundColor : 'black',
    fontSize : '20px',
    color : 'white',
    fontSize : '25px'
}

// Forwarding ref is  not supported by class component, hence we need to use function component
// export default class FancyButton extends Component {
//     render() {
//         return (
//             <div>
//                 <button style = { button }
//                 ref = {this.ref}>{ this.props.children}</button>
//             </div>
//         )
//     }
// }

const FancyButton = React.forwardRef((props, ref) => {
        return (
            <div>
                <button ref = {ref}
                    style = { button }>{ props.children}</button>
            </div>
        )
    })
export default FancyButton;
