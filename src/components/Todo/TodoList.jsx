import PropTypes from 'prop-types';
import TodoItem, { PTTodo } from './TodoItem';

const TodoList = (props) => {
  const { todos } = props;

  if (!todos.length) return <div>Nothing data</div>;

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} />
        ))}
      </ul>
    </>
  );
};

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PTTodo),
};

export { TodoList };
export default TodoList;
