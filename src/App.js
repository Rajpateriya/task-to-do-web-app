import React, {Component} from "react"
import TodoList from "./components/TodoList"
// import $ from 'jquery';
// import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


export class App extends Component {
  responseGoogle=(response)=>{
    console.log(response.profile.name)
  }
  render(){
  return (
    <>
     
      <TodoList/>
    </>
  )
}
}

export default App;
