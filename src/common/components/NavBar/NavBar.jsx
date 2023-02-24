import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../auth/hooks';
import { AUTH_ACTION } from '../../../auth/constants';
import * as S from './styles';

export default function NavBar() {
  const pages = ['signup', 'signin', 'todo'];
  const [{ isSignIn }, dispatch] = useAuth();

  function signOut() {
    localStorage.removeItem('token');
    dispatch({ type: AUTH_ACTION.signOut });
  }

  return (
    <S.Header>
      <S.Nav>
        <S.Ul>
          {pages.map(page => (
            <S.Li key={page}>
              <NavLink
                to={page}
                className={({ isActive }) => (isActive ? 'current-path' : undefined)}
              >
                {page}
              </NavLink>
            </S.Li>
          ))}
        </S.Ul>
      </S.Nav>
      {isSignIn && (
        <S.Button type="button" onClick={signOut}>
          signout
        </S.Button>
      )}
    </S.Header>
  );
}
