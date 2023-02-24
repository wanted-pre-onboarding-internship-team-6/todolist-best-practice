import { useEffect, useRef } from 'react';

import { useMutation } from '../../../common/hooks';
import { createTodo } from '../../apis';
import { TODO_ACTION } from '../../constants';
import { useTodo } from '../../hooks';
import * as S from './styles';

export default function TodoForm() {
  const [, dispatch] = useTodo();
  const todoInputRef = useRef(null);
  const { mutate, isLoading } = useMutation(createTodo, {
    onSuccess: data => {
      dispatch({ type: TODO_ACTION.create, newTodo: data });
      todoInputRef.current.value = '';
      todoInputRef.current.focus();
    },
    onError: error => {
      console.error(error);
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const todo = todoInputRef.current.value;

    if (!todo) return;

    mutate(todo);
  }

  useEffect(() => {
    todoInputRef.current?.focus();
  }, []);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label htmlFor="todo">할 일 작성</S.Label>
      <S.Input id="todo" ref={todoInputRef} type="text" data-testid="new-todo-input" />
      <S.Button type="submit" disabled={isLoading} data-testid="new-todo-add-button">
        추가
      </S.Button>
    </S.Form>
  );
}
