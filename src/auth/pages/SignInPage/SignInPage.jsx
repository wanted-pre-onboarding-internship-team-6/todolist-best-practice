import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '../../../common/hooks';
import { signIn } from '../../apis';
import { AUTH_ACTION } from '../../constants';
import { useAuth, useAuthForm } from '../../hooks';
import * as S from './styles';

export default function SignInPage() {
  const [, dispatch] = useAuth();

  const {
    email,
    password,
    isEmailValid,
    isPasswordValid,
    handleEmailInput,
    handlePasswordInput,
    canSubmit,
  } = useAuthForm();

  const emailInputRef = useRef();
  const { mutate, isLoading } = useMutation(signIn, {
    onSuccess: data => {
      localStorage.setItem('token', data.access_token);
      dispatch({ type: AUTH_ACTION.signIn, token: data.access_token });
    },
    onError: error => {
      console.error(error);
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();

    mutate(email, password);
  }

  useEffect(() => {
    emailInputRef.current?.focus();
  }, [emailInputRef]);

  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.Input
          id="email"
          type="text"
          ref={emailInputRef}
          value={email}
          onChange={handleEmailInput}
          data-testid="email-input"
        />
        {isEmailValid === false && <S.Span>이메일 형식을 확인해주세요.</S.Span>}
        <S.Div></S.Div>
        <S.Label htmlFor="password">비밀번호</S.Label>
        <S.Input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordInput}
          data-testid="password-input"
        />
        {isPasswordValid === false && <S.Span>비밀번호는 8자 이상이어야 합니다.</S.Span>}

        <S.BtnBox>
          <S.Button type="submit" disabled={!canSubmit || isLoading} data-testid="signin-button">
            로그인
          </S.Button>
          <Link to={'/signup'}>회원가입</Link>
        </S.BtnBox>
      </S.Form>
    </S.Container>
  );
}
