import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
let poemsurl = "http://localhost:6001/poems"

class App extends React.Component {
  state = {
    allPoems: [],
    formToggle: "true"
  }

componentDidMount = () => {
    fetch(poemsurl)
    .then(res=>res.json())
    .then(data=>this.setState({allPoems: data}))
  }
  // i know the toggle is wrong but i moved on to form bc i think i could finish it before time is up
  handleToggle = () => {
   const toggle = this.state.formToggle === "true" ? true : false
   return toggle
  }

  addpoem = (poem) => {
    this.setState({allPoems: [...this.state.allPoems, poem]})
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onclick = {()=>this.handleToggle()}>Show/hide new poem form</button>
          {this.handleToggle() && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.allPoems} />
      </div>
    );
  }
}

export default App;
