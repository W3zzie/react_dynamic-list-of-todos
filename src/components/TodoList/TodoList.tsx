import React from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';

type Props = {
  todos: Todo[];
  setActiveTodo: (todo: Todo) => void;
  activeTodo: Todo | null;
  setShowModal: (value: boolean) => void;
};

export const TodoList: React.FC<Props> = ({
   todos, setActiveTodo, activeTodo, setShowModal
  }) => {
    const handleClick = (todo: Todo) => {
      setActiveTodo(todo);
      setShowModal(true);
    }

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => (
          <tr data-cy="todo" className="" key={todo.id}>
            <td className="is-vcentered">{todo.id}</td>
            <td className="is-vcentered">
              {todo.completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )}
            </td>
            <td className="is-vcentered is-expanded">
              <p
                className={classNames({
                  'has-text-danger': !todo.completed,
                  'has-text-success': todo.completed,
                })}
              >
                {todo.title}
              </p>
            </td>
            <td className="has-text-right is-vcentered">
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => {
                  handleClick(todo);
                }}
              >
                <span className="icon">

                  <i
                    className={classNames('far', {
                      'fa-eye': activeTodo !== todo,
                      'fa-eye-slash': activeTodo === todo,
                    })}
                  />
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
