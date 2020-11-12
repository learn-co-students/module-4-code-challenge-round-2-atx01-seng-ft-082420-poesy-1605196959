import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    allPoems: [],
    isHidden: true,
    status: "Mark as Read"
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/poems")
    .then(res => res.json())
    .then(allPoems => this.setState({
      allPoems: allPoems
    }))
  }

  toggleDisplay =()=>{
    console.log("test toggle")
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  
  handleChange = (e) => {
    console.log("test handle change")
    
  }

  submitForm =(e)=>{
    e.preventDefault()
    console.log("submit form test")
    console.log(e.target.value)
     let title = e.target[0].value
     let author = e.target[1].value
     let content = e.target[2].value

    fetch("http://localhost:6001/poems", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        title: title,
        author: author,
        content: content
      })
      .then(res => res.json())
      .then(newPoem => this.setState({
          allPoems: [...this.state.allPoems, newPoem]
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick= {this.toggleDisplay}>Show/hide new poem form</button>
          {!this.state.isHidden && <NewPoemForm 
            submitForm={this.submitForm} 
            handleChange={this.handleChange}/>}
        </div>
        <PoemsContainer 
          allPoems = {this.state.allPoems}
        />
      </div>
    );
  }
}

export default App;
