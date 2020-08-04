import React, { Component } from 'react'
import './monsterContainer.css'
import Search from '../search/Search'
import Form from '../form/Form'
import MonsterTable from '../monsterTable/MonsterTable'
export default class MonsterContainer extends Component {
  state = {
    monster: [

    ],
    search: '',


  }
  handeleDelete = (id) => {
    const { monster } = this.state; 
    this.setState({ monster: monster.filter(monster => monster.id !== id) })
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
      this.setState({ monster: data })
    })
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }


  handleAdd=(obj) =>{
    this.setState={monster:[obj,...this.state.monster]}
  }



  render() {
    const { monster, search } = this.state;
    let filteredMonster = monster.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))

    return (
      <div className='grid-container'>
        <div className='nav'> 
        <Search handleChange={this.handleChange} search={search}/>        
         <Form handlAdd={this.handleAdd} />
        </div>
      <MonsterTable filteredMonster={filteredMonster} handeleDelete={this.handeleDelete}/>
      </div>
    );
  }
}
