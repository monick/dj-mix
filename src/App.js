import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import TrackComponent from './TrackComponent';
import DeckComponent from './DeckComponent';
import BottomComponent from './BottomComponent';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

library.add(faPlay);

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
        <TrackComponent left/>
        <TrackComponent right/>
        <DeckComponent left/>
        <DeckComponent right/>
        <BottomComponent left/>
        <BottomComponent right/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
