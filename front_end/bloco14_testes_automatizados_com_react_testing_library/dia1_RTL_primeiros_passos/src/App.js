import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectedTasks: [],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  handleSelect = (content) => {
    const { selectedTasks } = this.state;
    if (!selectedTasks.includes(content)) {
      return this.setState((state) => ({ selectedTasks: [...state.selectedTasks, content] }));
    }
  }

  removeTask = () => {
    const { selectedTasks, listTodo } = this.state;
    const newList = listTodo.filter(item => !selectedTasks.includes(item));
    
    return this.setState({listTodo: newList, selectedTasks: []})
  }

  render() {
    const { listTodo, selectedTasks } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} handleSelect={ this.handleSelect } />
                </li>
              ))
            }
          </ul>
        }
        <input
          id="btnClear"
          type="button"
          value="Remover"
          onClick={ this.removeTask }
          disabled={ !selectedTasks.length }
          data-testid="id-remove"
        />
      </div>
    );
  }
}
export default App;
