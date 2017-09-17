import React from 'react';
import {connect} from 'react-redux';
import {toggle, addItem} from 'action';

class NoteForm extends React.Component{
  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} =  this.props;
    dispatch(addItem(this.refs.txt.value));
    dispatch(toggle());
  }

  toggle() {
    var {dispatch} =  this.props;
    dispatch(toggle());
  }

  render(){
    if(this.props.isAdding) return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter text" ref="txt" />
        <button>Add</button>
      </form>
    )
    return <button onClick={() => this.toggle()}>+</button>
  }
}

module.exports = connect(function(state) {
  return {isAdding: state.isAdding}
})(NoteForm);
