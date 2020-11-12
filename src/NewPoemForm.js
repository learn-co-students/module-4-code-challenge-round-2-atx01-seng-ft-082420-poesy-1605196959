import React from "react";

class NewPoemForm extends React.Component {

  render() {
    return (
      <form className="new-poem-form">
        <input onChange={this.props.handleChange} placeholder="Title" />
        <input onChange={this.props.handleChange} placeholder="Author" />
        <textarea onChange={this.props.handleChange} placeholder="Write your masterpiece here..." rows={10} />
        <input onSubmit={(e)=>this.props.submitForm(e)} type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
