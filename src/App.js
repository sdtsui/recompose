import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { shouldUpdate, withState, withHandlers, compose } from 'recompose';

const customSCU = (props, nextProps) => {
  console.log("single");
  console.log('calling custom SCU', nextProps);
  console.log('returning true');
  return true
};
const enhance = shouldUpdate(customSCU);

const Form = enhance(() =>
  <form>
    <label>Value
    </label>
  </form>
)

class App extends Component {
  render() {
    console.log("rendering...");
    setTimeout(() => {this.forceUpdate()}, 2000);
    console.log('rendering app');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> {`Welcome to React`}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Form />
      </div>
    );
  }
}


export default App;