import { TodoForm, TodoList } from '../components';
import { TodoProvider } from '../contexts';
import * as S from './styles';

export default function TodoPage() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>할 일 목록</S.Title>
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
      </S.Wrapper>
    </S.Container>
  );
}
