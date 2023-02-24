import { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useMutation } from '../../../common/hooks';
import { signUp } from '../../apis';
import { useAuthForm } from '../../hooks';
import * as S from './styles';

export default function SignUpPage() {
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
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess: () => {
      alert('가입되었습니다.');
      navigate('/signin');
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
  }, []);

  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
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
        {isEmailValid === false && <>이메일 형식을 확인해주세요.</>}
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
          <S.Button type="submit" disabled={!canSubmit || isLoading} data-testid="signup-button">
            회원가입
          </S.Button>
          <Link to={'/signin'}>로그인</Link>
        </S.BtnBox>
      </S.Form>
    </S.Container>
  );
}
