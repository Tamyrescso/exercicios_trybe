import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import MyContext from './MyContext';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      signalColor: 'red',
    }
    this.changeSignal = this.changeSignal.bind(this);
  }
  changeSignal(color) {
    this.setState({ signalColor: color })
  }
  render() {
    const { signalColor } = this.state;
    const MY_CONTEXT_VALUES = {
      signalColor,
      changeSignal: this.changeSignal,
    }
    return (
      <MyContext.Provider value={ MY_CONTEXT_VALUES }>
        <div className="container">
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
