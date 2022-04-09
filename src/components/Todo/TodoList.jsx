import PropTypes from 'prop-types';

const TodoList = (props) => {
  const { todos } = props;

  if (!todos.length) return <div>Нет</div>;

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

const PTTodo = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
});

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PTTodo),
};

export { TodoList, PTTodo };
export default TodoList;
