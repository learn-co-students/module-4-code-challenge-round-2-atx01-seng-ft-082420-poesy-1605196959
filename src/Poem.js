import React from "react";

class Poem extends React.Component {

  state = {
    status: "Mark as Read"
  }

  markAsRead = () => {
    console.log("test mark as read")
    this.setState({
      status: "Mark as Unread"
    });
  }

  render() {
    return (
      <div>
        <h3>Title</h3>
        {this.props.title}
        <p>Content</p>
        {this.props.content}
        <p>
          <strong>- By Author</strong>
          {this.props.author}
        </p>
        <button onClick={this.markAsRead}>{this.state.status}</button>
      </div>
    );
  }
}

export default Poem;
