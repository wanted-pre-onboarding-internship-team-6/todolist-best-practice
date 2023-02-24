import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../apis';
import { AUTH_ACTION } from '../../constants';
import { useAuth } from '../../hooks';
import * as S from './styles';

export default function SignInPage() {
  // useForm => 준석님
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [, dispatch] = useAuth();

  const canSubmit = isEmailValid && isPasswordValid;

  const emailInputRef = useRef();

  function handleEmailInput({ target: { value } }) {
    const emailPattern = /@/;
    const isEmailValid = emailPattern.test(value);

    setEmail(value);
    setIsEmailValid(isEmailValid);
  }

  function handlePasswordInput({ target: { value } }) {
    const isPasswordValid = value.length >= 8;

    setPassword(value);
    setIsPasswordValid(isPasswordValid);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { isSuccess, data, error } = await signIn(email, password);

    if (isSuccess) {
      localStorage.setItem('token', data.access_token);
      dispatch({ type: AUTH_ACTION.signIn, token: data.access_token });
    } else if (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

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
          <S.Button type="submit" disabled={!canSubmit} data-testid="signin-button">
            로그인
          </S.Button>
          <Link to={'/signup'}>회원가입</Link>
        </S.BtnBox>
      </S.Form>
    </S.Container>
  );
}
