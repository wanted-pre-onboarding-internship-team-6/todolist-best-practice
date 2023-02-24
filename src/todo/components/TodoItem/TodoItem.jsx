import { useRef, useState } from 'react';

import { useMutation } from '../../../common/hooks';
import { updateTodo, deleteTodo } from '../../apis';
import { TODO_ACTION } from '../../constants';
import { useTodo } from '../../hooks';
import * as S from './styles';

export default function TodoItem({ id, todo, isCompleted }) {
  const [, dispatch] = useTodo();
  const [isModifyMode, setIsModifyMode] = useState();
  const modifiedTodoRef = useRef(null);
  const completeTodoRef = useRef(null);

  const { mutate: modify, isLoading: isModifying } = useMutation(updateTodo, {
    onSuccess: data => {
      setIsModifyMode(false);
      dispatch({ type: TODO_ACTION.update, newTodo: data });
    },
    onError: error => {
      console.error(error);
    },
  });

  const { mutate: complete, isLoading: isCompleting } = useMutation(updateTodo, {
    onSuccess: data => {
      dispatch({ type: TODO_ACTION.update, newTodo: data });
    },
    onError: error => {
      console.error(error);
      completeTodoRef.current.checked = isCompleted;
    },
  });

  const { mutate: remove, isLoading: isRemoving } = useMutation(deleteTodo, {
    onSuccess: () => {
      dispatch({ type: TODO_ACTION.delete, newTodo: { id } });
    },
    onError: error => {
      console.error(error);
    },
  });

  async function completeTodo() {
    complete({ id, todo, isCompleted: !isCompleted });
  }

  function toggleModifyMode() {
    setIsModifyMode(isModifyMode => !isModifyMode);
  }

  async function modifyTodo() {
    const modifiedTodo = modifiedTodoRef.current.value;

    if (!modifiedTodo) return;

    modify({ id, todo: modifiedTodo, isCompleted });
  }

  async function removeTodo() {
    remove(id);
  }

  return (
    <S.Container>
      <S.Li>
        {isModifyMode ? (
          <S.Contents>
            <S.Input
              ref={modifiedTodoRef}
              type="text"
              defaultValue={todo}
              data-testid="modify-input"
            />
            <S.Box>
              <S.Button onClick={modifyTodo} disabled={isModifying} data-testid="submit-button">
                제출
              </S.Button>
              <S.Button
                onClick={toggleModifyMode}
                disabled={isModifying}
                data-testid="cancel-button"
              >
                취소
              </S.Button>
            </S.Box>
          </S.Contents>
        ) : (
          <>
            <S.Label>
              <S.Input
                type="checkbox"
                ref={completeTodoRef}
                defaultChecked={isCompleted}
                onChange={completeTodo}
                disabled={isCompleting}
                className="checkbox"
              />
              <S.Span>{todo}</S.Span>
            </S.Label>
            <S.Box>
              <S.Button onClick={toggleModifyMode} data-testid="modify-button">
                수정
              </S.Button>
              <S.Button data-testid="delete-button" disabled={isRemoving} onClick={removeTodo}>
                삭제
              </S.Button>
            </S.Box>
          </>
        )}
      </S.Li>
    </S.Container>
  );
}
