import React from "react";
let poemsurl = "http://localhost:6001/poems"

class NewPoemForm extends React.Component {
  constructor(){
    super()
  this.state = this.getInitialState()
  }

  getInitialState = () => ({title: '', content:'', author:''})

  handleChange(e, {title, value}) => this.setState({[title]: value})

  handlesubmit = (e) => {
    e.preventDefault()
    const {title, content, author} = this.state
    fetch(poemsurl, {
      method: "POST",
      headers: {
      "content-type": "application/json",
      "accept": "application/json"
      },
      body: JSON.stringify(
        title,
        content,
        author
      )
      })
      .then(resp => resp.json())
      .then(poem => this.props.addpoem(poem))
        
  }

  render() {
    return (
      <form className="new-poem-form">
        <input placeholder="Title" onchange={handlechange}/>
        <input placeholder="Author" onchange={handlechange} />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" onchange={handlechange}/>
      </form>
    );
  }
}

export default NewPoemForm;
