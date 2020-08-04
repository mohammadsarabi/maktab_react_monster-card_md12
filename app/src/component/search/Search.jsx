import React, { Component } from 'react'
import Search from './Search.css'
export class search extends Component {
    render() {
        const {search ,handleChange}=this.props
        return (
            <div className={'search-grope'} >
                <input className='search' name={'search'} onChange={handleChange} value={search} />
            <button type='button' className='searchButton'>search</button>
            </div>
        )
    }
}

export default search
