import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    render(<App />);
    const buttonAdd = screen.getByText('Adicionar');

    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');

  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {

    const TASK = 'Primeira tarefa';
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');

    userEvent.type(inputTask, TASK);
    expect(inputTask).toHaveValue(TASK);
    userEvent.click(buttonAdd);
    expect(inputTask).toHaveValue("");
    expect(screen.queryByText(TASK)).toBeInTheDocument();
  });
});
