import { useEffect } from 'react';

import { useQuery } from '../../../common/hooks';
import { getTodos } from '../../apis';
import { TODO_ACTION } from '../../constants';
import { useTodo } from '../../hooks';
import TodoItem from '../TodoItem/TodoItem';
import * as S from './styles';

export default function TodoList() {
  const [todos, dispatch] = useTodo();

  const { isLoading, error } = useQuery(getTodos, {
    onSuccess: data => {
      dispatch({ type: TODO_ACTION.init, newTodo: data });
    },
    onError: error => {
      console.error(error);
    },
  });

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
      {isLoading && <S.Li>로딩 중...</S.Li>}
      {error && <S.Li>에러 발생</S.Li>}
      {todos && todos.length === 0 && <S.Li>할 일이 없습니다.</S.Li>}
      {todos && todos.length !== 0 && todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </S.Ul>
  );
}
