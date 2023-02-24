import { useRef, useState } from 'react';
import { updateTodo, deleteTodo } from '../../apis';
import { TODO_ACTION } from '../../constants';
import { useTodo } from '../../hooks';
import * as S from './styles';

export default function TodoItem({ id, todo, isCompleted }) {
  const [, dispatch] = useTodo();
  const [isModifyMode, setIsModifyMode] = useState();
  const modifiedTodoRef = useRef(null);
  const completeTodoRef = useRef(null);

  async function handleTodoComplete() {
    const { isSuccess, data, error } = await updateTodo(id, todo, !isCompleted);

    if (isSuccess) {
      dispatch({ type: TODO_ACTION.update, newTodo: data });
    } else if (error) {
      alert(error.message);
      completeTodoRef.current.checked = isCompleted;
    }
  }

  function handleModifyMode() {
    setIsModifyMode(isModifyMode => !isModifyMode);
  }

  async function handleTodoModify() {
    const modifiedTodo = modifiedTodoRef.current.value;

    if (!modifiedTodo) return;

    const { isSuccess, data, error } = await updateTodo(id, modifiedTodo, isCompleted);

    if (isSuccess) {
      setIsModifyMode(false);
      dispatch({ type: TODO_ACTION.update, newTodo: data });
    } else if (error) alert(error.message);
  }

  async function handleTodoDelete() {
    const { isSuccess, error } = await deleteTodo(id);

    if (isSuccess) dispatch({ type: TODO_ACTION.delete, newTodo: { id } });
    else if (error) alert(error.message);
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
              <S.Button onClick={handleTodoModify} data-testid="submit-button">
                제출
              </S.Button>
              <S.Button onClick={handleModifyMode} data-testid="cancel-button">
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
                onChange={handleTodoComplete}
                className="checkbox"
              />
              <S.Span>{todo}</S.Span>
            </S.Label>
            <S.Box>
              <S.Button onClick={handleModifyMode} data-testid="modify-button">
                수정
              </S.Button>
              <S.Button data-testid="delete-button" onClick={handleTodoDelete}>
                삭제
              </S.Button>
            </S.Box>
          </>
        )}
      </S.Li>
    </S.Container>
  );
}
