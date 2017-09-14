import React from 'react';

class NoteForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {isAdding: false}
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAdd(this.refs.txt.value);
    this.refs.txt.value = '';
    this.toogle();
  }

  toggle() {
    this.state.isAdding = !this.state.isAdding;
    this.setState(this.state);
  }

  render(){
    if(this.state.isAdding) return (
      <form onSubmit={() => this.handleSubmit()}>
        <input type="text" placeholder="Enter text" ref="txt" />
        <button>Add</button>
      </form>
    )
    return <button onClick={() => this.toggle()}>+</button>
  }
}

module.exports = NoteForm;