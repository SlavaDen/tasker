import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { id, userId, title, completed } = props;

  if (!id) return <div>nothing todo</div>;

  return <li>{title}</li>;
};

const PTTodo = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
});

TodoItem.defaultProps = {
  id: null,
  userId: null,
  title: null,
  completed: null,
};

TodoItem.propTypes = {
  PTTodo,
};

export { TodoItem, PTTodo };
export default TodoItem;
