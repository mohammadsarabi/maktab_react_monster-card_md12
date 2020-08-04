import React, { Component } from 'react'
import deleteStyle from '../../component/delete/deleteStyle.css'

export default class Delete extends Component {
    render() {
        return (
            <button className='delete' onClick={this.props.deleteFunction}>delete</button>
        )
    }
}
