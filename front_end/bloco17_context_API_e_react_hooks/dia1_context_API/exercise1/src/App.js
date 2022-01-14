import React from 'react';
import './App.css';
import Cars from './Cars';
import myContext from './MyContext';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, status) {
    this.setState({
      [car]: status,
    })

  }
  render() {
    const MY_CONTEXT_VALUES = {
      moveCar: this.moveCar,
      state: this.state,
    }
    return (
      <myContext.Provider value={ MY_CONTEXT_VALUES }>
        <Cars />
      </myContext.Provider>
    );
  }
}

export default App;
