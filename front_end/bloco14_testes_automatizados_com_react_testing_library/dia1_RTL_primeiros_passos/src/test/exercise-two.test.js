import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from '../App';
import Item from '../Item';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    render(<App />)
    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');

    listTodo.forEach(item => {
      userEvent.type(inputTask, item);
      userEvent.click(buttonAdd);
    })
    listTodo.forEach(item => {
      expect(inputTask).toHaveValue("");
      expect(screen.getByText(item)).toBeInTheDocument();
    })
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Ler a documentação"/>);

    expect(screen.getByText('Ler a documentação')).toBeInTheDocument();

  })
})
