import React, { Component } from 'react';
import 'containers/App.css';
import Characteristics from 'components/Characteristics.js';

/** 
 * Wrapper element for entire appliaction
*/
class App extends Component {
  render() {
    return (
      <Characteristics />
    );
  }
}

export default App;
