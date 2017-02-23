import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { shouldUpdate, withState, withHandlers, compose } from 'recompose';

const customSCU = (props, nextProps) => {
  console.log('calling custom SCU', nextProps);
  console.log('returning true');
  return true
};
const enhance = compose(
  withState('value', 'updateValue', ''),
  shouldUpdate(customSCU),
  withHandlers({
    onChange: props => event => {
      props.updateValue(event.target.value)
    },
    onSubmit: props => event => {
      event.preventDefault()
      console.log(props.value)
    }
  })
)
const Form = enhance(({ value, onChange, onSubmit }) =>
  <form onSubmit={onSubmit}>
    <label>Value
      <input type="text" value={value} onChange={onChange} />
    </label>
  </form>
)

class App extends Component {
  render() {
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