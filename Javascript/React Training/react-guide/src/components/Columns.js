import React, { Component } from 'react'

export default class Columns extends Component {
    render() {
        return (
            //As react mandats the use of <div> to wrap other html elements, but in cases like table it fails as <td> can be direct child of <tr> and not <div>, hence react provids <React.Fragment> as wrapper tag.
            // <React.Fragment> can be used any where in place of <div>
            <React.Fragment>
                <td>Gajanan</td>
                <td>Pune</td>
            </React.Fragment>
        )
    }
}
