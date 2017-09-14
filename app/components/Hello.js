import React from 'react';

class Hello extends React.Component{
  render(){
    <form action="submit">
      <input type="text" value="" placeholder="Enter text" ref="txt" />
      <button>Add</button>
    </form>
  }
}

module.exports = Hello;
