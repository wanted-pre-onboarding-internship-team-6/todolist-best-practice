import { useEffect } from 'react';
import { getTodos } from '../../apis';
import { TODO_ACTION } from '../../constants';
import { useTodo } from '../../hooks';
import TodoItem from '../TodoItem/TodoItem';
import * as S from './styles';

export default function TodoList() {
  const [todos, dispatch] = useTodo();

  useEffect(() => {
    (async () => {
      const { isSuccess, data, error } = await getTodos();

      if (isSuccess) {
        dispatch({ type: TODO_ACTION.init, newTodo: data });
      } else if (error) alert(error.message);
    })();
  }, [dispatch]);

  return (
    <S.Ul>
      {todos.length === 0 ? (
        <S.Li>할 일이 없습니다.</S.Li>
      ) : (
        todos.map(todo => <TodoItem key={todo.id} {...todo} />)
      )}
    </S.Ul>
  );
}
