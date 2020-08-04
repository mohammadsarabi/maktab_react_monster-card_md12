import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MonsterContainer from './component/monsterContainer/MonsterContainer'

class App extends React.Component {
 
  render(){

    return(
      <div className="App">
        <MonsterContainer/>
      </div>
    )
  }

}

export default App;
