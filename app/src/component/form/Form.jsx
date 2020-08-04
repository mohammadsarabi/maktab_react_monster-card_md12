import React, { Component } from 'react'
import form from '../form/form.css'

export default class Form extends Component {
    state={
       name:'',
       email:'' 
    }
    handleChenge=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    handleClear=()=>{
        this.setState(
            {name:'',email:''}
        )
    }
    handleSubmit= (event)=>{
        event.preventDefault(); 
        const {name,email}=this.state;
        const newMonster ={name ,email}
        this.props.handlAdd(newMonster);
    }

    render() {
        const{name, email}=this.state;
        return (
            <form  onSubmit={this.handleSubmit} >
                <label htmlFor="name">name:  </label>
                <input type="text"className='nameInput' name='name' onChange={this.handleChenge} value={name} />
                <br/>
                <label htmlFor="email">email:  </label>
                <input type="text"className='emailInput' name='email' onChange={this.handleChenge} value={email} />
                <br/>
                <button type='submit' className='save'>save</button>
                <button type='button'  className='clear'onClick={this.handleClear}>clear</button>
            </form>
        )
    }
}
