import React from 'react'

//export default function({yetAnotherAttrName, city}) {
export default function Greet(props) {  // properties passed from parent are passed in props and as a parameter to function and not with this unlike class component
    console.log(props);
    let {yetAnotherAttrName, city} = props;
    return (
        <div>
            <h1>Greet {yetAnotherAttrName} : {city}</h1>
        </div>
    )
}
