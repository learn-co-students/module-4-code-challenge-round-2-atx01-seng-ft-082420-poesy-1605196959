import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form onSubmit={(e)=>this.props.handleSubmit(e)} className="new-poem-form">
        <input onChange={(e)=> this.props.handleChange(e.target.value)}placeholder="Title" />
        <input onChange={(e)=>this.props.handleChange(e.target.value)}placeholder="Author" />
        {/* <textarea placeholder="Write your masterpiece here..." rows={10} /> */}
        <input onChange={(e)=>this.props.handleChange(e.target.value)}placeholder="Your Masterpiece" />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
