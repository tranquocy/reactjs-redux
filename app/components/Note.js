import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from 'action'

class Note extends React.Component{
  removeNote() {
    var {index, dispatch} = this.props;
    dispatch(removeItem(index));
  }
  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.removeNote.bind(this)}>Delete</button>
      </div>
    );
  }
}

module.exports = connect()(Note);