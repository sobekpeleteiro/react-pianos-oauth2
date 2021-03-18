import React, {Component} from 'react';
import './App.css';
import PianoApp from './component/PianoApp';

class App extends Component {
  render(){
    return (
      <div className="container">
        <PianoApp />
      </div>
    );
  }
}

export default App;
