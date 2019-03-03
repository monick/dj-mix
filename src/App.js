import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import Counter from './Counter';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  simpleAction
 };

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
          <button onClick={this.simpleAction}>Test redux action</button>
          <Counter />
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
