import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        { 
        this.props.poems.map(poem=><Poem key={poem.id} title={poem.title} content={poem.content} author={poem.author} />)
        }
      </div>
    )
  };
  }


export default PoemsContainer;
