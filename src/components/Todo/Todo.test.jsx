import { render, screen } from '@testing-library/react';
import TodoItem from './TodoItem';
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

describe('TodoList tests', () => {
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

describe('TodoItem tests', () => {
  it('TodoItem render', () => {
    render(<TodoItem {...data[0]} />);

    expect(screen.getByText(/delectus aut autem/).toBeInTheDocument());
  });
  it('TodoItem render nothing data', () => {
    render(<TodoItem />);

    expect(screen.queryByText(/delectus aut autem/).toBeNull());
  });
  it('TodoItem snapshot', () => {
    const todoItem = render(<TodoItem {...data[0]} />);

    expect(todoItem.toMatchSnapshot());
  });
  it('TodoItem snapshot nothing data', () => {
    const todoItem = render(<TodoItem />);

    expect(todoItem.toMatchSnapshot());
  });
});
