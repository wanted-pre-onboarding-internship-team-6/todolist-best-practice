import NavBar from '../NavBar/NavBar';
import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.Container>
      <NavBar />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
}
