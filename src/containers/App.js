import React, { Component } from 'react';
import 'containers/App.css';
import StatBox from 'components/StatBox.js';

/** 
 * Wrapper element for entire appliaction
*/
class App extends Component {
  render() {
    return (
      <StatBox />
    );
  }
}

export default App;
