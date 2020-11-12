import React from "react";

class Poem extends React.Component {
  state={
    isRead:false
  }

  handleClick=()=> {this.setState({isRead: !this.state.isRead})}
  render() {
    return (
      <div>
        <h3>Title: {this.props.poem.title}</h3>
    <p>Content:{this.props.poem.content}</p>
        <p>
    <strong>- By Author:{this.props.poem.author}</strong>
        </p>
        { this.state.isRead ?
        <button onClick={this.handleClick}>Mark as unread</button>
        :
        <button onClick={this.handleClick}>Mark as read</button>
        }
      </div>
    );
  }
}

export default Poem;
      // "id": 1,
      // "title": "The Song About the Song",
      // "content": "This is the song about the show! And it's a show with a song about The Songs we're gonna sing We'll sing you the songs about The song about the show! Songs about the singing we'll do! Songs about the songs about The song about the show! Songs that we'll be singing to you! You'll hear us singing songs about The songs about the songs, The songs about the songs about the songs-- Songs about the songs about The songs about the songs, The songs about the songs about the show!",
      // "author": "Bryan Higgins"