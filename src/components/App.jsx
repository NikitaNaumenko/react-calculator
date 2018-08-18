import React from 'react';
import Display from './display/Display';
import ButtonPanel from './button_panel/ButtonPanel';
import calculate from '../logic/calculate';
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = button => { 
    this.setState(calculate(this.state, button));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="component-app">
        <Display value={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

