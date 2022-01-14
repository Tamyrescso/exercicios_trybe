import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar React', 'Ler a documentação', 'Fazer os exercícios', 'Ler conteúdos adicionais'];

class App extends React.Component {
  render() {
    return (
      <ul>Lista de Tarefas
        <li>{tasks.map((task) => Task(task))}</li>
      </ul>

    )
  }
}


export default App;
