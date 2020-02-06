import React, {Component} from 'react';
import "./App.css";

import Component1 from "./functional/component1"
import Container1 from "./containers/container1"

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      stateprops1: "Our initial State",
      stateprops2: 5
    }
  }
  //wrong
  changeState =()=>{
     // this.setState({stateprops1: "New state"})
     //stateprops2: prevState.stateprops2 +1}))
     this.setState(()=>({
      stateprops2: this.state.stateprops2 +1
    }))
  }
  render(){
   const var1= {
     key1: "Some Data"
   }
   const style={
     color: "red"
   }
    
    return(
      <div className="App" style={style}>
       {var1.key1}
       <button onClick={this.changeState}>Change State</button>
       {this.state.stateprops2}
       <Component1 name= "Mung" age="25"/>
       <Container1 name="Migmar" age="34"/>
      </div>
      
    )
  }
}
export default App;
