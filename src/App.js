import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    allPoems: [],
    display: false
  }
  componentDidMount=()=>{
    fetch("http://localhost:6001/poems")
    .then(res => res.json())
    .then(poems => this.setState({allPoems:poems}))
  }

  handleClick=()=>{
    console.log("I'm clicked")
    let newBoolean = !this.state.display
    this.setState({display:newBoolean})
  }

  handleChange=(value)=>{
    console.log(value)
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target[0].value)
    let title= e.target[0].value
    let content= e.target[2].value
    let author=e.target[1].value
    console.log(title, content, author)
   fetch("http://localhost:6001/poems", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body:  JSON.stringify({
      title: title,
      content: content,
      author: author
     })
   })
   .then(res => res.json())
   .then(newPoem => this.setState({allPoems: [...this.state.allPoems, newPoem]}))

  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {/* {false && <NewPoemForm />} */}
          {this.state.display ? <NewPoemForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> : null}
        </div>
        <PoemsContainer poems={this.state.allPoems}/>
      </div>
    );
  }
}

export default App;
