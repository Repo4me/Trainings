import React, { Component } from 'react'
import Columns from './Columns'

export default class Tables extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                    <tr>
                        <Columns/>
                    </tr>
                </table>
            </div>
        )
    }
}
