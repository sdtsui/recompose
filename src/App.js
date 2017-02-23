import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { shouldUpdate } from 'recompose';

const customSCU = (props, nextProps) => {
  console.log("class case");
  console.log('calling custom SCU', nextProps);
  console.log('returning true');
  return true
};
class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0}
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({counter: ++this.state.counter})
    }, 2000)
  }
  render() {
    console.log("rendering FormClass, I am a class");
    return (
      <form>
        <label>{`Value : ${this.state.counter}`}
        </label>
      </form>
    );
  }
}
const Form = shouldUpdate(customSCU)(FormClass);

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    console.log("rendering...");
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