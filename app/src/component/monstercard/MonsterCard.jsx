import React,{Component } from 'react'
import './monsterCard.css'

export default class MonsterCard extends Component {
    render() {
        const{monster} = this.props;
        return (
            <div className="card">
            <img src={'https://api.adorable.io/avatars/256/Ali@adorable.png'+ monster.id} alt="profile" />
              <h1>{monster.name}</h1>
              <p>{monster.email}</p>
          </div>
        )
    }
}