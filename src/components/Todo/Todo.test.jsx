import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
];

describe('Todo tests', () => {
  it('TodoList render', () => {
    render(<TodoList todos={todos} />);

    expect(screen.getByRole('list').toBeInTheDocument());
    expect(screen.getByText(/delectus aut autem/).toBeInTheDocument());
  });

  it('TodoList render nothing data', () => {
    render(<TodoList />);

    expect(screen.queryByRole('list').toBeNull());
  });
  it('TodoList snapshot', () => {
    const todoList = render(<TodoList todos={todos} />);

    expect(todoList).toMatchSnapshot();
  });

  it('TodoList snapshot nothing data', () => {
    const todoList = render(<TodoList />);

    expect(todoList).toMatchSnapshot();
  });
});
