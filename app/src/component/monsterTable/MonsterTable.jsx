import React, { Component } from 'react'
import MonsterCard from '../monstercard/MonsterCard'
import Delete from '../delete/Delete.jsx'
import monsterTable from './monsterTable.css'
export class MonsterTable extends Component {
    render() {
        const{filteredMonster , handeleDelete }=this.props;
        return (
            <div className="grid-card">
                {filteredMonster.map((item) => (
                    <div key={item.id}>
                        <MonsterCard monster={item} />
                        <Delete deleteFunction={() => handeleDelete(item.id)} />
                    </div>
                ))}
            </div>
        )
    }
}

export default MonsterTable
