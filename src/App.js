import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import TrackComponent from './TrackComponent';

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
      <div className="App grid-container">
        <TrackComponent text={'TRACK 1'} left/>
        <TrackComponent text={'TRACK 2'} right/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
