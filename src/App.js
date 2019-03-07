import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import TrackComponent from './TrackComponent';
import { DeckComponent } from './DeckComponent';

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
        <TrackComponent 
          title={'TRACK 1'} 
          author={'author one'} 
          left/>
        <TrackComponent 
          title={'TRACK 2'} 
          author={'author two'} 
          right/>
        <DeckComponent left/>
        <DeckComponent right/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
