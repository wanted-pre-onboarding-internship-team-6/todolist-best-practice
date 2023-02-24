import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../apis';
import * as S from './styles';

export default function SignUpPage() {
  // const [onChangehandler,value] = useForm(); // custom hook 처리(준석님) => 후순위

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [form, setForm] = useState({ email: '', password: '' });
  const [isEmailValid, setIsEmailValid] = useState();
  const [isPasswordValid, setIsPasswordValid] = useState();
  // const [isFormValid, setIsFormValid] = useState({ email: false, password: false });

  const emailInputRef = useRef();

  const canSubmit = isEmailValid && isPasswordValid;

  const navigate = useNavigate();

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

    const { isSuccess, error } = await signUp(email, password);
    if (isSuccess) {
      alert('가입되었습니다.');
      navigate('/signin');
    } else if (error) {
      alert(error.message);
    }
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
          <S.Button type="submit" disabled={!canSubmit} data-testid="signup-button">
            회원가입
          </S.Button>
          <Link to={'/signin'}>로그인</Link>
        </S.BtnBox>
      </S.Form>
    </S.Container>
  );
}
